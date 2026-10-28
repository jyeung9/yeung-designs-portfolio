# Visual component reference library

Updated October 28, 2026. This library stores visual evidence alongside component rules so future work does not reconstruct the design from prose alone. References are local, durable copies, outside the published `dist` folder.

## How to use this library

Before changing a component, inspect its visual reference and its preservation rules. A screenshot is evidence only for the named detail: it does **not** approve the whole screen. Latest explicit user decisions override older images. Never silently replace a reference with the latest implementation.

Status labels: **Preserve** = explicitly requested detail; **Context** = historical appearance, not approved as a whole; **Regression** = known problem to avoid; **Pending** = no approved visual yet. Implementation screenshots must be labeled with their viewport, theme, state and date, and remain separate from approved references.

For each future component update, add a before/after screenshot at matching viewport and theme. For motion, add a short recording or start/mid/end frames plus trigger, duration, result and reduced-motion behavior. Check touch and keyboard as well as pointer input. Do not mark untested states verified.

## LED screen / physical component

**Preserve: physical housing. Context: surrounding scene.** The user explicitly likes the physical LED screen. Retain recessed dark glass, a thin muted rim, rounded corners and green display contrast. Do not use this image to approve table placement, tiny typography or READY wording. Latest empty-state wording is **load record**; loaded state shows song name. Solid lettering and matching play/pause icons supersede pixelated lettering.

![Desktop visual evidence for the recessed LED housing](component-library/desktop-context-2026-10-28.png)

Source: user-supplied desktop screenshot, October 28, 12:45:05 AM. Pixel dimensions are screenshot dimensions, not a verified CSS viewport. A tighter approved component capture is still needed; do not infer exact dimensions from this full-screen image.

## Shelf sleeves / shared artwork

**Preserve: shared identity across compact and expanded states. Context: this compact appearance.** Refer to the four sleeves in the desktop image above: cream square jacket, circular artwork, blue / green / purple / red palette. Expanded artwork must retain the same colors and relative circle-to-square proportion. Do not recreate a different illustration when expanding.

**Pending:** approved compact/expanded side-by-side captures. Desktop interaction: at least two seconds of sustained hover before expansion; first tap opens the gallery immediately. Expanded browsing exposes neighboring records. Screenshots cannot establish motion correctness.

## Header logo / favicon

**Context: current favicon asset. Preserve: matching identity.** The favicon must match the circular “y.” header mark. This saved asset records the current implementation, not new user approval of every rendered detail. Compare against a header capture before changing either.

![Current circular logo asset](component-library/logo-current.svg)

## Mobile layout / regression reference

**Regression — do not reproduce this layout.** This screenshot records undersized shelf controls, crowded player/LED composition and the browse label overlapping the timezone selector. Retain desktop object identity and proportions while allocating enough space for labels and controls. Do not shrink the entire interface until tap targets or text become unusable.

![Known mobile layout regression, supplied by the user](component-library/mobile-overlap-regression.png)

Source: IMG_6254.PNG. Actual CSS viewport and browser scaling were not captured. This is a failure reference, not a mobile target design.

## Component evidence still needed

| Element / pattern | Required visual evidence | Preserve / verify |
| --- | --- | --- |
| Expanded sleeve | Compact and expanded pair, both themes; long-chip example | Same artwork proportions; chips contained; no heading box or text overlap; readable solid impact statement |
| Accent links | Header link and View Record side by side | Accent color and thin squiggly underline; no half-button border |
| Player / side stacks | Empty, playing, paused, switching frames; short motion recording | First-tap action, clear song title, coherent depth movement; arrows hidden when not hovering/focused per latest explicit request |
| Header / typography | Full header at desktop and phone widths | Solid matching headline typography, solid role text, centered slow greeting marquee |
| Theme / timezone | Both themes, open menu and keyboard focus | Rounded menu; opposite-action toggle label; contrast and no overlap |
| Vine animation | Start, middle, final frames or recording | Left-to-right growth around words, final sprout at final n; reduced-motion equivalent |
| Responsive composition | Matching desktop/phone screenshots with viewport sizes | Table placement, full-frame intent, readable controls and no clipping; document unresolved fit conflicts |

Earlier temporary component screenshots are no longer on disk. Do not invent replacements or label current implementation as approved to fill these gaps. The touch interaction recommendations from the side conversation remain proposals unless explicitly adopted; they do not silently replace the existing interaction contract.
