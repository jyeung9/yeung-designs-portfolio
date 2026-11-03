## Current local parity release — November 2, 2026, 10:48 PM

Julie authorized publishing the current local website exactly. This section supersedes earlier conflicting specs: header lettering is 1.125× the base handwritten token (25% below the prior 1.5×); headline uses the base token and role uses `clamp(20px, 1.65vw, 28px)`. The measured landing fitter includes all occupied rows. At ≥1000px width and ≤820px height, introduction/player sit side by side; taller desktop retains the vertical composition. Content sections at ≥900px scroll inside their available frame; narrow pages retain normal scrolling. Navigation has a 380px preferred minimum width bounded by its container. Console stacks below 360px deck width or enlarged root text. Header mobile menu contains LinkedIn/résumé; section links remain in the main navigation. Current case-study pages are included to match the local build. No new visual redesign is part of this synchronization.

# Current design patterns — November 2, 2026 evening

This catalog follows the approved local implementation. [Visual reference](visual-components.md). Old specs are historical, not alternative requirements.

## Shared dimensions

| Relationship | Current implementation |
| --- | --- |
| Page inset | `clamp(12px, 2.5vw, 48px)` on all sides |
| Base handwritten label | `clamp(24px, 2.1vw, 40px)` |
| Header brand and links | 1.5 × base handwritten label |
| Header icon | `clamp(66px, 4.5vw, 78px)` diameter |
| Greeting, role, navigation and city | Base handwritten label; role uses DM Sans |
| Clock | 2 × base label; 12-hour zero-padded digits, smaller AM/PM |
| Theme switch | Height `clamp(66px, 3.825vw, 76.5px)`; width 1.6 × height |
| Player navigation relationship | Navigation width 0.88 × deck width; artwork max(32px, 0.097 × deck width) |
| Transport group | 56 / 84 / 56px target diameters; equal 12px gaps; centered on deck |
| Visible knobs | 46 / 69 / 46px; aligned vertical centers |
| LED | At least 72px high; 18px single-line text; 12s scrolling cycle while playing |
| Narrow console exception | Deck below 480px or root type above 20px: LED above 84px control row with 8px gap |
| Minimums | 16px functional text; 44px general targets; one-rem clearance token |

## Layout and interaction

- **Composition:** introduction, player and bottom navigation are reserved normal-flow groups; header and weather/clock are supporting groups. Shared page inset and composition tokens in `dist/composition.css` own sizing. Short/narrow windows scroll rather than squeeze text. Record/platter/tonearm and the string attached to the final n are intentional overlaps.
- **Type:** header brand and links use the same enlarged handwritten scale. Greeting, navigation labels and city share the header-hand token; the role uses clean sans serif at the menu-label size. Functional text has a 16px minimum. The clock uses zero-padded 12-hour time, a smaller AM/PM and subtle split-flap detail.
- **Deck:** straight-on pitched wood top, lighter front fascia, rounded edges, raised platter and brushed-metal feet/buttons. One coordinate system positions the shell and player parts. The bottom-right carved symbol matches header-icon diameter and uses heavier carving strokes.
- **Controls:** previous, play/pause and next form one centered group, with 12px equal gaps. Skip targets are 56px; play/pause is 84px (1.5×). Visible knob diameters are 46/69px. LED remains left on wide decks. Below a 480px deck width, or with enlarged root text, LED and controls occupy separate rows; this is an explicit readability exception to proportional scaling. Playing shows one scrolling “now playing: song name” line; paused shows “paused”. No waveform.
- **Heart:** multicolored mirrored glass tiles on an inflated 3D surface, turning and pulsing with music; gentle wind and pointer response remain. No click/drag/release hint, slingshot or regeneration interaction.
- **Feedback:** plain handwritten cursor hints use explicit surface-aware text colors; avoid boxes, halos and blend modes. Normal text targets 4.5:1. Menu art enlarges 1.25× with glow/motion; portrait floats and returns on exit. Reduced motion suppresses animation. The contrast utility has 267 automated surface/ink checks; this is not an exhaustive rendered-pixel audit of every animation or glass facet.
- **Weather:** lowercase city picker, temperature above weather sketch alongside the clock, shared frosted surface with bottom navigation. Theme toggle remains in the header.


## Responsive layouts and verification

Compact at ≤600px wraps header controls and hides desktop links behind the menu. Regular layouts reserve a separate utility row; spacious layouts (≥1200px wide and ≥800px high) may share the navigation row with utilities when measured clearance permits. Short screens scroll. Enlarged text may change navigation to two columns. These are intentional exceptions; do not stretch the record artwork.

A-side/B-side artwork enlarges 1.25× with glow and repeating Y turns/rests; About floats with hearts, headphones and racket; Contact stirs matcha and resets on exit. Side records and flying music notes are removed. Track changes use brief directional loading/unloading. A small stylus-contact particle effect remains during playback. Weather sketch is in the clock card, temperature above it; default location San Francisco. Theme toggle is in header.

Normal text targets 4.5:1. Day ink #292e31, night ink #edf0f6, LED ink #bbffc2 on #081812; surface-aware hints select suitable ink and reposition near boundaries. The automated contrast utility passes 267 representative/grayscale checks; these are not exhaustive pixel or assistive-technology checks. Desktop and phone review plus current playback and control geometry checks passed. Full tablet/ultrawide, enlarged-text and all animated-state audits remain limits.
