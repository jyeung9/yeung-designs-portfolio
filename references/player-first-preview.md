> Historical exploration notes. The final reviewed composition was approved on October 28, 2026; the current contract is in ../design-system.md. Statements below about pending approval describe the exploration at the time.

# Player-first landing variation — local preview

Requested October 28, 2026. The records-upfront version is preserved in GitHub commit `586cd58b1edd15e5a64cd5ce13a0e59ac90e2d26`.

1. Intro: greeting, headline/heart/vines and role.
2. Record table/player: LED, left/right music record queues and skip controls. No case-study shelf on home.
3. One island: **A-Side** (main design case studies), **B-Side** (explorations and side projects), **about me**, **contact me**. Mobile retains these destinations in the hamburger.

The scene's maximum design width increases from 760 to 1140px (1.5×). All artwork keeps its shared proportions. Available width and measured height cap the actual size: a phone already using its full width cannot grow by 1.5× without clipping. Text and targets retain their readable minima. The same 6%-of-scene-width spacing separates the three groups; short screens scroll when required.

The case-study shelf now lives in A-Side, with the existing preview and on-site case-study flow. B-Side retains the existing exploratory work. This is a proposal, not an update to the accepted production specification. No commit, push or publication is authorized by this experiment alone.

Verified locally: 1440×960 desktop has a 770px scene and no page overflow; 390×844 phone has a 342px width-capped scene with no horizontal overflow. A-Side opens the four-record collection; mobile navigation exposes all four destinations. Actual enlargement varies with available space rather than guaranteeing exactly 1.5× at every viewport.

## Quad-grid and table-free exploration

A-Side uses equal two-column cards with permanently visible names and relevant outlined chips; below 600px it becomes one column. Chips use the same pill geometry as the rounded action button (999px radius, which resolves to half the element's height), 16px minimum text and wrapping rather than truncation. Record selection opens the case study directly, without a hover reveal.

Home hides the wooden tabletop as a reversible local comparison; `?table=on#home` restores it. The player, records, LED and controls retain their geometry so the comparison isolates the table. This remains a preview, not an approved production change. Desktop cards were measured equal at 492×665.98px; phone cards use one 366px column at 390px viewport with no horizontal overflow. Large cards require vertical scrolling rather than shrinking their labels to fit all four into one viewport.

## Visible section spacing and labels

Removed individual menu-label backgrounds; the single island remains. Menu labels scale from 16–20px (18px at 1440px). Table-free spacing is measured from the perspective-rendered deck's top to the LED's bottom, excluding hidden table padding. At 1440×960, visible gaps measured 46.92px above and 46.91px below. Visible home/header text had no sizes below 16px; at 390×844 the role and LED remained 16px with no horizontal overflow.

### Wide desktop scale and timezone controls — local preview

At viewports at least 1800px wide and 900px tall, the home composition uses a 1.25 scale for typography, artwork and controls, with the player fitted to available height. Smaller layouts retain their existing scale. The timezone placeholder reads “select timezone”; its border matches the theme toggle and both use a 44px base height (55px at wide scale). Verified at 1920 × 1080: equal section gaps of 54.59px, matching 55px controls, no horizontal overflow. Verified at 390 × 844: matching 44px controls, full placeholder, no horizontal overflow. Preview only; not committed or published.
