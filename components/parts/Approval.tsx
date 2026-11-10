export function Approval() {
  return (
    <div className="live" data-seq="500,1100,2800,1100" data-hold="1800">
      <div className="ui appr">
        {" "}
        <div className="row b">
          <div className="row">
            <i className="dot hd" />
            <b>Allow Bash?</b>
          </div>
          <span className="m">
            <span className="sw">
              <span className="o3">Approves in 20s</span>
              <span className="a3">Approved</span>
            </span>
          </span>
        </div>
        {" "}
        <div className="cmd" data-type="1">git push --force origin eizen/lane-5c1a87</div>
        {" "}
        <div className="why a2">Discards work or rewrites git history</div>
        {" "}
        <div className="row a2" style={{ justifyContent: "flex-end", marginTop: "10px" }}>
          <span className="ubtn">Decline</span>
          <span className="ubtn">Always</span>
          <span className="ubtn go">Approve</span>
        </div>
        {" "}
        <i className="drain" />
        {" "}
      </div>
    </div>
  );
}
