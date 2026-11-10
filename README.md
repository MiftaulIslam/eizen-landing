# Eizen landing site

The Eizen marketing site in Next.js, 14 static pages.

    npm install
    npm run dev
    npm run build && npm start

The site lives at https://eizen.miftaul.com. Canonical URLs, the sitemap, structured data and `llms.txt` use that address; set `NEXT_PUBLIC_SITE_URL` to build a copy for another address.

## Search and AI search

- `lib/site.ts` lists every page with its title, description and share image. Metadata, JSON-LD, `sitemap.xml` and `llms.txt` are built from it, so a new page goes there first.
- Change `UPDATED` in `lib/site.ts` when the copy changes. The footer shows it and crawlers get it as `dateModified` and `lastModified`.
- Share images live in `public/og/`. Regenerate them with `node scripts/og-images.mjs <base-url>` against a running copy.
- `robots.txt` allows all crawlers, including AI search ones. To keep the copy out of model training, add Disallow rules in `app/robots.ts`.

| Path | What it holds |
| --- | --- |
| `app/<route>/page.tsx` | Page title, description and the order of its sections |
| `app/<route>/sections.tsx` | That page's sections (`app/sections.tsx` for the home page) |
| `components/parts/` | Pieces used on more than one page, such as the lane map and approval card |
| `components/header.tsx`, `footer.tsx`, `site-page.tsx` | The frame around every page |
| `app/styles/` | Design CSS, taken from the HTML version |
| `lib/site-effects.ts`, `lib/live-effects.ts` | Scroll, menu, video and explainer behaviour |
| `lib/scope.ts` | Stops all of that when the visitor leaves a page |
| `public/assets/` | Fonts, images, screenshots, video and logo files |

## How the explainers work

`data-seq="900,1200"` on a `.live` element adds `.s1`, `.s2` and so on, holds, then starts over. An element with class `a3` appears at step 3 and one with `o3` leaves at step 3. With reduced motion on, each explainer shows its final state.

## Before going live

- The download button points at `/downloads/Eizen_0.1.0_x64-setup.exe`. Build the installer and put it in `public/downloads/`.
- Screens come from a demo workspace, and the usage figures on the new-thread screen are sample numbers.
- Comparison copy describes other tools in general. Recheck it before publishing.

## Credits

Photographs and footage are by NOIRLab and ESO under CC BY 4.0, listed one by one at `/about#credits`. Keep that list if you reuse them.

The site's review uses the method from [unslop](https://x.com/heydamir) by Damir Sokolovsky, CC BY 4.0.
