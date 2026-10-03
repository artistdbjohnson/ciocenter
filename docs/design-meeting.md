# Design meeting — CIO Path A

Studio dglxss. Design study of Central Indiana Orthopedics (`https://ciocenter.com/`). Not affiliated. Not the official site.

Recorded vote, shelf search, color pass, and the final tool pass. The site is a Next.js App Router app meant for Vercel. Google AI Studio is not a host. Rize was not added.

## Craft vote

**Vote: Motionsites.ai — Modern Dental Clinic (free healthcare seed).**

The locked tool pass makes Motionsites the craft vote, free seeds and free source only. Framer templates, including Halden Practice, are out of the vote even though a multi-location clinic chassis was considered before this lock.

Opened:

- `https://motionsites.ai/` — public seed grid (KnowSugar / Healthcare, heroes, footers).
- `https://motionsites.ai/apps` — Dental Implant Clinic, Dental Care App.
- Prompt-index pages that list **Modern Dental Clinic** (Healthcare) and **Aesthetic Dental Clinic**.

Why Modern Dental Clinic:

- It is a practice site, not a phone app and not a single-condition product.
- A clinic seed already thinks in services, trust, and a path to be seen. That is the right chassis for six orthopedic offices.
- KnowSugar is a healthcare product, not a clinic directory.
- Dental Implant Clinic is one procedure. Dental Care App is an app UI.
- Aesthetic Dental Clinic is closer, but Modern Dental Clinic is the clearer “practice you can walk into” seed.

What was taken: the structural idea only — a calm practice front, services as a real index, and an obvious way to reach a human. No Motionsites prompt text, paid seed, or generated source was copied into the repo.

What was rejected: liquid-glass agency seeds, 3D portfolio seeds, and any Framer remix (Halden Practice, VERRIN, Verde, Medicure, Vitalix). Those stay reference, not the vote.

## Novel twist

**Reach.** A clinic atlas on the home page.

You filter the six published offices by what each location page actually lists (walk-in, joint replacement, spine, hand, foot, sports, imaging, physical therapy). The map flies to that clinic and shows the printed hours, including the places where the standing hours and the 09/28–10/02 walk-in week disagree. It is not a live open/closed clock.

Interaction model adapted from **MapCN** (MIT). Notice kept in `components/atlas.tsx`. Tiles are **OpenFreeMap** public styles (commercial use allowed; MapLibre shows the required OpenStreetMap / OpenMapTiles credit). CARTO’s default basemap was rejected because commercial use needs a paid license.

## Shelf search

One pattern was allowed to ship. Galleries were look-only.

### Shelf A — opened, then the license lock

