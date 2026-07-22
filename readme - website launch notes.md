CourtReady Version 5.1 — Calm Guided Workspace

## Version 5.1 — Calm Guided Workspace

- Introduces Guided View as the default, showing the selected case, one recommended next step, a concise case summary and important attention items.
- Retains Full Workspace with the complete Case Intelligence dashboard, filters, evidence metadata, Relationship Engine, publication history and technical controls introduced through Version 5.0.7.
- Adds browser-saved Guided View and Full Workspace preference without database or SQL changes.
- Uses accessible progressive disclosure for what CourtReady understands, documents and evidence, timeline information, unresolved matters, review work and Advanced Tools.
- Simplifies My Cases cards to a concise case identity, status and Continue action, with secondary metadata and workspace links inside More.
- Adds a short guided navigation containing My Cases, Continue My Case, Documents and Evidence, Check What CourtReady Identified and Help.
- Uses plain-language Guided View labels such as Important points, What may be missing, What happened and when, Connected information and Add approved information to my case.
- Reduces first-time complexity to a five-step journey while preserving explicit review and final McKenzieCMS publication confirmation.
- Keeps critical errors, failed saves, failed publications, deadlines and important evidence gaps visible; relevant Guided View disclosures open automatically when attention is required.
- Preserves all existing case, Property, Finance, Investigation, Evidence, Review, Case Health, relationship and McKenzieCMS behaviour. No functionality was removed.
- Defers Focus Mode because the current structured data cannot reliably distinguish all requested focus areas without broader case-type inference and regression risk.

CourtReady Sprint 5.0.7 — Relationship Engine and Connected Case View

## Sprint 5.0.7 — Relationship Engine and Connected Case View

- Adds a Connected Case workspace for the selected case with live counts for people, facts, evidence, matters to resolve, information still needed, assets and property, accounts and transactions, timeline events, actions and published records.
- Formalises reviewed, directional many-to-many relationships in an existing structured `case_items` Builder record (`relationship_engine_v507`), including record types, relationship type, explanation, source reference, review and publication status, timestamps and user identity where available.
- Uses deterministic proposal identities, legacy-link reconciliation, tombstones and serialised case-scoped writes so relationships remain stable across catalogue rebuilds, refreshes and case switching.
- Reuses Evidence Workspace links and publication receipts in the connected view instead of copying the underlying evidence, facts, timeline records or published records.
- Adds accessible connected-record cards and a responsive detail panel with grouped direct relationships, relationship counts, source and status information, add/edit/remove controls and publication source-chain navigation.
- Adds reviewed relationship creation with target search and category filtering, exact duplicate and self-link prevention, optional explanation and source reference, and immediate refresh of both connected records.
- Adds transparent, rule-based suggestions using shared dates and amounts, account-number suffixes and wording overlap. Suggestions require Accept, Edit and Accept, Dismiss or Not Applicable; none are saved automatically.
- Adds a rule-based Missing Links view for facts without evidence, unlinked evidence, timeline events without sources, transactions without accounts, assets without ownership information, issues without facts and publication records without source links.
- Preserves publication outcomes accurately: Published and Updated results create source-chain links, Skipped duplicates remain distinct, and Failed attempts do not improve publication relationship health.
- Keeps the original module or investigation-account source in each publication receipt so the Source of, Included in, Published as and Duplicate of chain can be reopened after case reload.
- Shows publication destination, reference and recorded date in the reviewable source-chain view; source-chain receipts that cannot be saved immediately are visibly marked Pending or Unpreserved and queued for retry where browser storage is available.
- Reconciles evidence by stable identity and last-updated time, edits individual evidence relationships without replacing sibling links, and prevents exact directional duplicates across Evidence Workspace and Connected Case records.
- Uses direction-aware relationship rules for health and missing-link checks so incoming evidence/source links and outgoing ownership, account and publication links are counted consistently.
- Extends Case Health with organisation and traceability indicators for linked facts, evidence, timeline events, issues, transactions, assets and published source chains. These indicators do not assess legal merits or prospects.
- Preserves reviewed publication controls, McKenzieCMS authentication and field mappings, case ownership, existing modules, duplicate-evidence handling and responsive CourtReady branding.
- Uses a structured list and column-based explorer rather than a decorative graph. No database table, column or SQL migration is required.

