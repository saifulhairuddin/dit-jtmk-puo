# Work Card 09 - Polish and Final Verification

## Goal

Complete the final CTA, external URL guards, restrained reveal motion, and cross-page responsive/accessibility polish.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- All previous Work Cards

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`
- `src/config/externalUrls.js`
- `build-status.md`

## Instructions for the coding agent

- Add `APPLY_URL` and `ENQUIRY_URL` empty placeholders.
- Render final CTA controls as disabled or unavailable while URLs are empty.
- Add subtle reveal behavior with reduced-motion support.
- Check responsive layout, anchors, focus states, and no horizontal overflow.
- Preserve exactly three PUO tracks and all supplied factual records.

## What not to do

- Do not invent external URLs, testimonials, claims, or additional content.
- Do not add backend, auth, database, payments, or APIs.

## Done when

The page has an honest final CTA, restrained motion, responsive layout, and final verification passes.

## Verification steps

- Check empty URL behavior does not create broken navigation.
- Check all anchors, menu behavior, track/semester controls, outcomes, careers, team filters, and mailto links.
- Design check: final page follows `design.md` mood, contrast, responsive, anti-slop, and reduced-motion rules.
- Run the production build and inspect for relevant diagnostics.

## Localhost test before continuing

After this card, the learner should test:

- Final CTA actions are clearly unavailable until official URLs are supplied.
- The full page has no horizontal overflow on desktop and mobile.
- Keyboard focus, reduced motion, anchors, filters, and selectors remain usable.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after final verification. This card completes implementation and moves the project to Check.

## Status
Complete
