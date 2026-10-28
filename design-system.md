## Current iteration checklist — October 27, 2026

This section is the running source of truth; older sections below are historical when they conflict.

- Tonearm toggles play/pause; left/right tabletop discs with directional arrows select previous/next song. These controls are separate objects, use the shared handwritten prompt and support keyboard/touch.
- Uploaded local audio only; start silent, explicit play/pause. Never insert an external player or change page geometry during playback.
- Disc change: pause and decelerate, lift/park arm, lift disc and slide right, bring replacement from left, settle, then resume and lower arm. Reduced motion skips travel.
- Hovering anywhere over the player activates record and tonearm motion while stopped; playback and disc-change physics take priority. Song titles appear on the vinyl and an inset LED display without changing layout.
- Table sides are solid, with no fade. The platter sits slightly higher on the deck.
- Gray background drawings use fine dotted strokes; the grid remains solid.
- Sleeves lift forward on hover/focus or first touch; project name and intended benefit are printed on the enlarged square cover. A click or second touch opens the existing case-study destination. No detached tooltip below sleeves. Do not claim measured outcomes without evidence.
- The scene uses one 2:1 coordinate system at all sizes: player 52% wide, side discs 22%, table 100%. Breakpoints change overall available size, never relative object proportions.
- LED uses recessed dark glass and green dot-matrix lettering: smaller uppercase NOW PLAYING above a larger song title. All rendered text must remain at least 16px, including hardware text and enlarged-cover chips. This supersedes the decorative-text exception; the display and cover layouts need sufficient physical space rather than shrinking their text.
- Contact note and its annotation read “contact me”.
- Table has a visible front edge, coherent perspective and contact shadows. All objects retain their proportions at every breakpoint.
- Text-to-object gaps use the same spacing token above the sleeves and below the subtitle.
- Sleeves have separate paper jackets and inner vinyl, with focus/touch equivalents for hover.
- Polaroid tape stays anchored while the photo sways from its top edge; reduced motion disables sway.
- Every hover annotation uses locally hosted **Caveat 500** (Portfolio Hand), 22px, with the same thin handdrawn underline, transparent background, no border and no box shadow. The yellow note uses the same face without an underline. Never render duplicate prompts.
- Touch: tap to preview an object's label, tap again to activate, tap elsewhere to dismiss. Controls retain accessible names when labels are hidden.

## Next expanded-cover layout — awaiting supplied sketch

Image IMG_6246.jpg was unavailable on October 27. Do not infer its composition. Use rounded corners, larger square covers and larger type. Chips belong at the bottom right; do not print category descriptors such as “industry”, “skillsets” or “type of app”. The inner vinyl gently wiggles in and out on hover/focus/touch preview. LED always stays behind the loaded disc.

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
