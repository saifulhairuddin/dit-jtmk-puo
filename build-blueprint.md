# Build Blueprint

## Source Files
`project-brief.md`, `architecture.md`, `design.md`, and the supplied official DIT programme document.

## Project Identity
DIT // JTMK.PUO, Diploma in Information Technology, Department of Information and Communication Technology, Politeknik Ungku Omar.

## Build Shape
One responsive content-led React page with static data and UI-only state.

## Version-One Promise
Help prospective students understand the official programme, careers, outcomes, curriculum, and exactly three PUO pathways: SAD, NS, and IS.

## Scope Lock
### Now
Hero, official 11-item content structure, smooth navigation, careers, PEO/PLO, curriculum exploration, three tracks, leadership, academic team, responsive/accessibility behavior, and guarded CTA links.
### Later
Approved additional resources and official destinations.
### Never
Auth, accounts, backend, database, payments, APIs, portal, dashboard, complex admissions, invented facts, or excluded national tracks as PUO tracks.

## Architecture Summary
Vite + React + plain CSS. Components: SiteHeader, Hero, EditorialSection, CareerExplorer, DirectionGrid, OutcomeCards, CurriculumExplorer, CourseCard, TrackExplorer, Leadership, AcademicTeam, FinalCTA, Footer. Data lives separately from components.

## Data / State / Storage Rules
Static data modules for programme, careers, outcomes, courses, tracks, leadership, and lecturers. UI state: active section, menu, active track, active semester, expanded PEO/PLO, career category, team filter/search. No storage.

## Design Direction Summary
Dark charcoal/black Perak-yellow developer interface translated into a distinct academic identity. Use large sans-serif display type, monospace technical metadata, thin borders, modular grids, restrained motion, high contrast, and no copied branding or generic effects.

## Implementation Rules
Preserve official wording/data. Keep empty APPLY_URL and ENQUIRY_URL values from creating broken links. Use semantic controls and reduced-motion CSS. The primary action is `Explore the Programme`.

## File and Folder Expectations
`src/components/`, `src/data/`, `src/config/externalUrls.js`, `src/styles/`, `src/App.jsx`, and `src/main.jsx`.

## Curriculum Explorer Contract
Controls are exactly `SAD | NS | IS` x `Semester 01 | 02 | 03 | 04 | 05 | 06`, default SAD + 01. Render common curriculum plus selected-track electives. Course cards include classification, code, name, L/P/T/O, credits, and prerequisite.

### Three-track elective mapping
- SAD: `DFP30313` Digital Multimedia; `DFP40433` Business Intelligence; `DFP40443` Full Stack Web Development; `DFP40453` Mobile Application Development; `DFP50463` Java-Based Application Development.
- NS: `DFN30533` Switching and Routing Essentials; `DFN40503` Embedded Internet of Things (IoT); `DFN40543` Enterprise Network; `DFN40553` Structured Cabling in Networking; `DFN50563` Advanced Server Administration.
- IS: `DFS30273` Information Security; `DFS40293` Ethical Hacking; `DFS40303` Information Security Management System; `DFS40373` Malware Analysis; `DFS50383` Digital Forensics.

All three use `DFT50194` Integrated Project, 04 credits, prerequisite all core computing courses. Semester 06 uses `DUT60089` Industrial Training, 09 credits.

## Track Explorer
Render exactly three cards: SAD, NS, IS. Selecting a card updates the shared curriculum `activeTrack`; selecting the curriculum track updates the card selection.

## PEO / PLO Interactions
Four accessible expandable PEO cards and exactly 11 accessible expandable PLO cards using complete official statements. Use `button`, `aria-expanded`, and controlled regions.

## Career Explorer
Group only supplied roles into readable categories such as software, web, networking, cybersecurity, data/analytics, and support. No invented roles.

## Programme Leadership
Use only confirmed leadership records and mailto links. No invented photos or credentials.

## Academic Team Search / Filter
Provide ALL, SAD, NS, IS filters and search by name/email/track using only the supplied lecturer dataset. Do not fabricate missing lecturers.

## Navigation and Anchors
Eight top-level anchors: `#introduction`, `#synopsis`, `#careers`, `#direction`, `#peo`, `#plo`, `#curriculum`, `#tracks`; nested `#educational-goal` and `#programme-aim`. Hero CTA targets Introduction. Active nav uses lightweight scroll observation.

## Responsive Behaviour
Desktop uses editorial grids and three track columns; tablet reduces columns; mobile stacks sections/tracks and changes course rows to cards with no page overflow.

## Animation and Accessibility
Subtle reveal/hover/selected transitions; respect `prefers-reduced-motion`; semantic headings, landmarks, focus-visible states, accessible tabs/accordions, and programmatic state.

## External URL Placeholders
```js
export const APPLY_URL = '';
export const ENQUIRY_URL = '';
```
Empty values must be disabled or labelled unavailable, never broken links.

## Implementation Sequence
1. Skeleton/global system. 2. Shell/navigation/hero/footer. 3. Intro/synopsis/direction/careers. 4. PEO/PLO. 5. Course data/curriculum. 6. SAD/NS/IS mapping and special states. 7. Track synchronisation. 8. Leadership/team. 9. Responsive/accessibility polish and verification.

## Work Card Plan
01 project skeleton; 02 shell/navigation/hero/footer; 03 editorial content/careers; 04 PEO/PLO; 05 curriculum; 06 mappings/special states; 07 track sync; 08 leadership/team; 09 polish/final verification.

## Acceptance Checks
Hero shows `03 TECHNOLOGY TRACKS`; Explore scrolls to Introduction; anchors work; official 11-item structure appears; exactly SAD/NS/IS render; excluded national tracks never appear as PUO offerings; SAD/NS/IS x Semester 01-06 works; curriculum metadata is accurate; PEO/PLO/career/team interactions work; CTA URLs are honest; mobile has no overflow; production build passes.

## Guardrails for the Coding Agent
Read `build-status.md`, `build-blueprint.md`, and the current Work Card first. Implement only that card, stop after verification, and update status. No backend/auth/database/API/secrets/invented claims. Preserve exact supplied programme data. Treat legacy `Build Mode` as `Build Shape`. Do not implement ahead of the learner's current Work Card.
