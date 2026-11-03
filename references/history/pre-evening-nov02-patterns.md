> Historical only; current patterns are ../patterns-nov02.md.

# Portfolio design patterns — current local reference

Updated November 2, 2026 · America/Los_Angeles. Written and visual documentation requested by Julie. These patterns describe the local build; no commit, push or deployment is implied. [Visual examples](visual-components.md#current-local-pattern-reference--november-2-2026).

## Design language

A quiet gridded sketchbook surrounds a tactile record player. Handwritten annotations supply personality, while structured project content remains easy to scan. Wood, metal, paper, vinyl and frosted glass each retain their own material behavior. Avoid heavy outlines, plastic highlights, text halos and decorative surfaces behind hover labels.

## Typography and hierarchy

| Pattern | Current rule |
| --- | --- |
| Handwriting | Local Caveat (`Portfolio Hand`), normal weight, cursive joins preserved. Natural variation uses small static rotation/spacing changes per complete word or label, not animation of individual Latin letters. |
| Chinese greeting | Local Long Cang subset for 你好; small independent glyph rotations retain recognizable stroke forms. |
| Header | Brand/linkedin/résumé: `clamp(24px, 2.1vw, 40px)`, line-height 1.25. Mobile menu links 24px. |
| Menu + timezone | One token: `clamp(22px, 1.65vw, 32px)`, 22px on mobile. Dropdown options and search use the same scale as bottom menu. City trigger dimensions grow in em units. |
| Wide screens | Home composition uses its existing 1.25× scale at ≥1800×900. Header cancels that scale. Utilities compensate so city lettering still physically matches the menu without an oversized control. |
| Clock | 20–24px, straight baseline, 80% ink opacity; colon blinks once per second. Reduced motion leaves colon visible. No seconds digits are displayed. |
| Main heading | DM Sans, stronger size/weight than handwritten supporting text. The gap within “i design for / meaningful connection” is tightened. |
| Role | Below “meaningful connection”; greeting-to-heading and heading-to-role spacing match. |
| Minimum | 16px functional text. LED status/title now use 16px and wrap; status screen is 58px high for short names and 90px for names over 18 characters. Decorative microprint in record artwork is excluded. |
| Case-study copy | DM Sans headings/body and DM Mono supporting labels retain the existing readable content hierarchy. |

## Materials, geometry and light

| Component | Pattern |
| --- | --- |
| Wooden body | Rounded trapezoidal top joins a vertical front; no additional whole-player roll or yaw. Top is darker than the front, with pale warm grain, irregular knot rings and restrained checks. |
| Edges | Narrow rounded bevel, fine upper highlight and lower seam distinguish the two faces without a thick outline or exposed mismatched corners. |
| Lighting | Broad upper-left illumination; lower-right cast shadow and restrained contact shading. Front face has its own vertical light falloff. |
| Feet | Two visible short metal cylinders; rear feet are occluded. Axes vertical, lower arc aspect ratio measured from the projected record. Inset centers at 17% and 83% of width; brushed lateral gradient and small contact shadow. |
| Platter | Raised silver rim with a dark bearing layer and soft cast shadow. Vinyl grooves and spindle remain readable. |
| Knobs | Satin brushed silver, shallow rim, dark transport symbols. First-track previous symbol muted; focus/hover adds a green halo. |
| Engraving | “yeung designs” on the lower-right top surface, dark handwritten ink/engraved treatment without a white text halo; ≥16px. |
| LED | Matte dark inset, green status/title plus waveform, no silver border. Screen width permits readable copy; complete titles wrap without duplicate text. |
| Record stacks | Reserved space outside chassis; never overlap the player. |
| Menu island | Borderless frosted surface, four balanced items. Artwork remains centered with consistent labels below. |
| Record artwork | Per-track orbital/geometric patterns, thin rings and ticks, spindle clear; five dark palette families. |

## Hover, focus and contrast

| Instance | Behavior |
| --- | --- |
| Play / pause music | One viewport-positioned handwritten hint next to pointer; focus gets the same renderer. Dark/light color follows the surface under its proposed text placement. |
| Previous / next track | Same renderer, plain text and no badge, shadow, border or blend mode. Disabled controls remain disabled. |
| Surface boundaries | Sample six points across the proposed hint bounds. Choose the higher minimum contrast of black/white; try four nearby pointer-relative positions when a label spans incompatible surfaces. Clamp within viewport. |
| Theme switch | Plain theme-ink label above the control, raised clear of the weather illustration. No background badge. |
| Header / menu / contact links | Retain full theme ink on hover/focus. Hand-drawn underline is the primary text feedback; illustrations may animate. |
| Collection cards | Readable text stays outside the animated cover art, on the themed card surface. Sleeve lift, emerging record and warm outline supply feedback. Chips use neutral outlines and solid colored category dots. |
| Cleanup | Player hint hides on pointer exit, blur, route change, or pointer down outside player controls. Legacy hidden desk hints are not active interface elements. |

Contrast target: at least 4.5:1 for normal-size text. Calculated sRGB base-surface pairs:

| Text / surface | Contrast |
| --- | ---: |
| Black / representative wood #b99968 | 7.82:1 |
| White / vinyl #19201d | 16.59:1 |
| White / five geometric-label bases | 9.89–13.44:1 |
| Day ink #292e31 / sampled warm sky #f5e4cc | 11.02:1 |
| Night ink #edf0f6 / sky #0d172b | 15.66:1 |

These are base-color calculations, not a claim that every pixel of textured or moving artwork was measured. The hint resolver uses known surface regions and their representative/base colors, not screenshot pixel sampling. Antialiasing, artwork lines and exact boundary pixels can vary; continue reviewing unusual placements and new artwork. No full cross-browser or WCAG certification is claimed.

## Motion and audio

| Pattern | Rule |
| --- | --- |
| Initial playback | First record loaded paused; no autoplay. Paused status visible; indicator off. |
| Active playback | Record spins, green lamp pulses, waveform follows energy. Pause stops active-playing state. |
| Track transition | Previous/next swap records, update label art/status and trigger listener excitement. First/last boundaries disable unavailable controls. |
| A-side / B-side | Hand-drawn notes rise from the center of the menu record, with varied timing and slower upward drift. |
| About | Fine sketched earbuds and wires draw over the photo on hover/focus, following the edges. |
| Contact | Straw enters the matcha cup and stirs while the cup stays anchored. |
| Listener | Sits flush to final “n,” holding wine-red heart balloon by contrasting thread; balloon about 2.75× head size. Excited open mouth at playback/track starts. |
| Dancing | Local audio energy and tempo estimates drive lighter movement, raised arms, whole-body motion and occasional jumps; randomized phrases. Section labels are heuristic, not guaranteed semantic song-breakdown detection. |
| Playing notes | Float from spindle during actual playback. |
| Legacy heart | Earlier standalone magnetic-heart implementation is hidden while the balloon listener is active; its old collection/linger rules are historical, not a new promise for the balloon. |
| Reduced motion | Decorative movement is reduced/stopped; controls and state feedback remain available. |
| Touch | Navigation/playback use explicit taps; essential labels and status never depend on hover. |

## Environment and responsive layout

San Francisco is the default location. Time is formatted for the selected zone. Open-Meteo supplies current weather and Fahrenheit temperature with a hand-drawn symbol peeking above the city selector. Data is cached for 15 minutes; failure displays unavailable weather rather than inventing conditions. Day, sunset/sunrise and night retain theme-sensitive text; small varied stars appear at night.

Desktop utilities share one line. Mobile moves them into the navigation dialog; clock, city and toggle remain on one line. Scene fitting accounts for header, introduction, player and menu; small viewports favor readable content over shrinking text. Record stacks reserve a gap from the body.

Known behavior: manually changing day/night still overrides the timezone-derived sky appearance. Separating sky hue from interface brightness / adding Auto remains a recommendation, not an implemented change.

## Verification and scope

Inspected 1920×1080, 1440×1000 and 390×844 compositions; verified matching menu/timezone computed type, larger header and quieter clock, keyboard-equivalent playback hints in light/night, and dark collection text colors. JavaScript syntax and whitespace checks passed. Pointer placement uses the same code as the focus captures, but this pass does not claim an exhaustive sweep across every pointer coordinate, song frame or browser.

Implementation: `dist/about-preview.css`, `dist/player-refinement.js`, `dist/music-sequence.js`, `dist/frame-layout.js`, `dist/listener-preview.js`, `dist/weather-preview.js`, and existing collection/layout styles. Search `[design-preview:responsive-readable-type]`, `[design-preview:feet-perspective]`, and `[design-preview:explicit-hover-contrast]` for this refinement.
