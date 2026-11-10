// Renders the Open Graph / Twitter share images into public/og/<slug>.jpg (1200x630).
//
// Run against a running copy of the site:
//   npm i -D playwright            (or set PLAYWRIGHT_PATH to an existing install, see below)
//   node scripts/og-images.mjs http://localhost:3000
//
// PLAYWRIGHT_PATH may point at a directory that has playwright in node_modules,
// or at a package.json / file inside it; it is passed to createRequire.
// PLAYWRIGHT_CHANNEL picks a browser channel (for example msedge or chrome); default is bundled Chromium.
//
// Each image takes the hero kicker (.kick), the h1 and the hero picture from the live page,
// so the cards follow the site copy. Nothing here invents text.

import { createRequire } from 'node:module';
import { mkdir, stat, copyFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, '..', 'public', 'og');

function loadPlaywright() {
  const p = process.env.PLAYWRIGHT_PATH;
  if (p) {
    const anchor = existsSync(p) && statSync(p).isDirectory() ? path.join(p, 'package.json') : p;
    return createRequire(anchor)('playwright');
  }
  return createRequire(import.meta.url)('playwright');
}

const base = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https?:\/\//.test(base)) {
  console.error('Usage: node scripts/og-images.mjs <base-url>   e.g. http://localhost:3000');
  process.exit(1);
}

const routes = [
  ['/', 'home'], ['/product', 'product'], ['/lanes', 'lanes'], ['/browser', 'browser'],
  ['/memory', 'memory'], ['/automation', 'automation'], ['/meetings', 'meetings'], ['/reach', 'reach'],
  ['/connections', 'connections'], ['/teams', 'teams'], ['/compare', 'compare'], ['/security', 'security'],
  ['/download', 'download'], ['/about', 'about'],
];

// Product screenshots for heroes that have no picture of their own.
const fallback = {
  home: 'thread.webp', product: 'thread.webp', memory: 'ask-line.webp', connections: 'connections.webp',
  compare: 'lane-menu.webp', about: 'settings.webp',
};

const W = 1200, H = 630, M = 72;
const SLOPE = 0.325; // the slope of the logo, as in site.css
const PANEL_X = 700; // left edge of the picture at the bottom; it leans right going up
// App screenshots are 16:10 with a sidebar on the left; '34% 0' puts the main pane's edge at the panel's
// bottom-left corner so the sidebar does not show as a cut-off sliver.
const MAX_BYTES = 250 * 1024;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function template({ kick, h1, picture, isScreen }) {
  const top = PANEL_X + SLOPE * H;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: 'Newsreader'; src: url('/assets/fonts/newsreader.woff2') format('woff2'); font-weight: 200 800; }
