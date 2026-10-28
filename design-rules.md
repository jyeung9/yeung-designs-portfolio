> Current implementation and interaction decisions: see the **Current interaction contract** at the top of design-system.md. Earlier directions below are historical where they conflict with that contract.

# portfolio design rules

> current direction — return to the light off-white grid and centered interactive headphones. the realistic room, wall lighting, and glass-heavy interface are archived explorations, not requirements for the active design. preserve readable typography, consistent spacing and accessible controls. Cindy Ly remains the primary reference for restraint, personal interaction and compact navigation.

working draft for julie · october 20, 2026

this document defines the visual and interaction rules for the portfolio. product-intent.md covers audience, positioning, and purpose. the current direction is a realistic mid-century modern listening room; earlier headphone and illustrated plant studies remain saved for comparison.

## confirmed direction

**feeling:** immediate delight, awe, warmth, comfort, and an invitation to make yourself at home. visitors should feel welcome and find their way easily. these are goals to validate with people, not outcomes guaranteed by a visual style.

**style:** mid-century modern, clean, organic, realistic, and dimensional. no sketch, cartoon, clay, or flat illustrated treatment. use modern, balanced composition rather than crooked objects or deliberately chaotic placement.

**room:** large visible windows, abundant green plants, warm lighting, cozy furniture and a soft rug. wood and tactile materials should make the room feel inhabitable. preserve enough breathing room for the headline and navigation.

**personality:** music, making things, and community. a vinyl player is the current centerpiece. playful details may include a chess board, a lightbulb-shaped rope LED, fairy lights, and polaroid photos on the wall. these belong to one coherent room rather than competing hero features.

## craftsmanship is non negotiable

confirmed by julie: never sacrifice readability, contrast, consistent spacing or padding for a visual concept. nothing should suggest sloppy craftsmanship.

apply these rules to every iteration:

- use a consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, and 64 pixels. align related elements and use equal padding for equivalent controls.
- keep meaningful interface text readable; use at least 14px for controls and body copy, with 12px reserved for secondary metadata. avoid tiny labels as a visual styling shortcut.
- target at least 4.5:1 contrast for ordinary text and 3:1 for large text. put text on predictable surfaces when photography makes contrast variable. check both day and night.
- give interactive targets at least 44 by 44px of usable space and a clearly visible keyboard focus treatment.
- prevent overlap, clipping, awkward wrapping, uneven alignment, and inconsistent control sizes. preserve breathing room at narrow widths and with enlarged text.
- deliberate asymmetry is acceptable; accidental misalignment is not. room realism and delightful motion never excuse unclear navigation.
- review actual desktop and mobile rendering before calling an iteration complete. record any verification limits; do not claim full accessibility compliance from a visual check alone.

## headline and copy

keep the opening copy minimal:

> i design for meaningful connection
>
> product designer, systems thinker

use lowercase throughout the interface. add only useful navigation labels and controls around the opening. keep work, profile, contact, and résumé discoverable. longer explanations belong in the relevant sections and case studies.

## materials and color

- use natural wood grain, real-looking fabric, soft upholstery, tactile rugs, and varied healthy green foliage.
- keep the daytime interface warm off-white with dark readable text. use navy night sky and darker surroundings at night, while preserving warm interior light.
- the existing lightbulb-shaped rope LED is approved: warm yellow by day, multicolored at night.
- retain the same room composition when switching time of day. nighttime changes the sky, light sources, shadows, and reflections coherently; stars should be visible through the window.

**proposed refinement:** combine pale oak with selective walnut accents inspired by the references. choose one dominant wood tone so the room remains cohesive; do not mix every reference’s palette into a single scene.

## composition and centerpiece

- frame the scene wide enough to show the window and table. avoid a crop that removes the qualities that make the room inviting.
- the vinyl player should look modern, clean, dimensional, and intentionally positioned. use a level presentation with restrained perspective and balanced spacing around the platter, tonearm, and controls.
- the player should invite interaction without covering the headline or navigation.
- while music actually plays, the record spins and the tonearm rests on it; paused or off, the record stops and the arm parks. show the real track title when available.
- music is opt-in. playback limitations must not make the rest of the portfolio unusable.

## navigation through objects

julie wants visitors to explore through objects, inspired by Cindy Ly’s portfolio. keep short visible labels so people do not have to guess what is clickable.

**proposed mapping for review:**

| object | destination or action |
| --- | --- |
| project book or record collection | work |
| personal photo frame | profile |
| letter or postcard | contact |
| vinyl player | music controls |

these mappings are not final. the chess board, fairy lights, and plants can remain atmospheric; every decorative object does not need a feature. use julie’s supplied photos for personal polaroids when available; do not invent personal memories or represent generated people as her friends.

**proposed builder cues:** show actual project artifacts in a book, on a screen, or as pinned work. let visitors open something julie made. establish the builder identity through evidence and useful interactions, not a decorative grid alone.

## responsive behavior

