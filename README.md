# Trippy: Gen Z AI Verbatim Google Drive Agent

> Stop searching Google Drive with exact file names you lowkey cannot remember. No cap.

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Manifest](https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue.svg)](extension/manifest.json)
[![Compliance](https://img.shields.io/badge/Security-Zero%20Document%20Retention-green.svg)](#security--compliance)
[![Status](https://img.shields.io/badge/Status-Beta%20Q4%202026-teal.svg)](#join-the-waitlist)

---

## The Problem: Google Drive Search Is Cooked

In high-growth B2B SaaS companies, internal knowledge is scattered across hundreds of Google Docs, Sheets, and Slides. Traditional Google Drive search fails knowledge workers every single day for two reasons:

1. **Exact Verbatim Dependency**: Users search with colloquial intent (*"pricing sheet"*, *"who owns churn"*, *"competitor research"*), but documents are officially titled with formal corporate naming conventions (*"FY26 RevOps Commercial Model & Tier Matrix v4"*, *"Client Success RACI & Retention OKR Governance"*, *"Market Landscape Audit & Feature Parity Teardown Q3"*). Zero exact matches are returned.
2. **Draft Sprawl**: Teams drown in obsolete scratchpads, deprecated proposals, and duplicate copies from previous quarters (*"pricing_draft_2021_old.xlsx"*, *"copy_of_copy_pricing_notes.gdoc"*).

---

## The Solution: Meet Trippy

**Trippy** is a laid-back, high-all-the-time AI paperclip mascot with red bloodshot eyes, droopy sleepy eyelids, a gold chain, and a joint. Trippy translates your fuzzy human thoughts into exact enterprise file titles, filters out 10 obsolete drafts, and drops the canonical approved file in under 1 second. Fr fr.

---

## 4 Superpowers

1. **Verbatim Translation Engine (Rizz Up Your Drive)**:
   Maps colloquial phrasing directly to canonical company documents through an intent-to-verbatim bridge.
2. **Red-Eye Anti-Draft Filtering (Deadass Canonical)**:
   Evaluates editor telemetry, approval tags, and version metadata to promote the single canonical file while silencing draft clutter.
3. **Folder & Sibling Intuition (Main Character Energy)**:
   Exposes the exact folder path inside Google Drive and counts sibling files so you can explore the entire project cluster with one click.
4. **100+ Gen Z High Easter Eggs & Roasts (Hits Different)**:
   Packed with 25 found quotes, 25 not-found roasts, 25 rotating idle thoughts, 15 click wobble reactions, and secret triggers like `420`, `trippy`, `cooked`, `rizz`, and `munchies`.

---

## Chrome Extension Installation (15 Seconds)

The extension is built under **Manifest V3** and runs directly inside Google Chrome across `docs.google.com` and `drive.google.com`.

1. Clone or download this repository:
   ```bash
   git clone https://github.com/rawshn97/trippy.git
   ```
2. Open Google Chrome and go to `chrome://extensions` in the address bar.
3. Toggle **Developer mode** ON in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select the `extension/` directory inside this repository.
6. Open any Google Doc (e.g. `docs.google.com`) or Google Drive to see Trippy floating in the bottom-right corner!

Alternatively, download the pre-packaged zip from `downloads/trippy-extension.zip`.

---

## Security & Enterprise Compliance

Designed for security-conscious SaaS workspaces with zero compromises:

- **Zero Document Body Retention**: Document text is never copied, downloaded, or cached on external servers. Trippy operates on ephemeral metadata vectors in RAM within your Google Cloud VPC.
- **Scoped OAuth 2.0**: Requests the minimum permissions required to inspect file metadata. Zero write, edit, or delete access.
- **SOC 2 Type II & GDPR Ready**: Strict data privacy and enterprise governance controls.
- **AES-256 & TLS 1.3**: Encryption at rest and in transit.

---

## Repository Structure

```
trippy/
├── index.html                   # Standalone landing page with interactive sandbox
├── README.md                    # Project documentation
├── LICENSE                      # MIT License
├── vercel.json                  # Standalone Vercel deployment configuration
├── downloads/
│   └── trippy-extension.zip     # Pre-packaged Manifest V3 Chrome extension
└── extension/
    ├── manifest.json            # Chrome Manifest V3 descriptor
    ├── content.js               # Client-side agent, SVG mascot & verbatim bridge
    ├── content.css              # Isolated styles, keyframes & animations
    └── icons/                   # High-res extension icons (16, 48, 128px)
```

---

## Author & Credits

Built with precision and chill vibes by **Roshan Raj Mishra** ([rawshn.com](https://rawshn.com)).
Contributions and PRs are welcome!
