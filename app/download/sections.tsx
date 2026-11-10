import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero">
      <div className="sky">
        <img src="/assets/img/kitt-peak.webp" alt="Star trails above Kitt Peak" style={{ objectPosition: "50% 20%" }} />
      </div>
      <div className="inner" style={{ paddingBottom: "clamp(64px,8vw,120px)" }}>
        {" "}
        <div className="copy stack rise" style={{ "--s": "24px", marginTop: "clamp(24px,8vh,96px)" }}>
          <img src="/assets/brand/app-icon.png" alt="" width="88" height="88" />
          <h1 className="d1">Eizen for Windows</h1>
          <p className="lead">Version 0.1.0, for Windows 10 and 11, 64-bit. About 70 MB.</p>
          <div className="btns" style={{ marginTop: "16px" }}>
            <Button href="/downloads/Eizen_0.1.0_x64-setup.exe">Download the installer</Button>
            <Button href="/teams" variant="outline">Plan a team rollout</Button>
          </div>
          <p className="note kick">Eizen uses the Claude, Codex or OpenCode accounts you already have.</p>
        </div>
        {" "}
      </div>
    </section>
  );
}

export function FirstRun() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split even">
          {" "}
          <div className="txt stack rise" style={{ "--s": "20px" }}>
            {" "}
            <p className="kick">First run</p>
            {" "}
            <h2 className="d2">A checklist does the setup</h2>
            {" "}
            <p className="body">It finds what you already have and installs what is missing.</p>
            {" "}
          </div>
          {" "}
          <div className="med">
            <div className="live" data-seq="600,1100,1100,1100" data-hold="2600">
              <div className="ui pad" style={{ display: "grid", gap: "12px" }}>
                <div className="row">
                  <i className="dot ok" />
                  <div className="grow">
                    <b>Install Claude Code</b>
                    <div className="m">
                      <span className="sw">
                        <span className="o1">Waiting</span>
                        <span className="a1">Installed</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <i className="dot ok" />
                  <div className="grow">
                    <b>Sign in to Claude</b>
                    <div className="m">
                      <span className="sw">
                        <span className="o2">Waiting</span>
                        <span className="a2">Signed in</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <i className="dot ok" />
                  <div className="grow">
                    <b>Install Git</b>
                    <div className="m">
                      <span className="sw">
                        <span className="o3">Waiting</span>
                        <span className="a3">Installed</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <i className="dot ok" />
                  <div className="grow">
                    <b>Add your first project</b>
                    <div className="m">
                      <span className="sw">
                        <span className="o4">Waiting</span>
                        <span className="a4">harbor-web</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {" "}
        </div>
      </div>
    </section>
  );
}

export function Install() {
  return (
    <section className="sec night deep ">
      <div className="wrap">
        <div className="sec-head solo rise">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            <p className="kick">Install</p>
            <h2 className="d2">No terminal needed</h2>
          </div>
          {" "}
        </div>
        <ol className="ticks rise">
          {" "}
          <li>
            <b>Run the setup file.</b>
            {" "}The installer isn't code-signed yet, so Windows may warn you. Choose More info, then Run anyway.
          </li>
          {" "}
          <li>
            <b>Follow the checklist.</b>
            {" "}It installs Claude Code, signs you in and checks Git.
          </li>
          {" "}
          <li>
            <b>Add a project.</b>
            {" "}Choose a folder.
          </li>
          {" "}
          <li>
            <b>Write what you want done</b>
            {" "}and press Enter.
          </li>
          {" "}
        </ol>
      </div>
    </section>
  );
}

export function Requirements() {
  return (
    <section className="sec paper ">
      <div className="wrap">
        <div className="split start even">
          <div className="stack rise">
            <p className="kick">Requirements</p>
            <h2 className="d2">What you need</h2>
          </div>
          <div className="rise">
            <table className="tbl stack-m">
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Windows</th>
                  <td data-l="">10 or 11, 64-bit, with WebView2</td>
                </tr>
                <tr>
                  <th scope="row">An agent account</th>
                  <td data-l="">Claude, Codex or OpenCode</td>
                </tr>
                <tr>
                  <th scope="row">Git</th>
                  <td data-l="">Needed for lanes and branch history. Setup checks for it</td>
                </tr>
                <tr>
                  <th scope="row">Meetings, if you use them</th>
                  <td data-l="">A one-time speech engine download. A GPU helps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Updating() {
  return (
    <section className="sec night ">
      <div className="wrap">
        <div className="split start even">
          <div className="stack rise">
            <p className="kick">Updating</p>
            <h2 className="d2">Install over the old version</h2>
          </div>
          <div className="stack rise">
            <p className="body">Quit from the tray icon, run the new installer, and open the app. Your threads, accounts and settings are stored separately and stay where they are. Eizen doesn't update itself yet.</p>
            <p className="body">Closing the window keeps Eizen running in the tray so that schedules can fire.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
