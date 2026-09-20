# Work Card 04 - Programme Outcomes

## Goal

Add accessible interactive Programme Educational Objectives (PEO) and Programme Learning Outcomes (PLO) sections using the complete official statements.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- Supplied DIT programme-information document

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`

## Instructions for the coding agent

- Render exactly four PEO cards and exactly eleven PLO cards.
- Use accessible buttons with `aria-expanded` and controlled content regions.
- Keep official statements intact and make the cards keyboard usable.
- Preserve the existing anchors and page order.

## What not to do

- Do not add curriculum, track, leadership, or academic-team behavior yet.
- Do not invent outcome mappings or additional outcomes.

## Done when

PEO and PLO cards expand/collapse correctly, show complete supplied statements, and remain readable on mobile.

## Verification steps

- Verify exactly four PEOs and 11 PLOs render.
- Verify keyboard and disclosure states.
- Design check: expandable cards, contrast, spacing, and mobile rules follow `design.md`.
- Verify statements against the supplied document.

## Localhost test before continuing

After this card, test:

- PEO cards expand and collapse with visible state.
- All 11 PLO cards are present and reveal their complete statements.
- Cards are keyboard reachable and readable at mobile width.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after learner verification. Do not begin Work Card 05 until `continue`.

## Status
Complete
