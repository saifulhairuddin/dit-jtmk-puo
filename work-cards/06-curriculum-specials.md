# Work Card 06 - Curriculum Special States

## Goal

Add distinctive presentations for Integrated Project and Industrial Training to the curriculum explorer.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- Supplied programme structure document

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`

## Instructions for the coding agent

- Show `DFT50194` Integrated Project in Semester 05 with 04 credits and prerequisite all core computing courses.
- Show `DUT60089` Industrial Training in Semester 06 with 09 credits and industry-experience framing.
- Keep the selected track and semester controls working.
- Do not add additional PUO tracks.

## What not to do

- Do not implement Track Explorer synchronisation, leadership, or academic team yet.
- Do not invent project requirements or training partners.

## Done when

The two special states are visually distinct, factual, responsive, and tied to the selected semester.

## Verification steps

- Verify Integrated Project appears only in Semester 05.
- Verify Industrial Training appears only in Semester 06.
- Design check: distinctive but restrained curriculum treatments follow `design.md`.
- Verify no track selector regression.

## Localhost test before continuing

After this card, test:

- Semester 05 shows Integrated Project with code, credits, and prerequisite.
- Semester 06 shows Industrial Training with code and 09 credits.
- Changing track and semester still updates the normal course cards.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after learner verification. Do not begin Work Card 07 until `continue`.

## Status
Complete
