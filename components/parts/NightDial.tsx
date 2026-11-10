export function NightDial() {
  return (
    <div className="night-box" data-night="">
      <div className="dial live">
        <svg viewBox="-226 -226 452 452" role="img" aria-label="A 24 hour dial with the Night shift window from 23:00 to 07:00 marked">
          {" "}
          <circle r="172" fill="none" stroke="var(--hair)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(0)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(15)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(30)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(45)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(60)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(75)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(90)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(105)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(120)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(135)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(150)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(165)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(180)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(195)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(210)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(225)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(240)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(255)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(270)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(285)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(300)" />
          <line x1="0" y1="-172" x2="0" y2="-160" stroke="var(--fg3)" transform="rotate(315)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(330)" />
          <line x1="0" y1="-172" x2="0" y2="-166" stroke="var(--fg3)" transform="rotate(345)" />
          <text className="nd-num" x="0.0" y="-196.0">00</text>
          <text className="nd-num" x="138.6" y="-138.6">03</text>
          <text className="nd-num" x="196.0" y="-0.0">06</text>
          <text className="nd-num" x="138.6" y="138.6">09</text>
          <text className="nd-num" x="0.0" y="196.0">12</text>
          <text className="nd-num" x="-138.6" y="138.6">15</text>
          <text className="nd-num" x="-196.0" y="0.0">18</text>
          <text className="nd-num" x="-138.6" y="-138.6">21</text>
          {" "}
          <path className="nd-arc" d="M-44.5 -166.1A172 172 0 0 1 166.1 44.5" />
          {" "}
          <g className="nd-hand" transform="rotate(30)">
            <line y1="14" y2="-150" stroke="var(--fg)" strokeWidth="2" />
            <circle r="5" fill="var(--fg)" />
          </g>
          {" "}
          <text className="nd-time-t nd-time" y="82">02:00</text>
          {" "}
        </svg>
      </div>
      {" "}
      <div>
        <p className="kick">Try the limits</p>
        <div className="nd-range">
          <label htmlFor="r5">5-hour use</label>
          <input id="r5" type="range" name="five" min="0" max="100" defaultValue="32" />
          <output className="nd-five">32%</output>
        </div>
        {" "}
        <div className="nd-range">
          <label htmlFor="r7">Weekly use</label>
          <input id="r7" type="range" name="week" min="0" max="100" defaultValue="61" />
          <output className="nd-week">61%</output>
        </div>
        {" "}
        <div className="nd-v">
          <i className="dot nd-lamp ok" />
          <span className="nd-verdict">The next task would start</span>
        </div>
        {" "}
        <p className="small" style={{ marginTop: "8px" }}>A task starts only under both limits: 50% and 80% unless you change them.</p>
        {" "}
        <div style={{ marginTop: "20px" }}>
          <div className="nd-task" data-state="done">
            <i className="dot" />
            Upgrade the date handling
            <span className="s" />
          </div>
          <div className="nd-task" data-state="running">
            <i className="dot" />
            Regression tests for totals
            <span className="s" />
          </div>
          <div className="nd-task" data-state="queued">
            <i className="dot" />
            Clear the safe TODOs
            <span className="s" />
          </div>
        </div>
        {" "}
      </div>
    </div>
  );
}
