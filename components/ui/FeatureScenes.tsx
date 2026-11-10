import type { ReactNode } from "react";

export type FeatureItem = {
  title: string;
  text: string;
  /** A small inline SVG, see components/scenes/icons.tsx. */
  icon: ReactNode;
  /** A <Scene> from components/scenes. */
  scene: ReactNode;
};

// A list of short items that drive the picture beside them. lib/effects/interact.ts plays each
// item's scene in turn; hovering or focusing an item holds it. All text is in the server HTML,
// and without the script the first scene shows its final state.
//
// With `lead`, the lead sits left of the picture and the items run in a row below it (the home
// page). Without it, the items stack on the left and the picture sits on the right.
export function FeatureScenes({ items, lead, columns }: { items: FeatureItem[]; lead?: ReactNode; columns?: number }) {
  const stage = (
    <div className={lead ? "fs-stage med rise" : "fs-stage rise"} aria-hidden="true">
      {items.map((item, i) => (
        <div className={i === 0 ? "fs-pane on" : "fs-pane"} key={item.title}>
          {item.scene}
        </div>
      ))}
    </div>
  );
  const list = items.map((item, i) => (
    <div className={i === 0 ? "cell fs-item on rise" : "cell fs-item rise"} tabIndex={0} key={item.title}>
      <i className="fs-bar" />
      <div className="fs-head">
        <span className="fs-icon">{item.icon}</span>
        <h3>{item.title}</h3>
      </div>
      <p>{item.text}</p>
    </div>
  ));

  if (lead) {
    return (
      <div className="fs" data-scenes>
        <div className="split fs-top">
          {lead}
          {stage}
        </div>
        <div className="grid fs-list" style={{ "--n": String(columns ?? items.length) }}>
          {list}
        </div>
      </div>
    );
  }
  return (
    <div className="fs fs-side" data-scenes>
      <div className="fs-list">{list}</div>
      {stage}
    </div>
  );
}
