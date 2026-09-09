"use client";

import dynamic from "next/dynamic";
import { Component, useSyncExternalStore, type ReactNode } from "react";
import { GsapPortfolioEffects } from "@/components/gsap-portfolio-effects";

const World = dynamic(() => import("./portfolio-world"), { ssr: false });
function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}
export function CinematicExperience() {
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
  return <>
    <div className="cinematic-backdrop" aria-hidden="true" />
    {!reduced && <SceneBoundary><div className="cinematic-canvas" aria-hidden="true"><World /></div></SceneBoundary>}
    <div className="journey-progress" aria-hidden="true"><span /></div>
    <GsapPortfolioEffects />
  </>;
}
