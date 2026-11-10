import { Scene } from "./Scene";

// Scenes for the security lists on / and /security. Each one acts out the sentence of its item.

const Warn = () => (
  <svg className="scn-ic" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M8 2.25 14.25 13.5H1.75ZM8 6.75v3M8 11.6v.15" />
  </svg>
);

const Lock = ({ className }: { className?: string }) => (
  <svg className={className ? `scn-ic scn-lock ${className}` : "scn-ic scn-lock"} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <rect x="3.25" y="7" width="9.5" height="7" rx="1.5" />
    <path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" />
  </svg>
);

const File = () => (
  <svg className="scn-ic" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M4 1.75h5l3 3v9.5H4ZM9 1.75v3h3" />
  </svg>
);

const Folder = () => (
  <svg className="scn-ic" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M1.75 3.25h4.5l1.5 1.5h6.5v8.5H1.75Z" />
  </svg>
);

export function ApprovalScene() {
  return (
    <Scene steps={[400, 1100, 2600]} hold={1700}>
      <div className="ui appr scn-card">
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
        <div className="cmd scn-hl h2">
          <span className="scn-type t1" style={{ "--n": 41 }}>
            git push --force origin eizen/lane-5c1a87
          </span>
        </div>
        <div className="why row a2">
          <Warn />
          <span>Discards work or rewrites git history</span>
        </div>
        <div className="row a2 scn-btns">
          <span className="ubtn">Decline</span>
          <span className="ubtn">Always</span>
          <span className="ubtn go">Approve</span>
        </div>
        <i className="drain" />
      </div>
    </Scene>
  );
}

export function SafetyNetScene() {
  return (
    <Scene steps={[600, 900, 1300]} hold={2300} className="scn-net">
      <div className="ui scn-card">
        <div className="row b scn-set">
          <span className="grow">Ask before risky commands in every mode</span>
          <i className="scn-toggle" />
        </div>
        <div className="row scn-meta">
          <span className="m">Permission mode</span>
          <span className="chip">
            <i className="dot hd" />
            Bypass permissions
          </span>
        </div>
        <div className="cmd scn-hl h3">
          <span className="scn-type t2" style={{ "--n": 14 }}>
            rm -rf ./build
          </span>
        </div>
        <div className="row b a3 scn-stop">
          <div className="row">
            <i className="dot hd" />
            <b>Stopped to ask</b>
          </div>
          <span className="m">Recursive delete</span>
        </div>
        <div className="why row a3">
          <Warn />
          <span>Still asks, even in Bypass permissions</span>
        </div>
      </div>
    </Scene>
  );
}

export function ProtectedFilesScene() {
  return (
    <Scene steps={[500, 1000, 1300]} hold={2400} className="scn-files">
      <div className="ui scn-card">
        <div className="row b">
          <b>Protected files</b>
          <span className="m">Read, never edit</span>
        </div>
        <ul className="scn-tree">
          <li className="env">
            <File />
            <span className="grow">.env</span>
            <Lock className="a1" />
          </li>
          <li className="mig">
            <Folder />
            <span className="grow">migrations/</span>
            <Lock className="a1" />
          </li>
          <li>
            <Folder />
            <span className="grow">src/</span>
          </li>
          <li>
            <File />
            <span className="grow">package.json</span>
          </li>
        </ul>
        <div className="scn-log">
          <div className="row a2">
            <i className="dot ok" />
            <span className="grow trunc">Read .env</span>
            <span className="m">Allowed</span>
          </div>
          <div className="row a3">
            <i className="dot st" />
            <span className="grow trunc">Edit migrations/004_users.sql</span>
            <span className="m">Refused</span>
          </div>
        </div>
      </div>
    </Scene>
  );
}

export function ChecksScene() {
  return (
    <Scene steps={[600, 1000, 900, 1100, 700]} hold={2000} className="scn-checks">
      <div className="ui scn-card">
        <div className="row b">
          <div className="row">
            <i className="dot scn-state" />
            <b>Project checks</b>
          </div>
          <code>npm test</code>
        </div>
        <div className="log scn-out">
          <div className="row a1">
            <i className="dot st" />
            <span className="trunc">FAIL cart.test.ts</span>
          </div>
          <div className="row a2">
            <i className="dot mv" />
            <span className="trunc">Output sent back to the agent</span>
          </div>
          <div className="row a3">
            <i className="dot mv" />
            <span className="trunc">Agent edits src/cart.ts</span>
          </div>
          <div className="row a4">
            <i className="dot ok" />
            <span className="trunc">PASS cart.test.ts</span>
          </div>
          <div className="row a5 scn-done">
            <i className="dot ok" />
            <span className="trunc">Turn finished</span>
          </div>
        </div>
      </div>
    </Scene>
  );
}

export function PermissionModesScene() {
  return (
    <Scene steps={[700, 1300]} hold={2600} className="scn-modes">
      <div className="ui scn-card">
        <div className="scn-input">Add a dark mode toggle to settings</div>
        <div className="row scn-bar">
          <span className="chip">Work</span>
          <span className="chip scn-mode">
            <i className="dot" />
            <span className="sw">
              <span className="o1">Ask before edits</span>
              <span className="a1">Bypass permissions</span>
            </span>
          </span>
          <span className="grow" />
          <span className="ubtn go">Send</span>
        </div>
        <div className="scn-scale">
          <span className="scn-track">
            <i />
          </span>
          <div className="row b">
            <span className="m">Ask before edits</span>
            <span className="m">Bypass permissions</span>
          </div>
        </div>
      </div>
    </Scene>
  );
}

export function LearnedRulesScene() {
  return (
    <Scene steps={[400, 450, 450, 900, 1100]} hold={2400} className="scn-rules">
      <div className="ui scn-card">
        <div className="scn-log">
          {[1, 2, 3].map((n) => (
            <div className={`row a${n}`} key={n}>
              <i className="dot ok" />
              <code>npm test</code>
              <span className="grow" />
              <span className="m">Approved</span>
            </div>
          ))}
        </div>
        <div className="scn-offer a4">
          <span>
            Allow <code>npm test</code> from now on?
          </span>
          <div className="row scn-btns">
            <span className="ubtn">Not now</span>
            <span className="ubtn go">Add rule</span>
          </div>
        </div>
        <div className="row a5 scn-never">
          <i className="dot st" />
          <code>git push --force</code>
          <span className="grow" />
          <span className="m">Never offered</span>
        </div>
      </div>
    </Scene>
  );
}
