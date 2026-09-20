# Work Card 07 - Track Explorer

## Goal

Build exactly three interactive PUO technology-track cards and synchronise them with the curriculum selector.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- `work-cards/05-curriculum.md`

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`

## Instructions for the coding agent

- Render exactly SAD, NS, and IS cards.
- Show the supplied track title and focus subjects.
- Selecting a card updates the existing shared `activeTrack` state and the curriculum selector.
- Selecting a curriculum track updates the selected Track Explorer card.
- Keep the selected state accessible and responsive.

## What not to do

- Do not add Digital Game Programming, Data Management and Visualization, or Web Development as PUO tracks.
- Do not add new curriculum mappings, staff, URLs, or claims.

## Done when

The three cards are visible, interactive, synchronised with curriculum, and usable on mobile.

## Verification steps

- Verify exactly three cards render: SAD, NS, IS.
- Verify each card selection changes the curriculum track.
- Design check: three-card pathway treatment, yellow selected state, and mobile stacking follow `design.md`.
- Verify no excluded track appears as a PUO offering.

## Localhost test before continuing

After this card, test:

- All three cards are visible and selectable.
- Selecting a card changes the curriculum track and preserves the selected semester.
- Selecting a curriculum track updates the matching card.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after learner verification. Do not begin Work Card 08 until `continue`.

## Status
Complete
