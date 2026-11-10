export function LaneMap() {
  return (
    <div className="lane-map live">
      <svg viewBox="0 0 1200 420" role="img" aria-label="A main branch with three lanes leaving it. Two merge back and one stops at a conflict.">
        {" "}
        <path className="lm-main" d="M30 370H1170" />
        {" "}
        <path className="lm-a" d="M130 370L227.5 70H960L1057.5 370" stroke="#6fb0ff" />
        <path className="lm-a" d="M270 370L335 170H780" stroke="#eaa93c" />
        <path className="lm-a" d="M430 370L462.5 270H800L832.5 370" stroke="#5ec48a" />
        {" "}
        <circle r="7" fill="#6fb0ff">
          <animateMotion dur="11s" begin="0s" repeatCount="indefinite" path="M130 370L227.5 70H960L1057.5 370" />
        </circle>
        <circle r="7" fill="#eaa93c">
          <animateMotion dur="11s" begin="0s" repeatCount="indefinite" path="M270 370L335 170H780" />
        </circle>
        <circle r="7" fill="#5ec48a">
          <animateMotion dur="11s" begin="0s" repeatCount="indefinite" path="M430 370L462.5 270H800L832.5 370" />
        </circle>
        {" "}
        <circle className="lm-node" cx="130" cy="370" r="7" />
        <circle className="lm-node" cx="270" cy="370" r="7" />
        <circle className="lm-node" cx="430" cy="370" r="7" />
        <circle className="lm-node" cx="832.5" cy="370" r="7" />
        <circle className="lm-node" cx="1057.5" cy="370" r="7" />
        {" "}
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
