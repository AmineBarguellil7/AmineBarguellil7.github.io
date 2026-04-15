"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARALLAX_Y: Record<string, number> = {
  subtle: -8,
  medium: -16,
  strong: -24,
};

export function GsapPortfolioEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const nav = document.querySelector<HTMLElement>("[data-gsap-nav]");
      const hero = document.querySelector<HTMLElement>("[data-gsap-hero]");
      const ambientOrbs = gsap.utils.toArray<HTMLElement>("[data-gsap-ambient]");

      ambientOrbs.forEach((orb, index) => {
        gsap.to(orb, {
          x: index % 2 === 0 ? 28 : -24,
          y: index % 2 === 0 ? -34 : 20,
          scale: index % 2 === 0 ? 1.08 : 0.94,
          duration: 6 + index * 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      if (nav) {
        gsap.fromTo(
          nav,
          { y: -28, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
        );
      }

      if (hero) {
        const heroItems = hero.querySelectorAll<HTMLElement>("[data-gsap-hero-item]");
        const portrait = hero.querySelector<HTMLElement>("[data-gsap-portrait]");
        const glow = hero.querySelector<HTMLElement>("[data-gsap-hero-glow]");

        gsap.fromTo(
          heroItems,
          { y: 52, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.2,
          },
        );

        if (portrait) {
          gsap.fromTo(
            portrait,
            { rotate: -7, scale: 0.88, opacity: 0, y: 36 },
            {
              rotate: 0,
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: "power4.out",
              delay: 0.35,
            },
          );

          gsap.to(portrait, {
            y: -14,
            duration: 3.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        if (glow) {
          gsap.fromTo(
            glow,
            { opacity: 0, scale: 0.72 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.6,
              ease: "power3.out",
            },
          );

          gsap.to(glow, {
            scale: 1.12,
            opacity: 0.78,
            duration: 4.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      }

      gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]").forEach((element) => {
        const depth = element.dataset.gsapParallax ?? "medium";
        const yPercent = PARALLAX_Y[depth] ?? PARALLAX_Y.medium;

        gsap.to(element, {
          yPercent,
          ease: "none",
          scrollTrigger: {
            trigger: element.closest("[data-gsap-section]") ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-progress]").forEach((bar) => {
        gsap.set(bar, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.to(bar, {
          scaleX: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 92%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-timeline]").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line.parentElement,
              start: "top 72%",
              end: "bottom 78%",
              scrub: 1,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-tilt]").forEach((card) => {
        const rotateXTo = gsap.quickTo(card, "rotationX", {
          duration: 0.4,
          ease: "power3.out",
        });
        const rotateYTo = gsap.quickTo(card, "rotationY", {
          duration: 0.4,
          ease: "power3.out",
        });
        const xTo = gsap.quickTo(card, "x", {
          duration: 0.4,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(card, "y", {
          duration: 0.4,
          ease: "power3.out",
        });

        const onMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width - 0.5;
          const py = (event.clientY - bounds.top) / bounds.height - 0.5;

          rotateYTo(px * 10);
          rotateXTo(py * -10);
          xTo(px * 10);
          yTo(py * 10);
        };

        const onLeave = () => {
          rotateYTo(0);
          rotateXTo(0);
          xTo(0);
          yTo(0);
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((button) => {
        const xTo = gsap.quickTo(button, "x", {
          duration: 0.35,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(button, "y", {
          duration: 0.35,
          ease: "power3.out",
        });

        const onMove = (event: PointerEvent) => {
          const bounds = button.getBoundingClientRect();
          const x = event.clientX - (bounds.left + bounds.width / 2);
          const y = event.clientY - (bounds.top + bounds.height / 2);
          xTo(x * 0.18);
          yTo(y * 0.18);
        };

        const onLeave = () => {
          xTo(0);
          yTo(0);
        };

        button.addEventListener("pointermove", onMove);
        button.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          button.removeEventListener("pointermove", onMove);
          button.removeEventListener("pointerleave", onLeave);
        });
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}
