import type { ReactNode } from "react";

// One explainer inside FeatureScenes. `steps` are the gaps in ms before .s1, .s2 ... are added
// (the aN / oN classes from steps.css work inside), `hold` is how long the last step stays.
// lib/effects/interact.ts plays it while its item is active. Without that script, or with
// reduced motion, it shows its final state.
export function Scene({ steps, hold = 2000, className, children }: { steps: number[]; hold?: number; className?: string; children: ReactNode }) {
  return (
    <div className={className ? `live scn ${className}` : "live scn"} data-steps={steps.join(",")} data-hold={hold}>
      {children}
    </div>
  );
}
