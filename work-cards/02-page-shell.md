# Work Card 02 - Page Shell

## Goal

Build the DIT/JTMK/PUO page shell: sticky navigation, hero, smooth-scroll anchors, programme status panel, and footer.

## Inputs

- `build-blueprint.md`
- `architecture.md`
- `design.md`
- `work-cards/01-project-skeleton.md`

## Files likely touched

- `src/App.jsx`
- `src/styles/global.css`
- `src/styles/components.css`
- `build-status.md`

## Instructions for the coding agent

- Replace the Work Card 01 temporary marker with the page shell only.
- Add a sticky accessible header with `DIT // JTMK.PUO`, eight top-level in-page links, and a compact mobile menu.
- Add a hero with DIT, JTMK, PUO identity, `Explore the Programme` as the primary action targeting `#introduction`, and a status panel showing `03 TECHNOLOGY TRACKS`.
- Add empty anchor sections for Introduction, Synopsis, Job Prospects, Direction, PEO, PLO, Curriculum, Tracks, Leadership, and Academic Team so navigation can be verified without implementing their content.
- Add a technical footer with institution identity and internal links.
- Keep navigation smooth-scroll and responsive. Use accessible labels, active/selected styling where possible, and no invented programme content.

## What not to do

- Do not implement programme content, curriculum data, career roles, PEO/PLO details, track cards, leadership records, or academic directory behavior yet.
- Do not add external URLs, backend, auth, database, API, or additional tracks.

## Done when

- Header, hero, anchor sections, and footer render.
- Hero CTA targets Introduction.
- Eight navigation anchors work and mobile menu is usable.
- `03 TECHNOLOGY TRACKS` is visible.
- Production build succeeds.

## Verification steps

- Test every top-level navigation link and the hero CTA.
- Test the mobile menu open/close and link selection.
- Design check: shell follows `design.md` navigation, hero, typography, grid, contrast, spacing, and mobile rules.
- Confirm no programme facts or track names beyond the approved shell statistic are invented.

## Localhost test before continuing

After this card, the learner should test:

- `npm run dev` loads the shell and the hero is visible.
- Clicking `Explore the Programme` and each navigation link moves to the correct anchor.
- The mobile menu opens, closes, and leaves no horizontal overflow.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after shell verification and learner localhost checks. Do not begin Work Card 03 until the learner replies `continue`.

## Status
Complete
