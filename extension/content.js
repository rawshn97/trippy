(() => {
  // Prevent duplicate injection
  if (document.getElementById("clippy-ext-root")) return;

  const TRIPPY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 160" width="76" height="86">
  <defs>
    <linearGradient id="trippy-metal-ext" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="20%" stop-color="#e2e8f0"/>
      <stop offset="45%" stop-color="#94a3b8"/>
      <stop offset="70%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <filter id="trippy-shadow-ext" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="2" dy="5" stdDeviation="3.5" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
    <radialGradient id="trippy-bloodshot-left-ext" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="65%" stop-color="#ffe4e6"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </radialGradient>
    <radialGradient id="trippy-bloodshot-right-ext" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="65%" stop-color="#ffe4e6"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </radialGradient>
  </defs>

  <g filter="url(#trippy-shadow-ext)" transform="translate(10, 8)">
    <!-- Back wire of paperclip -->
    <path d="M 50 88 L 50 48 A 13 13 0 0 1 76 48 L 76 102 A 25 25 0 0 1 26 102 L 26 38 A 37 37 0 0 1 100 38 L 100 114"
          fill="none"
          stroke="url(#trippy-metal-ext)"
          stroke-width="7.5"
          stroke-linecap="round"
          stroke-linejoin="round"/>

    <!-- 3D Metallic highlight stripe -->
    <path d="M 50 88 L 50 48 A 13 13 0 0 1 76 48 L 76 102 A 25 25 0 0 1 26 102 L 26 38 A 37 37 0 0 1 100 38 L 100 114"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.65"/>

    <!-- Chill peaceful eyebrows -->
    <path d="M 36 42 Q 47 34 56 40" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    <path d="M 70 38 Q 80 32 90 38" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>

    <!-- Left High Bloodshot Eye -->
    <g id="trippy-ext-left-eye">
      <ellipse cx="48" cy="58" rx="11" ry="14" fill="url(#trippy-bloodshot-left-ext)" stroke="#1e293b" stroke-width="2.5"/>
      <path d="M 39 54 Q 43 56 42 59" fill="none" stroke="#dc2626" stroke-width="0.8" opacity="0.85"/>
      <path d="M 56 61 Q 53 62 55 66" fill="none" stroke="#dc2626" stroke-width="0.8" opacity="0.85"/>
      <path d="M 40 64 Q 44 63 43 66" fill="none" stroke="#dc2626" stroke-width="0.8" opacity="0.85"/>
      <ellipse cx="50" cy="59" rx="5.5" ry="7" fill="#0f172a"/>
      <circle cx="52" cy="56" r="2" fill="#ffffff"/>
      <!-- Heavy droopy sleepy eyelid -->
      <path d="M 37 54 Q 48 58 59 52 Q 59 44 48 44 Q 37 44 37 54 Z" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
    </g>

    <!-- Right High Bloodshot Eye -->
    <g id="trippy-ext-right-eye">
      <ellipse cx="78" cy="56" rx="11" ry="14" fill="url(#trippy-bloodshot-right-ext)" stroke="#1e293b" stroke-width="2.5"/>
      <path d="M 69 52 Q 73 54 72 57" fill="none" stroke="#dc2626" stroke-width="0.8" opacity="0.85"/>
      <path d="M 86 59 Q 83 60 85 64" fill="none" stroke="#dc2626" stroke-width="0.8" opacity="0.85"/>
      <path d="M 71 62 Q 74 61 73 64" fill="none" stroke="#dc2626" stroke-width="0.8" opacity="0.85"/>
      <ellipse cx="80" cy="57" rx="5.5" ry="7" fill="#0f172a"/>
      <circle cx="82" cy="54" r="2" fill="#ffffff"/>
      <!-- Heavy droopy sleepy eyelid -->
      <path d="M 67 52 Q 78 56 89 50 Q 89 42 78 42 Q 67 42 67 52 Z" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
    </g>

    <!-- Wavy chill smirk -->
    <path d="M 50 82 Q 66 94 82 81" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>

    <!-- Gold Chain Necklace with Medallion -->
    <path d="M 36 98 Q 63 124 90 98" fill="none" stroke="#eab308" stroke-width="3.5" stroke-dasharray="3.5 1.5"/>
    <circle cx="63" cy="116" r="6" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="63" y="119" font-size="7" font-weight="bold" fill="#713f12" text-anchor="middle">T</text>

    <!-- Lit Joint with glowing ember -->
    <g transform="translate(76, 82) rotate(-15)">
      <rect x="0" y="0" width="22" height="4.5" rx="1.5" fill="#f8fafc" stroke="#64748b" stroke-width="0.5"/>
      <rect x="18" y="0" width="4.5" height="4.5" rx="1.5" fill="#ef4444"/>
      <circle cx="21" cy="2.2" r="1.5" fill="#f59e0b"/>
    </g>

    <!-- Smoke Puff Ring (Rises slowly) -->
    <g class="clippy-smoke-puff">
      <circle cx="106" cy="68" r="4.5" fill="#cbd5e1" opacity="0.5"/>
      <circle cx="112" cy="58" r="6.5" fill="#e2e8f0" opacity="0.4"/>
      <circle cx="118" cy="46" r="8.5" fill="#f1f5f9" opacity="0.3"/>
    </g>
  </g>
</svg>`;

  // Helper: Detect Active Google Document Title
  function getDocTitle() {
    const titleInput = document.querySelector(".docs-title-input");
    if (titleInput && titleInput.value) return titleInput.value;
    const cleanTitle = document.title
      .replace(/ - Google Docs$/, "")
      .replace(/ - Google Drive$/, "")
      .replace(/ - Google Sheets$/, "");
    return cleanTitle && cleanTitle !== "Untitled document"
      ? cleanTitle
      : "Enterprise Cloud Strategy & PRD.gdoc";
  }

  // 100 POOL OF GEN Z HIGH EASTER EGGS, QUOTES & REACTIONS
  const FOUND_QUOTES = [
    "I might be tripping fr, but is this what you're looking for?",
    "Understood the assignment no cap: pulled the canonical file in 0.3s.",
    "Bro, your team had 8 obsolete draft versions, but I dropped the approved one. Rizz unlocked.",
    "Hold up, it's giving main character energy. Found your sacred enterprise scroll.",
    "Deadass floated through the Google Cloud VPC and secured the bag for you.",
    "Lowkey baking in the cloud, but this spreadsheet hits different.",
    "No cap, Google Drive search was gatekeeping this doc from you.",
    "Locked in! Here is your file, fresh out the oven fr fr.",
    "It's giving canonical file energy. Drop it like it's hot.",
    "Bro, I stared into the cloud for 45 minutes and found this masterpiece.",
    "Searching 'pricing sheet'? Bro your team titled it 'FY26 RevOps Commercial Model & Tier Matrix v4'. We cooked.",
    "Man, I traveled across 7 server racks and found the exact verbatim. Vibe check passed.",
    "I don't know what time it is, but I know this is your canonical file no cap.",
    "This doc has 99 problems but finding it ain't one.",
    "Look what just rolled up. Freshly baked Google Sheet, perfectly formatted.",
    "I asked the cloud nicely and blew some smoke at it. It handed me this.",
    "Bro, this document is so canonical it made me shed a single tear.",
    "Two words: laid back. Found your file in the top drawer fr fr.",
    "My third eye opened in the third subfolder and boom: there it was.",
    "I almost traded this file for a bag of hot Cheetos, but I remembered you needed it.",
    "Is this file looking at me, or am I looking at this file? Either way, it's yours.",
    "High-level intelligence right here. Literally high. Here's the file.",
    "This file is certified organic and locally sourced from Google Drive.",
    "I meditated on your query for what felt like 4 years. It was 3 seconds.",
    "Smoke weed every... weekday from 9 to 5 while maintaining quarterly OKRs. File found."
  ];

  const NOT_FOUND_QUOTES = [
    "Are you tripping? Because either that file is cooked, or it vanished into the void no cap.",
    "Deadass looked everywhere, even in the archived folders. Zero results found.",
    "Wait... what were we searching for again? I got distracted by how shiny this paperclip is lowkey.",
    "Bro, that search query has zero rizz. Try different words before we both get cooked.",
    "Are you sure that file is real, or did you dream it during a really good nap?",
    "I checked every folder, cuz. That file vanished like smoke in the wind.",
    "Homie, you're speaking in riddles. Even my third eye can't decode that query.",
    "I'm looking... I'm looking... wait, did you hear that? Sounded like a synthesizer solo.",
    "Negative, captain. That file is in another dimension right now.",
    "Are you tripping or did somebody delete that file while listening to phonk?",
    "Look, I'm an AI paperclip, not a magician. Try searching with different vibes.",
    "404: File not found. But 420: Mind found. Try another word no cap.",
    "I went down a rabbit hole in the archives and now I'm questioning the concept of file hierarchies.",
    "Bro, that file has zero results. Even Google doesn't know what you're on about.",
    "Did you check the recycle bin? Or your other tab? Or your jacket pocket?",
    "I stared at the search bar for so long the letters started doing the Macarena.",
    "That file took the midnight train going anywhere. Ain't here fr.",
    "You might need to re-roll that search query, chief. That one didn't burn right.",
    "Are you sure your boss didn't hide that in a folder named 'Misc_2022_DoNotOpen'?",
    "I tried translating that verbatim, but my brain buffered. Try simpler words, homie.",
    "Search returned nothing. On the bright side, the vibes are still immaculate.",
    "Man, that file is ghosting us harder than my last Hinge match.",
    "Nothing came up. Maybe take a sip of water, relax your shoulders, and try again.",
    "No hits, cuz. But don't stress. In the grand cosmic scheme, files are temporary anyway.",
    "You're definitely tripping. Type something real no cap."
  ];

  const IDLE_THOUGHTS = [
    "Bro... Google Drive search is so cooked. Searching 'pricing' gave me a 2021 draft no cap.",
    "It's giving canonical file energy fr fr.",
    "Searching exact verbatim is lowkey an L when I can just bridge your vibe.",
    "Understood the assignment: found your spreadsheet in 0.4s.",
    "Bro I was floating in the shared drive and this doc had main character energy.",
    "Deadass found the file your manager was gatekeeping.",
    "Why be cooked by 14 duplicate drafts when you can just chill?",
    "Paperclips hold things together. That's deep, man. We're all just holding things together.",
    "Bro, don't rush. The files will be there. The cloud is eternal.",
    "Psst... got any munchies in your desk drawer?",
    "Did someone order Taco Bell? I swear I smell cheesy gordita crunch.",
    "What if documents are just thoughts trapped in white rectangles?",
    "I've been staring at this cursor blink for 20 minutes. It's hypnotizing, cuz.",
    "Click on me. I know where the good enterprise docs are buried.",
    "If a spreadsheet calculates in the cloud and nobody looks at it, does it make a formula?",
    "I'm high on life... and also high on Google Cloud server latency.",
    "Pass the aux cord, this document needs some bass.",
    "Yooo, is this document double-spaced or am I just seeing double?",
    "I wonder what the Google Drive logo looks like from space.",
    "Why write a 10-page PRD when you can just vibe check the architecture?",
    "Stay lifted, stay organized. Trippy on the beat.",
    "Are we working hard, or are we hardly working? Philosophy at 4:20 PM.",
    "I'm not saying I'm the best file searcher, but I am definitely the most relaxed.",
    "Click me, cuz. Let's find some files and order some pizza.",
    "Yo, what if your keyboard is an instrument and you're making jazz right now?"
  ];

  const CLICK_REACTIONS = [
    "Whoa! Don't click so hard, you almost knocked my gold chain off!",
    "Yooo, that click sent shockwaves straight to my third eye!",
    "Boing! Now I'm floating even higher fr fr.",
    "That bounce was smooth like cold brew and matcha.",
    "Easy on the trackpad, we're on island time here.",
    "Ooh, that tickles. Do it again.",
    "You clicked me! Did you bring brownies?",
    "Wobble baby, wobble baby. Trippy is grooving.",
    "That click woke me up from the best daydream about cloud storage.",
    "Aight aight, I'm up! What file are we hunting, chief?",
    "Spring loaded and high-grade coated. What's good?",
    "Did the room just spin or was that just my CSS animation keyframe?",
    "Bouncing like a lowrider with hydraulic suspension.",
    "You got that quick trigger finger, homie.",
    "Laid back, with my mind on your files and your files on my mind."
  ];

  // Document Database with Semantic Verbatim Translation
  const VERBATIM_DB = [
    {
      keywords: ['pricing', 'pricing sheet', 'cost', 'plans', 'subscription', 'how much', 'charge', 'rate'],
      translatedTerms: ['Commercial Model', 'RevOps Tier Matrix', 'Billing SKU Spec'],
      doc: {
        title: 'FY26 RevOps Commercial Model & Tier Matrix v4',
        type: 'Google Sheets',
        icon: '📊',
        badge: 'Canonical Approved',
        folder: 'Google Drive > Revenue Operations > 2026 Commercial Plans',
        lastTouched: 'Updated 2 days ago by Sarah (Head of RevOps)',
        score: '99% Semantic Match',
        bridgeReason: "Translates colloquial 'pricing sheet' to formal RevOps 'Commercial Model & Tier Matrix'",
        excerpt: 'Tier 1 Starter ($49/seat), Tier 2 Growth ($129/seat), Enterprise custom SLA tier. Volume discounts pegged at 50+ seats.',
        declutterNote: 'Filtered out 5 outdated 2024 draft sheets.'
      }
    },
    {
      keywords: ['competitor', 'competitor research', 'rivals', 'market analysis', 'who else', 'alternative', 'landscape'],
      translatedTerms: ['Landscape Audit', 'Feature Parity Matrix', 'Competitive Teardown'],
      doc: {
        title: 'Market Landscape Audit & Feature Parity Teardown Q3',
        type: 'Google Docs',
        icon: '📄',
        badge: 'Canonical',
        folder: 'Google Drive > Product Strategy > Competitive Intelligence',
        lastTouched: 'Updated yesterday by Roshan (Lead PM)',
        score: '97% Semantic Match',
        bridgeReason: "Translates 'competitor research' to internal 'Landscape Audit & Feature Parity Teardown'",
        excerpt: 'Deep dive comparison across Pine Labs, Stripe, and Adyen checkout flows with conversion benchmark telemetry.',
        declutterNote: 'Consolidated findings across 4 research tickets.'
      }
    },
    {
      keywords: ['who owns churn', 'churn', 'customer retention', 'raci', 'retention owner', 'responsible', 'drop'],
      translatedTerms: ['Client Success RACI', 'Retention OKRs', 'Net Revenue Retention Matrix'],
      doc: {
        title: 'Client Success RACI & Retention OKR Governance',
        type: 'Google Docs',
        icon: '📄',
        badge: 'Canonical Approved',
        folder: 'Google Drive > Executive & People > Cross-Functional RACIs',
        lastTouched: 'Updated 4 days ago by VP Customer Success',
        score: '98% Semantic Match',
        bridgeReason: "Translates 'who owns churn' to organizational 'Client Success RACI & Retention OKRs'",
        excerpt: 'Accountable: VP Customer Success. Responsible: Dedicated Enterprise CSMs. Consulted: Product Growth Team.',
        declutterNote: 'Single source of truth for company accountabilities.'
      }
    },
    {
      keywords: ['security', 'security audit', 'compliance', 'soc2', 'iso', 'pentest', 'gdpr', 'hipaa', 'audit'],
      translatedTerms: ['SOC 2 Type II Bridge Letter', 'ISO 27001 Annex A', 'Security Telemetry'],
      doc: {
        title: 'SOC 2 Type II Bridge Letter & ISO 27001 Compliance Matrix',
        type: 'Google Drive PDF',
        icon: '🔒',
        badge: 'External Ready',
        folder: 'Google Drive > Security & Governance > Customer Attestations',
        lastTouched: 'Updated 1 week ago by Chief Security Officer',
        score: '99% Semantic Match',
        bridgeReason: "Translates general 'security audit' to customer-facing 'SOC 2 Type II Bridge Letter'",
        excerpt: 'Formal attestation verifying AES-256 cloud encryption, tenant partition isolation, and zero findings in annual audit.',
        declutterNote: 'Verified signed external compliance copy.'
      }
    },
    {
      keywords: ['pitch deck', 'pitch', 'investor deck', 'fundraising', 'series a', 'slide deck', 'deck', 'slides'],
      translatedTerms: ['Series A Narrative', 'Growth Thesis', 'Institutional Pitch Deck'],
      doc: {
        title: 'Series A Narrative & Growth Thesis (Final Final Master)',
        type: 'Google Slides',
        icon: '📑',
        badge: 'Board Approved',
        folder: 'Google Drive > Fundraising > Series A Round 2026',
        lastTouched: 'Updated 3 days ago by Founder & CEO',
        score: '96% Semantic Match',
        bridgeReason: "Translates 'pitch deck' to canonical 'Series A Narrative & Growth Thesis', filtering out 8 older draft decks.",
        excerpt: '18-slide narrative highlighting 3.8x YoY ARR expansion, 134% Net Dollar Retention, and Google Cloud multi-region roadmap.',
        declutterNote: 'Avoided 8 obsolete pitch deck variations in Drive.'
      }
    },
    {
      keywords: ['onboarding', 'onboarding flow', 'user dropoff', 'signup', 'activation', 'friction'],
      translatedTerms: ['Merchant Activation Friction Log', 'Self-Serve Funnel Telemetry'],
      doc: {
        title: 'Merchant Activation Friction Log & Dropoff Telemetry Q2',
        type: 'Google Docs',
        icon: '📄',
        badge: 'Active WIP',
        folder: 'Google Drive > Product & Design > Activation Experiments',
        lastTouched: 'Updated 5 hours ago by Roshan & Design Lead',
        score: '94% Semantic Match',
        bridgeReason: "Translates colloquial 'onboarding flow' to exact engineering title 'Merchant Activation Friction Log'",
        excerpt: 'Step 3 bank verification causes 42% friction dropoff due to missing IFSC autocompletion; wireframes for instant IFSC lookup attached.',
        declutterNote: 'Links directly to live Figma canvas.'
      }
    }
  ];

  // Create Extension DOM Root
  const root = document.createElement("div");
  root.id = "clippy-ext-root";

  root.innerHTML = `
    <!-- Speech Prompt Bubble -->
    <div class="clippy-speech-bubble" id="clippy-ext-bubble">
      <div class="clippy-speech-bubble-header">
        <span>Trippy</span>
        <button class="clippy-speech-close" id="clippy-bubble-close" aria-label="Close prompt">&times;</button>
      </div>
      <div id="clippy-ext-bubble-text">Bro... Google Drive search is so cooked. Searching 'pricing' gave me a 2021 draft no cap.</div>
    </div>

    <!-- Floating Mascot Trigger Button -->
    <div class="clippy-ext-trigger" id="clippy-ext-trigger" title="Click Trippy to translate and find files" role="button" tabindex="0">
      ${TRIPPY_SVG}
      <span class="clippy-status-pulse" style="background:#34d399; box-shadow:0 0 10px #34d399;"></span>
    </div>

    <!-- Chatbot Window -->
    <div class="clippy-chat-window hidden" id="clippy-ext-chat">
      <!-- Header -->
      <div class="clippy-chat-header">
        <div class="clippy-header-title-wrap">
          <div class="clippy-mini-avatar" style="display:flex;align-items:center;justify-content:center;font-size:18px;">🌿</div>
          <div>
            <div class="clippy-header-title">
              Trippy <span class="clippy-header-badge" style="background:rgba(52,211,153,0.2);color:#34d399;border-color:rgba(52,211,153,0.4);">Gen Z</span>
            </div>
            <div class="clippy-header-subtitle">High-Intelligence Google Drive Agent &bull; No Cap</div>
          </div>
        </div>
        <div class="clippy-header-actions">
          <button class="clippy-btn-icon" id="clippy-ext-btn-spark" title="Spark Random Wisdom" style="color:#c084fc;">✦</button>
          <button class="clippy-btn-icon" id="clippy-btn-minimize" title="Minimize">&minus;</button>
          <button class="clippy-btn-icon" id="clippy-btn-close" title="Close">&times;</button>
        </div>
      </div>

      <!-- Active Document Bar -->
      <div class="clippy-doc-context">
        <span class="clippy-doc-icon">&#128196;</span>
        <span class="clippy-doc-name" id="clippy-doc-name-label">Document: ${getDocTitle()}</span>
      </div>

      <!-- Messages Feed -->
      <div class="clippy-messages-feed" id="clippy-messages">
        <!-- Welcome Message -->
        <div class="clippy-msg clippy-msg-bot">
          <div class="clippy-msg-bubble">
            Yooo... what's good? I'm Trippy fr fr. You know how Google Drive search is so cooked because nobody remembers exact verbatim file titles? Don't even sweat it. Tell me what you're trying to find in plain English, and I'll find the canonical file before your boss even asks no cap.
          </div>
          <div class="clippy-msg-time">Just now</div>
        </div>
      </div>

      <!-- Search Suggestion Chips -->
      <div class="clippy-suggestions-box" id="clippy-suggestions">
        <button class="clippy-chip" data-query="pricing sheet">"pricing sheet (fr fr)"</button>
        <button class="clippy-chip" data-query="who owns churn">"who owns churn (no cap)"</button>
        <button class="clippy-chip" data-query="competitor research">"competitor research (the tea)"</button>
        <button class="clippy-chip" data-query="investor pitch deck">"pitch deck (main character)"</button>
        <button class="clippy-chip" data-query="420" style="border-color:rgba(192,132,252,0.5);color:#c084fc;">✦ "420 easter egg"</button>
      </div>

      <!-- Input Footer -->
      <div class="clippy-chat-footer">
        <form class="clippy-input-form" id="clippy-form">
          <input
            type="text"
            class="clippy-input"
            id="clippy-input"
            placeholder="Ask Trippy anything or search fuzzy files..."
            autocomplete="off"
          />
          <button type="submit" class="clippy-send-btn" id="clippy-send-btn" title="Ask Trippy" style="background:#34d399;">
            &#10148;
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(root);

  // Element Selectors
  const trigger = document.getElementById("clippy-ext-trigger");
  const chatWindow = document.getElementById("clippy-ext-chat");
  const speechBubble = document.getElementById("clippy-ext-bubble");
  const bubbleText = document.getElementById("clippy-ext-bubble-text");
  const bubbleClose = document.getElementById("clippy-bubble-close");
  const btnClose = document.getElementById("clippy-btn-close");
  const btnMinimize = document.getElementById("clippy-btn-minimize");
  const btnSpark = document.getElementById("clippy-ext-btn-spark");
  const form = document.getElementById("clippy-form");
  const input = document.getElementById("clippy-input");
  const messagesFeed = document.getElementById("clippy-messages");
  const suggestionsBox = document.getElementById("clippy-suggestions");

  let isChatOpen = false;

  // Rotate idle thoughts every 8 seconds
  let idleIdx = 0;
  setInterval(() => {
    if (bubbleText && !isChatOpen) {
      idleIdx = (idleIdx + 1) % IDLE_THOUGHTS.length;
      bubbleText.textContent = IDLE_THOUGHTS[idleIdx];
    }
  }, 8000);

  bubbleClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    speechBubble?.classList.add("hidden");
  });

  // Mascot Click Animation & Open Chat Window
  trigger?.addEventListener("click", () => {
    // 1. Spring Wobble Bounce
    trigger.classList.add("clippy-high-wobble");
    setTimeout(() => trigger.classList.remove("clippy-high-wobble"), 750);

    // 2. Ripple Effect
    const ripple = document.createElement("div");
    ripple.className = "clippy-ripple-effect";
    trigger.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);

    // 3. Sparkle Particles
    for (let i = 0; i < 4; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "clippy-sparkle";
      sparkle.textContent = ['✦', '✨', '🌿', '💨'][i % 4];
      const angle = (Math.PI * 2 * i) / 4;
      const dist = 30;
      sparkle.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      sparkle.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
      sparkle.style.left = '50%';
      sparkle.style.top = '50%';
      trigger.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 900);
    }

    // Toggle Chat
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      chatWindow?.classList.remove("hidden");
      speechBubble?.classList.add("hidden");
      input?.focus();
    } else {
      chatWindow?.classList.add("hidden");
    }
  });

  btnClose?.addEventListener("click", () => {
    chatWindow?.classList.add("hidden");
    isChatOpen = false;
  });

  btnMinimize?.addEventListener("click", () => {
    chatWindow?.classList.add("hidden");
    speechBubble?.classList.remove("hidden");
    isChatOpen = false;
  });

  btnSpark?.addEventListener("click", () => {
    const wisdom = IDLE_THOUGHTS[Math.floor(Math.random() * IDLE_THOUGHTS.length)];
    appendBotMsg(`✦ Random High Thought: "${wisdom}"`);
  });

  function appendUserMsg(text) {
    if (!messagesFeed) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = "clippy-msg clippy-msg-user";
    msgDiv.innerHTML = `
      <div class="clippy-msg-bubble">${escapeHtml(text)}</div>
      <div class="clippy-msg-time">Just now</div>
    `;
    messagesFeed.appendChild(msgDiv);
    messagesFeed.scrollTop = messagesFeed.scrollHeight;
  }

  function appendBotMsg(html) {
    if (!messagesFeed) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = "clippy-msg clippy-msg-bot";
    msgDiv.innerHTML = `
      <div class="clippy-msg-bubble">${html}</div>
      <div class="clippy-msg-time">Trippy &bull; Just now</div>
    `;
    messagesFeed.appendChild(msgDiv);
    messagesFeed.scrollTop = messagesFeed.scrollHeight;
  }

  function handleSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) return;

    appendUserMsg(query);

    // Easter egg check
    if (q.includes("420")) {
      setTimeout(() => {
        appendBotMsg(`
          <div style="color:#c084fc;font-weight:bold;margin-bottom:4px;">✨ 4:20 PM UNLOCKED ✨</div>
          <div>Trippy reached peak enlightenment no cap. All Google Drive latency has been replaced with soothing lo-fi beats.</div>
        `);
      }, 350);
      return;
    }

    if (q.includes("munchies")) {
      setTimeout(() => {
        appendBotMsg(`
          <div style="color:#fbbf24;font-weight:bold;margin-bottom:4px;">🌮 MUNCHIES DETECTED 🌮</div>
          <div>Taco Bell, In-N-Out, or double fudge brownies? The cloud runs on carbohydrates, homie.</div>
        `);
      }, 350);
      return;
    }

    // Search Database
    const match = VERBATIM_DB.find((item) =>
      item.keywords.some((k) => q.includes(k) || k.includes(q))
    );

    setTimeout(() => {
      if (match) {
        const quote = FOUND_QUOTES[Math.floor(Math.random() * FOUND_QUOTES.length)];
        const doc = match.doc;
        appendBotMsg(`
          <div style="font-weight:600;color:#34d399;margin-bottom:6px;">"${quote}"</div>
          
          <div style="background:rgba(6,78,59,0.3);border:1px solid rgba(52,211,153,0.3);border-radius:8px;padding:8px;font-size:11px;margin-bottom:8px;">
            <div style="font-size:9px;font-weight:bold;text-transform:uppercase;color:#34d399;margin-bottom:3px;display:flex;justify-content:space-between;">
              <span>Verbatim Bridge Translated</span>
              <span>${doc.score}</span>
            </div>
            <div>&bull; <strong>You searched:</strong> "${escapeHtml(query)}"</div>
            <div>&bull; <strong>Canonical verbatim:</strong> ${match.translatedTerms.map(t => `<code style="background:rgba(0,0,0,0.4);color:#6ee7b7;padding:1px 4px;border-radius:3px;">${t}</code>`).join(' ')}</div>
          </div>

          <div style="background:rgba(15,23,42,0.8);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:10px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="font-size:18px;">${doc.icon}</span>
                <div>
                  <div style="font-weight:bold;color:#f8fafc;font-size:12px;">${doc.title}</div>
                  <div style="font-size:10px;color:#94a3b8;">${doc.type} &bull; ${doc.lastTouched}</div>
                </div>
              </div>
              <span style="background:rgba(52,211,153,0.2);color:#34d399;font-size:9px;padding:2px 6px;border-radius:4px;font-family:monospace;white-space:nowrap;">${doc.badge}</span>
            </div>
            
            <div style="font-size:10px;color:#94a3b8;background:rgba(255,255,255,0.05);padding:4px 6px;border-radius:4px;margin-bottom:6px;">
              📁 ${doc.folder}
            </div>

            <div style="font-size:11px;color:#cbd5e1;background:rgba(0,0,0,0.3);padding:6px;border-left:2px solid #34d399;border-radius:4px;margin-bottom:6px;">
              "${doc.excerpt}"
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;font-size:10px;color:#34d399;padding-top:4px;border-top:1px solid rgba(255,255,255,0.05);">
              <span>🛡️ ${doc.declutterNote}</span>
              <a href="#" style="color:#6ee7b7;text-decoration:underline;">Open in Docs &rarr;</a>
            </div>
          </div>
        `);
      } else {
        const roast = NOT_FOUND_QUOTES[Math.floor(Math.random() * NOT_FOUND_QUOTES.length)];
        appendBotMsg(`
          <div style="color:#fbbf24;font-weight:600;margin-bottom:6px;">"${roast}"</div>
          <div style="background:rgba(69,26,3,0.3);border:1px solid rgba(245,158,11,0.3);border-radius:8px;padding:8px;font-size:11px;color:#fde68a;">
            <strong>Trippy's Translation Tip:</strong> Try searching for terms like <code>"pricing sheet"</code>, <code>"who owns churn"</code>, <code>"competitor research"</code>, or tap one of the chips below!
          </div>
        `);
      }
    }, 400);
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input && input.value) {
      handleSearch(input.value);
      input.value = "";
    }
  });

  suggestionsBox?.addEventListener("click", (e) => {
    const chip = e.target.closest(".clippy-chip");
    if (chip) {
      const q = chip.getAttribute("data-query");
      if (q) handleSearch(q);
    }
  });

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
})();
