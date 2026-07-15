CourtReady Sprint 5.0.2 — Case Health Intelligence

Turns the existing Case Intelligence summary into an accessible, evidence-led preparation report without changing McKenzieCMS authentication, field mappings or database structure.

## CourtReady 5.0.2 — Case Health Intelligence

- Calculates Overall Case Readiness, Evidence Coverage, Timeline Coverage, Outstanding Issues and Information Still Needed from the selected case and its existing persisted `case_items`.
- Measures completeness, organisation and evidential support only; it does not assess legal merits, prospects of success or likelihood of winning.
- Adds an accessible Case Health Report with Completed, Needs Attention and Information Still Needed sections.
- Identifies supported and unsupported facts, available evidence, established and incomplete chronology, disputed matters, missing valuations, missing statements, missing dates and unanswered intake sections.
- Derives a recommended next action from the highest-priority unresolved preparation item.
- Links report items back to the relevant Case Intelligence category where practical.
- Supports a visible Close action, Escape-key closure, keyboard focus containment and responsive mobile presentation.
- Uses the existing `clients` and `case_items` data only for health scores; local publication-queue records are listed for review but do not improve readiness.
- Requires no new tables, SQL changes or McKenzieCMS field-mapping changes.

CourtReady Version 5.0.1 — Case Intelligence Foundation

Adds a case-specific intelligence overview while preserving the existing Case Builder, Property, Finance, Investigation and McKenzieCMS workflows.

## CourtReady 5.0.1 — Case Intelligence Foundation

- Adds Case Intelligence immediately after an existing case is selected.
- Summarises facts, supporting evidence, matters to resolve, information still needed, timeline events and the publication queue.
- Adds evidence coverage, timeline coverage, outstanding-issue, missing-information and overall-readiness indicators.
- Shows structured fact cards with statement, category, source, evidence status, confidence and publication status.
- Adds a reviewable publication queue linked to the existing Investigation workspace.
- Keeps all newly identified intelligence in a working queue until the user explicitly selects and publishes approved records.
- Continues to use the existing McKenzieCMS `clients` and `case_items` records; no database tables or SQL changes are required.
- Preserves existing authentication, case loading and creation, saved progress, Property and Housing, Bank Accounts and Funds, and Investigation workflows.

# CourtReadySupport.co.uk Website Launch Notes

This folder contains a static website for CourtReadySupport.co.uk.

## Files

- `index.html` - main website page.
- `legal-hub.html` - plain-English court preparation information hub.
- `privacy.html` - privacy notice page.
- `styles.css` - website styling.
- `script.js` - mobile menu and enquiry email drafting.
- `assets/` - logo and website images.

## Before publishing

- Confirm the live enquiry email address in `script.js`.
- Confirm the privacy email and postal address in `privacy.html`.
- Replace or remove the "privacy@courtreadysupport.co.uk" placeholder if that address is not active.
- Review the service boundary wording before launch.
- Add hosting form handling if you want enquiries submitted directly instead of opening the visitor's email app.

## Netlify deployment

This folder is ready for Netlify as a static site.

Recommended Netlify settings:

- Base directory: leave blank if this folder is uploaded directly.
- Build command: leave blank.
- Publish directory: `.`.
- Production domain: `courtreadysupport.co.uk`.

Included Netlify files:

- `netlify.toml` - publish settings and clean `/privacy` route.
- `_redirects` - friendly privacy page route.
- `_headers` - basic security headers and asset caching.
- `404.html` - not-found page.
- `robots.txt` - search engine crawl permission.
- `sitemap.xml` - basic sitemap for the home and privacy pages.

## Upload

For a manual Netlify deploy, drag the full contents of this folder into Netlify's deploy area. If connecting a Git repository, set this folder as the publish directory or deploy from this folder as the site root.

## Roadmap workspace

The Version 4 roadmap workspace is included as `roadmap.html`. The AI Coach panel has been removed. The page now focuses on stage navigation, readiness tracking, bundle planning, hearing countdown, judge focus and private browser-saved notes.


## Case Builder Foundation 1.2
- My Cases remains inside the Case Builder.
- Existing visible CMS cases are listed and selectable.
- Existing case fields and compatible case items pre-populate the interview.
- Creating a new case is a separate deliberate action with duplicate checks.
- The full CMS remains available as a secondary workspace.


