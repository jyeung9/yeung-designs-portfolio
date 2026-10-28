## Current responsive product intent — October 28, 2026
Visitors must be able to act on the first tap, read every label without overlap, and recognize the same record-player composition on desktop and phone. The landing composition preserves proportionate graphics, readable type and usable touch targets. Reserve readable text and controls first, then fit the proportional artwork into one viewport. Identify height conflicts at the minimum target size and allow reachability instead of clipping. On phones, navigation moves into a hamburger menu to free space. Native case-study pages intentionally scroll with persistent desktop section navigation and compact section-owned sticky numbers on mobile. Scrolling must never switch routes or shift content sideways. Use the current responsive rules at the top of design-system.md; earlier conflicting proposals are historical.

> Current implementation and interaction decisions: see the **Current interaction contract** at the top of design-system.md. Earlier directions below are historical where they conflict with that contract.

# design portfolio product intent

> current direction — return to the light off-white grid and centered interactive headphones. the realistic room, wall lighting, and glass-heavy interface are archived explorations, not requirements for the active design. preserve readable typography, consistent spacing and accessible controls. Cindy Ly remains the primary reference for restraint, personal interaction and compact navigation.

working draft · 2026-10-20

## purpose

help the right hiring team understand the work julie wants to do, see evidence of her abilities, and feel interested in working with her. the experience should feel like being welcomed into her space: cozy, thoughtful, creative, and easy to settle into.

## audience and their needs

primary visitors are hiring managers and design directors, recruiters, design teammates, and cross-disciplinary stakeholders. they need to quickly identify julie’s role, see relevant projects, understand her contribution and impact, and find her résumé and contact details. exploration should reward visitors who linger while respecting those who have only a minute.

## emotional intent

julie wants visitors to feel welcomed, cozy, and able to relax into her space. the desired progression is “i’m welcome here” → “i’m curious about this person” → “i understand and trust her work.” these are design goals to test, not assumed visitor reactions. warmth comes from atmosphere and considerate interactions; trust comes from clear navigation, reliable behavior, and specific project evidence.

## positioning and headline

product designer and systems thinker, with hands-on community leadership. prioritize design work, followed by product and business strategy when supported by concrete examples.

headline composition:

“i design for”

[interactive headphones]

“meaningful connection”

keep the role visible separately so the poetic headline does not leave hiring teams guessing. use “welcome home” in the navigation. use lowercase, plain language and “你好, i'm julie” as a personal greeting.

## how the work supports the promise

- titanic’s end: community-building through an app and camp operations leadership. show how design systems, logistics, belongings, and coordination support people living and working together; distinguish app design from operational leadership.
- healthcare: mobile access to health information, physicians, and care for oneself and loved ones. show the actual redesign and how it supports informed decisions.
- capi: creative expression and sharing through video templates and familiar formats. demonstrate the creator experience rather than claiming community outcomes without evidence.
- civic connection is a stated interest; include it as project positioning only when there is work to substantiate it. neon owl business strategy belongs in the supporting story once scope and contribution are documented.

## atmosphere and materials

julie’s direction: a cozy, home-like setting, plants, organic light-colored wood, and a sense of her presence. daytime is warm off-white; nighttime is dark navy, with visitor-controlled appearance. preserve the builder character through careful structure, subtle grid cues, and tangible artifacts of real work.

proposed interpretation: soft light, restrained botanical accents, pale wood details, generous space, and readable typography. use chrome as a musical accent. these material ideas are to explore in a coherent visual pass; they do not prescribe a literal room, photorealistic interior, or a collection of decorative objects.

## interaction principles

- headphones sit between the headline phrases. rotate while hovered and hold their orientation when the pointer leaves; offer keyboard and touch controls and respect reduced motion.
- music is a voluntary invitation. keep it off initially, offer obvious stop controls, and preserve a complete experience without audio. selected playlist: https://open.spotify.com/playlist/5GrWuliLODvT0KtZTDhYKT . Spotify playback restrictions apply.
- retain the earlier vinyl idea as an alternative or a possible listening detail, not a second competing centerpiece. if used, its disc and arm must follow real playback and its title must reflect the real track.
- keep navigation available and clearly labeled. interactions should feel responsive, gentle, and purposeful. never require visitors to solve an interaction before seeing work.