CourtReady Sprint 5.0.6 — Evidence Upload and Fact Linking

## Sprint 5.0.6 — Evidence Upload and Fact Linking

- Adds a dedicated Evidence Workspace for the selected case, with calculated totals for linked, unlinked, incomplete, conflicting and missing evidence.
- Supports controlled registration of existing McKenzieCMS evidence records. Direct browser upload is intentionally unavailable because this repository contains no reusable storage bucket, upload function, MIME/size policy or storage RLS contract.
- Adds document metadata covering type, date, source, file reference, completeness, original-document status, evidential role and sensitivity notes.
- Allows one evidence item to link to multiple facts, issues, gaps, timeline events, assets, transactions, people, property and financial records, including relationship type and optional page, paragraph, transaction or image references.
- Persists draft evidence metadata and relationship maps in an existing structured `case_items` Builder record; no new table, column or SQL migration is required.
- Adds rule-based missing-document findings, unsupported-fact views and advisory evidence duplicate detection.
- Publishes approved evidence only to the existing McKenzieCMS Evidence destination, with explicit confirmation, failure retention, retry support and evidence-specific publication receipts.
- Updates Case Health evidence coverage to use linked evidence, completeness and conflicts rather than treating every uploaded or registered document as useful support.
- Refresh safety: reconciles historical Evidence Workspace records by stable evidence identity, suppresses duplicate native readback, and prevents repeated Save actions from registering the same evidence twice.

CourtReady Sprint 5.0.5 — Investigation Review and Publishing Clarity

## Sprint 5.0.5 — Investigation Review and Publishing Clarity

- Adds a dedicated Review Centre for the selected case, reached from Case Intelligence, the Investigation workspace, the Publication Queue and relevant recommended-next-step prompts.
- Introduces the review states Draft, Proposed, Reviewed, Approved, Published, Rejected and Failed, with editable wording and recoverable rejected or failed records.
- Groups proposals into Facts, Supporting Evidence, Matters to Resolve, Information Still Needed, Timeline Events and Actions, with status/category filters and wording/source search.
- Shows each proposed record's source, evidence/support status, date, related section and intended McKenzieCMS destination before approval.
- Adds advisory duplicate detection using existing selected-case records. Skip is the default; updating, keeping both or merging requires an explicit decision and final confirmation.
- Replaces direct list publication with a confirmation step and per-record processing. A failed item remains available for correction or retry without reversing successful records.
- Adds a session-recoverable Publication Receipt and extends published-record readback with date, destination, source batch and active-state labels.
- Preserves existing McKenzieCMS authentication, case ownership, database tables and field mappings. No SQL migration is required.

CourtReady Sprint 5.0.4 — Guided First-Use Experience

Improves first use and returning-user orientation inside the Case Builder while preserving the existing McKenzieCMS data model, authentication, publishing and case workflows.

## Sprint 5.0.4 — Guided First-Use Experience

- Adds a calm signed-in welcome with equal routes to existing-case selection and deliberate new-case creation.
- Explains the five-stage path from case selection through foundation, investigation, review and approved McKenzieCMS publication.
- Adds compact current-case context across the dashboard, foundation, Property, Finance and Investigation workspaces.
- Adds a dashboard checklist using Not started, In progress, Foundation complete, Ready for review and Published statuses.
- Distinguishes Draft, Proposed, Reviewed and Published information with a persistent status guide.
- Derives a recommended next step from foundation, investigation, proposal, publication and missing-information state.
- Enhances My Cases cards with foundation status, proposed and published counts, last-updated information and three clear actions.
- Restores the last explicitly selected case, workspace area, draft answers and unpublished findings for returning users.
- Adds actionable empty states for cases, foundation progress, investigation findings, proposed records, published records, evidence and timeline information.
- Replaces broad completion wording with Section complete, Foundation complete, Module complete and Published to case.
- Adds no tables or SQL and makes no changes to McKenzieCMS authentication, ownership, field mappings or publishing behaviour.

