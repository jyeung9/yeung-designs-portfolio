# Portfolio collaboration instructions

## Preview and approval workflow — user preference, October 28, 2026

For portfolio changes, implement and verify a local preview first, then show it to Julie. Wait for her explicit approval before updating design descriptions, accepted specifications, visual component references, or other documentation for that change, and before committing/pushing or publishing it. A local code change or preview capture is not an approved design reference. Keep proposed work local and clearly label it as a preview.

After approval, update the design description and visual component reference to match the reviewed result, complete relevant checks, then push and publish only within the approved scope. A material visual or behavioral change after approval needs another preview. Do not ask again for actions Julie already explicitly authorized. Documentation-only requests authorize the requested documentation work directly; they do not require an unrelated visual preview.

Read `design-system.md` for the current component contract and `references/visual-components.md` for retained visual evidence. Earlier conflicting design proposals are historical.

## Ongoing change comments — user preference, October 28, 2026

Document meaningful portfolio edits as work proceeds using searchable source comments beside the relevant implementation: `[design-preview:topic]` for unapproved proposals and `[design-approved:topic]` after explicit approval. Explain intent, important sizing/interaction constraints, and non-obvious tradeoffs; avoid narrating every line or leaving stale comments. These are source comments, not visible production annotations.

For each authorized GitHub commit or pull request, describe what changed, why, checks actually performed, and any remaining limitations. Include relevant comment-tag topics and preview evidence where useful. Do not claim checks or approvals that have not occurred. Update accepted text/visual documentation only after preview approval under the workflow above. This documentation preference does not authorize committing, pushing, or publishing pending proposals.