| Opened | Decision |
| --- | --- |
| [Vanta UI](https://vantaui.com) | Reference only. Paid to use the assets. Not shipped. |
| [DesignBookmark](https://designbookmark.com) | A directory, not components. Not shipped. |
| [Cue](https://cuedesign.space) | Reference and prompts only. Paid library. Not shipped. |
| [EasyUI](https://easyui.site) | Free tier is MIT and was allowed. Unfold / gooey / neon pieces do not help a multi-location orthopedic practice. Not shipped. |
| [Great UI](https://great-ui.com) | Commercial client use was allowed. Generic Tailwind kit. Not shipped, and not redistributed as a library. |
| [PaceUI](https://paceui.com) | Public/free core is MIT. Dashboard crafts and Pro blocks do not belong here. No Pro artifact shipped. |
| [dev.cards](https://dev.cards) | Commons Clause, asset rights unresolved. Not shipped. |

### Shelf B — opened

| Opened | Decision |
| --- | --- |
| shadcn/ui | MIT confirmed. Not copied as a component set. Buttons and forms are original. |
| Magic UI | Free components are MIT. Pro was not touched. No Magic UI component shipped; the atlas is the one twist. |
| Motion Primitives (free site) | Free repo is MIT. Pro licence is separate and was not used. No component shipped. |
| Uiverse | Allowlisted as MIT. No widget shipped. |
| MapCN | **Shipped.** MIT notice is in `components/atlas.tsx`. Tiles are OpenFreeMap, not CARTO. |
| Anime.js | MIT, not needed beside CSS and MapLibre. Not shipped. |
| 21st.dev | Only MIT components would have been eligible. None taken. Aceternity listings there were not treated as a licence. |
| Aceternity free tier | Commercial licence not established. Not shipped. |
| MicroKit, glass.samasante, text-effects.colorion, Kitbitz, 3dicons | Allowlisted, not used. Glass nav was rejected so the practice would not look like every frosted template. |
| Kinetics, Scrolltide, VibePrompts | No licence or paid. Not shipped. |
| Galleries (component, navbar, footer, cta, minimal, refero styles, kage, appshot) | Look-only. No code or assets copied. |

## Color pass

Logo sampled from `cio-logo-hor-4c.png`: wine about `#A81850`, deep wine, teal about `#38B0C8`.

Contrast (Colorable’s WCAG method, computed locally, site not embedded):

| Pair | Ratio | Use |
| --- | --- | --- |
| `#241C1E` on `#F4EFEA` | 14.59 | Body on paper |
| `#5A463F` on `#F4EFEA` | 7.71 | Secondary text |
| `#7A1038` on `#F4EFEA` | 9.38 | Wine text |
| `#A81850` on `#F4EFEA` | 6.31 | Logo wine as large text, still AA |
| `#FFF8F6` on `#A81850` | 6.87 | Label on the wine button |
| `#0E6576` on `#F4EFEA` | 5.85 | Teal text (darkened from the logo) |
| `#38B0C8` on `#F4EFEA` | 2.24 | Logo teal fails small text. Decorative only. |
| `#F6EFEA` on `#1A1416` | 15.97 | Dark theme body |
| `#F3B3C6` on `#1A1416` | 10.45 | Dark theme links |
| `#9FDEE8` on `#1A1416` | 12.19 | Dark theme teal text |

Tokens live in `app/globals.css`. They were written here. They are not a pasted ramp.

| Tool | Decision |
| --- | --- |
| [Colorable](https://colorable.jxnblk.com) | Used as the contrast check. Not embedded. |
| [Ramps](https://www.ramps.studio) | Looked at the default blue ramp and a generated ramp for `#a81850` / `#187a8c`. Then wrote our own CSS. Ramps hex values were not shipped. |
| [ShaderGradient](https://shadergradient.co) | React package is MIT. Not installed. A WebGL gradient would fight the paper-and-wine identity. No Figma preset, no Pro video. |
| [Backgrounds Supply Gradient Lab](https://backgrounds.supply/gradient-lab) | Commercial export is allowed. No export downloaded or embedded. The hero wash is a two-stop radial written from the logo colors. |
| [Tabbied](https://tabbied.com/patterns) | Looked at Linen, Newsprint, Berry, Paper as mood. No generated pattern file shipped. Their website templates were not used. |
| [ColorFlow](https://colorflow.ls.graphics) | Opened. No mesh export shipped. |
| [Colir](https://colir.space/app) | Opened. Free-plan exports are personal use only. Not shipped. |
| [zoxilsi studio](https://studio.zoxilsi.cc) | Opened Boardroom / Obsidian Paper as mood. No output licence. No preset shipped. |
| [Gradient Studio](https://gradientsaas.blogspot.com) | Commercial CSS export is allowed. No generated CSS was pasted. |

## Tool pass

| Tool | What happened |
| --- | --- |
| Motionsites.ai | Craft vote, above. Free seed only. No paid prompt copied. |
| [footer.design](https://footer.design) | Look-only. Opened the gallery (Nothin’, Decimals, and the rest). The footer in `components/shell.tsx` was rebuilt for this practice: six clinics, the phone, patient tasks, and “Built by dglxss” / “Feito pela dglxss”. No showcased site was copied. |
| Mobbin | Look-only intent: a “find a clinic, filter by service, read hours, call” flow. The Mobbin connection answered that search needs a paid plan (`https://mobbin.com/pricing`). No screenshots were saved or shipped. Reach still follows that flow from the published CIO location pages. |
| Google AI Studio | Not a host. The app is Next.js App Router and is meant to run on Vercel through the GitHub integration. This study does not call AI Studio and does not deploy by hand. |
| Rize | Not installed. No time tracker. |

## Identity

- Logo files are the published horizontal mark and the white mark from the CIO theme.
- Physician portraits and clinic photographs are the files published on ciocenter.com, saved under `public/media`.
- Phone `800-622-6575`. Elwood’s published direct line is `765-608-3668`.
- No invented doctors, clinics, or outcomes. Mako “first in the region” and “over 4,500 patients” are the practice’s published lines.
- Walk-in coverage follows the hours page (five clinics), not the contact page’s “all locations” sentence. Both are noted on the contact view.
- EN default. PT is Brazilian Portuguese, a real translation of the transplanted copy.
- Light is the default. Dark and light persist in `localStorage` (`cio-theme`, `cio-locale`).
- The study is `noindex` so it does not pretend to be the practice in search.
