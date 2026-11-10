import Link from "next/link";
import { Mark } from "@/components/parts/Mark";

// The Product panel only opens above 1080 px. Below that its pictures resolve to this blank instead of downloading.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const megaSizes = "(max-width: 1080px) 1px, min(680px, calc(50vw - 70px))";

export function Header({ solid = false, current }: { solid?: boolean; current?: string }) {
  return (
    <header className={solid ? "top solid always" : "top"}>
      {" "}
      <div className="wrap">
        {" "}
        <Link className="brand" href="/" aria-label="Eizen home">
          <Mark />
          <span>Eizen</span>
        </Link>
        {" "}
        <nav className="nav" aria-label="Main">
          {" "}
          <button type="button" data-mega="" aria-expanded="false" aria-haspopup="true">Product</button>
          {" "}
          <Link href="/lanes" aria-current={current === "/lanes" ? "page" : undefined}>Lanes</Link>
          <Link href="/teams" aria-current={current === "/teams" ? "page" : undefined}>For teams</Link>
          <Link href="/compare" aria-current={current === "/compare" ? "page" : undefined}>Compare</Link>
          <Link href="/security" aria-current={current === "/security" ? "page" : undefined}>Security</Link>
          {" "}
        </nav>
        {" "}
        <div className="top-cta">
          <Link className="btn fill sm" href="/download">Download</Link>
        </div>
        {" "}
        <button type="button" className="menu-btn" aria-expanded="false">Menu</button>
        {" "}
      </div>
      {" "}
      <div className="mega night">
        {" "}
        <div className="wrap">
          {" "}
          <div className="mega-list">
            {" "}
            <Link href="/product" prefetch={false}>
              <b>Tour</b>
              <span>The whole window, part by part</span>
            </Link>
            <Link href="/lanes" prefetch={false}>
              <b>Lanes</b>
              <span>A worktree for every thread</span>
            </Link>
            <Link href="/browser" prefetch={false}>
              <b>Browser</b>
              <span>The agent can see the page</span>
            </Link>
            <Link href="/memory" prefetch={false}>
              <b>Memory</b>
              <span>Why every line is there</span>
            </Link>
            <Link href="/automation" prefetch={false}>
              <b>Automation</b>
              <span>Schedules, triggers, Night shift</span>
            </Link>
            <Link href="/meetings" prefetch={false}>
              <b>Meetings</b>
              <span>Recordings into threads</span>
            </Link>
            <Link href="/reach" prefetch={false}>
              <b>Reach</b>
              <span>Phone, laptop, review links</span>
            </Link>
            <Link href="/connections" prefetch={false}>
              <b>Connections</b>
              <span>GitHub, Linear, Neon and twelve more</span>
            </Link>
            {" "}
          </div>
          {" "}
          <div className="mega-pic">
            <img src="/assets/screens/thread.webp" srcSet={`${BLANK} 8w, /assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w`} sizes={megaSizes} alt="" loading="lazy" className="on" />
            <img src="/assets/screens/lane-menu.webp" srcSet={`${BLANK} 8w, /assets/screens/lane-menu-m.webp 1100w, /assets/screens/lane-menu.webp 2200w`} sizes={megaSizes} alt="" loading="lazy" />
            <img src="/assets/screens/browser.webp" srcSet={`${BLANK} 8w, /assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w`} sizes={megaSizes} alt="" loading="lazy" />
            <img src="/assets/screens/ask-line.webp" srcSet={`${BLANK} 8w, /assets/screens/ask-line-m.webp 1100w, /assets/screens/ask-line.webp 2200w`} sizes={megaSizes} alt="" loading="lazy" />
            <img src="/assets/screens/night-shift.webp" srcSet={`${BLANK} 8w, /assets/screens/night-shift-m.webp 1100w, /assets/screens/night-shift.webp 2200w`} sizes={megaSizes} alt="" loading="lazy" />
            <img src="/assets/img/rubin-dome-s.webp" srcSet={`${BLANK} 8w, /assets/img/rubin-dome-s.webp 900w`} sizes={megaSizes} alt="" loading="lazy" />
            <img src="/assets/screens/phone-thread.webp" srcSet={`${BLANK} 8w, /assets/screens/phone-thread.webp 1170w`} sizes={megaSizes} alt="" loading="lazy" />
            <img src="/assets/screens/connections.webp" srcSet={`${BLANK} 8w, /assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w`} sizes={megaSizes} alt="" loading="lazy" />
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="drawer">
        {" "}
        <Link href="/product" prefetch={false}>Tour</Link>
        <Link href="/lanes" prefetch={false}>Lanes</Link>
        <Link href="/browser" prefetch={false}>Browser</Link>
        <Link href="/memory" prefetch={false}>Memory</Link>
        <Link href="/automation" prefetch={false}>Automation</Link>
        <Link href="/meetings" prefetch={false}>Meetings</Link>
        <Link href="/reach" prefetch={false}>Reach</Link>
        <Link href="/connections" prefetch={false}>Connections</Link>
        {" "}
        <Link href="/lanes" prefetch={false}>Lanes</Link>
        <Link href="/teams" prefetch={false}>For teams</Link>
        <Link href="/compare" prefetch={false}>Compare</Link>
        <Link href="/security" prefetch={false}>Security</Link>
        {" "}
        <Link className="btn fill" href="/download" prefetch={false}>Download for Windows</Link>
        {" "}
      </div>
      {" "}
    </header>
  );
}
