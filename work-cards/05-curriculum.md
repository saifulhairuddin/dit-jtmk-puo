# Work Card 05 - Curriculum Explorer

## Goal

Build the Programme Structure explorer with exact SAD/NS/IS and Semester 01-06 controls and factual course cards.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- Supplied programme structure document

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`
- `src/data/courses.js` if extracted

## Instructions for the coding agent

- Use one shared `activeTrack` and `activeSemester` state.
- Render controls for exactly SAD, NS, IS and Semester 01 through 06.
- Show common courses and selected-track elective records from the supplied mapping.
- Course cards must expose classification, code, title, contact hours, credits, and prerequisites where supplied.
- Keep mobile cards readable without horizontal page scrolling.

## What not to do

- Do not add excluded tracks as PUO offerings.
- Do not implement Track Explorer synchronisation, leadership, or academic team yet.
- Do not invent missing course values.

## Done when

The curriculum section switches tracks and semesters and renders accurate responsive course cards.

## Verification steps

- Test all three track controls and six semester controls.
- Check selected-track elective mapping.
- Design check: technology-data interface, controls, cards, and mobile rules follow `design.md`.
- Verify exactly three track labels appear in the selector.

## Localhost test before continuing

After this card, test:

- SAD, NS, and IS can be selected.
- Semester 01-06 controls change the visible curriculum.
- Course cards remain readable at mobile width without horizontal overflow.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after learner verification. Do not begin Work Card 06 until `continue`.

## Status
Complete
