# Work Card 08 - Leadership and Academic Team

## Goal

Add factual Programme Leadership cards and a searchable/filterable Academic Team directory.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- Confirmed leadership records supplied by the learner

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`

## Instructions for the coding agent

- Add the confirmed Head of Department and three Heads of Programme.
- Use mailto links for confirmed emails.
- Add ALL/SAD/NS/IS filters and search by name, email, or track.
- Use only confirmed records; do not fabricate lecturers or photos.

## What not to do

- Do not invent an academic directory beyond supplied records.
- Do not add external application URLs, backend search, or other tracks.

## Done when

Leadership cards, mailto actions, filters, and search work responsively.

## Verification steps

- Verify all four confirmed leadership records and email links.
- Test ALL/SAD/NS/IS filters and search.
- Design check: factual cards, controls, contrast, spacing, and mobile rules follow `design.md`.
- Confirm no invented staff records appear.

## Localhost test before continuing

After this card, test:

- Leadership records and mailto links are visible.
- Academic Team filters reduce results correctly.
- Search matches name, email, and track without horizontal overflow.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after learner verification. Do not begin Work Card 09 until `continue`.

## Status
Complete
