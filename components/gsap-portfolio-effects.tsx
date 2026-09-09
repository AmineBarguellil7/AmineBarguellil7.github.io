"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { chapterIds, motionState } from "@/components/cinematic/motion-state";

gsap.registerPlugin(ScrollTrigger);

export function GsapPortfolioEffects() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const sections = chapterIds.map(id => document.getElementById(id)!);
      const footer = document.querySelector("footer")!;
      const stops = [...sections, footer];
      const backdrop = document.querySelector<HTMLElement>(".cinematic-backdrop")!;
      const colors = ["#030a19", "#020612", "#07398d", "#08275c", "#401520", "#070d2c", "#052b8a", "#052b8a"];
      let positions: number[] = [];
      const measure = () => {
        positions = stops.map(el => Math.max(0, el.getBoundingClientRect().top + window.scrollY - window.innerHeight * .22));
        positions[0] = 0;
        // The final scene must finish at the actual scroll limit, including on
        // short mobile footers where the footer cannot reach the viewport top.
        positions[positions.length - 1] = Math.max(positions[positions.length - 2] + 1, document.documentElement.scrollHeight - window.innerHeight);
      };
      measure();
      const update = () => {
        const scroll = window.scrollY;
        let index = 0;
        while (index < positions.length - 2 && scroll >= positions[index + 1]) index++;
        const progress = gsap.utils.clamp(0, 1, (scroll - positions[index]) / Math.max(1, positions[index + 1] - positions[index]));
        motionState.chapter = index + progress;
        backdrop.style.backgroundColor = index === 1 && !motionState.cityStarted
          ? colors[1]
          : index === 3 && !motionState.terrainStarted
            ? colors[3]
            : gsap.utils.interpolate(colors[index], colors[index + 1], progress);
      };
      let active = true;
      ScrollTrigger.create({ start: 0, end: "max", onUpdate: update, onRefresh: () => { measure(); update(); } });
      gsap.to(".journey-progress span", { scaleY: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: .3 } });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(element => {
        if (element.querySelector("[data-gsap-heading]") || element.closest("h1") || element.closest("#projects")) return;
        const variant = element.dataset.reveal;
        gsap.from(element, {
          opacity: 0, y: 36,
          x: variant === "fade-left" ? 35 : variant === "fade-right" ? -35 : 0,
          rotationY: variant === "zoom" ? -5 : 0,
          duration: Number(element.dataset.duration), delay: Number(element.dataset.delay), ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 96%", once: element.dataset.once !== "false", toggleActions: "play none none reverse" },
        });
      });
      gsap.utils.toArray<HTMLElement>("#projects > .mt-16 > [data-reveal]").forEach((card, index) => {
        gsap.fromTo(card, { x: index % 2 ? 65 : -65, y: 65, rotationY: index % 2 ? -10 : 10, opacity: .15 }, {
          x: 0, y: 0, rotationY: 0, opacity: 1, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 98%", end: "top 48%", scrub: .7 },
        });
      });
      sections.slice(1).forEach(section => {
        const heading = section.querySelector("[data-gsap-heading]");
        if (heading) gsap.fromTo(heading, { y: 65, rotationX: 7, opacity: .25 }, { y: 0, rotationX: 0, opacity: 1, ease: "power2.out", scrollTrigger: { trigger: heading, start: "top 92%", end: "top 45%", scrub: .7 } });
      });
      const tunnelEntrance = ScrollTrigger.create({
        trigger: "#about [data-gsap-heading] .eyebrow",
        start: "top bottom",
        end: () => `+=${Math.max(1, positions[1] * .5)}`,
        onUpdate: self => { motionState.tunnelEntrance = self.progress; },
        onRefresh: self => { motionState.tunnelEntrance = self.progress; },
      });
      motionState.tunnelEntrance = tunnelEntrance.progress;
      const updateCityEntrance = (self: ScrollTrigger) => {
        motionState.cityStarted = self.scroll() >= self.start;
        motionState.cityEntrance = self.progress;
        update();
      };
      const cityEntrance = ScrollTrigger.create({
        trigger: "#skills [data-gsap-heading] .eyebrow",
        start: "top bottom",
        end: () => `+=${Math.max(1, (positions[2] - positions[1]) * .46)}`,
        onUpdate: updateCityEntrance,
        onRefresh: updateCityEntrance,
      });
      updateCityEntrance(cityEntrance);
      const updateTerrainEntrance = (self: ScrollTrigger) => {
        motionState.terrainStarted = self.scroll() >= self.start;
        motionState.terrainEntrance = self.progress;
        update();
      };
      const terrainEntrance = ScrollTrigger.create({
        trigger: "#experience [data-gsap-heading] .eyebrow",
        start: "top bottom",
        end: "top 40%",
        onUpdate: updateTerrainEntrance,
        onRefresh: updateTerrainEntrance,
      });
      updateTerrainEntrance(terrainEntrance);
      const updateTokensEntrance = (self: ScrollTrigger) => {
        motionState.tokensStarted = self.scroll() >= self.start;
        motionState.tokensEntrance = self.progress;
      };
      const tokensEntrance = ScrollTrigger.create({
        trigger: "#certifications [data-gsap-heading] .eyebrow",
        start: "top bottom",
        end: "top 40%",
        onUpdate: updateTokensEntrance,
        onRefresh: updateTokensEntrance,
      });
      updateTokensEntrance(tokensEntrance);
      const updateFinaleEntrance = (self: ScrollTrigger) => {
        motionState.finaleStarted = self.scroll() >= self.start;
        motionState.finaleEntrance = self.progress;
      };
      const finaleEntrance = ScrollTrigger.create({
        trigger: "#contact",
        start: "top bottom",
        end: "top 40%",
        onUpdate: updateFinaleEntrance,
        onRefresh: updateFinaleEntrance,
      });
      updateFinaleEntrance(finaleEntrance);
      gsap.to(".hero-title", { y: -100, scale: .88, opacity: 0, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "55% top", scrub: .65 } });
      gsap.fromTo(".portrait-scene", { rotationY: -13, rotationZ: -4 }, { rotationY: 9, rotationZ: 3, ease: "none", scrollTrigger: { trigger: ".portrait-scene", start: "top bottom", end: "bottom top", scrub: 1 } });
      gsap.from(footer.querySelector(".section-shell"), { y: 40, opacity: 0, scrollTrigger: { trigger: footer, start: "top 95%", end: "top 70%", scrub: .5 } });
      const pointer = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        motionState.pointerX = event.clientX / window.innerWidth * 2 - 1;
        motionState.pointerY = -(event.clientY / window.innerHeight * 2 - 1);
      };
      const resetPointer = () => { motionState.pointerX = 0; motionState.pointerY = 0; };
      window.addEventListener("pointermove", pointer, { passive: true });
      document.documentElement.addEventListener("pointerleave", resetPointer);
      const observer = new ResizeObserver(() => { measure(); update(); });
      stops.forEach(el => observer.observe(el));
      void document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
      update();
      return () => {
        active = false;
        motionState.tunnelEntrance = 0;
        motionState.cityStarted = false;
        motionState.cityEntrance = 0;
        motionState.terrainStarted = false;
        motionState.terrainEntrance = 0;
        motionState.tokensStarted = false;
        motionState.tokensEntrance = 0;
        motionState.finaleStarted = false;
        motionState.finaleEntrance = 0;
        observer.disconnect();
        window.removeEventListener("pointermove", pointer);
        document.documentElement.removeEventListener("pointerleave", resetPointer);
        resetPointer();
        backdrop.style.removeProperty("background-color");
      };
    });
    return () => media.revert();
  }, []);
  return null;
}
