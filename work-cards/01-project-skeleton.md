# Work Card 01 - Project Skeleton

## Goal
Create the Vite/React shell and global DIT/JTMK/PUO visual system.

## Inputs
`build-blueprint.md`, `architecture.md`, `design.md`, `project-brief.md`.

## Files likely touched
Vite files, `src/main.jsx`, `src/App.jsx`, `src/styles/global.css`, and `package.json`.

## Instructions for the coding agent
Scaffold minimal Vite React; create CSS tokens for black/charcoal/white/Perak yellow, typography, borders, spacing, focus states, responsive breakpoints, reduced motion, and overflow protection. Render only a temporary shell marker. Keep SAD, NS, IS as the only track references.

## What not to do
Do not implement page sections or programme features. Do not add other tracks, backend, auth, database, APIs, packages, or invented facts.

## Done when
The app starts, shell renders, global styles are present, and production build succeeds.

## Verification steps
Build succeeds; dev shell loads at desktop/mobile; global palette and focus/reduced-motion rules are present. Design check: follow `design.md` mood, spacing, typography, thin borders, CTA/technical language, and mobile rules.

## Localhost test before continuing
After this card, test:
- `npm run dev` starts and the shell loads.
- Desktop and phone widths have no horizontal overflow.
- Background, text, accent, focus outline, and reduced-motion rules are visible/configured.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
Stop after shell verification and learner localhost check. Do not begin Work Card 02 until `continue`.

## Status
Complete
