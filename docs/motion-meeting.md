# Motion meeting — CIO

Studio dglxss. A motion pass on the Central Indiana Orthopedics design study. Not affiliated. Not the official site.

The look from the Path A pitch stays: Outfit and Newsreader, wine and teal, the paper layout, the published photographs, the published words. This meeting only decides what is allowed to move.

## What already moves

No opening ships. The header gains a rule after a few pixels of scroll. The Reach atlas flies to a clinic in 700ms and jumps when reduced motion is requested. `prefers-reduced-motion: reduce` already turns animations and transitions off, and turns smooth scrolling off.

That atlas fly is the one camera move. It stays. Nothing new competes with it.

## Look-only — Prompt Motion

Opened [prompt-motion.com](https://www.prompt-motion.com/) for attitude and timing. Videos were not downloaded. Prompt text was not copied.

The gallery chrome is the timing lesson:

| Gesture | Timing on the gallery |
| --- | --- |
| Small control (pause) | 150ms |
| Hover ring | 200ms |
| Preview fade | 300ms, ease-out |
| Poster settle (blur to sharp) | 500ms, ease-out, and `motion-reduce:transition-none` |

Previews can be paused. Reduced motion is a real off switch, not a slower version of the same move.

Entries opened by title, then closed:

| Entry | Attitude | Decision |
| --- | --- | --- |
| Claude motion designer showreel | A résumé reel | Rejected. A practice since 1950 does not introduce itself as a showreel. |
| Bold kinetic type showreel | Type as the trick | Rejected. “Because life moves.” is a line patients read, not a kinetic title. |
| Shape morphing through UI states | Interface as a morph | Rejected. Doors, hours, and the phone stay the shapes they are. |
| Engraving-style Claude ad | Campaign film | Rejected. No ad, no loop, no extra artwork. |

What was taken: ease-out, one short timing scale, motion that is allowed to end, and a reduced-motion off switch. What was refused: the energy of the pieces themselves.

## Seats

**Vale** (type). The headline can arrive. It cannot spell itself out. One block, one curve, about the same length as the map’s fly. Letter stagger would turn the tagline into the showreel we just refused.

**Reed** (systems). Two moves, one easing family. The map already flies; do not add a second camera on load. The micro move is a 2px lift on things you can enter: the four home doors and the two pathway cards (walk-in, joint replacement). No new shadow, no color shift, no button restyle.

**Glyph** (image). The clinic photograph is never blank. It may ease from a 1.8% scale to rest, inside the frame that already crops it, and then stay. The caption — the phone numbers — does not move. No looping Ken Burns. Physician portraits do not zoom, drift, or crop.

**Ash** (trust and access). `prefers-reduced-motion` skips the arrival entirely; the words and the photograph are just there. The arrival runs once per browser session (`cio-arrive` in `sessionStorage`), then the page is still. Focus still shows the existing outline. The lift is not applied when reduced motion is requested, so a hover does not jump.

**Axiom** (skeptic). Scroll-triggered fades on every section would be a template. A splash that gates the phone number would be worse. Faces are not a hover effect. The vote is the quiet pair below, and nothing else.

## Vote

**Settled arrival, once per session, plus a quiet lift on the home entry cards.**

Unanimous. Vale, Reed, Glyph, Ash, Axiom.

| Move | Spec |
| --- | --- |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` — decelerate, soft land. The gallery’s ease-out, slowed slightly so a clinic lands instead of cutting. |
| Arrival, words | 760ms. Opacity and 10px. The whole hero column as one object. No stagger. Close to the existing 700ms map fly so the page has one tempo. |
| Arrival, photograph | 980ms. Scale 1.018 to 1. No fade. Ends still. Caption stays put. |
| Once | Class `cio-arrive` on `<html>` only when the session has not seen it and reduced motion is off. Removed when the photograph finishes. |
| Micro | 200ms, the gallery’s hover-ring length. `translateY(-2px)` on `.door` and the linked pathway cards. Pointer devices only for hover; keyboard focus gets the same lift. |
| Reduced motion | Boot script does not add the class. The existing reduce rule also kills animation and transition. The lift rule lives only under `no-preference`. |

Not shipped: GSAP, Anime.js, Framer Motion, Lottie, scroll libraries, video, or any Prompt Motion asset. CSS already on the page is enough. The design meeting left Anime.js out for the same reason.

## Where it lives

- `app/layout.tsx` — session check before paint, same pattern as the theme boot.
- `components/home-view.tsx` — marks the hero column and retires the arrival after it plays.
- `app/globals.css` — the two moves, and the reduced-motion guard.
- `components/info-views.tsx` — the study’s accessibility note now says the arrival is once per visit.
