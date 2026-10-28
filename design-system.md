## Preserved checkpoint: records/case studies upfront — October 28, 2026

Julie requested preserving the complete current local version and pushing it to GitHub before exploring a quieter home page. **This is the version with records/case studies upfront on the landing page.** The four sleeves remain directly visible above the record player; selecting one opens a preview and then an on-site case study.

Julie noted that the upfront records feel distracting and is considering showing them only inside the collection. That alternative is not implemented in this checkpoint. This checkpoint authorizes GitHub preservation, not a new public-site deployment.

The snapshot includes the approved soft vector y. logo (full name on home, symbol only inside), sprout heart, compact rounded desktop menu island, responsive attached LED and floating skip controls without a progress bar, and sticky case-study section titles. Expanded sleeves carry the case name and impact at top left, with unfilled outlined chips below and a rounded View Record action aligned right. These current forms supersede the earlier stretched/taped-note and numbered-section proposals. Case-study artwork shares shelf colors and geometry and appears below intro chips.

The `.local-previews/` folder preserves comparison assets and earlier explorations for context; those alternatives are not the active site. Source comments marked `[design-checkpoint:records-upfront]` identify the preserved composition. See [checkpoint screenshot](references/records-upfront-checkpoint.png).

## Approved LED and skip controls — October 28, 2026, 4:06 AM

Julie approved the current LED appearance, size and spacing for preservation in text and visual documentation. This supersedes older fixed 114px / half-scale LED descriptions below. This approval does not authorize a new deployment or approve other pending components.

- LED width is **31.2% of scene width**, exactly **60% of the player's 52% width**. Height is `clamp(32px, 9.5% of scene width, 44px)`; corner radius 6px. Center at 50% of scene width. Top is `84.6667% of scene height - 0.364 × LED height`, overlapping the player's front edge.
- Preserve recessed dark green-black glass, subtle pixel texture and inset shadow. Readout uses DM Mono, at least 16px, 22px line height, bright green. Padding: 3px vertically, 7px left, 24px right. Long titles scroll within the display. Status symbol occupies 16px at right, vertically centered. **No progress bar.**
- Previous is left, next is right. Circular visuals are `min(9.5% of scene width,44px)` with a gap of `min(1.73% of scene width,8px)` from the panel. Dark circles #0b2118; available icons #b3ffba; disabled icons #76a780 at full opacity. Invisible tap areas remain 44×44px. Icons scale to `min(4.32% of scene width,20px)`.
- The LED is read-only; the record table is the sole play/pause control. Skip buttons do not toggle play/pause. Keep all controls vertically centered together.
- Shared page spacing stays tied to the fitted scene: 6% between landing groups, half that for internal navigation spacing. Preserve geometry rather than applying breakpoint-specific offsets.
- Explicit constraint: below a roughly 337px scene width, the 32px LED height floor takes priority over exact height scaling to retain readable 16px text. Skip visuals continue scaling; tap areas do not shrink. Allow vertical page scrolling when readable content cannot fit.

Measured empty-state light-theme preview: 390×844 viewport → 342px scene, 106.70×32.48px LED, 32.48px circles; 1440×960 → 461px scene, 143.83×43.79px LED, 43.79px circles; 320×568 → 272px scene, 84.86×32px LED, 25.84px circles. All retained 44px targets and had no horizontal overflow. These captures are not a full all-theme/all-state regression test.

Authority: `dist/responsive-scene.css` (appearance and dimensions), `dist/frame-layout.css` (attachment and shared spacing), `dist/music-sequence.js` (behavior). See [approved visual references](references/visual-components.md).

## Approved responsive typography — October 28, 2026, 3:27 AM

Julie approved the responsive text scaling for publication. At 1920 CSS px wide: the logo is 56px, brand name 36px, header links 32px, greeting 32px and role line 32px. Sizes taper responsively: brand 18–36px (16px phone override), mark 28–56px, links/greeting/role 16–32px. The greeting window scales with its text (15em), and larger readable rows participate in the existing layout budget.

Fixed text declarations below 16px in active site styles were raised to 16px; headings retain their larger scale. This is a text-only release. The proposed LED proportions/controls, table perspective and gallery styling remain local, pending approval; the earlier approved half-scale decorative LED remains on production until its replacement is approved.

[Approved typography screenshot](references/responsive-type-approved.png): light theme, 1920×1080. Approval covers typography only; the unapproved player/gallery experiments visible in this local capture are not released by this decision.

## Approved proportional landing groups and front-edge LED — October 28, 2026

Julie approved the spacing and LED preview at 2:55 AM and authorized documentation, GitHub and public publication. This contract supersedes earlier separate LED-row and fixed-gap descriptions below.

- **Four desktop groups:** (1) greeting, headline, vines and role; (2) shelf, sleeves and reserved annotation; (3) proportional table/player/discs with attached LED; (4) object navigation plus timezone/appearance controls. Mobile retains groups 1–3 and moves navigation/settings into the hamburger.
- **Shared rhythm:** every gap between groups is 6% of the fitted scene width. Desktop has three equal gaps; mobile has two. The navigation group's internal gap is half that amount. Reserve each group's measured height; never use an offset to compensate for overlap.
- **Scene:** retain the 2:1 table, centered 52%-width player, 22%-width side discs and sleeves at 18.9% of scene width. Fit the common width to remaining height and available width, capped at 760px. The 233px minimum preserves 44px sleeve targets; when fixed content cannot fit, allow vertical scrolling.
- **LED:** the existing 228px housing is displayed at 50% scale (114px rendered width), centered horizontally on the player's front edge. Its top starts 16px above the player bounds' bottom; it overlaps the edge rather than occupying a separate row below the table. Preserve dark recessed glass, green readout and matching transport symbol. This approved half-size treatment makes the display text smaller; it is not a standalone tap target—the player remains the control.
- **Authority:** `dist/frame-layout.css` owns group spacing and LED placement; `dist/frame-layout.js` measures the frame and groups navigation; `dist/responsive-scene.css` owns scene proportions. Typography and navigation targets remain independent of artwork scaling.

Verified local preview: 1440×900 desktop, 390×844 phone and 320×568 narrow phone fit with no page overflow; desktop gaps measured 22.195px and phone gaps 20.516px. At 844×390, content needs 707px height: scrolling is the explicit readability/target-size tradeoff. These measurements cover the reviewed empty-state layout, not a new all-theme/all-state test matrix.

See [approved visual references](references/visual-components.md). Separate taped-note gallery and playback experiments remain unapproved local work and are excluded from this release.