## content and structure

landing page, about, contact, and three to four strong case studies. keep résumé and contact easy to find. case studies should show the problem, julie’s role, constraints, decisions, actual artifacts, and supported outcomes. personality opens the door; work provides the substance.

Cindy Ly’s portfolio (https://www.cindyly.design/) is the main reference for a short headline composed around a central interactive object and personal, accessible navigation. borrow the compositional principle and care for interaction, while expressing julie’s own world.

## decision rules for future iterations

before adding an element, ask whether it welcomes the visitor, helps them understand julie or her work, or makes navigation easier. remove elements that compete with the headline or delay access to projects. prioritize clarity and comfort over spectacle. keep atmosphere consistent between landing and case studies, while allowing quieter reading layouts.

## review criteria

- can a first-time visitor identify julie’s role and find relevant work, résumé, and contact without exploring the object?
- do visitors describe the opening as welcoming and personal, and can they explain what creates that impression?
- does the headline’s promise connect to specific evidence in each project?
- does the experience remain complete with sound off, reduced motion, keyboard input, and a narrow screen?
- do day and night modes retain readable contrast and a coherent warm atmosphere?
- evaluate the actual Storyline checklist one item at a time: https://storyline.design/portfolio-checklist/ . do not claim compliance without checking the criterion and the implementation.

## next iteration

review this intent first, then create one cohesive visual pass for afterglow using the warm material direction. the current update implements the headline composition and headphones; plants, wood, and the full atmosphere remain to be designed. keep unresolved choices reversible and bring back only decisions that materially change this intent.

## iteration rule — explicit user instruction
Never assume anything that has not been explicitly said to you. Please follow the design system intent guide and the product intent guide closely for each iteration.

## current update — side quests and readable typography
- The secondary section is named **side quests**, including its navigation label.
- All live website text has a minimum font size of 16px at every breakpoint, including navigation, labels, chips, captions, status messages and object lettering. This supersedes earlier smaller typography specifications. Keep larger headings; reflow and adjust spacing rather than shrink text.
- Text embedded in supplied project screenshots is image content, not live website type. It must not be the only source of essential project information.

## current requested refinements
Show the supplied CAPI overview on a separately rendered MacBook Pro-style laptop on the landing desk. Refine the writing pen and physical tonearm. Use a day/night switch and a major-city time dropdown; request location only after explicit visitor action, with local-time/manual-selection fallback. Temporarily use the previously supplied Spotify playlist inline without opening another window. Keep collection sleeves consistently square and dimensional. Spotify playback limitations remain explicit; the owned-audio implementation remains available for later.

## confirmed project focus — October 27, 2026
The current landing replaces the laptop with one record-cabinet shelf. Main product-design projects, in order: Titanic’s End (community and in-person connection); CAPI / First Intelligence (customized video creation from favorite viral content); CentralSquare / ConnectMyHealth (net-new mobile app for 4m+ patients and caregivers, connecting with providers and understanding test results). These are user-supplied scope statements, not verified adoption or outcome metrics.

Other fun stuff includes Everyone Votes (voter platform), Neon Owl (business strategy), PayPal, and school / outside-work projects. Do not invent missing project roles, outcomes or links. Keep these separate from the main product-design lineup. Music is triggered through headphones.

## Uploaded music and sequential refinement — October 27
The user supplied ten MP3s for direct playback. Start silent; do not load Spotify or show an external player. Playback and track changes must not alter page geometry. The final interaction is tonearm play/pause plus separate fading edge discs for previous/next; park the arm before lifting/changing the center disc. The single current visual checklist is at the top of design-system.md. All seven requested steps were previewed in order before proceeding to the next.
