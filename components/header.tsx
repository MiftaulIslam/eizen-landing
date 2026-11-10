import Link from "next/link";
import { Arrow } from "@/components/parts/Arrow";
import { Mark } from "@/components/parts/Mark";
import { Button } from "@/components/ui/Button";
import { NavItem, NavMenu, NavTrigger } from "@/components/ui/NavMenu";

// The Product panel only opens above 1080 px. Below that its pictures resolve to this blank instead of downloading.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const megaSizes = "(max-width: 1080px) 1px, min(680px, calc(50vw - 70px))";

// The phone menu: product pages with their one-line summaries, then the pages for adopting it.
const PRODUCT = [
  ["/product", "Tour", "The whole window, part by part"],
  ["/lanes", "Lanes", "A worktree for every thread"],
  ["/browser", "Browser", "The agent can see the page"],
  ["/memory", "Memory", "Why every line is there"],
  ["/automation", "Automation", "Schedules, triggers, Night shift"],
  ["/meetings", "Meetings", "Recordings into threads"],
  ["/reach", "Reach", "Phone, laptop, review links"],
  ["/connections", "Connections", "GitHub, Linear, Neon and more"],
] as const;
const ADOPT = [
  ["/teams", "For teams"],
  ["/compare", "Compare"],
  ["/security", "Security"],
  ["/about", "About"],
] as const;

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
        <NavMenu label="Main" className="nav">
          {" "}
          <NavTrigger controls="product-panel" data-mega="">Product</NavTrigger>
          {" "}
          <NavItem href="/lanes" current={current}>Lanes</NavItem>
          <NavItem href="/teams" current={current}>For teams</NavItem>
          <NavItem href="/compare" current={current}>Compare</NavItem>
          <NavItem href="/security" current={current}>Security</NavItem>
          {" "}
        </NavMenu>
        {" "}
        <div className="top-cta">
          <Button href="/download" variant="light" size="sm">Download</Button>
        </div>
        {" "}
        <button type="button" className="menu-btn" aria-expanded="false" aria-controls="site-drawer">
          <span className="menu-ico" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="menu-lbl">Menu</span>
        </button>
        {" "}
      </div>
      {" "}
      <div className="mega night" id="product-panel">
        {" "}
        <div className="wrap">
          {" "}
          <div className="mega-list">
            {" "}
            <Link href="/product" prefetch={false} style={{ "--i": 0 }}>
              <b>Tour</b>
              <span>The whole window, part by part</span>
            </Link>
            <Link href="/lanes" prefetch={false} style={{ "--i": 1 }}>
              <b>Lanes</b>
              <span>A worktree for every thread</span>
            </Link>
            <Link href="/browser" prefetch={false} style={{ "--i": 2 }}>
              <b>Browser</b>
              <span>The agent can see the page</span>
            </Link>
            <Link href="/memory" prefetch={false} style={{ "--i": 3 }}>
              <b>Memory</b>
              <span>Why every line is there</span>
            </Link>
            <Link href="/automation" prefetch={false} style={{ "--i": 4 }}>
              <b>Automation</b>
              <span>Schedules, triggers, Night shift</span>
            </Link>
            <Link href="/meetings" prefetch={false} style={{ "--i": 5 }}>
              <b>Meetings</b>
              <span>Recordings into threads</span>
            </Link>
            <Link href="/reach" prefetch={false} style={{ "--i": 6 }}>
              <b>Reach</b>
              <span>Phone, laptop, review links</span>
            </Link>
            <Link href="/connections" prefetch={false} style={{ "--i": 7 }}>
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
      <div className="drawer-scrim" aria-hidden="true" />
      <div className="drawer" id="site-drawer">
        <span className="drawer-grip" aria-hidden="true" />
        <p className="drawer-kick">Product</p>
        <div className="drawer-grid">
          {PRODUCT.map(([href, name, line], i) => (
            <Link key={href} href={href} prefetch={false} style={{ "--i": i }} aria-current={current === href ? "page" : undefined}>
              <b>{name}</b>
              <span>{line}</span>
            </Link>
          ))}
        </div>
        <p className="drawer-kick">Adopting it</p>
        <div className="drawer-list">
          {ADOPT.map(([href, name], i) => (
            <Link key={href} href={href} prefetch={false} style={{ "--i": PRODUCT.length + i }} aria-current={current === href ? "page" : undefined}>
              {name}
              <Arrow />
            </Link>
          ))}
        </div>
        <div className="drawer-foot">
          <Button href="/download" variant="light" prefetch={false} className="drawer-cta">
            Download for Windows
          </Button>
        </div>
      </div>
      {" "}
    </header>
  );
}
