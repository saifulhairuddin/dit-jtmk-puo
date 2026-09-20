# Work Card 03 - Programme Story

## Goal

Replace the shell placeholders for Introduction, Synopsis, Direction, and Job Prospects with readable factual content from the supplied DIT programme document.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- Supplied DIT programme-information document

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`
- `src/data/` if introduced for factual content

## Instructions for the coding agent

- Add official Introduction and Synopsis content in editorial layouts.
- Add programme metadata without inventing facts.
- Add Vision, Mission, Educational Goal, and Programme Aim with nested anchors for the latter two.
- Add supplied career prospects grouped into readable categories; do not invent roles.
- Keep the section order and existing navigation anchors.
- Keep all three PUO technology tracks out of this card's new content unless a factual programme reference requires naming them.

## What not to do

- Do not implement PEO/PLO interactions, curriculum, track cards, leadership, or academic team behavior yet.
- Do not rewrite official statements into unsupported claims.

## Done when

The four sections contain factual, readable content and remain responsive and accessible.

## Verification steps

- Check official statements and supplied career titles against the source.
- Check Introduction, Synopsis, Direction, and career navigation anchors.
- Design check: editorial layouts, modular career panels, typography, spacing, and mobile rules follow `design.md`.
- Check no unsupported programme facts appear.

## Localhost test before continuing

After this card, the learner should test:

- Introduction and Synopsis are readable from the page and navigation.
- Vision, Mission, Educational Goal, and Programme Aim are visible and nested anchors work.
- Career categories reveal supplied roles and the mobile layout has no overflow.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the learner verifies the four sections. Do not begin Work Card 04 until `continue`.

## Status
Complete