## Approved wooden tabletop — October 28, 2026

Julie approved the local rounded-table preview and authorized publication plus documentation updates. The warm oak table retains its shallow tapered silhouette (3% inset at the top corners), 2:1 scene footprint, existing grain, warm layered wood colors, and centered record player. All four table corners now use the same shared **12px corner-radius value** as the player deck, rather than a sharp polygon that clips the rounding away. The corner contour recomputes when the scene resizes, preserving the taper and fixed CSS-pixel rounding without stretching the scene.

Geometry and shared radius: `dist/responsive-scene.css`; responsive corner contour: `roundTableCorners()` in `dist/frame-layout.js`. The retained material layers come from `dist/iteration.css` and `dist/assets/oak-grain.svg`, with earlier base styles in `dist/record-cabinet.css` and `dist/oak-scene.css`. This update changes the corner treatment only; playback, layout proportions, text and LED behavior remain as reviewed.

Visual evidence: [approved local preview capture](references/rounded-table-preview.png), retained in the [visual component library](references/visual-components.md). The capture is a small component crop from the reviewed implementation, not the original supplied reference or a full responsive test matrix.

Future changes follow the **preview → explicit approval → documentation → push/publication** workflow in [AGENTS.md](AGENTS.md) and [design-rules.md](design-rules.md).

## Current frame and scrolling contract — October 28, 2026

This contract supersedes earlier fixed-width, scrolling-navigation and mobile side-menu rules below.

