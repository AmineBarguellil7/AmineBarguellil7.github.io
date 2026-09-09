// Scroll and pointer inputs are sampled by the renderer without React updates.
export const motionState = { chapter: 0, tunnelEntrance: 0, cityStarted: false, cityEntrance: 0, terrainStarted: false, terrainEntrance: 0, tokensStarted: false, tokensEntrance: 0, finaleStarted: false, finaleEntrance: 0, pointerX: 0, pointerY: 0 };
export const chapterIds = ["home", "about", "skills", "projects", "experience", "certifications", "contact"] as const;