@font-face { font-family: 'Schibsted Grotesk'; src: url('/assets/fonts/schibsted-grotesk.woff2') format('woff2'); font-weight: 400 900; }
@font-face { font-family: 'JetBrains Mono'; src: url('/assets/fonts/jetbrains-mono.woff2') format('woff2'); font-weight: 400; }
:root { --n1: #0b0d14; --n3: #1a1e28; --fg: #eef0f5; --fg2: #aab0bf; --lamp: #e8553d; }
* { box-sizing: border-box; margin: 0; }
html, body { width: ${W}px; height: ${H}px; overflow: hidden; background: var(--n1); color: var(--fg); -webkit-font-smoothing: antialiased; }
.pic { position: absolute; inset: 0; background: var(--n3);
  clip-path: polygon(${top}px 0, ${W}px 0, ${W}px ${H}px, ${PANEL_X}px ${H}px); }
.pic img { position: absolute; left: ${PANEL_X}px; top: 0; width: ${W - PANEL_X}px; height: ${H}px; object-fit: cover;
  object-position: ${isScreen ? '34% 0' : '50% 50%'}; }
.text { position: absolute; left: ${M}px; top: ${M}px; width: 640px; }
.kick { font: 400 18px/1.4 'JetBrains Mono', monospace; color: var(--fg2); margin-bottom: 22px; max-width: 600px; }
h1 { font-family: 'Newsreader', serif; font-optical-sizing: auto; font-weight: 340; letter-spacing: -0.024em;
  line-height: 1.04; text-wrap: balance; font-size: 72px; }
.brand { position: absolute; left: ${M}px; bottom: ${M - 6}px; display: flex; align-items: center; gap: 14px;
  font: 600 30px/1 'Schibsted Grotesk', sans-serif; letter-spacing: -0.015em; }
.brand svg { width: 40px; height: 40px; display: block; }
</style></head><body>
<div class="pic"><img src="${esc(picture)}" alt=""></div>
<div class="text">${kick ? `<p class="kick">${esc(kick)}</p>` : ''}<h1>${esc(h1)}</h1></div>
<div class="brand"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M17.7 20L21.6 8H59.6L55.7 20Z" fill="#EEF0F5"/><path d="M11.85 38L15.75 26H39.75L35.85 38Z" fill="#E8553D"/><path d="M6 56L9.9 44H47.9L44 56Z" fill="#EEF0F5"/></svg><span>Eizen</span></div>
</body></html>`;
}

const { chromium } = loadPlaywright();
const browser = await chromium.launch(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {});
await mkdir(outDir, { recursive: true });

try {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  let html = '';
  // Serve the template from the site's own origin so the self-hosted fonts and pictures load.
  await page.route(`${base}/__og-card`, (route) => route.fulfill({ status: 200, contentType: 'text/html', body: html }));

  for (const [route, slug] of routes) {
    await page.goto(base + route, { waitUntil: 'networkidle' });
    const d = await page.evaluate(() => {
      const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
      const sec = document.querySelector('main section');
      const img = sec?.querySelector('img');
      const poster = sec?.querySelector('video[poster]')?.getAttribute('poster');
      const src = img?.getAttribute('src') || poster || null;
      return {
        kick: clean(sec?.querySelector('.kick')?.textContent) || null,
        h1: clean((sec?.querySelector('h1') || document.querySelector('h1'))?.textContent),
        picture: src ? new URL(src, location.href).pathname : null,
      };
    });
    if (!d.h1) throw new Error(`No h1 on ${route}`);
    const picture = d.picture || `/assets/screens/${fallback[slug] || 'thread.webp'}`;
    html = template({ kick: d.kick, h1: d.h1, picture, isScreen: picture.includes('/screens/') });

    await page.goto(`${base}/__og-card`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const fit = await page.evaluate(async () => {
      await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
      const h = document.querySelector('h1');
      let size = 72;
      const lines = () => Math.round(h.getBoundingClientRect().height / (size * 1.04));
      while (lines() > 3 && size > 48) { size -= 2; h.style.fontSize = size + 'px'; }
      const missing = ['Newsreader', 'Schibsted Grotesk', 'JetBrains Mono'].filter((f) => !document.fonts.check(`16px "${f}"`));
      return { size, lines: lines(), missing, imgOk: document.images[0].naturalWidth > 0 };
    });
    if (fit.missing.length) throw new Error(`Fonts not loaded on ${slug}: ${fit.missing.join(', ')}`);
    if (!fit.imgOk) throw new Error(`Picture failed to load on ${slug}: ${picture}`);

    const file = path.join(outDir, `${slug}.jpg`);
    for (let q = 88; q >= 50; q -= 6) {
      await page.screenshot({ path: file, type: 'jpeg', quality: q });
      if ((await stat(file)).size <= MAX_BYTES) break;
    }
    const kb = ((await stat(file)).size / 1024).toFixed(0);
    console.log(`${slug.padEnd(12)} ${kb} KB  ${fit.size}px/${fit.lines} lines  ${picture}`);
    if (slug === 'home') await copyFile(file, path.join(outDir, 'default.jpg'));
  }
} finally {
  await browser.close();
}
