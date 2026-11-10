import Link from "next/link";
import { UPDATED } from "@/lib/site";
import { Mark } from "@/components/parts/Mark";

const updatedLabel = new Date(`${UPDATED}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function Footer() {
  return (
    <footer className="foot night deep">
      {" "}
      <div className="wrap">
        {" "}
        <div className="foot-grid">
          {" "}
          <div className="stack" style={{ "--s": "16px" }}>
            {" "}
            <Link className="brand" href="/" aria-label="Eizen home">
              <Mark />
              <span>Eizen</span>
            </Link>
            {" "}
            <p className="small" style={{ maxWidth: "30em" }}>A desktop app for running Claude Code, Codex and OpenCode side by side on your own machine.</p>
            {" "}
          </div>
          {" "}
          <div>
            <h2>Product</h2>
            <ul>
              <li>
                <Link href="/product">Tour</Link>
              </li>
              <li>
                <Link href="/lanes">Lanes</Link>
              </li>
              <li>
                <Link href="/browser">Browser</Link>
              </li>
              <li>
                <Link href="/memory">Memory</Link>
              </li>
              <li>
                <Link href="/automation">Automation</Link>
              </li>
              <li>
                <Link href="/meetings">Meetings</Link>
              </li>
              <li>
                <Link href="/reach">Reach</Link>
              </li>
              <li>
                <Link href="/connections">Connections</Link>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <h2>Adopting it</h2>
            <ul>
              {" "}
              <li>
                <Link href="/teams">For teams</Link>
              </li>
              {" "}
              <li>
                <Link href="/compare">Compare</Link>
              </li>
              {" "}
              <li>
                <Link href="/security">Security</Link>
              </li>
              {" "}
              <li>
                <Link href="/download">Download</Link>
              </li>
              {" "}
            </ul>
          </div>
          {" "}
          <div>
            <h2>About</h2>
            <ul>
              {" "}
              <li>
                <Link href="/about">The idea</Link>
              </li>
              {" "}
              <li>
                <Link href="/about#credits">Credits</Link>
              </li>
              {" "}
            </ul>
          </div>
          {" "}
        </div>
        {" "}
        <div className="legal small">
          {" "}
          <p>
            Screens show a demo workspace. Its companies and figures are sample data. Updated{" "}
            <time dateTime={UPDATED}>{updatedLabel}</time>.
          </p>
          {" "}
          <p>Eizen is independent of Anthropic, OpenAI and the other providers it works with.</p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
