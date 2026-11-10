export function Collide() {
  return (
    <div className="live coll" data-seq="800,1000,1000,1400" data-hold="2400">
      {" "}
      <div className="ui">
        <h3>Two agents, one folder</h3>
        <div className="file">
          {" "}
          <span className="l">const TERMS_DAYS = 30</span>
          {" "}
          <span className="sw">
            <span className="o3">
              <span className="l a1">
                <span className="who x">A</span>
                const TERMS_DAYS = 45
              </span>
              <span className="l a2">
                <span className="who y">B</span>
                reading a file A is halfway through
              </span>
            </span>
            <span className="a3">
              <span className="l">
                <span className="who y">B</span>
                const TERMS_DAYS = 60
              </span>
              <span className="l a4" style={{ color: "var(--st)" }}>A's change is gone, and the tests fail for B</span>
            </span>
          </span>
          {" "}
        </div>
      </div>
      {" "}
      <div className="ui">
        <h3>Two agents, two lanes</h3>
        <div className="file">
          {" "}
          <span className="l a1">
            <span className="who x">A</span>
            eizen/lane-5c1a87: TERMS_DAYS = 45
          </span>
          {" "}
          <span className="l a2">
            <span className="who y">B</span>
            eizen/lane-a48476: TERMS_DAYS = 60
          </span>
          {" "}
          <span className="l a3" style={{ color: "var(--ok)" }}>Both finish, both pass their checks</span>
          {" "}
          <span className="l a4" style={{ color: "var(--hd)" }}>Merging the second names the file that conflicts</span>
          {" "}
        </div>
      </div>
      {" "}
    </div>
  );
}