confirmed requirement: the website must be mobile responsive. julie’s message ended at “on different”; the detailed rules below are proposed defaults covering phones, tablets, and desktops.

- compose for different screen widths and heights, including portrait and landscape. reflow the layout rather than shrinking a desktop scene until controls become tiny.
- preserve the headline, role, and clear access to work, profile, contact, and music at every size.
- keep important environmental cues visible: window, greenery, room lighting. keep the room image full-bleed behind the interactive content on every screen size.
- do not rely on hover. tapping and keyboard activation must offer the same essential actions.
- prevent horizontal page overflow, overlapping controls, and text placed over visually busy imagery. keep controls comfortably separated and readable.
- check representative phone, tablet, laptop, and large-desktop layouts, plus text enlargement. choose breakpoints where the composition needs them.

## motion and accessibility

proposed implementation rules:

- use subtle, purposeful movement and a clear hover/focus response. avoid constant bobbing or multiple simultaneous animations competing for attention.
- respect reduced-motion preferences; the music state must remain understandable without a spinning disc.
- provide visible keyboard focus, meaningful button/link names, readable contrast, and sufficiently large touch targets.
- preserve ordinary navigation and readable content if a visual asset or music service fails to load.
- maintain a quick, responsive experience. optimize scene assets and avoid requiring a large 3d download before visitors can access the work.

## reference notes

these user-supplied screenshots guide atmosphere, materials, and composition. they are references, not website assets to reproduce or evidence of julie’s own work. their original creators and reuse permissions have not been provided.

1. **plant listening corner:** layered greenery, simple wooden record stand, tactile white rug, compact personal space. borrow the warmth and material contrast.
2. **immersive greenery:** plants create foreground depth around the music setup. borrow the feeling of being in the space while keeping controls unobstructed.
3. **evening record wall:** layered warm lighting, visible music collection, cozy rug and seating. borrow the personal, collected quality without importing its visual density everywhere.
4. **mid-century console:** clean horizontal storage, warm wood, rounded details, organized records, and breathing room. use this as a strong guide for the balance of order and personality.

local references are stored in references/mid-century-home/ as 01 through 04.

## review one decision at a time

for each iteration, ask:

1. does it feel realistic, warm, and clean?
2. are the headline and next actions obvious without explanation?
3. do the objects reveal julie’s work or personality rather than add clutter?
4. does the composition work on touch, keyboard, and different screen sizes?
5. are day and night equally legible and coherent?

next discussion: decide which objects carry navigation and which remain atmosphere. then refine the room as a whole against these rules. the current prototype uses generated raster backgrounds with interactive dimensional overlays; a fully navigable 3d environment remains a separate implementation decision.

## full screen room and glass

confirmed: the room image must fill the screen at every viewport size, with no inherited maximum-width cap or separate mobile image strip. use cover scaling; cropping is expected when viewport and image proportions differ. the headline panel should be frosted glass, with enough tint and blur for readable text in both lighting modes. content may scroll on short screens rather than overlap or become tiny.

## frosted glass interface

confirmed: all interface buttons and the headline panel use frosted, transparent glass. apply the same material to navigation labels, music and appearance controls, and playback information so the interface feels coherent. retain visible background detail through the surface, with blur and a day/night tint for legibility. use consistent borders, padding, and focus feedback. transparency must not override the craftsmanship rules; use a more opaque fallback when background blur is unsupported or reduced transparency is requested.

reusable values and component patterns are maintained in design-system.md.

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

## component scaling, imagery and one-record collection
- Distinguish page typography from lettering printed on an object. Page text uses readable rem/px sizes and controlled breakpoints. Object lettering uses container-relative units (`cqi`) so it scales with the object, not the viewport. Never combine a shrinking object with viewport-sized text.
- Preserve a consistent internal safe area: 12% inset for sleeve lettering or placeholders, proportional photo framing, and 14px/22px/22px padding for interactive hints. Full-bleed case-study imagery is the deliberate exception: zero interior padding, `object-fit: cover`, consistent focal positioning.
- Existing live portfolio imagery was verified on 2026-10-20. CAPI and ConnectMyHealth images are saved as `assets/capi-hero.png` and `assets/healthcare-hero.png`. They cover the complete sleeve face. Titanic’s End is not on the live site and remains explicitly marked as pending artwork. No substitute image is presented as its real hero.
- The polaroid is 150×182px on desktop and 105×127px on phones (2.5× the prior sizes). Tape, caption and framing scale accordingly; welcome layout still fits the viewport.
- Remove the home bottom dock entirely. Existing desk objects navigate; other sections retain the illustrated left menu with the current section emphasized.
- Opening the collection animates a downward transition into one enlarged record. Previous/next controls and keyboard arrows browse one case study at a time; the count announces the current selection. Cover image and accompanying title/description link to the existing case study. Reduced-motion mode skips the transition.
- The pen finishes writing by moving to a resting position outside the note’s right edge, keeping the complete words visible until pointer/focus leaves.

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