CourtReady Sprint 5.0.3 — Landing Page Feature Showcase

Redesigns the public landing page around CourtReady’s current guided case-building, investigation, evidence-organisation and Case Intelligence capabilities.

## Sprint 5.0.3 — Landing Page Feature Showcase

- Refocuses the hero on turning scattered information into an evidence-led case, with direct Case Builder and workflow actions.
- Adds a restrained Case Intelligence and Guided Investigation release banner.
- Adds six plain-language capability cards covering guided case building, Investigation, Case Intelligence, evidence-led preparation, McKenzieCMS and TrustLocker.
- Adds a five-step review-before-publication workflow, before-and-after comparison and connected-platform explanation.
- Adds a clearly labelled, non-interactive Case Intelligence illustration without fabricated scores or customer data.
- Strengthens service-boundary wording and adds a final Case Builder call to action.
- Updates landing-page SEO metadata for guided case preparation, evidence organisation, case intelligence and litigants in person in England and Wales.
- Preserves the existing header, footer, support, roadmap, legal hub, enquiry form and responsive navigation.
- Makes no changes to authentication, Case Builder logic, McKenzieCMS mappings, TrustLocker integration, database configuration or SQL.

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

## Version 5.2 — ES2 Asset Schedule Analysis

- Adds an ES2-inspired working asset schedule without describing it as an official ES2 document.
- Compares applicant, respondent, documentary and user-selected Working Figures side by side.
- Adds ownership, beneficial-ownership, valuation-status and documentary-source analysis.
- Calculates transparent column totals, party differences and configurable percentage-difference bands.
- Detects potentially stale valuations and rule-based missing-information prompts.
- Links working asset records to existing evidence, facts, timeline, disclosure, questionnaire and relationship records.
- Routes asset records and proposed Information Still Needed items through the Review Centre.
- Excludes calculated totals from publication to McKenzieCMS.
- Adds responsive desktop tables, tablet cards and mobile stacked records.

## Version 5.3 — Income, Needs and Affordability Analysis

- Adds separate Applicant and Respondent monthly income and expenditure records.
- Calculates income, expenditure, scenario adjustments and projected monthly surplus or shortfall transparently.
- Records source, evidence date and notes for every financial category.
- Adds housing capital requirement, mortgage capacity and capital-gap calculations.
- Imports reviewable suggestions from the existing Form E Analysis without overwriting the source analysis.
- Flags unsourced and potentially stale figures and missing mortgage-capacity information.
- Routes selected working records and missing-information prompts through the Review Centre.
- Excludes calculated totals from publication and makes no settlement recommendation.
- Adds responsive desktop, tablet, mobile and print layouts.

## Version 5.4 — Pension Analysis

- Adds individual pension records for Applicant, Respondent and unclear ownership.
- Records scheme type, status, CETV, valuation date, projected annual income and retirement ages.
- Keeps CETV capital arithmetic separate from retirement-income information.
- Adds transparent user-selected sharing directions and percentages without recommending an outcome.
- Imports reviewable pension suggestions from Form E Analysis and the working Asset Schedule.
- Flags stale CETVs, missing statements, missing income projections and mismatched sharing directions.
- Identifies defined-benefit and public-sector records where specialist review has not been assessed.
- Routes pension records and missing-information prompts through the Review Centre.
- Excludes calculated totals from publication and adds responsive and print layouts.

## Version 5.5 — Settlement Scenario Analysis

- Adds multiple named, user-entered settlement scenarios with side-by-side comparison.
- Reads a current baseline from the saved Asset Schedule, Income and Needs, and Pension Analysis.
- Compares capital allocations, liquidity, housing gaps, monthly affordability and pension CETVs separately.
- Records sale costs, estimated tax, other implementation costs, dates, property outcomes and refinancing status.
- Identifies unallocated or over-allocated capital and missing source assumptions.
- Preserves CETV comparisons separately from pension-income consequences.
- Blocks without-prejudice scenarios from the publication Review Centre.
- Routes open working scenarios and missing-information prompts through the Review Centre.
- Makes no recommendation, fairness assessment or prediction and adds responsive and print layouts.
