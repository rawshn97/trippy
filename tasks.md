# Kitelyne Project Tasks & Research Notes

Meeting Context: Preparation for upcoming strategy and alignment meeting between Anand and Roshan.

---

## Action Items

- [ ] **Anand**: Make three workflows of the use cases.
- [ ] **Roshan**: Highspot and Seismic research.
  - [x] Seismic product UI, architecture, and resource breakdown (Completed below).
  - [ ] Highspot deep dive and comparison matrix.

---

## Part 1: Seismic Research Overview

### What is Seismic?
Seismic is an enterprise sales enablement and content management cloud. It bridges internal marketing repositories (Drive, SharePoint, Box) and external sales interactions. Its primary function is ensuring revenue teams only present approved, on-brand, and current-version collateral to prospects while tracking buyer engagement.

---

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

---

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

### Key Takeaways for Kitelyne's Design

1. **Single-Glance Verification**: Seismic solves document sprawl through strict expiration dates and "Certified" badges, but its interface is notoriously heavy and enterprise-dense. Kitelyne's macOS Finder / Chrome file explorer approach offers a much faster, lighter alternative for fast-moving teams.
2. **Lead Association**: In Seismic, lead info lives inside CRM widgets. In Kitelyne, displaying the lead and deal stage directly inside the primary file row allows document creators to see commercial context immediately.
3. **Version Checkbox**: Having an explicit confirmation checkbox or toggle directly in the row (`Latest in Use: [x]`) eliminates ambiguity when sales reps pull pitch decks or quote sheets.
