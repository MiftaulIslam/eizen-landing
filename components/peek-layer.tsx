const sizes = "min(460px, 32vw)";

export function PeekLayer() {
  return (
    <div className="peek" aria-hidden="true">
      <img data-key="tour" src="/assets/screens/thread.webp" srcSet="/assets/screens/thread-m.webp 1100w, /assets/screens/thread.webp 2200w" sizes={sizes} alt="" loading="lazy" />
      <img data-key="lanes" src="/assets/screens/lane-menu.webp" srcSet="/assets/screens/lane-menu-m.webp 1100w, /assets/screens/lane-menu.webp 2200w" sizes={sizes} alt="" loading="lazy" />
      <img data-key="browser" src="/assets/screens/browser.webp" srcSet="/assets/screens/browser-m.webp 1100w, /assets/screens/browser.webp 2200w" sizes={sizes} alt="" loading="lazy" />
      <img data-key="memory" src="/assets/screens/ask-line.webp" srcSet="/assets/screens/ask-line-m.webp 1100w, /assets/screens/ask-line.webp 2200w" sizes={sizes} alt="" loading="lazy" />
      <img data-key="automation" src="/assets/screens/night-shift.webp" srcSet="/assets/screens/night-shift-m.webp 1100w, /assets/screens/night-shift.webp 2200w" sizes={sizes} alt="" loading="lazy" />
      <img data-key="meetings" src="/assets/img/rubin-dome-s.webp" alt="" loading="lazy" />
      <img data-key="reach" src="/assets/screens/phone-thread.webp" alt="" loading="lazy" />
      <img data-key="connections" src="/assets/screens/connections.webp" srcSet="/assets/screens/connections-m.webp 1100w, /assets/screens/connections.webp 2200w" sizes={sizes} alt="" loading="lazy" />
    </div>
  );
}