- Reserve header, readable headline/role, annotation, LED, navigation and timezone rows first. Allocate the remaining height to one shared scene width, capped at 760px and available width. The 2:1 table, 52% player, 22% discs and 18.9% sleeves retain their proportions. A 233px scene floor preserves 44px sleeve targets. Never crop or distort objects to conceal a height conflict.
- Desktop dock artwork adapts together between 72–112px based on width and height; labels have their own space. Text and control hit areas do not scale with the scene. At widths up to 600px, navigation, social links, timezone and appearance controls live in the hamburger.
- Target a complete landing frame at ordinary phone/tablet/desktop sizes. When the fixed readable rows plus minimum artwork exceed the viewport (short landscape, very narrow phones, enlarged text), permit vertical reachability and flag `data-fit="scroll-required"`; do not hide content. A single-window guarantee at every possible size is incompatible with minimum targets and enlarged text.
- **Scroll stability:** wheel, swipe and PageDown are native scrolling, never implicit route changes. Scrolling must not reveal a sidebar, change content width, shift the landing page right, or alter its alignment. Page changes require an explicit navigation action. Hidden routes must remain hidden despite display rules.
- **Mobile section progress:** no side menu or horizontal section-menu strip. In a long case study, each section owns a compact sequential number, sticky at the top of the viewport and bounded by that section. As the next section arrives, its number replaces the previous one naturally. The number never consumes a side column or moves the body copy. Desktop retains the case-study section menu and matching active heading color.
- **Workshop annotation:** “case studies” must follow the curve of the downward hand-drawn arrow at every screen size, with the lettering’s baseline following the arc and a consistent gap above the stroke. Do not leave the words on a straight horizontal baseline while the line curves. This is an explicitly requested rule (October 28); the current straight-text implementation has not yet been updated. The arrow is aimed toward the shelf’s top-right area. Reserve a 56px annotation row and 16px of separation to the cover row (8px margin + 8px gap). Keep the annotation separate from cover hit areas; do not rotate or translate it into a sleeve. These are portfolio-specific clear-space values, not Apple-prescribed annotation margins.
- **Vines:** use open alternating arcs around the letters, with visible SVG/mask overflow. Reserve 16px above and 12px below the headline for botanical details; the final stem stays connected to the last n. Hand-drawn details should feel crafted and in progress while the layout remains stable.
- **Apple reference:** [Apple’s UI design guidance](https://developer.apple.com/design/tips/) recommends 44×44pt touch controls, non-overlapping text and preserved image aspect ratios. This web design uses 44×44 CSS px targets and explicit component clear space; point and CSS-pixel units are not presented as interchangeable native-platform measurements.
- Ownership: `frame-layout.css/js` owns the measured frame budget and spacing; `responsive-scene.css` owns internal proportions; `page-layout.css` owns route layout; case-study files own section progress. Edit these authorities rather than adding competing overrides.

### Verification of the current update

Measured landing frame fits at 390×844, 768×1024, 1280×800 and 1440×900. At 320×568 the page is 589px high; at 844×390 it is 756px high. These are explicit minimum-target/readability conflicts. A 29-step width sweep from 320–1440px at 900px height retained the 2:1 scene without horizontal overflow. Enlarged 200% text at 489×844 required 944px page height, with no horizontal overflow. Mobile case-study scrolling kept main x=0, hid the sidebar and pinned the current number at y=0. Screenshots include both themes and empty/playing/expanded states; not every theme/state was recaptured at every size in this update. See [current captures and measurements](references/viewport-fit-qa/index.html); older comprehensive captures below predate these changes.

## Single proportional record scene — October 28, 2026

This is the current sizing contract. It supersedes the measured-offset centering and older fixed-height rules below. `responsive-scene.css` owns artwork geometry; `frame-layout.css` owns page rows and spacing; `frame-layout.js` allocates the shared width after measuring fixed rows. Do not add device-specific object coordinates.

| Element | Proportional sizing / placement | Independent readability / interaction rule |
| --- | --- | --- |
| Overall scene | Width min(760px, available content width); 2:1 aspect ratio at every viewport | Use remaining height as well as width; below the minimum target floor, allow scrolling |
| Tabletop | Same 100% width and height as the scene; shallow trapezoid with 3% top-edge inset | Center is the scene center; no measured or arbitrary vertical translation |
| Player | 52% of scene width, 3:2 bounds, center at 50% / 50% | Actual hit area shares those exact coordinates; at least 44×44px |
| Platter, tonearm and deck details | Existing local percentages inside the player; move and scale as one unit | Playback, queued transfer and pause state remain authoritative |
| Side records | 22% of scene width, square; left/right inset 2%, center y=50% | At least 44×44px; actual queue count and track color are preserved |
| Shelf | 90% of the shared scene width | Separate normal-flow row after role; annotation occupies its own row |
| Sleeve | 21% of shelf width = 18.9% of scene width, square | At least 44×44px; no first-tap interception |
| Sleeve artwork | Circular art 80% of its artwork square; center label remains part of the same artwork | Preserve aspect ratio; no object-fit cropping |
| LED | Approved recessed housing, width min(available, max(228px, 14.25rem)); height grows with text | Separate row below tabletop: 1rem status, 1.25rem song title, minimum 3.375rem housing height. Explicit tradeoff: this row is not proportionally shrunk with artwork |
| Expanded card | Width min(540px, 80vw); bounded by available dialog height | Normal-flow title, impact, artwork, chips and action. Card scrolls vertically, controls remain outside it |
| Expanded artwork | Square width min(100%, 280px), circular art at 80% | Maintains aspect ratio and scrolls with the card instead of being clipped by an overlap |
| Mobile chips | Horizontal flex-wrap directly below impact; 0.4rem gaps, compact 0.2rem padding | Text stays 1rem minimum. More rows at narrow widths / 200% text are intentional |
| Main headline / role | Existing DM Sans hierarchy: headline 1.75–3rem desktop / 1.5625–2.125rem phone; role 1rem | Text wraps with enlargement, independent of artwork size |
| Navigation objects | Shared clamp(72px, 7vw, 112px) desktop artwork; own normal-flow section | Controls at least 44px; phone navigation folds into hamburger |
| Section spacing | 0.25rem frame gaps and scene clearance; annotation and vine clear space are separately reserved | Content determines row height. No offsets used to repair overlap |

Validation and captures: [responsive comparison gallery](references/shared-scene-qa/index.html). Tested 320×568, 390×844, 768×1024, 1440×900 and 844×390, both themes and empty/playing/expanded states; 200% text on phone. A 72-step width sweep (320–1440px and back) and 22-step height sweep (1024–352px) retained a 2:1 scene and centered player. Normal minimum sleeve target measured about 51px. Some pages require vertical scrolling, particularly short landscape and enlarged text. This is the documented tradeoff, not a claim that every screen can contain all content at once.

## Current centering and constrained-height rule — October 28, 2026

- Layout ownership is in frame-layout.css/js. Headline and role occupy the first row; the shelf gets its actual sleeve height; the visible player/table/LED assembly is centered in the row between shelf and navigation. Shared spacing values: frame gap 16px desktop / 12px phone, minimum scene clearance 28px / 24px.
- Scene width responds to available width (maximum 760px). Height must never silently reduce that width. Preserve existing sleeve, player, tabletop and LED geometry, colors, typography and playback. When the content requires more height, allow vertical scrolling and report the conflict; the former one-screen rule is subordinate to these requirements.
- Keep a single-column reading order at short landscape heights too. Remove the competing short-height two-column layout. Keep shelf annotation clear of the role line.
- Vine reveal mask uses explicit generous bounds; controlled curves remain complete above and below the letters, and the final stem meets the final n. No text styling changes are required for this repair.

## Visual evidence accompanies component rules — October 28, 2026

Open the [visual component reference library](references/visual-components.md) before changing a component. It contains durable screenshots, the current logo asset, scoped preservation rules, known mobile regressions and explicit evidence gaps. Text alone is not a sufficient visual specification. Capture matching before/after views and motion frames for affected components; do not treat an implementation screenshot as user approval.

## Current responsive frame and native case studies — October 28, 2026

- Landing page fits the available viewport: reserve header, text and footer space, then size and center the whole scene. Scale complete graphics proportionally; never crop a graphic to conceal overflow. Text remains at least 16px and primary touch targets at least 44px. Extremely constrained accessibility/zoom views must remain reachable rather than silently clipped.
- Mobile uses a top-right hamburger for home, collection, about, contact, LinkedIn and résumé. Hide the bottom dock and desktop social links on phone widths. The modal menu supports keyboard focus, Escape and direct first-tap actions.
- The headline vine draws left to right behind the words, followed by a sprout at the final n. Reduced motion shows the completed drawing immediately.
- Native case studies preserve portfolio typography, cream paper, restrained accent colors and rounded chips. Desktop has a persistent left section menu; mobile has section-owned sticky numbers. The active menu item and section heading share the record’s accent color, with aria-current for accessibility.
- Case studies scroll intentionally; the no-scroll requirement applies to the landing composition. Include only sections supported by source material, not fabricated research, tests, metrics or reflections. Store source provenance below. All shelf and collection entry points stay on this website.
- Case-study sources: existing CAPI Notion page 2a55db5f5e7e80fca480cdc137fe6a0b and ConnectMyHealth page 649b8aee46924d63a12dc8f0aa4ecf7a, read October 28. Supplied local project images remain the visual evidence. Screenshot reference supplies structure only, not its branding, text or reported outcomes.

## Current typography, LED and case-study browsing — October 28, 2026

These decisions supersede the earlier pixel/dot typography and 1.1-second cover reveal.

- **Approved LED housing:** retain the recessed dark green/black glass, subtle dot-grid surface, rounded 10px screen corners, thin muted metal rim, 6–8px internal padding and 54–64px height. Keep it as an independent scene element, clear of the platter. Do not redesign this physical component during typography changes.
- **LED content:** always show the selected song title, including when paused; “load record” before loading, with READY status. Solid pale-green monospace text and matching solid green play/pause icons. Long song names wrap continuously via the existing horizontal marquee; no pixel masking on letters.
- **Page typography:** restore solid text. Both headline lines use DM Sans 600 at the same size and line height, with coral emphasis retained for “meaningful connection.” Role stays solid DM Sans. Greeting scrolls slowly in a centered, fixed-width window, with a duplicated ribbon for seamless wrap; reduced motion stops it.
- **Spacing:** allocate the viewport between header, headline, scene and controls; center the complete scene inside its remaining row. Keep the role in normal flow. Shelf annotation is handwritten “case studies” with a curved hand-drawn arrow. Do not position sleeves on top of the role.
- **Track affordances:** black track arrows and their labels appear only on hover or keyboard focus. Touch activation still works immediately with accessible names.
- **Expanded records:** wait at least 2 seconds of sustained mouse hover before opening. First click/tap opens the browsable record gallery immediately; this is an action, not a consumed preview tap. Show neighboring records where available. Support horizontal scrolling/swiping, previous/next controls, keyboard arrows and Escape/close.
- **Case-study cards:** prefix titles with “Case Study:”. Impact statement uses solid DM Sans, regular weight, 18px (16px on small screens), no handwriting, shadow, halo or box. Keep chips wrapped inside the frame.
- **Navigation:** clicking an expanded card scales it up slightly and fades it out over 420ms before navigating to its case-study page. Reduced motion navigates directly. All four records open native pages under case-studies/. CAPI and ConnectMyHealth use content from the existing Notion write-ups. Titanic’s End remains a documented overview; Portfolio Refresh describes the ongoing build without invented outcomes.

## Historical brand mark and digital lettering (pixel treatment superseded) — October 28, 2026
- Favicon uses the header’s circular “y.” identity with fine concentric record rings, replacing the unrelated square “j.” tile.
- Digital greeting, role, clock and LED titles share a 2.4px dot pitch with clear gaps between dots. LED icons use the same treatment at 3.5px pitch. Preserve minimum type sizes and inspect both themes; do not blur the dots with text shadows.

## Current interaction contract — October 28, 2026

The current decisions above override historical rows below. Check the latest contract before implementation and during preview. Product goals remain in product-intent.md.

| Component | Required behavior / preview check |
| --- | --- |
| Player and loaded record | One click/tap anywhere on the deck loads and plays when empty, pauses when playing, and resumes when paused. Keyboard Enter/Space does the same. No first-tap interception for music. No autoplay. |
| Side stacks | One click/tap changes track with the existing physical transfer animation. Only “previous track” / “next track” appears beneath the curved arrow on hover/focus. |
| Shelf sleeves | Details expand after 2 seconds of sustained mouse hover. First tap opens the gallery; tapping the expanded card opens the native case study. |
| Expanded sleeve | Same saturated circular artwork as the small sleeve: circle diameter 80% of square. Rounded jacket, separate vinyl visibly sliding and rocking at right. Title/impact above, three chip-category groups below, all text at least 16px. |
| View Record | Handwritten accent-colored link with the same fine squiggly underline as header links; no button border. |
| Timezone | Clock hidden until opt-in; no explanatory fallback paragraph. Denial leaves the selector available. Time-based lighting starts only after selection. |
| Motion and input | Check empty, playing, paused, switching; mouse, keyboard and phone widths. Reduced motion suppresses looping decoration. |

- Keep “meaningful connection” immediately below “i design for,” followed by the role. The scene follows the complete headline group. Reserve space below the table for short hover labels, with no headline or menu overlap.
- One deck overlay owns pointer/keyboard playback; decorative player layers cannot intercept taps. No inherited touch-preview interception on the player. Track transfer animation totals about 760ms; preload the next track only after opt-in playback.
- Side records rock in depth toward/away from the viewer. The timezone selector has a pill border and a subtle keyboard-only focus indicator. The theme toggle wiggles on hover/focus and names the opposite action (“switch to light mode” / “switch to dark mode”).
- Put LED text below the platter on the lower table face; keep its status bright enough to read in either theme.

- Grid extends to every viewport edge, including behind the header. Larger dotted sketches use irregular placement and varied forms. The clock uses a readable dotted digital treatment. Music-record colors cycle blue, green, purple, red; each visible neighbor follows its actual track color. Center titles use a clear sans-serif and truncate instead of breaking into fragments; the full title remains on the LED.

- Player hover hint follows the cursor with a 12px horizontal / 14px vertical offset and disappears on exit. Keyboard hint remains anchored. Expanded heading has no box; chip groups wrap within the frame rather than clipping. Allow sleeve height to grow when needed for readable chips. Greeting and role line share the digital dotted text treatment.

Before publication: verify direct record clicks, no extra timezone prose, matching sleeve artwork proportions, CTA underline, phone overflow and readable chips. Record what was actually checked, not assumed.

## Current iteration checklist — October 27, 2026

This section is the running source of truth; older sections below are historical when they conflict.

- Queue starts unloaded with all ten songs stacked on the left and no right stack. First play loads from the left; each change deposits the current disc on the other side. When the source empties, load directly from the opposite side, starting with the oldest deposited song. One visible layer represents one track. Returning home resets the queue.
- Tonearm toggles play/pause; left/right tabletop discs with directional arrows select previous/next song. These controls are separate objects, use the shared handwritten prompt and support keyboard/touch.
- Uploaded local audio only; start silent, explicit play/pause. Never insert an external player or change page geometry during playback.
- Disc change: pause and decelerate, lift/park arm, lift disc and slide right, bring replacement from left, settle, then resume and lower arm. Reduced motion skips travel.
- Hovering anywhere over the player activates record and tonearm motion while stopped; playback and disc-change physics take priority. Song titles appear on the vinyl and an inset LED display without changing layout.
- Table sides are solid, with no fade. The platter sits slightly higher on the deck.
- Gray background drawings use fine dotted strokes; the grid remains solid.
- Sleeves lift forward on hover/focus or first touch; project name and intended benefit are printed on the enlarged square cover. A click or second touch opens the existing case-study destination. No detached tooltip below sleeves. Do not claim measured outcomes without evidence.
- The scene uses a 2:1 coordinate system: player 52% wide, side discs 22%, table 100%. Player and disc proportions stay fixed; mobile adds tabletop height and lowers the LED to preserve readable type and avoid overlap.
- LED status reflects confirmed audio state: READY before loading, NOW PLAYING with a play symbol during playback, PAUSED with a pause symbol when stopped. Only the playing status gently fades; overflowing titles use two identical copies for a continuous leftward wrap. Reduced motion disables the pulse and scrolling.
- Shelf interaction first exposes and wiggles the inner vinyl for 1.1 seconds, then fades/expands the cover details. Expanded covers retain the original artwork, with a separate vinyl peeking and wiggling from the sleeve’s right edge, plus a View Record CTA.
- LED uses recessed dark glass and green dot-matrix lettering: smaller uppercase NOW PLAYING above a larger song title. All rendered text must remain at least 16px, including hardware text and enlarged-cover chips. This supersedes the decorative-text exception. The mobile LED sits lower with more tabletop clearance; expanded covers use viewport-bounded readable layouts rather than scaled text.
- Contact note and its annotation read “contact me”.
- Table has a visible front edge, coherent perspective and contact shadows. All objects retain their proportions at every breakpoint.
- Text-to-object gaps use the same spacing token above the sleeves and below the subtitle.
- Sleeves have separate paper jackets and inner vinyl, with focus/touch equivalents for hover.
- Polaroid tape stays anchored while the photo sways from its top edge; reduced motion disables sway.
- Every hover annotation uses locally hosted **Caveat 500** (Portfolio Hand), 22px, with the same thin handdrawn underline, transparent background, no border and no box shadow. The yellow note uses the same face without an underline. Never render duplicate prompts.
- Historical touch pattern (superseded): first-tap preview is removed; all action links and music controls now activate on the first tap. Controls retain accessible names when labels are hidden.

## Expanded-cover layout — supplied sketch implemented

EXPANDED-VINYL.jpg supplied October 27 establishes the composition: case-study name and impact statement at top left, central vinyl artwork, chips at bottom right. Use rounded corners, larger square covers and larger type. Chips belong at the bottom right; do not print category descriptors such as “industry”, “skillsets” or “type of app”. The inner vinyl gently wiggles in and out on hover/focus/touch preview. LED always stays behind the loaded disc.

| Case-study title | Industry chips | Skill chips | App chips |
| --- | --- | --- | --- |
| Titanic's End App | Consumer Social; Community Engagement | Design System; AI-Assisted Product Design | Mobile; Desktop |
| CAPI | Consumer Social Media | Product Design; Design Leadership; Stakeholder Management | Mobile |
| Design Portfolio Refresh | Consumer Web | Product Design; AI-Assisted Product Development | Mobile and Desktop Web |
| ConnectMyHealth | Consumer Healthcare | Product Design; User Research; Stakeholder Management | Mobile |

These are user-supplied labels, not evidence of measured project outcomes. Design Portfolio Refresh has no supplied case-study destination yet.

# portfolio design system

> current direction — return to the light off-white grid and centered interactive headphones. the realistic room, wall lighting, and glass-heavy interface are archived explorations, not requirements for the active design. preserve readable typography, consistent spacing and accessible controls. Cindy Ly remains the primary reference for restraint, personal interaction and compact navigation.

working v1 · october 20, 2026

reusable patterns for the listening-room portfolio. design-rules.md defines the creative direction and quality requirements; this document records the components and values used to implement them. these patterns apply to the active listening-room study; archived concepts remain unchanged.

## material and color tokens

| token | day | night |
| --- | --- | --- |
| glass surface | warm ivory, rgba(250, 246, 235, .72) | navy, rgba(17, 29, 45, .76) |
| hover surface | rgba(255, 251, 242, .84) | rgba(25, 43, 64, .86) |
| glass border | white at 72% opacity | white at 28% opacity |
| primary text | #302d26 | #f5efdf |
| secondary text on main surfaces | #625b50 | #c1cad4 |
| focus outline | #254e80 | #b8ddff |
| solid fallback | #f4f0e7 | #182536 |

shared glass treatment: 20px backdrop blur, 115% saturation, 1px translucent border, soft outer shadow, and a fine inner highlight. the background remains visible through the tinted material. opacity is intentional: plain clear glass is not sufficient for reliable legibility over photography.

## typography

- headline: Instrument Serif, with italic emphasis on “meaningful connection”; responsive size, approximately 32–60px depending on width and height, line-height 1.08.
- interface and body: DM Sans. primary controls are at least 14px; project body copy is 16px with relaxed line spacing.
- secondary metadata: DM Mono or DM Sans, at least 12px. tiny decorative details must not carry essential information.
- use lowercase interface language, short labels, and the headline “i design for meaningful connection” with “product designer, systems thinker” below.

## spacing and shape

use a 4px base with 8, 12, 16, 24, 32, 48, and 64px steps. equivalent controls share padding and label alignment. minimum interactive target is 44 × 44px. keep related content together and leave clear gaps between separate actions.

- headline panel: 16px corner radius; 20px vertical and 32px horizontal padding on desktop, 16px on mobile.
- navigation and utility buttons: 24px corner radius, generally 10–12px vertical and 16px horizontal padding.
- playback card: 16px corner radius; 12px vertical and 24px horizontal padding.
- hardware control on the turntable: 8px corner radius and a warm glass tint in both modes, reflecting the pale physical deck beneath it.

## component patterns

| component | appearance and behavior |
| --- | --- |
| headline panel | frosted glass with readable headline and role; contains no extra introductory paragraph |
| object navigation | dimensional object plus labeled glass pill; the full link activates work, profile, or contact |
| music button | glass pill, clear playback state, opens optional player; never starts sound on page load |
| appearance button | glass pill toggles day/night; initial appearance follows device-local time unless manually overridden |
| playback information | glass card with status and actual track title when available; stable fallback when metadata is unavailable |
| résumé and contact actions | glass button-like links with the same target size and focus treatment |
| close buttons | glass round controls with explicit accessible names and at least 44px targets |
| turntable | level dimensional object with balanced platter and controls; movement follows confirmed playback |

Spotify’s embedded controls retain Spotify’s own appearance; the surrounding site controls use this system. ordinary inline links and entire project cards are not converted into glass buttons.

## interaction states

- default: visible glass tint, fine border, readable text.
- hover: slightly stronger tint while preserving the material. avoid label movement or changing dimensions.
- keyboard focus: 3px visible outline, 4px offset and an outer backing ring so focus remains visible over the room.
- active state: communicate through a label or icon as well as color. do not imply playback before it is confirmed.
- reduced motion: suppress decorative movement; retain state feedback.
- reduced transparency or unsupported blur: use the solid palette fallback.

## layout and responsive behavior

room photography fills the hero edge to edge using cover scaling, with no desktop maximum-width cap. cropping changes with viewport proportions. keep content over the room on mobile rather than separating it into a background strip.

headline, player, navigation and utility controls flow with consistent gaps. reduce decorative object detail on narrow screens while preserving labeled destinations. allow vertical scrolling on short screens instead of shrinking controls or overlapping content. keep day/night scene framing aligned.

## quality checks

review contrast against the actual composited image in both modes; opaque palette contrast calculations alone do not validate transparent glass. target 4.5:1 for ordinary text and 3:1 for large text. adjust tint or placement if necessary.

check phone, tablet, laptop and wide-screen layouts for overlap, clipping, horizontal overflow, readable labels, focus visibility, and comfortable targets. verify tap and keyboard access. the current implementation is a prototype, not a completed accessibility certification.

## implementation

active style tokens and components: dist/listening-room/craft.css. room imagery and scene styling: dist/listening-room/room.css. behavior: dist/listening-room/app.js. change token values centrally rather than adding component-specific glass variations, except the documented physical turntable control.

## headphone music control and icon restraint

The headphones are the music entry point. Reveal a short action prompt on hover and keyboard focus; keep it visible on touch devices. Clicking or pressing Enter activates the control; hover alone never starts audio. When playing, offer “turn off music.” Keep the standalone music button removed. Avoid decorative directional arrows on buttons and links. Spotify remains the playback provider: request play after an explicit click and provide an inline player fallback when required; shuffled playback is not implemented.

## current vinyl corner and dock

Replace headphones with a compact realistic walnut listening corner on the light grid page, informed primarily by Julie’s middle reference: sculptural cutout cabinet with stored records, a lush plant, and fairy lights. Use visitor-local day/night lighting with manual override. Hover or focus gently wiggles the disc; click controls music, and reduced motion suppresses the wiggle. The bottom dock uses an original record-sleeve icon for “browse collection,” a monogram profile card for “about me,” and a letter for “say hello.” No invented personal portrait. Headphone studies remain archived.

## object scene and marker interaction

confirmed: the centerpiece is a collection of separate objects in space, not a single room photograph. cabinet, plant with fairy lights, two sofas, soft rug, arched window, and record player each have their own positioned element. the arched window sits behind the cabinet. the current prototype uses transparent photographic cutouts for furniture and an independent HTML/CSS player; this is not a navigable 3D model. shared sprite storage does not couple object position or animation.

button and action-link hover/focus styling: a fine hand-drawn marker underline reveals left to right in about 300ms. use a gently irregular 1.7px stroke in the label color, not a thick highlighter stripe. keep label positions, padding and target dimensions unchanged. apply to keyboard focus as well as hover; reduced motion reveals it immediately. icon-only close controls retain their explicit accessible name. do not reintroduce decorative arrows.

## solo player interaction and lively type

current centerpiece: only the pale-wood record player, with the room, table, sofas, plant and window removed from the active composition. “meaningful connection” uses lively warm coral and a rounded, medium-bold sans-serif treatment. the bottom object dock has no opaque container or filled button backgrounds.

retain the approved thin, playful squiggly marker underline on action hover and keyboard focus. it draws left to right, preserves padding and dimensions, and appears instantly for reduced motion.

while music is stopped, hovering the disc (not the entire base) reveals “turn on music” beside the pointer, with a 20px offset and viewport-aware placement. the disc wiggles continuously until hover ends, with a soft warm glow. keyboard focus offers the same action and touch keeps a stationary prompt. hover never starts music.

confirmed playback moves the tonearm onto the outer record groove and eases motor speed toward 33⅓ rpm; a slow warm light pulse surrounds the player. hovering the disc shows “turn off music.” stopping parks the arm and eases rotation down to zero. playback state, not an optimistic click, governs motion. pending playback is labeled “starting music…” and clicking again cancels. reduced motion suppresses rotation, wiggle and pulse.

## landing typography — current implementation, 2026-10-20
The active specifications below supersede earlier exploration values. Source: `dist/refinement.css`. All text stays lowercase except proper source metadata and Mandarin.

| element | family / weight | desktop sizing / line height | small screens (≤600px) | color |
| --- | --- | --- | --- | --- |
| wordmark | DM Sans / 600 (inherited brand) | 18px | 16px | primary ink |
| j mark | Instrument Serif / italic 400 | 22px / 1 | same | primary ink |
| header links | DM Sans / 400 | 15px | 14px | primary ink |
| greeting | DM Sans / 400 | 16px / 1.5 | same | primary ink |
| i design for | DM Sans / 400 | clamp(36px, 4vw, 64px) / 1.12; tracking −.045em | clamp(32px, 9vw, 44px) | primary ink |
| meaningful connection | DM Sans / 600 | clamp(30px, 4.1vw, 64px) / 1.15; tracking −.04em | clamp(29px, 8vw, 40px) | day #bf4c38; night #ffb69b |
| role description | DM Sans / 400 | 16px / 1.5 | 15px / 1.5 | secondary ink |
| music hint | DM Sans / 400 | 14px / 1.4 | same | primary ink |
| bottom navigation | DM Sans / 400 | 14px / 1.4 | 13px / 1.4 | secondary ink; accent when selected |
| local clock/theme | DM Mono / 400 | 12px / 1.6 | 11px / 1.6 | secondary ink |
| finish comparison controls (prototype only) | DM Mono / 400 | 12px / 1.4 | 11px / 1.4 | secondary ink; primary when selected |

### buttons and player states
- Fine hand-drawn squiggle draws left to right on hover and keyboard focus, ~300ms, approximately 1.7px stroke. No text or layout movement. Reduced-motion users see it immediately.
- Labels: **play music** and **pause music**. Hover hints are adjacent to the cursor, offset by 20px and kept inside the viewport. Touch and keyboard users receive an anchored hint.
- Disc hover waits 500ms, then gently wiggles ±3 degrees on a roughly 2.5-second cycle. Leaving the disc stops the hover motion; actual playback overrides it.
- Playback uses independent record and tonearm elements: ease to 33⅓ rpm, arm resting on the outer grooves, warm breathing halo. Pause parks the arm and eases the rotation down. Reduced motion suppresses looping movement.
- Bottom-left power LED glows **green only on confirmed audio playback**. Paused, waiting, ended and error states extinguish it.
- Direct audio supports a supplied track title, artist and artwork. Artwork fills the center label; the j mark is the fallback. No fictitious artwork or playback state.
- Navigation stays in document flow so it cannot overlap headings, clock or enlarged text. Only the active page is rendered visibly. Collection enters from below and sleeves fan out; reduced-motion mode skips that transition.
- Prototype finishes: warm oak, brushed chrome, jade lacquer. Finishes share the same geometry and behavior so they can be compared directly.

### studio identity update
- Header wordmark: **yeung designs**, with a provisional small vinyl-inspired `y.` mark (Instrument Serif italic, 22px).
- Intro above the headline: **i'm julie yeung**, DM Sans 400, 16px/1.5, using exactly the same `--muted` color token as “product designer, systems thinker.” This replaces the earlier Mandarin greeting.
- Music decision confirmed: owned/licensed audio files, no Spotify embed or visitor sign-in. “Looking up” is a candidate; audio file and cover art are still needed.

## oak player + sleeves / one-screen welcome
- Warm oak is the active direction. The centerpiece consists of a separately rendered player, spinning disc, moving tonearm, indicator, and a separate sleeve-stack link. No flattened scene photograph. Curved grain lines, varied wood tones, a bevelled plinth, feet, raised metal platter and contact shadows create depth.
- Preserve the grid, headline hierarchy and three-item bottom menu. The landing composition uses viewport height to size the centerpiece before reducing type; short landscape screens use a two-column hero. Finish comparison controls are hidden.
- Hover anywhere on the player to reveal play/pause music. After 500ms, a slow restrained wobble invites interaction; confirmed playback takes precedence. The record motor, tonearm and green power LED remain driven by actual audio events.
- Hover or keyboard-focus the independently rendered sleeves to jiggle the stack and reveal “browse collection (of work).” Clicking opens the work collection. Touch users receive persistent labels. Motion is suppressed under reduced-motion preferences.
- Landing content fits in one screen at checked 320×568, 390×844, 844×390 and 1440×900 sizes. Intentional wheel/swipe navigation advances between home, work, about and contact; longer sections scroll naturally before advancing. Page Up/Down and the existing links offer keyboard alternatives. Only one section is visible at a time.

## active-element layering and generous control spacing
- Treat an active object and every related hint, label, focus ring and action as one foreground group. Raise the containing stacking context, not just a child tooltip. Associated content must never disappear behind another scene object. Apply this on hover and keyboard focus; verify both day and night styling.
- Bounded controls use at least 14px top, 22px horizontal and 22px bottom padding in the scene hints. Keep the fine squiggly underline 10px above the bottom edge and 22px from either side. Allow room between text and underline. Touch targets remain at least 44px.
- Status messages belong in normal document flow, with their own space. Never position them over a headline, role description or navigation. Shrink the scene when needed to preserve the one-screen landing at standard viewport sizes.
- Player and sleeve jiggles start immediately (supersedes the 500ms delay) and use larger, clearly visible movements. Playback overrides idle player jiggle; reduced-motion preferences suppress looping motion.
- Sleeves have square untransformed geometry, with restrained perspective, paper edges and a common tabletop plane. The table, player and each sleeve remain independent rendered elements.
- QA includes inactive, hover, keyboard focus, music-unavailable status, and active-group overlap states on small screens.

## table body and personal desk objects
- The table is a complete wood surface and solid front apron/body. Its body fades to transparent before the headline. It stays in the rearmost scene layer and never becomes an active foreground object.
- Post-it and pen form a separate contact link; the polaroid is a separate about link. Their cursor labels say “say hello” and “about me,” respectively. Labels use a viewport-level overlay, 18px pointer offset, edge clamping, generous padding and the thin underline. Keyboard focus provides the same labels.
- The polaroid currently explicitly says “your photo here”; replace only with Julie’s selected portrait. Existing about-page performance photos were inspected but not assumed to be her portrait.
- Greeting restored to **你好, i'm julie yeung**, with the same muted color as the role description.

## personal desk interactions and section navigation
- The note is a blank stack at rest and stays behind the record player. Hover/focus promotes the accessory group, animates the pen across the paper and reveals “say hello” over 1.35 seconds. Leaving resets the pen and writing; clicking peels the top sheet over 520ms, then opens contact. Reduced motion reveals the writing immediately and navigates without the peel delay.
- The expanded table uses a lighter oak player with independent grain, highlight and edge-shadow layers. Fanned sleeves sit in an organizing stand.
- Polaroid uses Julie’s supplied `Julie-Yeung-Profile-Picture.png`, preserved in full as `assets/julie-profile.png`; CSS crops the visible window to face and shoulders, removing the lower body.
- Other sections have persistent left-side navigation. The current section has the strongest text weight, primary ink and a leading border, with `aria-current="page"`. The landing retains its bottom object menu.

## section shell, wall portrait and contact form
- `dist/page-layout.css` owns the shared section layout. Collection, about and contact share a centred content column beside a fixed left navigation rail. Only home shows the bottom object menu; never append that menu as a grid child of another section.
- Collection sleeve art may tilt slightly; titles and descriptions stay level. About copy has a readable maximum line length. Test every section at desktop and phone sizes after shared navigation changes.
- The stand is removed. The polaroid is taped to the wall in its own row immediately below the greeting, linking to about. It must not overlap the headline. The welcome sizing routine reserves its row before fitting the decorative scene.
- Contact fields: required name, email, subject and message; optional phone. Inputs use visible labels, 16px text and at least 48px height. Submit shows progress, reports errors without clearing text, and clears only on accepted submission. Cancel clears the form and returns home. Form editing is exempt from wheel/swipe section navigation.
- Form delivery: FormSubmit AJAX endpoint for `hello.yeungcreative@gmail.com`, with reply email and dynamic subject. This external provider requires one-time inbox activation after a first submission. Local validation/cancel were checked without transmitting a message; inbox delivery is not yet verified. A direct email link is available as a fallback.

## component scaling, imagery and one-record collection
- Distinguish page typography from lettering printed on an object. Page text uses readable rem/px sizes and controlled breakpoints. Object lettering uses container-relative units (`cqi`) so it scales with the object, not the viewport. Never combine a shrinking object with viewport-sized text.
- Preserve a consistent internal safe area: 12% inset for sleeve lettering or placeholders, proportional photo framing, and 14px/22px/22px padding for interactive hints. Full-bleed case-study imagery is the deliberate exception: zero interior padding, `object-fit: cover`, consistent focal positioning.
- Existing live portfolio imagery was verified on 2026-10-20. CAPI and ConnectMyHealth images are saved as `assets/capi-hero.png` and `assets/healthcare-hero.png`. They cover the complete sleeve face. Titanic’s End is not on the live site and remains explicitly marked as pending artwork. No substitute image is presented as its real hero.
- The polaroid is 150×182px on desktop and 105×127px on phones (2.5× the prior sizes). Tape, caption and framing scale accordingly; welcome layout still fits the viewport.
- Remove the home bottom dock entirely. Existing desk objects navigate; other sections retain the illustrated left menu with the current section emphasized.
- Opening the collection animates a downward transition into one enlarged record. Previous/next controls and keyboard arrows browse one case study at a time; the count announces the current selection. Cover image and accompanying title/description link to the existing case study. Reduced-motion mode skips the transition.
- The pen finishes writing by moving to a resting position outside the note’s right edge, keeping the complete words visible until pointer/focus leaves.

### project chips and secondary collection
Show 2–4 short skill/focus chips per project with 8px gaps and 7px/11px padding; allow natural wrapping and do not truncate labels. Chips describe skills or scope, never fabricate outcomes. Main order: Titanic’s End App → ConnectMyHealth → CAPI AI. Neon Owl is separately labeled strategy/ongoing. Adryft, Spotify Exchange and CST Home appear as larger square records in the explorations gallery.

## october 20 — current iteration rules

- Follow the product intent and design system for every iteration; do not invent facts or requirements not explicitly provided. Latest user decisions supersede historical concept notes.
- Header links: linkedin and résumé. Contact remains available through the post-it and section navigation.
- Landing portrait has no printed caption; preserve accessible name and hover/focus hint. Grid studies are subtle, decorative, noninteractive, and never reduce text readability.
- Section rail is text only, with one continuous light-gray line. Current section is bold and uses the strongest text color.
- Collection presents one active case study with faded, clickable glimpses of its adjacent records; first/last positions only show available neighbors.
- Exploration hero images use contain with consistent padding so logos and artwork remain complete.
- About includes a taped portrait, proportional in height and at least one-third the body-copy column width. On phones it stacks above the text.

## current update — side quests and readable typography
- The secondary section is named **side quests**, including its navigation label.
- All live website text has a minimum font size of 16px at every breakpoint, including navigation, labels, chips, captions, status messages and object lettering. This supersedes earlier smaller typography specifications. Keep larger headings; reflow and adjust spacing rather than shrink text.
- Text embedded in supplied project screenshots is image content, not live website type. It must not be the only source of essential project information.

## laptop, location choice and Spotify — current iteration
- Landing work link is an independent aluminum MacBook Pro-style laptop object. Its screen uses Julie’s supplied CAPI overview unchanged; lid, keyboard, trackpad and edge are separate elements.
- Pen and lettering share the paper’s transformed coordinate system. The nib follows the writing baseline, then parks beyond the text. Pointer exit resets both; reduced motion reveals the completed text immediately.
- Tonearm consists of separate counterweight, circular bearing, narrow tube, cartridge and stylus. Confirmed playback moves the rigid assembly over the record.
- Day/night uses an accessible switch with a persistent state. Time defaults to device local time, without requesting coordinates or inferring a city. The city selector offers major cities; only “use my location” invokes browser permission. Coordinates are processed locally to select the nearest listed city, labeled as approximate, and are neither stored nor sent to a geocoding service. Denial retains local time and manual selection.
- Spotify is temporary, opt-in, loaded only on a music click and displayed inline. No application-created pop-up or new window. Actual Spotify playback events drive the record, arm and LED. Browser/Spotify restrictions may require the embedded play button or allow only previews; do not claim uninterrupted full-track playback or shuffle support.
- Collection jackets retain square geometry, paper highlights and layered board edges. Contained source images preserve the complete work within the square sleeve.

## laptop perspective refinement
The laptop uses a dark graphite chassis, near-upright thin-bezel display, shallow receding keyboard plane, thin front edge and central opening notch. The whole assembly rotates together toward the desk’s perspective; the contact shadow grounds the base. Screen artwork remains Julie’s supplied CAPI image and is independently replaceable.
- Theme switch motion: a 620ms directional slide, wall-contact squash, small rebound and settle in both directions. State updates immediately; animation is decorative, resets on rapid clicks, and is disabled by reduced-motion preference.

## record cabinet — October 27, 2026 (supersedes laptop composition)
- Landing uses an independently rendered warm wooden cabinet, turntable, headphones and one open shelf. The laptop is removed.
- Three square, independently clickable sleeve objects: blue Titanic’s End, green CAPI / First Intelligence, red CentralSquare / ConnectMyHealth. Cream paper and layered circular geometric art follow Julie’s supplied reference. Persistent project labels remain at least 16px; wrap at natural word boundaries rather than shrink.
- A fourth stack acts as one link to other fun stuff. Each sleeve and stack jiggles immediately on hover or keyboard focus; reduced motion disables jiggle. Active objects stay above neighbors.
- Headphones own play/pause input. Confirmed audio state still controls the record rotation, tonearm and green indicator. Spotify limitations remain unchanged.
- Six gray peripheral sketches are decorative, noninteractive and behind all content. Reduce their prominence on small screens.
- Preserve the three balanced bottom navigation objects and all existing contact/about behavior.

## material realism and responsive proportions — October 27
- Avoid toy-like thick outlines, oversized sleeve edges and bright flat furniture fills. Use restrained wood tones, paper grain, thin board edges, recessed shelf shading and contact shadows. Keep physical objects independently animatable.
- Cabinet keeps the same 2.1:1 scene aspect ratio at every breakpoint. Object dimensions, placement, edge thickness and shadows scale with the scene; no mobile-only stretching. Sleeve artwork is square with no flex shrinking and no competing max-height constraint.
- Live labels remain at least 16px and wrap outside the artwork. Never distort an object to make its label fit. Headphones keep the SVG's original proportions. Verify 320px, 390px and desktop layouts.

## floating shelf and larger player — October 27
The latest composition supersedes the cabinet body: retain only the tabletop, double the player width from 34% to 68% of the scene, and place three square featured-record sleeves on a separate shelf above the player. The fixed scene ratio is now 1.6:1 at every viewport. Sleeve names appear only on hover or keyboard focus; touch users tap once to reveal the title and again to open the project. Labels stay above all other objects and never change sleeve geometry. Other fun stuff remains accessible through side quests.

## spacious tabletop and touch disclosure
Remove headphones and return play/pause activation to the record player. Extend the tabletop sideways with faded ends. Keep 24px above and 32px below the scene; put “product designer | AI systems thinker” close to “meaningful connection.” Bottom navigation labels are hidden at rest, revealed on hover/keyboard focus; touch uses first-tap preview, second-tap activation, with dismissal when tapping elsewhere. The timezone selector starts with “select your timezone”; clock, selector and theme control have separate touch targets and generous gaps, wrapping onto two rows on phones rather than squeezing.

## October 27 — consistent LED and sleeve refinement
- LED status indicators use green dot-matrix play/pause symbols matching the screen lettering and glow.
- Hide the clock until a timezone is explicitly chosen. Selected timezone drives gradual clock-based dawn/day/dusk/night colors; manual theme selection overrides this. No automatic location lookup.
- Expanded sleeves carry full-cover artwork beneath readable content, rounded corners, and three chip rows (industry, skills, app type). Preserve 16px minimum text; long rows scroll horizontally on small screens.
- Side controls read “previous track” and “next track.” Vinyl and tonearm invitations are stronger; the empty metal platter catches a gentle highlight. Respect reduced motion.

### Verified responsive checks
October 28: shelf hit targets measured approximately 60px square at 390px viewport and 47px square at 320px; no horizontal page overflow in either check. One-click Titanic overview, bottom collection navigation, and player pause were verified in the browser. Physical iPhone Safari remains unverified. Track hints are positioned 20px below the rendered tabletop edge with no text shadow.
