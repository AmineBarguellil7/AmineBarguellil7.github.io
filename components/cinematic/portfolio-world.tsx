"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { motionState } from "./motion-state";

const palette = ["#ffc745", "#f75d62", "#48dccc", "#7464dc", "#2374ff", "#ff9561"];
const fract = (n: number) => n - Math.floor(n);
const random = (n: number) => fract(Math.sin(n * 127.1 + 311.7) * 43758.5453);
const smooth = (a: number, b: number, x: number) => THREE.MathUtils.smoothstep(x, a, b);

function Atmosphere() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ phase: { value: 0 }, cityReveal: { value: 0 }, terrainReveal: { value: 0 }, finaleReveal: { value: 0 } }), []);
  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.finaleReveal.value = motionState.finaleStarted
      ? THREE.MathUtils.damp(material.current.uniforms.finaleReveal.value, motionState.finaleEntrance, 4, Math.min(delta, .05))
      : 0;
    if (material.current) material.current.uniforms.terrainReveal.value = motionState.terrainStarted
      ? THREE.MathUtils.damp(material.current.uniforms.terrainReveal.value, motionState.terrainEntrance, 4, Math.min(delta, .05))
      : 0;
    if (material.current) material.current.uniforms.phase.value = THREE.MathUtils.damp(material.current.uniforms.phase.value, motionState.chapter, 4, Math.min(delta, .05));
    if (material.current) material.current.uniforms.cityReveal.value = motionState.cityStarted
      ? THREE.MathUtils.damp(material.current.uniforms.cityReveal.value, motionState.cityEntrance, 4, Math.min(delta, .05))
      : 0;
  });
  return <mesh position={[0, 0, -88]} renderOrder={-10}>
    <planeGeometry args={[220, 150]} />
    <shaderMaterial ref={material} uniforms={uniforms} depthWrite={false}
      vertexShader={`varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
      fragmentShader={`
        varying vec2 vUv; uniform float phase; uniform float cityReveal; uniform float terrainReveal; uniform float finaleReveal;
        void main(){
          vec2 uv=vUv;
          float city=smoothstep(0.,1.,cityReveal)*(1.-smoothstep(3.6,4.1,phase))+smoothstep(0.,1.,finaleReveal);
          float desert=smoothstep(0.,1.,terrainReveal)*(1.-smoothstep(4.7,5.1,phase));
          vec3 col=mix(vec3(.008,.019,.045),vec3(.012,.045,.085),uv.y);
          col+=vec3(.04,.12,.17)*exp(-length((uv-vec2(.65,.65))*vec2(3.,2.))*4.);
          vec3 blue=mix(vec3(.15,.54,.83),vec3(.008,.045,.3),smoothstep(.35,.8,uv.y));
          vec3 warm=mix(vec3(.1,.47,.56),vec3(.8,.68,.2),smoothstep(.33,.7,uv.y));
          col=mix(col,blue,city);col=mix(col,warm,desert);
          float glow=exp(-length((uv-vec2(.5,.48))*vec2(7.,9.))*3.);
          col+=vec3(1.,.68,.28)*glow*city*.55;
          float grain=fract(sin(dot(uv,vec2(1234.5,6789.1)))*43758.5);
          gl_FragColor=vec4(col+(grain-.5)*.016,1.);
        }`} />
  </mesh>;
}

function GradientMaterial({ color }: { color: string }) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas"); canvas.width = 64; canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createLinearGradient(0, 128, 64, 0);
    gradient.addColorStop(0, "#192061"); gradient.addColorStop(.52, color); gradient.addColorStop(1, "#ffedbb");
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 64, 128);
    const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
    return map;
  }, [color]);
  useEffect(() => () => texture.dispose(), [texture]);
  return <meshStandardMaterial map={texture} metalness={.25} roughness={.32} />;
}

function CloudBank() {
  return <group>{Array.from({ length: 8 }, (_, i) => <mesh key={i} position={[(i % 2 ? 1 : -1) * (13 + random(i + 10) * 15), -.4 + random(i) * 1.6, -20 - i * 5]} scale={[8 + random(i) * 8, .4 + random(i + 9) * 1.1, 2]}>
    <sphereGeometry args={[1, 20, 12]} /><meshStandardMaterial color="#e9eddf" roughness={1} />
  </mesh>)}</group>;
}

function Glyph({ kind }: { kind: number }) {
  return <group>
    {kind % 3 === 0 ? <>
      <mesh position={[-.17, 0, 0]} rotation={[0, 0, -.45]}><boxGeometry args={[.065, .42, .07]} /><meshStandardMaterial color="#fff3d4" /></mesh>
      <mesh position={[.17, 0, 0]} rotation={[0, 0, .45]}><boxGeometry args={[.065, .42, .07]} /><meshStandardMaterial color="#fff3d4" /></mesh>
    </> : kind % 3 === 1 ? <mesh><torusGeometry args={[.24, .07, 10, 32]} /><meshStandardMaterial color="#f4eddd" /></mesh> : <mesh rotation={[0, 0, Math.PI / 4]}><boxGeometry args={[.34, .34, .1]} /><meshStandardMaterial color="#f4eddd" /></mesh>}
  </group>;
}

function Stars() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => new Float32Array(Array.from({ length: 1350 }, (_, i) => (random(i + 7) - .5) * (i % 3 === 2 ? 65 : 48))), []);
  useFrame((_, delta) => { if (points.current) points.current.rotation.y += Math.min(delta, .05) * .007; });
  return <points ref={points} frustumCulled={false}>
    <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
    <pointsMaterial size={.035} color="#d5eaff" transparent opacity={.65} sizeAttenuation depthWrite={false} />
  </points>;
}

function Tunnel() {
  const instances = useRef<THREE.InstancedMesh>(null);
  const rails = useRef<THREE.InstancedMesh>(null);
  useEffect(() => {
    if (!instances.current || !rails.current) return;
    const object = new THREE.Object3D();
    for (let i = 0; i < 144; i++) {
      const ring = Math.floor(i / 12);
      const angle = i % 12 / 12 * Math.PI * 2 + ring * .085;
      const radius = 4.3 + random(i) * .7;
      object.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, -ring * 2.5);
      object.rotation.set(angle * .1, angle + Math.PI / 2, .2);
      object.scale.set(.7 + random(i + 80) * .8, 1.1, .07);
      object.updateMatrix(); instances.current.setMatrixAt(i, object.matrix);
      instances.current.setColorAt(i, new THREE.Color().setHSL(.59, .18, .18 + random(i) * .28));
      object.scale.set(.018, .018, 2.9);
      object.rotation.set(0, 0, 0);
      object.updateMatrix(); rails.current.setMatrixAt(i, object.matrix);
    }
    instances.current.instanceMatrix.needsUpdate = true;
    if (instances.current.instanceColor) instances.current.instanceColor.needsUpdate = true;
    rails.current.instanceMatrix.needsUpdate = true;
  }, []);
  return <group>
    <instancedMesh ref={instances} args={[undefined, undefined, 144]} frustumCulled={false}>
      <boxGeometry /><meshStandardMaterial metalness={.82} roughness={.29} side={THREE.DoubleSide} />
    </instancedMesh>
    <instancedMesh ref={rails} args={[undefined, undefined, 144]} frustumCulled={false}>
      <boxGeometry /><meshStandardMaterial color="#8394ad" metalness={.65} roughness={.5} />
    </instancedMesh>
  </group>;
}

function Arch({ color }: { color: string }) {
  const shape = useMemo(() => {
    const s = new THREE.Shape(); s.moveTo(-.7, -.8); s.lineTo(.7, -.8); s.lineTo(.7, .8); s.lineTo(-.7, .8); s.closePath();
    const hole = new THREE.Path(); hole.absarc(0, .08, .4, 0, Math.PI * 2, true); s.holes.push(hole);
    return s;
  }, []);
  return <mesh castShadow><extrudeGeometry args={[shape, { depth: .24, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: .04, bevelThickness: .04, curveSegments: 24 }]} /><GradientMaterial color={color} /></mesh>;
}

function Token({ color, kind = 0 }: { color: string; kind?: number }) {
  return <group rotation={[Math.PI / 2, 0, 0]}>
    <mesh castShadow><cylinderGeometry args={[.48, .48, .15, 40]} /><meshStandardMaterial color={color} metalness={.55} roughness={.27} /></mesh>
    <mesh position={[0, .087, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {kind % 2 ? <torusGeometry args={[.22, .035, 8, 32]} /> : <ringGeometry args={[.12, .25, 4]} />}
      <meshStandardMaterial color="#fff2b2" metalness={.4} roughness={.4} side={THREE.DoubleSide} />
    </mesh>
  </group>;
}

function City() {
  return <group>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -18]} receiveShadow>
      <planeGeometry args={[140, 140]} /><meshStandardMaterial color="#074196" roughness={.78} />
    </mesh>
    <gridHelper args={[140, 140, "#598cd2", "#2766b7"]} position={[0, -1.987, -18]} />
    {Array.from({ length: 36 }, (_, i) => {
      const side = i % 2 ? 1 : -1;
      const x = side * (2.8 + random(i + 5) * 6.2);
      const z = 2 - Math.floor(i / 2) * 3.4;
      const height = .7 + random(i + 40) * 3.2;
      return <group key={i} position={[x, -2 + height / 2, z]} rotation={[0, random(i + 30) * .7 - .35, 0]}>
        {i % 4 === 0 ? <Arch color={palette[i % 6]} /> : <mesh castShadow receiveShadow scale={[.6 + random(i) * .9, height, .55 + random(i + 20)]}>
          <boxGeometry /><GradientMaterial color={palette[i % 6]} />
        </mesh>}
        {i % 3 === 0 && <group position={[0, height / 2 + .65, 0]} rotation={[.1, i, 0]}><Token color={palette[(i + 2) % 6]} kind={i} /></group>}
        {i % 4 !== 0 && <group position={[0, .1, (.55 + random(i + 20)) / 2 + .07]}><Glyph kind={i} /></group>}
      </group>;
    })}
    <CloudBank />
    <mesh position={[0, 1.7, -57]}><sphereGeometry args={[7, 48, 32]} /><meshBasicMaterial color="#fff2bc" /></mesh>
    <mesh position={[0, 1.7, -58]}>
      <planeGeometry args={[30, 30]} />
      <shaderMaterial transparent depthWrite={false} blending={THREE.AdditiveBlending}
        vertexShader={`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
        fragmentShader={`varying vec2 vUv;void main(){float d=length(vUv-.5);gl_FragColor=vec4(1.,.5,.2,pow(max(0.,1.-d*2.),3.)*.7);}`} />
    </mesh>
  </group>;
}

