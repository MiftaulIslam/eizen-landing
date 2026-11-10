// Branch paths. Merged lanes carry on along main after the merge node, so their dots flow back in.
const BLUE = "M130 370L227.5 70H960L1057.5 370";
const AMBER = "M270 370L335 170H780";
const GREEN = "M430 370L462.5 270H800L832.5 370";

// Each lane has three agents at work: a lead dot and two smaller ones, spread over the loop.
const LANES = [
  { path: `${BLUE}H1170`, colour: "#6fb0ff", dur: 14, fade: 0.95 },
  { path: `${GREEN}H1170`, colour: "#5ec48a", dur: 9, fade: 0.86 },
];
const SIZES = [6.5, 4.5, 4.5];

// Commits that land on main, one after another through the loop.
const COMMITS = [70, 200, 350, 520, 660, 900, 990, 1120];

export function LaneMap() {
  return (
    <div className="lane-map live">
      <svg viewBox="0 0 1200 420" role="img" aria-label="A main branch with three lanes leaving it. Two merge back and one stops at a conflict.">
        {" "}
        <path className="lm-main" d="M30 370H1170" />
        {" "}
        <path className="lm-a" d={BLUE} stroke="#6fb0ff" />
        <path className="lm-a" d={AMBER} stroke="#eaa93c" />
        <path className="lm-a" d={GREEN} stroke="#5ec48a" />
        {" "}
        <g className="lm-commits">
          {COMMITS.map((x, i) => (
            <circle key={x} cx={x} cy="370" r="3.5" opacity="0">
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.04;0.9;1" dur="12s" begin={`${-12 + i * 1.4}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
        {" "}
        {LANES.map((lane) =>
          SIZES.map((r, i) => {
            const begin = `${(-lane.dur * i) / SIZES.length}s`;
            return (
              <circle key={`${lane.colour}${i}`} r={r} fill={lane.colour} opacity="0">
                <animateMotion dur={`${lane.dur}s`} begin={begin} repeatCount="indefinite" path={lane.path} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes={`0;0.05;${lane.fade};1`} dur={`${lane.dur}s`} begin={begin} repeatCount="indefinite" />
              </circle>
            );
          }),
        )}
        {" "}
        {/* The conflicting lane: its agents reach the ring, wait there and go no further. */}
        {SIZES.map((r, i) => {
          const begin = `${(-7.5 * i) / SIZES.length}s`;
          return (
            <circle key={`amber${i}`} r={r} fill="#eaa93c" opacity="0">
              <animateMotion dur="7.5s" begin={begin} repeatCount="indefinite" path={AMBER} keyPoints="0;1;1" keyTimes="0;0.72;1" calcMode="linear" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.8;1" dur="7.5s" begin={begin} repeatCount="indefinite" />
            </circle>
          );
        })}
        {" "}
        <circle className="lm-node" cx="130" cy="370" r="7" />
        <circle className="lm-node" cx="270" cy="370" r="7" />
        <circle className="lm-node" cx="430" cy="370" r="7" />
        <circle className="lm-node" cx="832.5" cy="370" r="7" />
        <circle className="lm-node" cx="1057.5" cy="370" r="7" />
        {" "}
        <circle cx="780" cy="170" r="9" fill="none" stroke="#eaa93c" strokeWidth="1.5" opacity="0">
          <animate attributeName="r" values="9;19" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="780" cy="170" r="9" fill="none" stroke="#eaa93c" strokeWidth="2" />
        {" "}
        <text className="lm-b" x="30" y="404">main</text>
        {" "}
        <text className="lm-t" x="244" y="56">eizen/lane-5c1a87, port 4100. Days overdue column</text>
        {" "}
        <text className="lm-t" x="352" y="156">eizen/lane-a48476, port 4101. Status pills</text>
        {" "}
        <text className="lm-t" x="478" y="256">eizen/lane-9bb061, port 4102. Pre-ship review</text>
        {" "}
        <text className="lm-b" x="804" y="176">Would conflict in app.js. Nothing changed</text>
        {" "}
        <text className="lm-b" x="1072" y="350">Merged</text>
        {" "}
        <text className="lm-b" x="846" y="350">Merged</text>
        {" "}
      </svg>
      {" "}
      <ul className="ticks lane-legend">
        <li>
          <b>Blue.</b>
          {" "}Finished and merged into main.
        </li>
        <li>
          <b>Amber.</b>
          {" "}Would conflict, so nothing changed.
        </li>
        <li>
          <b>Green.</b>
          {" "}Checks passed and merged.
        </li>
      </ul>
    </div>
  );
}
