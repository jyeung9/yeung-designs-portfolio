> Historical iteration notes. The final version was approved for GitHub and live publication on October 28, 2026. See ../design-system.md for the current contract; earlier pending/queued statements below describe prior stages.

# Mobile bottom island — local preview

Restore the four home destinations below the player at widths ≤600px. Preserve the 6%-of-fitted-scene gap above and below the player. Artwork is clamp(32px, 14% of fitted scene width, 62px); island width is 80% of scene with a 280px readability floor, capped by available width. Labels stay 16px and wrap; settings remain available through the hamburger. No matcha artwork or expanded A/B labels in this preview.

Verified 390×844: 342px scene, 20.52px equal gaps, 58.40px-wide menu targets. Verified 320×568: 16.31px equal gaps, 56px-wide targets, no horizontal overflow. Source comments use design-preview:mobile-island. Preview image: ../.local-previews/mobile-island-390.png. Not committed or published.

## Queue after this preview

1. Contact artwork: matcha latte with a straw; preserve label and destination.
2. Explicit navigation labels everywhere, with exact two-line text: `a-side` / `(case studies)` and `b-side` / `(explorations)`. Preserve readable text and proportional spacing. Separate design preview before publication.

## Label refinement

Bottom-island labels are now lowercase, single-line: a-side, b-side, about, contact. This latest instruction supersedes the queued two-line A/B labels for the bottom island. Labels remain 16px; the reserved label row reduces from 50px to 29px, removing unused second-line space. Desktop and phone use the same wording. Still local, not published.

## Utility menu and matcha preview

Hamburger contains only linkedin and résumé, without diagonal arrows. Timezone and theme toggle share one row with 44px heights and an 8px gap. Settings remain out of the bottom island. Contact artwork is now a scalable SVG iced matcha latte with milk layers, ice, a glass and a reusable straw; the contact label and route are unchanged. Visual: ../.local-previews/contact-matcha-mobile.png. These remain local previews, not accepted design-system changes or published work.

## Playful matcha and heart refinement

Matcha image is 150% of its artwork box so the cup body visually matches neighboring icons while the straw extends above. Hover/keyboard focus adds a small 0.8s wobble about the base. Heart petal is 1.5×, with a 3.6s ±small-angle breeze and a bounded pointer repulsion inside 64px; it settles on exit. Reduced-motion users get the larger artwork without wind, wobble or pointer movement. Local preview only.

### Larger motion and clearer ice

Heart petal is now 1.95× its original size; breeze varies from −14° to +18° with a small vertical bounce, and nearby pointers can nudge it up to 24px horizontally / 14px vertically with a springy return. Reduced-motion behavior remains static. Matcha baseline is lowered to align the glass with neighboring artwork. Three larger pale ice cubes use stronger outlines and white highlights. Still local-only.

### Rooted heart and wood character

Removed free translations from the heart. Wind and pointer response now rotate the heart and connecting stem around the same fixed stem base; bloom/sprout origins also align to their attachment points. Player finish is a slightly darker warm medium oak, with varied fine grain, a subtle knot and deeper edge tones. Geometry and controls are unchanged. Local preview only.
