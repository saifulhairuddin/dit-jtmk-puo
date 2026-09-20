# Architecture

## Build Shape
Content-led, single responsive page for prospective DIT students.

## Stack Decision
Vite, React, plain CSS, static local data, UI state only. No persistence, backend, authentication, database, payment, or live API.

## Structure Overview
Hero; Introduction; Synopsis; Job Prospects; Vision/Mission with anchored Educational Goal and Programme Aim; PEO; PLO; Programme Structure; Technology Tracks; Programme Leadership; Academic Team; CTA; Footer.

## Component Map
`SiteHeader`, `HeroSection`, `EditorialSection`, `CareerExplorer`, `InstitutionalSection`, `OutcomeCards`, `ProgrammeStructure`, `TrackExplorer`, `Leadership`, `AcademicTeam`, `FinalCallToAction`, `SiteFooter`.

## Data / State Model
Static programme, career, outcome, course, track, leadership, and lecturer data. UI state includes active section, mobile menu, active track, active semester, expanded outcomes, career category, and academic team filter/search. Track data has exactly three records: SAD, NS, IS.

## Storage Logic
None.

## User Flow
Hero `Explore the Programme` smooth-scrolls to Introduction. Compact navigation moves through eight top-level anchors: Introduction, Synopsis, Job Prospects, Vision & Mission, PEO, PLO, Programme Structure, Tracks. Users explore careers, outcomes, curriculum, and exactly three tracks, then use honest enquiry/application links.

## File Expectations
Vite React structure with data separate from components, plain CSS, responsive breakpoints, accessible controls, and focus states.

## Constraints
Preserve official content and the 11 information areas. Use `03 TECHNOLOGY TRACKS`. Do not present Digital Game Programming, Data Management and Visualization, or Web Development as PUO tracks. Use supplied SAD/NS/IS curriculum mapping only.

## Technical Non-Goals
No full web application, auth, backend, database, payment, live API, portal, dashboard, or multi-page admissions system.

## Verification Notes
Check anchors, responsive behavior, PEO/PLO disclosures, career explorer, SAD/NS/IS plus Semester 01-06 controls, curriculum synchronisation, leadership/team data, and placeholder URL handling.
