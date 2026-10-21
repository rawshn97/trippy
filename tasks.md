# Kitlane Project Tasks & Research Notes

Meeting Context: Preparation for upcoming strategy and alignment meeting between Anand and Roshan.

---

## Action Items

- [ ] **Anand**: Make three workflows of the use cases.
- [ ] **Roshan**: Highspot and Seismic research.
  - [x] Seismic product UI, architecture, and resource breakdown.
  - [x] Highspot deep dive and core architecture.
  - [x] Product Module Benchmark: Highspot vs Seismic vs Kitlane.
  - [x] Scope Boundary: What Kitlane Will Build vs What Kitlane Will NOT Build.

---

## Part 1: Seismic Research Overview

### What is Seismic?
Seismic is an enterprise sales enablement and content management cloud. It bridges internal marketing repositories (Drive, SharePoint, Box) and external sales interactions. Its primary function is ensuring revenue teams only present approved, on-brand, and current-version collateral to prospects while tracking buyer engagement.

### Core UI Screens & Anatomy

#### 1. Content Library (The Central Repository)
* **What it looks like**: A hybrid between an enterprise file manager and an asset catalog.
* **Views**:
  * **List View (Density Mode)**: Resembles macOS Finder or Google Drive details view. Displays columns for Title, File Format, Version, Content Owner, Verified Badge, Expiration Date, and Usage Analytics.
  * **Grid / Tile View (Visual Mode)**: Card grid displaying high-resolution document cover previews, quick-share buttons, and status tags.
* **Governance Controls**:
  * Mandatory expiration dates (e.g., Q3 pricing sheet auto-expires on Sept 30).
  * "Approved / Verified" green badges indicating canonical status.
  * Version stack: clicking reveals previous iterations and changelogs.

#### 2. Seismic Side Panel / Extension (In-Context CRM View)
* **What it looks like**: A right-hand drawer embedded directly inside Salesforce, Microsoft Dynamics, Gmail, Outlook, or Google Chrome.
* **How it connects to Leads**:
  * Automatically detects the active Lead / Contact / Opportunity in the CRM.
  * Surfaces recommended content mapped to the deal stage (e.g., Discovery decks for Stage 1, Security Whitepapers for Stage 3).
  * Shows whether the prospect has opened previously sent files.

#### 3. LiveSend Modal (Outbound Asset Delivery)
* **What it looks like**: A share configuration dialog triggered from any file.
* **Key Elements**:
  * Link generator with custom domain masking (e.g., `links.yourcompany.com`).
  * Download permissions toggle (allow download vs view-only in browser).
  * Real-time notifications: alerts rep the instant a prospect opens the file.
  * Slide-by-slide heatmap: shows seconds spent on each page of a PDF or deck.

#### 4. Digital Sales Rooms (DSRs)
* **What it looks like**: A no-code, co-branded microsite builder for enterprise deals.
* **Key Elements**:
  * Split header with vendor logo + prospect company logo.
  * Drag-and-drop widget layout containing proposal decks, pricing sheets, mutual action plans, and embedded rep video introductions.
  * Commenting and Q&A stream for buying committee members.

#### 5. LiveDocs (Dynamic Document Personalization)
* **What it looks like**: Template builder where slide decks and contracts pull live CRM fields (customer name, ARR, SKU counts) into locked brand templates.

### Easy-to-Consume Resources & Real UI Examples

