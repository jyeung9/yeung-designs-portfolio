# Required stability and release workflow

These process requirements are effective now. Visual changes in the current cleanup remain **unapproved local previews**. Read AGENTS.md, design-system.md and references/visual-components.md; the latest approved local-parity section wins over historical specifications.

## Before preview

1. Record local HEAD and uncommitted changes, public Sites version/source SHA, stylesheet and bundle URLs. Reload intentionally and verify the actual resource URLs; do not diagnose every difference as caching. A failed direct HTTP request is not proof a browser asset is missing.
2. Edit `styles/site.css`, not generated `dist/site.css`. Keep responsive exceptions alongside their owning component. `styles/ownership.json` names runtime geometry owners; no new override stylesheets. Retain intended CSS cascade and inline local imports at their original position. Case-study styles are separately scoped.
3. Run `npm ci`, `npm run build`, `npm test`, `npm run check`. CI enforces asset identity, local resource presence, bundle freshness, legal import placement, duplicate selector/property ownership and contrast utility checks. Repeated builds must have the same artifact hash.
4. Capture every case in `tests/render/matrix.json` through the browser. The reusable read-only probes are in `tests/render/`. Save route, CSS viewport, device scale, theme, scroll, interaction state, DOM measurements and screenshots. Assert the actual route: the existing wheel-at-edge navigation can otherwise change it during a test.
5. Save evidence with artifactHash, cases, extras, visualReview and unresolved fields. `node scripts/check-release.mjs --evidence <file>` validates the matrix, text/targets, group overlap, control alignment, artwork presence, LED containment, rendered contrast samples and required state checks. Screenshot files must exist. A computed-color check is not a pixel audit of textures or animations.
6. Manually review every main route in both themes, plus 200% text, long city/song labels, sunrise/sunset, menu open/close/focus/links/scroll/return, playback and native reduced motion. Include actual touch-device testing before claiming touch gestures verified. Record gaps as unresolved; never mark an unperformed check passed.
7. Show local desktop and mobile previews with concrete causes, changes and remaining issues. No publication or accepted design-document update until Julie approves. New layout, typography, scrolling or proportion exceptions require a new preview.

## After approval

1. Resolve outstanding validation failures, update written/visual references and clearly supersede obsolete specs. Commit the approved source. Record Julie's actual approval, date, exact SHA and message in evidence.approval; do not infer approval from a successful test.
2. Run `node scripts/prepare-release.mjs --approved-commit <full SHA> --evidence <review.json>`. This rejects missing approval, dirty tracked source, stale evidence, incomplete matrix and unresolved checks. It builds once from an archive of that exact commit and verifies its artifact hash against the reviewed preview. It returns a sealed directory and source/hash record. It does not publish.
3. Push that exact SHA through the existing Sites source workflow. Package the sealed `dist` directory unchanged; do not rebuild or hand-edit its manifest. Preserve public/private access. Save a Sites version using the same SHA, then deploy the saved version.
4. Verify deployment status separately from rendered parity. Read the live build-manifest.json and compare sourceCommit and artifactHash with the seal. Compare approved local and live screenshots at identical CSS viewport, browser zoom/device scale, route, theme, scroll and playback/menu state. Include phone menu behavior. Dynamic clock/weather and decorative motion are expected differences; typography, geometry, missing artwork or clipping are not.
5. Report deployed version/SHA, deployment outcome, visual checks actually performed and limitations. If parity fails, stop and diagnose; deployment success alone never completes a release.

## Current evidence limitations

The browser automation interface does not expose native reduced-motion emulation or an explicit browser zoom control. Record CSS viewport and DPR, do not claim a native zoom or reduced-motion test was run. The release gate stays blocked until the missing check is supplied. Browser capture and manual review are presently an assisted workflow; CI does not silently substitute for them.

## November 3 release exception

Julie explicitly authorized: “Publish with those testing limits recorded.” For this release only, native reduced-motion and real-device touch checks remain unverified and must be reported as limitations, not passes. An evidence waiver names the user, exact approval, date and release commit. All browser, asset and geometry checks remain required. Future releases do not inherit this exception automatically.
