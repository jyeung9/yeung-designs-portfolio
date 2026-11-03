# Portfolio collaboration instructions

## Preview and approval workflow — user preference, October 28, 2026

For portfolio changes, implement and verify a local preview first, then show it to Julie. Wait for her explicit approval before updating design descriptions, accepted specifications, visual component references, or other documentation for that change, and before committing/pushing or publishing it. A local code change or preview capture is not an approved design reference. Keep proposed work local and clearly label it as a preview.

After approval, update the design description and visual component reference to match the reviewed result, complete relevant checks, then push and publish only within the approved scope. A material visual or behavioral change after approval needs another preview. Do not ask again for actions Julie already explicitly authorized. Documentation-only requests authorize the requested documentation work directly; they do not require an unrelated visual preview.

Read `design-system.md` for the current component contract and `references/visual-components.md` for retained visual evidence. Earlier conflicting design proposals are historical.

## Ongoing change comments — user preference, October 28, 2026

Document meaningful portfolio edits as work proceeds using searchable source comments beside the relevant implementation: `[design-preview:topic]` for unapproved proposals and `[design-approved:topic]` after explicit approval. Explain intent, important sizing/interaction constraints, and non-obvious tradeoffs; avoid narrating every line or leaving stale comments. These are source comments, not visible production annotations.

For each authorized GitHub commit or pull request, describe what changed, why, checks actually performed, and any remaining limitations. Include relevant comment-tag topics and preview evidence where useful. Do not claim checks or approvals that have not occurred. Update accepted text/visual documentation only after preview approval under the workflow above. This documentation preference does not authorize committing, pushing, or publishing pending proposals.

## Stability and release gate — required for every future iteration

- Preserve the approved local appearance/behavior. Read design-system.md and references/visual-components.md first. New layout, typography, internal scrolling or proportion changes require a new local preview and Julie's explicit approval. Never use deployment as visual verification.
- Establish local commit/dirty state and public Sites version/source commit. Compare identical route, CSS viewport, browser zoom/device scale, theme, scroll and interaction state. Classify stale tabs, cache, missing resources and layout defects separately.
- Main-page styles have one owner: styles/site.css; dist/site.css is generated. Do not add override stylesheets. styles/ownership.json identifies groups and JS geometry owners. Remove superseded declarations rather than appending fixes. Case-study-only styles stay separately scoped.
- Before requesting approval run npm run build, npm test and npm run check. Capture tests/render/matrix.json through the browser, save DOM measurements and screenshots, and visually review every route/theme; automated dimensions alone are insufficient. Include menus/focus/return, playback, timezone, long labels, sunrise/sunset, enlarged text and reduced motion. Report limitations and unresolved failures.
- Phones 390×844/430×932, tablet 768×1024, laptops 1366×768/1440×900, desktop 1920×1080, short 1280×600, both light/dark and all five main routes are mandatory. Text >=16px; usable targets >=44px. Preserve artwork ratios and 56/84/56px playback targets. Long content must remain reachable, not shrunk or hidden to force a fit.
- Keep cleanup local until approval. After approval update accepted written and visual references, commit, and run scripts/prepare-release.mjs with the exact approved SHA and audit evidence. The script rejects dirty tracked source, stale/missing evidence, missing approval and test failures; it builds a sealed release directory once. Package that directory without rebuilding; deploy that exact artifact. Never hand-edit its manifest.
- After deployment compare the live build manifest's sourceCommit/artifactHash and the approved screenshots at matching sizes, including mobile-menu opening/closing. Report deployment result separately from visual parity. Direct HTTP checks being blocked is not evidence of missing assets.