## Case Builder Foundation 1.2.2
- Restores a persistent, prominent Create New Case route above the existing case list.
- Adds a second Create New Case action below the list for discoverability.
- Existing cases remain the primary selection path and duplicate checks remain active.


Case Builder Foundation 1.2.3: replaced the simplified Case Builder header with the full responsive CRS site header and navigation.


## Case Builder 1.3.0
- Reconnected to the current McKenzieCMS Supabase project configuration.
- Removed embedded legacy CMS directory.
- Existing cases load from current McKenzieCMS.
- New cases set both user_id and owner_user_id to avoid unassigned records.
- Full workspace links open mckenziecms.co.uk with the selected case ID.

## Case Builder Foundation 1.4
- Adds a persistent case-specific dashboard after case selection.
- Saves one structured Case Builder progress record in `case_items` under section `builder`.
- Restores the last saved interview step and structured answers.
- Shows progress, next court event, evidence categories and next incomplete section.
- Allows direct review of any introductory section.
- Keeps McKenzieCMS as the full administrative workspace.


## Case Builder 1.4.1
- Final save now returns directly to the selected case dashboard.
- Main case updates are no longer hidden by a secondary progress-record failure.
- Save errors and partial-save warnings are shown visibly beside the workflow and in the status banner.

## Case Builder Foundation 1.5
- Adds the first substantive evidence-led module: Property and Housing.
- Adds four guided stages covering relevant properties, ownership/value, evidence/disputes, and housing needs/outcome.
- Saves module progress to the current McKenzieCMS `case_items` data model without new SQL.
- Creates structured case items for property assets, issues, evidence gaps, chronology material and the proposed property outcome.
- Dashboard now distinguishes the completed introductory foundation from the substantive Property and Housing module.

## Build 2.0 — CourtReady Investigation Engine

- Converts saved Property and Finance interview material into proposed facts, evidence records, gaps, issues and chronology entries.
- Adds a controlled manual investigation entry for new factual points.
- Presents all proposed additions for review with individual selection controls.
- Publishes only approved records to the selected McKenzieCMS case.
- Adds duplicate-publish protection for previously published Investigation Engine records.
- Records each publishing batch in the Case Builder audit trail.
- Uses the existing McKenzieCMS `clients` and `case_items` structure; no SQL changes are required.

## Build 2.1 — McKenzieCMS field mapping fix
- Facts now publish as populated native Notes records.
- Disputed issues now publish as populated native Notes records requiring action.
- Evidence publishes to the native Evidence section using title, source, type, relevance, bundle reference and notes.
- Evidence gaps publish to Hearing Prep using task, owner, risk and notes.
- Chronology events publish to Timeline using the native event fields.
- Existing blank test notes created by 2.0 are not automatically deleted and may be removed manually.


## Build 2.1
- Adds published Investigation Engine read-back inside CourtReady.
- Reads native McKenzieCMS Notes, Evidence, Hearing Prep and Timeline records created by the engine.
- Filters published intelligence by Facts, Evidence, Gaps, Issues and Chronology.
- Keeps the user in the Investigation workspace after publishing and shows the saved result immediately.

## CourtReady Investigation Platform 3.0

This release replaces the manual Investigation Engine entry form with a guided conversational workspace.

### Added

- Free-text case investigation conversation.
- Rule-based extraction of candidate facts, dates, evidence references, gaps and disputed points.
- Targeted follow-up sequence covering evidence, competing accounts and missing information.
- Live structured findings panel with category filters.
- Review-before-publish controls remain mandatory.
- Approved records publish to the native McKenzieCMS Notes, Evidence, Hearing Prep and Timeline sections.
- Conversation and unpublised working proposals are stored locally per case until approved.
- Existing 2.x Investigation Engine records remain readable.

### Important limitation

Build 3.0 is a transparent guided analysis engine, not unrestricted generative AI. It uses deterministic extraction and follow-up rules so users can test the investigation workflow safely before a server-side AI service is introduced.


## CourtReady Investigation Platform 4.0
- Makes Investigation the primary post-foundation action.
- Reframes the workspace around “Tell me your story”.
- Adds prompt starters for money, property, conflicting accounts and missing disclosure.
- Splits longer accounts into multiple candidate factual propositions.
- Detects mentioned financial amounts for separate tracing and verification.
- Adds a live current-line-of-enquiry card and timeline counter.
- Preserves explicit review and approval before publication to McKenzieCMS.
