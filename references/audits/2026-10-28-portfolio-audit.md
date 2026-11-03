> Historical exploration/audit only. Current local specifications in design-system.md and references/patterns-nov02.md supersede conflicting directions here.

# Portfolio audit against Storyline

October 28, 2026 · Live version 33 · Desktop 1440×1000 and mobile 390×844

**The portfolio has a distinctive identity and a usable editorial structure. Its biggest hiring-readiness gap is evidence: visitors can see your taste and interests before they can evaluate your product decisions and results.** Preserve the personality, but give the work a faster, clearer route to the foreground.

Source framework: [Storyline portfolio checklist](https://storyline.design/portfolio-checklist/). Findings below are an independent review of [Julie’s live portfolio](https://yeung-designs-portfolio.julieyeung.chatgpt.site/#home), not a hiring prediction. The checklist has 53 checks, including four conditional confidentiality checks. Those four cannot be judged without knowing which projects are confidential. The intended target role is inferred from “product designer | AI systems thinker”; project ordering should be confirmed against the actual roles Julie wants.

## Fix first

| Priority | Page or element | Finding | Next action |
|---|---|---|---|
| High | A-side first card | Titanic’s End leads the collection, but its destination explicitly says the story is still being assembled. | Lead with the strongest complete case study. CAPI is a candidate for AI/product leadership roles; ConnectMyHealth for research-heavy product roles. Finish Titanic’s End or move its overview out of the main hiring path. |
| High | All project cards | Record graphics distinguish projects by color, but do not reveal the product or outcome. Names and skill chips replace a useful one-sentence project summary. | Keep the sleeve motif and add an actual interface/detail plus a sentence explaining the problem, your contribution, and supported outcome. |
| High | CAPI and ConnectMyHealth | Roles and problems are present; evidence linking research → decision → interface → outcome is thin. | Add two or three annotated decisions per study, including alternatives, constraints and what changed. Use real artifacts and supported outcomes; do not invent metrics. |
| High | Mobile interior navigation | At 390px, entering A-side hides the home island and section rail. The hamburger contains LinkedIn and résumé only. | Provide consistent links to work, explorations, about and contact on interior mobile pages. Keep a visible home route. |
| High | Desktop corner settings | Scrolling Home → A-side makes timezone/toggle disappear; a fresh direct visit to A-side initially shows them. | Test and fix the route transition as well as initial load. This is a version-33 regression, not an intentional change. |
| Medium | Home positioning | “Meaningful connection” communicates a value, but not the specific product problems you want to be hired to solve. The selectable timezone is not your own location. | Add a short, concrete specialization/value line and your actual base or working timezone, if you want it public. |
| Medium | B-side | Three cards have no project destination; two others take visitors to Notion. | Separate finished case studies from clearly labeled experiments; give each public experiment enough substance to evaluate. |

## Page by page notes

### Home

[Open Home](https://yeung-designs-portfolio.julieyeung.chatgpt.site/#home)

**Working:** Name and role are visible, copy is brief, there is no deliberate entry loader, music is optional, and the visual personality is coherent. The record-player idea is memorable.

**Needs attention:** The player, moving greeting, heart, and atmospheric controls dominate the first impression. No actual product work or outcome appears on the landing screen. The a-side/b-side terminology requires interpretation; accessible labels are clearer than the visible labels. Add a direct “selected work” cue or a strong project preview without necessarily restoring the whole shelf. Consider “a-side / selected work” and “b-side / experiments.” Keep playful motion secondary to reading.

**Evidence:** Live greeting still repeats horizontally. A static greeting is already prepared locally but is not part of this audited release. Your location is not stated; a visitor’s chosen city should not be mistaken for where you work.

**Priority:** High for fast role/work comprehension; medium for reducing motion. A real 20-second recruiter test remains outstanding.

### A-side

[Open A-side](https://yeung-designs-portfolio.julieyeung.chatgpt.site/#work)

**Working:** Three focused, directly accessible projects; consistent cards; readable chip labels; no password gate. Mobile cards fit within the viewport in the sampled layout.

**Needs attention:** All three covers are decorative artwork rather than product evidence. Titles identify brands, but chips such as “Product Design” and “Stakeholder Management” do not explain the project’s value. Add outcome-oriented summaries. First position should reflect the strongest evidence for your target role, not an unfinished overview.

**Priority:** High. The grid is the selection step for a reviewer deciding what deserves attention.

### Titanic’s End

[Open case study](https://yeung-designs-portfolio.julieyeung.chatgpt.site/case-studies/titanics-end)

**Working:** The camp/community context and your product/design-system ownership are introduced.

**Needs attention:** The page contains an overview, background and an explicit unfinished-story statement. There are no project screens, decision examples, constraints, research artifacts or demonstrated outcomes. Define who uses the app, their concrete coordination problem, your responsibilities versus collaborators, project stage and timeframe. Show one complete flow and why it changed.

**Visual defect:** On the hosted extensionless URL, the opening sleeve is green although the collection card is blue. Project artwork selection currently depends on an `.html` filename. The local case-study preview now normalizes this route before selecting assets; that correction is not yet published.

**Priority:** High before featuring it first. A placeholder hero in the local preview is a layout aid, not evidence that makes this study complete.

### CAPI

[Open case study](https://yeung-designs-portfolio.julieyeung.chatgpt.site/case-studies/capi)

**Working:** Clear product description, principal design/product role, collaborator groups, April 2025 start, identified user uncertainty, and a stated TestFlight-to-App-Store milestone. Section headings are understandable and paragraphs are short.

**Needs attention:** The Research and Process sections describe activities but show no supporting artifacts. Explain a specific generation-state, prompt-panel or preset decision: what users struggled with, what alternatives you considered, the constraint, and why the final design won. Show your own contribution, including how you directed or reviewed the designers you managed. Add project duration and release timing if known.

**Visuals and impact:** Actual product screens appear only under Final product. The overview image resolves at 2128×1166 and has a full-size link, but important UI should also appear as readable annotated crops near the relevant decisions. A short product-flow demo would add more evidence than decorative record motion. The launch milestone is useful; support it with an appropriate public product link or release evidence. Treat adoption, usability improvement and system efficiency as separate claims requiring their own evidence.

**Priority:** High; a promising lead study once the decisions and proof are visible earlier.

### ConnectMyHealth

[Open case study](https://yeung-designs-portfolio.julieyeung.chatgpt.site/case-studies/connectmyhealth)

**Working:** The clearest research story of the three main studies. It identifies patients/caretakers, fragmented records, governance constraints, advocacy for usability testing, nine participants and more than forty friction points. Roles and collaborator types are stated.

**Needs attention:** Show two or three of those friction points, the affected task, the design response and how the response was evaluated. Include an annotated before/after navigation or test-result flow. Explain which findings were prioritized and why. Add timeframe and distinguish your UX ownership from the UI designer’s contribution.

**Impact accuracy:** A population of over four million describes potential service coverage, not four million active users or proven benefit from your redesign. Keep that distinction explicit. The current page acknowledges that satisfaction improvement lacks a quantified before/after measure; either add the underlying qualitative source or describe the outcome more narrowly. The lone phone screen is relevant, but does not establish that a task became easier.

**Priority:** High for evidence; strong candidate to lead when research and complex product work are central to the target role.

### B-side

[Open B-side](https://yeung-designs-portfolio.julieyeung.chatgpt.site/#explorations)

**Working:** The separation from main work is understandable after reading the subtitle. Experimental palettes give this collection a distinct tone. Portfolio Revamp has a direct living-system link.

**Needs attention by card:**

- **Portfolio Revamp:** Opens an internal case study and separately links the design system. Keep both; make the relationship explicit.
- **adryft:** Links to a Notion page. Its chip “onboard experiences” is not enough to explain the water-taxi concept. Add a project-specific summary and consider moving the story onsite.
- **spotify exchange:** Also links to Notion; explain the music-sharing problem and your proposed interaction in the card summary.
- **neon owl:** An article-style card, not a link, labeled “in development.” Either present a substantive experiment or put it in a clearly separate workbench area.
- **everyone votes:** Non-link card with a voter-platform label but no visible story to evaluate.
- **paypal:** Non-link card with “exploration” repeated; it does not tell a reviewer what you explored.

The two Notion destinations redirected to app.notion.com, but readable project content was not confirmed during this check. They are unverified, not declared broken. At 390px, the two-column cards fit without horizontal overflow; some long chip labels wrap heavily. Equal visual treatment makes linked studies and non-link concepts look similarly actionable.

**Priority:** Medium to high. Keep experimentation, but make completeness and click behavior obvious.

### Portfolio Revamp

[Open case study](https://yeung-designs-portfolio.julieyeung.chatgpt.site/case-studies/portfolio-refresh)

**Working:** Your role, October 2026 timing and design-system approach are clear. The page appropriately avoids claiming measured hiring or engagement gains.

**Needs attention:** Show the actual before/after, one responsive layout decision, one interaction trade-off and how you verified it. Add the design-system link inside the study, not only on the B-side card. Some narrative describes an older shelf/expanded-record flow; align it with current direct case-study navigation. Its back-to-records links return to A-side even though this project belongs to B-side. Add “design systems” to the case-study skill list as well as the B-side card if that remains the intended positioning.

**Priority:** Medium. This can demonstrate systems craft more convincingly than a paragraph asserting it.

### Living design system

[Open design system](https://yeung-designs-portfolio.julieyeung.chatgpt.site/design-system/)

**Working:** This is tangible evidence of systems thinking: navigable topics, live component inspection, responsive presets, computed measurements and implementation links. It loads as an actual working artifact rather than a screenshot of a component library.

**Needs attention:** Give a hiring reader a short entry point explaining the problem this system solved, your decisions and one result. Link to a relevant component from the Portfolio Revamp narrative. Keep current rules synchronized with implementation; avoid making release-history wording the primary explanation. Sampled mobile layout had no horizontal overflow, but a newcomer walkthrough and keyboard audit would be useful.

**Priority:** Medium. Strong supporting evidence that is currently under-explained in the case study.

### About

[Open About](https://yeung-designs-portfolio.julieyeung.chatgpt.site/#about)

**Working:** First-person writing, a clear portrait, concise values and relevant interests. Community leadership gives the personal narrative a connection to the work.

**Needs attention:** Add a compact professional bridge: the kinds of teams/problems you help, two or three strengths supported by examples, and a brief relevant role/company history with context for unfamiliar organizations. “I care” is a useful value but needs an example of how it changed a product decision. Keep the warm tone.

LinkedIn consistency could not be verified because LinkedIn returned its sign-in wall. Do not treat this as evidence of a mismatch.

**Priority:** Medium.

### Contact

[Open Contact](https://yeung-designs-portfolio.julieyeung.chatgpt.site/#contact)

**Working:** A visible, copyable email address and mailto link provide a direct alternative to the form. Résumé opens a publicly viewable Google Drive PDF without requiring sign-in.

**Needs attention:** Email comes after a five-field form. Put the direct email route first or beside the form. Name, email, subject and message are required; phone is optional. Consider dropping phone and making subject optional if there is no demonstrated need. Verify error, success and delivery behavior before relying on the form. No test message was submitted during this audit.

**Priority:** Medium for reducing effort; delivery remains unverified. LinkedIn destination reaches LinkedIn but requires sign-in in this browser session.

## Checklist coverage

“Meets” means the observed site supports the check. “Partial” means there is relevant material but a significant gap. “Attention” means the live experience conflicts with the check. “Unverified” means available evidence does not settle it. These are audit judgments, not an official Storyline score.

| Area | Check shorthand | Status | Evidence or action |
|---|---|---|---|
| Landing | Specific hook | Partial | Values-led headline; sharpen product specialization. |
| Landing | Role visible | Meets | Product designer / AI systems thinker. |
| Landing | Base visible | Attention | Visitor timezone control is not designer location. |
| Landing | Brief introduction | Meets | Short name, headline and role. |
| Landing | Work-led imagery | Attention | Player dominates; product screens absent. |
| Landing | Restrained interaction | Partial | Several decorative interactions compete with scanning. |
| Landing | No entry delay | Meets | No deliberate loading gate observed. |
| Cards | Role relevance | Partial | Product/system work is relevant; target role not confirmed. |
| Cards | Strongest first | Attention | Unfinished Titanic’s End leads. |
| Cards | Informative summaries | Attention | Names/chips lack project-value summaries. |
| Cards | Product thumbnails | Attention | Decorative sleeves conceal the actual work. |
| Cards | Complete destinations | Attention | Titanic overview and non-link B-side concepts. |
| Cards | Open access | Meets | Main case studies open publicly. |
| Context | Product explained | Meets | Main studies explain domain/product. |
| Context | Problem explained | Partial | CAPI/health clear; Titanic remains broad. |
| Context | Ownership | Partial | Role labels present; specific individual decisions thin. |
| Evidence | Contribution shown | Partial | Mostly described; few attributable artifacts. |
| Evidence | Constraints | Partial | Health governance example; other studies need specifics. |
| Evidence | Decision rationale | Attention | Missing concrete alternatives and trade-offs. |
| Evidence | Outcomes | Partial | Launch milestone; limited corroboration or evaluated change. |
| Evidence | Role proof | Partial | Guide supports systems claim; AI/product proof needs depth. |
| Visuals | Relevant artifacts | Partial | CAPI/health screens; Titanic/refresh lack work imagery. |
| Visuals | Explanatory flow | Partial | No product-flow demonstration; record motion is decorative. |
| Visuals | Readable detail | Partial | Full-size CAPI link helps; annotated crops needed. |
| Story | Skimmable narrative | Meets | Short prose and meaningful section headlines. |
| Story | Proof early | Attention | Product visuals/results occur late or are absent. |
| Confidentiality | Disclosure | Unverified | Confidential projects not identified. |
| Confidentiality | Redaction | Unverified | Cannot certify permissions from public pages. |
| Confidentiality | Recreated labeling | Unverified | Confirm whether any artifacts are recreated. |
| Confidentiality | Sufficient evidence | Unverified | Conditional on confidential-work scope. |
| About | Positioning | Partial | Relevant values and interests; target role could be sharper. |
| About | Strengths | Meets | Systems, product and community leadership named. |
| About | Concision | Meets | Two relevant paragraphs. |
| About | LinkedIn alignment | Unverified | Sign-in wall prevents comparison. |
| About | Career context | Attention | No compact relevant role/company history. |
| About | First person | Meets | Consistent first-person voice. |
| About | Personal relevance | Meets | Community/connection theme relates to work. |
| Contact | Direct email | Meets | Visible address and mailto. |
| Contact | No forced form | Meets | Email alternative available. |
| Contact | LinkedIn access | Unverified | Destination resolves to LinkedIn auth wall. |
| Contact | Link behavior | Partial | Résumé public, mailto valid; delivery/profile unverified. |
| Experience | Quick comprehension | Unverified | Requires a timed test with an unfamiliar reviewer. |
| Experience | Plain-language signals | Partial | Role clear; impact and project summaries weak. |
| Experience | Public entry | Meets | No portfolio login gate. |
| Experience | Navigation | Attention | Mobile interior links missing; corner settings route bug. |
| Experience | Résumé availability | Meets | Public PDF viewer opens. |
| Experience | Cursor behavior | Meets | No replacement pointer observed. |
| Experience | Mobile usability | Partial | No sampled horizontal overflow; navigation gap remains. |
| Experience | Image quality/speed | Partial | Available assets load; no measured network/performance audit. |
| Experience | Readability | Partial | Sampled body/chip sizing readable; not a full contrast audit. |
| Experience | Finished content | Attention | Explicit unfinished study and empty experiment destinations. |
| Experience | Onsite continuity | Attention | Two exploration stories leave for Notion. |
| Experience | Favicon | Meets | Custom record icon present. |

## Suggested next sequence

1. Restore dependable interior mobile navigation and desktop settings across route changes.
2. Choose the lead study for the target job; move incomplete content out of the lead path.
3. Add real project previews and short value summaries to the collection cards.
4. Deepen the lead study with three annotated decisions and supported outcomes, then repeat for the second.
5. Tighten Home/About positioning and simplify Contact; test with an unfamiliar reviewer for 20 seconds.

## Audit boundaries and pending preview

Reviewed five main routes, four internal case studies and the living design-system page at desktop/mobile sizes. Checked résumé access, LinkedIn destination, external exploration redirects, direct email markup and the contact form structure. Main navigation was exercised via links and a Home-to-work scroll. No messages were sent, music played, permissions changed, or audit-driven site edits published. No full accessibility, assistive-technology, cross-browser or network-throttled performance certification is implied.

Local changes prepared after version 33 are separate: stationary greeting; record beside the case-study title; left-to-right title reveal with reduced-motion fallback; matching 16:9 hero frames and rounded corners; original CAPI/health phone images; placeholders for Titanic and Portfolio Revamp. Placeholder frames should remain preview-only until you deliberately approve their publication. The new layout improves hierarchy but does not supply missing research or outcomes.

Audit source and visual references: [Storyline](https://storyline.design/portfolio-checklist/), [live desktop A-side](../../.local-previews/audit-live-work.png), [live mobile Home](../../.local-previews/audit-live-mobile-home.png), [live mobile A-side](../../.local-previews/audit-live-mobile-work.png), [live mobile B-side](../../.local-previews/audit-live-mobile-bside.png). The live baseline is [4947cc2](https://github.com/jyeung9/yeung-designs-portfolio/commit/4947cc25d261f3523bd8d318f8894f76751874ca).