function Terrain() {
  return <group>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.4, -10]} receiveShadow><planeGeometry args={[100, 100]} /><meshStandardMaterial color="#a55543" roughness={1} /></mesh>
    {Array.from({ length: 22 }, (_, i) => <mesh key={i} position={[(i % 2 ? 1 : -1) * (4 + random(i) * 12), -1 + random(i + 20) * 2, 4 - Math.floor(i / 2) * 4]} scale={[2 + random(i + 13) * 3, 2 + random(i + 4) * 5, 2.5]} rotation={[i, i * .7, i * .15]} castShadow>
      <icosahedronGeometry args={[1, 0]} /><meshStandardMaterial color={i % 3 ? "#b84843" : "#e1a35f"} flatShading roughness={.85} />
    </mesh>)}
    <group position={[0, -.1, -4]}><Arch color="#ffc657" /><mesh position={[0, -.9, 0]} scale={[2.4, .3, 1.7]}><boxGeometry /><meshStandardMaterial color="#e5a65b" /></mesh></group>
  </group>;
}

function Constellation() {
  return <group>{Array.from({ length: 12 }, (_, i) => <group key={i} position={[(i % 4 - 1.5) * 1.7, (Math.floor(i / 4) - 1) * 1.5, (i % 3) * -.7]} rotation={[.2, i * .45, i * .1]}>
    {i % 3 === 0 ? <Arch color={palette[i % 6]} /> : <Token color={palette[i % 6]} kind={i} />}
  </group>)}</group>;
}

