"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export function PortraitScene({ src, name }: { src: string; name: string }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(.5);
  const y = useMotionValue(.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 130, damping: 18 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 130, damping: 18 });

  function move(event: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - box.left) / box.width);
    y.set((event.clientY - box.top) / box.height);
  }

  return (
    <div className="portrait-scene relative mx-auto aspect-[4/5] w-full max-w-[30rem]" onMouseMove={move} onMouseLeave={() => { x.set(.5); y.set(.5); }}>
      <motion.div
        className="portrait-layer absolute inset-5 border border-white/20 bg-[#191a15] p-3"
        style={reduced ? undefined : { rotateX, rotateY }}
        initial={reduced ? false : { opacity: 0, rotateY: -18, y: 35 }}
        animate={{ opacity: 1, rotateY: 0, y: 0 }}
        transition={{ duration: 1, delay: .25, ease: [.22, 1, .36, 1] }}
      >
        <div className="portrait-grid absolute inset-0 opacity-40" />
        <div className="relative h-full overflow-hidden bg-[#20211c]">
          <Image src={src} alt={`Portrait of ${name}`} fill priority unoptimized className="object-cover transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10110e]/55 via-transparent to-transparent" />
        </div>
        <div className="portrait-label absolute -left-5 top-8 bg-primary px-3 py-2 font-mono text-[.64rem] font-bold tracking-widest text-[#10110e] uppercase">Available / 2026</div>
      </motion.div>
      <div className="slow-drift absolute -right-1 top-0 size-20 rounded-full border border-primary/40" />
      <div className="absolute bottom-0 left-0 h-24 w-24 border-b border-l border-white/30" />
    </div>
  );
}
