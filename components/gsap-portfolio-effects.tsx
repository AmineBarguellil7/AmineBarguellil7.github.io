"use client";

import { useEffect } from "react";

export function GsapPortfolioEffects() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    return () => {
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