function Finale() {
  return <group rotation={[0, -.35, 0]}>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -8]} receiveShadow><planeGeometry args={[100, 100]} /><meshStandardMaterial color="#073db0" roughness={.8} /></mesh>
    <gridHelper args={[100, 100, "#73abec", "#3066c3"]} position={[0, -1.99, -8]} />
    <group position={[0, -1.6, -4]} rotation={[-Math.PI / 2, 0, -.2]}>
      <Arch color="#ff8765" />
      {Array.from({ length: 9 }, (_, i) => {
        const a = i / 9 * Math.PI * 2;
        return <group key={i} position={[Math.cos(a) * 3, Math.sin(a) * 2.5, 0]} rotation={[0, 0, a]}><Token color={palette[i % 6]} kind={i} /></group>;
      })}
    </group>
  </group>;
}

function Scene() {
  const tunnel = useRef<THREE.Group>(null);
  const city = useRef<THREE.Group>(null);
  const terrain = useRef<THREE.Group>(null);
  const tokens = useRef<THREE.Group>(null);
  const finale = useRef<THREE.Group>(null);
  const progress = useRef(0);
  const tunnelEntrance = useRef(0);
  const cityEntrance = useRef(0);
  const terrainEntrance = useRef(0);
  const tokensEntrance = useRef(0);
  const finaleEntrance = useRef(0);
  const lookAt = useMemo(() => new THREE.Vector3(), []);
  useFrame((state, delta) => {
    const { camera, size } = state;
    const dt = Math.min(delta, .05);
    finaleEntrance.current = motionState.finaleStarted
      ? THREE.MathUtils.damp(finaleEntrance.current, motionState.finaleEntrance, 4, dt)
      : 0;
    tokensEntrance.current = motionState.tokensStarted
      ? THREE.MathUtils.damp(tokensEntrance.current, motionState.tokensEntrance, 4, dt)
      : 0;
    terrainEntrance.current = motionState.terrainStarted
      ? THREE.MathUtils.damp(terrainEntrance.current, motionState.terrainEntrance, 4, dt)
      : 0;
    progress.current = THREE.MathUtils.damp(progress.current, motionState.chapter, 4, dt);
    tunnelEntrance.current = THREE.MathUtils.damp(tunnelEntrance.current, motionState.tunnelEntrance, 4, dt);
    cityEntrance.current = motionState.cityStarted
      ? THREE.MathUtils.damp(cityEntrance.current, motionState.cityEntrance, 4, dt)
      : 0;
    const p = progress.current, t = state.clock.elapsedTime;
    const narrow = size.width < 768;
    const refs = [tunnel, city, terrain, tokens, finale];
    const weights = [motionState.cityStarted ? 0 : smooth(0, 1, tunnelEntrance.current) * (1 - smooth(1.7, 2.12, p)), motionState.terrainStarted ? 0 : smooth(0, 1, cityEntrance.current) * (1 - smooth(3.55, 4.05, p)), motionState.tokensStarted ? 0 : smooth(0, 1, terrainEntrance.current) * (1 - smooth(4.7, 5.1, p)), motionState.finaleStarted ? 0 : smooth(0, 1, tokensEntrance.current) * (1 - smooth(5.7, 6.1, p)), smooth(0, 1, finaleEntrance.current)];
    refs.forEach((ref, i) => { if (ref.current) { ref.current.visible = weights[i] > .002; ref.current.scale.setScalar(Math.max(.001, weights[i])); } });
    if (tunnel.current) {
      tunnel.current.position.z = (p - 1) * 18;
      tunnel.current.rotation.z = -.35 + (p - 1) * 1.05 + motionState.pointerX * .035;
    }
    if (city.current) { city.current.position.z = p > 6 ? 3 : Math.max(0, p - 2) * 9; city.current.rotation.y = p > 6 ? -.5 : (p - 2) * .12; }
    if (terrain.current) { terrain.current.position.z = (p - 4) * 7; terrain.current.rotation.y = (p - 4) * -.18; }
    if (tokens.current) { tokens.current.rotation.set(-.45, t * .08 + (p - 5) * .5, -.2); tokens.current.position.set(narrow ? 0 : 2, 0, -1); }
    const overhead = smooth(2.8, 3.6, p) * (1 - smooth(3.65, 4.1, p)) + smooth(0, 1, finaleEntrance.current);
    const targetY = .5 + overhead * 8;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, motionState.pointerX * .42, 3, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY + motionState.pointerY * .2, 3, dt);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, narrow ? 12 : 9, 3, dt);
    lookAt.set(0, -overhead * 1.5, -3);
    camera.lookAt(lookAt);
  });
  return <>
    <Atmosphere />
    <ambientLight intensity={1.1} />
    <hemisphereLight args={["#b0dcff", "#25316a", 2]} />
    <directionalLight position={[-7, 12, 5]} intensity={3.5} color="#fff1cf" castShadow shadow-mapSize={[1024, 1024]} shadow-camera-left={-18} shadow-camera-right={18} shadow-camera-top={18} shadow-camera-bottom={-18} shadow-normalBias={.05} />
    <pointLight position={[0, 3, 6]} intensity={35} color="#73b6ff" distance={35} />
    <Stars />
    <group ref={tunnel} visible={false}><Tunnel /></group>
    <group ref={city} visible={false}><City /></group>
    <group ref={terrain} visible={false}><Terrain /></group>
    <group ref={tokens} visible={false}><Constellation /></group>
    <group ref={finale} visible={false}><Finale /></group>
  </>;
}

export default function PortfolioWorld() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  return <Canvas camera={{ position: [0, .5, 9], fov: 48, near: .1, far: 180 }} dpr={[1, 1.5]} shadows frameloop={visible ? "always" : "never"} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} fallback={null}>
    <Scene />
  </Canvas>;
}