1. **Official Interactive Click-Through Product Tour**:
   - URL: [Seismic Product Tour](https://www.seismic.com/product-tour/)
   - Guided self-service tour demonstrating the UI, search filters, and content governance modules without requiring a sales call.

2. **Official Seismic YouTube Channel**:
   - Channel: [Seismic on YouTube](https://www.youtube.com/@SeismicSoftware)
   - Key Video: Search *"The Seismic Enablement Cloud Overview"* or *"Discover the Seismic Platform"* for direct UI screen recordings.
   - Key Feature Walkthrough: Search *"Sales Content Management Demo"* for library and metadata navigation.

3. **Real UI Screenshots & Unfiltered Reviews**:
   - **G2 Platform Screenshots**: [Seismic Reviews & Product Screenshots on G2](https://www.g2.com/products/seismic/reviews) (Over 1,500 reviews with dozens of verified buyer screenshots of the actual admin dashboard, content tables, and user screens).
   - **TrustRadius / Capterra**: Search Seismic image galleries for user interface captures of the mobile app, Outlook add-in, and Salesforce lightning components.

---

## Part 2: Highspot Research Overview

### What is Highspot?
Highspot is an end-to-end sales enablement platform combining content management, contextual guidance, training/coaching, and buyer engagement. While Seismic feels like a traditional, heavyweight enterprise document portal, Highspot emphasizes sales guidance ("what to say and what to show") alongside files.

### Core Architecture & UI Concepts

1. **Spots (Targeted Content Hubs)**:
   - Instead of deep file trees, content is categorized into dedicated "Spots" (e.g., by buyer persona, product line, or sales stage).
   - Spot policies enforce metadata requirements and expiration timelines so obsolete collateral is systematically pruned.

2. **SmartPages (Context Alongside Content)**:
   - Highspot's signature UI innovation. Instead of just linking a raw PDF or slide deck, a SmartPage embeds talk-tracks, objection handling tips, and competitor comparison notes directly next to the document.

3. **Pitch & Digital Sales Rooms**:
   - Reps bundle collateral into customizable, trackable sharing links or buyer portals with live view telemetry.

4. **Training & Coaching (LMS & AI Roleplay)**:
   - Built-in courses, rep certification tracks, and practice video pitches evaluated by AI and sales managers.

---

## Part 3: Comprehensive Module Benchmark (Seismic vs Highspot vs Kitlane)

| Functional Area | Seismic Modules | Highspot Modules | Kitlane Target Scope |
| :--- | :--- | :--- | :--- |
| **Interface Paradigm** | Heavy web portal, deep nested categories | Custom "Spots" and visual dashboard | **macOS Finder / Chrome File Explorer** (high-density list view, instant scanning) |
| **Version Verification** | Expiration dates, admin certification flags | Spot compliance rules, expiration tags | **Explicit "Latest in Use" confirmation checkbox (`[x]`) + stale draft warnings** |
| **Version History** | Revision log inside document details | Content revision history drawer | **Visual version tree (v1.0 -> v2.0 -> latest) with one-click audit and rollback** |
| **Lead / CRM Attribution** | Embedded CRM side panel (Salesforce, Dynamics) | CRM widgets, Opportunity matching | **First-class Lead column & chip visible directly in the file row** |
| **Search & Discovery** | Semantic search + faceted enterprise filters | AI search + Spot filtering | **Instant verbatim file search + breadcrumb directory navigation** |
| **Sales Guidance** | Battlecards, inline tips | SmartPages (talk tracks, objection handling) | **Lightweight document notes / summary only (No complex SmartPages)** |
| **Training & Coaching** | Seismic Learning (Lessonly), AI roleplay | Highspot Training, rep coaching, scorecards | **NOT BUILDING (Out of scope)** |
| **Buyer Engagement** | Digital Sales Rooms (DSRs), LiveSend | Pitch portal, Digital Sales Rooms | **Lightweight canonical link / preview (NO full DSR builder)** |
| **Document Generation** | LiveDocs (dynamic CRM data merge) | Template customization engine | **NOT BUILDING (Out of scope for initial product)** |
| **Analytics Engine** | Slide-by-slide heatmap, multi-touch ROI attribution | Engagement scoring, content win-rate correlation | **Basic view & latest-adoption telemetry (NO heavy attribution modeling)** |

---

## Part 4: Kitlane Scope Boundary (What We Will Build vs What We Will NOT Build)

### What Kitlane WILL BUILD (Core Product Vision)

1. **Finder / Explorer Native UI Layout**:
   - Three-pane architecture: Navigation Sidebar, Main File Explorer (List/Table mode), and Inspector Details Panel.
   - High-density rows displaying all critical info in a single glance: Document Name, Format, Latest Version Checkbox, Version Tag, Owner, Date, and Lead/Account context.
2. **Latest Version Confirmation Checkbox**:
   - `[x] Latest Version Confirmed`: A direct toggle to mark and verify that a file is the active, canonical version being used by the team.
   - Instant visual warning when a team member is viewing an outdated draft or branch.
3. **File Version History & Audit Trail**:
   - Slide-out drawer displaying full revision history: dates, author attribution, and concise changelog notes.
   - Quick "Promote to Latest" or rollback action.
4. **Lead Information Integration**:
   - Lead column and filterable metadata tags (e.g., `Acme Corp - Discovery - $85k`).
   - Ability to filter files by active lead or opportunity without leaving the file explorer.
5. **Browser-Native Speed & Extension Layer**:
   - Lightweight overlay / Chrome side panel that sits right inside Google Drive, Google Docs, or CRM without needing a slow $100k enterprise portal.

---

### What Kitlane Will NOT BUILD (Explicit Non-Goals & Exclusions)

1. **NO Learning Management System (LMS) or Coaching**:
   - We will not build training courses, rep quizzes, video role-play grading, or rep certification tracks (like Highspot Training or Seismic Lessonly).
2. **NO Heavy Digital Sales Room (DSR) Builder**:
   - We will not build drag-and-drop microsite builders with custom hero banners, buyer video recording widgets, or mutual action plan software. Sharing will remain clean and link-based.
3. **NO Dynamic Document Merge Engine (CPQ / LiveDocs)**:
   - We will not parse slide layers to auto-generate custom PowerPoint decks from scratch via template algorithms.
4. **NO Multi-Touch Revenue Attribution Modeling**:
   - We will not build complex econometric models calculating how much revenue slide 6 contributed to a closed-won enterprise deal.
5. **NO Complex Governance Hierarchies & Bureaucratic Taxonomies**:
   - We will not require full-time administrators to set up 50 Spot policies, approval committees, and 10-tier permission trees. Kitlane is built for immediate utility and zero setup friction.
