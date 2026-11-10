export function Tunnel() {
  return (
    <div className="live tun">
      {" "}
      <div className="ui">
        <h3>Your PC</h3>
        <div className="p">
          <i className="dot ok" />
          localhost:3000
          <span className="grow" />
          <span style={{ color: "var(--ut3)", fontSize: "11px" }}>next dev</span>
        </div>
        <div className="p">
          <i className="dot ok" />
          localhost:5173
          <span className="grow" />
          <span style={{ color: "var(--ut3)", fontSize: "11px" }}>vite</span>
        </div>
        <div className="p">
          <i className="dot ok" />
          localhost:8080
          <span className="grow" />
          <span style={{ color: "var(--ut3)", fontSize: "11px" }}>api</span>
        </div>
      </div>
      {" "}
      <svg viewBox="0 0 200 150" preserveAspectRatio="none" aria-hidden="true">
        <path className="flow" d="M0 62H200" />
        <path className="flow" d="M200 94H0" style={{ animationDuration: "1.9s" }} />
        <path className="flow" d="M0 126H200" style={{ animationDuration: "1.2s" }} />
      </svg>
      {" "}
      <div className="ui">
        <h3>Your laptop</h3>
        <div className="p">
          <i className="dot ok" />
          localhost:3000
          <span className="grow" />
          <span style={{ color: "var(--ut3)", fontSize: "11px" }}>forwarded</span>
        </div>
        <div className="p">
          <i className="dot ok" />
          localhost:5173
          <span className="grow" />
          <span style={{ color: "var(--ut3)", fontSize: "11px" }}>forwarded</span>
        </div>
        <div className="p">
          <i className="dot hd" />
          localhost:8080
          <span className="grow" />
          <span style={{ color: "var(--ut3)", fontSize: "11px" }}>in use here</span>
        </div>
      </div>
      {" "}
    </div>
  );
}
