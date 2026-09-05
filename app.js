// ==========================================
// PHYSICS MONSTER: PF REFLECTIVE JOURNAL ENGINE
// ==========================================

const DEFAULT_DOCUMENTS = [
  {
    id: "doc-igcse-forces",
    type: "lesson-design",
    category: "Edexcel IGCSE Y11",
    title: "IGCSE Y11: Forces & Motion — The Deep-Space Shuttle (PF Blueprint)",
    date: "2026-09-05",
    tags: ["#ProductiveFailure", "#IGCSE-Y11", "#Forces", "#NewtonsLaws", "#ThresholdConcepts"],
    content: `# PF Lesson Blueprint: Edexcel IGCSE Physics (Year 11)
## Topic: Forces & Motion (Lesson 1 — Resultant Force & Newton's First Law)

> **👾 Monster Physics Threshold Trap:**  
> For over 2,000 years, humanity believed Aristotle: *"To keep an object moving forward, you must keep pushing it."*  
> Our students arrive with this exact terrestrial reflex. This lesson engineers deliberate failure of this intuition in a frictionless deep-space vacuum.

---

### 1. Pedagogical Specifications
* **Specification Links:** Edexcel IGCSE Physics (4PH1) — 1.13, 1.14, 1.16, 1.17  
* **Target Canonical Law:** Newton's First Law ($\\Sigma F = 0 \\implies a = 0 \\implies v = \\text{constant}$)  
* **Duration:** 60 Minutes (30m Phase 1 + 25m Phase 2 + 5m Exit Ticket)  
* **Grouping:** Pairs with dry-erase wipe-boards & colored pens  

---

### 2. Phase 1: Exploration & Generation (30 Minutes)

#### The Mission: "The Deep-Space Ore Shuttle"
> *"You are flight directors for a deep-space mining cargo shuttle travelling between Space Station Alpha and Space Station Beta ($1,000\\text{ km}$ apart) in deep interstellar vacuum (zero gravity, zero air resistance, zero friction).*  
> 
> *The shuttle starts at rest at Alpha and must dock safely at Beta at exactly $0\\text{ km/h}$.*  
> *The shuttle has two thrusters: a Forward Thruster (pushes forward) and a Retro Thruster (pushes backward).*  
> 
> **Your Engineering Directives:**  
> 1. Draw a timeline showing **exact thruster firing events** (When are engines ON, OFF, or REVERSED?).  
> 2. Sketch the corresponding **Speed-Time graph** for the journey.  
> 3. Formulate a rule: *'To keep an object moving at a constant cruising speed of 500 km/h in space, the thrusters must...'*  
> 4. Create at least **two alternative propulsion plans** and debate which is safest and most fuel-efficient."

#### Student Intuitive Failure Models (The Harvest)

1. **Model A: The Continuous Burn (The Aristotelian Reflex)**
   * *The Drawing:* Forward thruster kept ON at 100% throughout the entire cruise.
   * *Tacit Belief:* "If the engine cuts out, the shuttle will stop or drift to a halt."
2. **Model B: The Coast-Down (The Terrestrial Friction Illusion)**
   * *The Drawing:* Thrusters fire at start, turn off, and speed is assumed to gently decrease to zero on its own without retro-thrusters.
   * *Tacit Belief:* "Motion naturally dies down." (Projecting Earth friction onto vacuum).
3. **Model C: The Instant Cut**
   * *The Drawing:* Forward thrust until right at Beta, then engine cuts and speed drops vertically to zero.
   * *Tacit Belief:* $v \\propto F$, therefore $F = 0 \\implies v = 0$.
4. **Model D: The Symmetric Burn (The Emergent Insight)**
   * *The Drawing:* Forward burn to accelerate, engines OFF to cruise at constant speed, Retro-burn for equal duration to dock.

#### Teacher Micro-Prompts (Holding Back the Rescue Urge)
* *"If the thruster keeps pushing with 5000 N, does the ship cruise at 500 km/h, or does something else happen to the speedometer?"*
* *"What is in the vacuum pushing backward against the ship when the engine is switched off?"*
* *"Test your rule on an air-hockey table with zero friction. What would happen when you let go of the puck?"*

---

### 3. Phase 2: Consolidation & Direct Instruction (25 Minutes)

#### Step 1: The Contrast Matrix on the Board (10 mins)
Bring 3 student boards to the front rail to contrast:

| Student Model | What the Model Assumes | Reality in Interstellar Vacuum |
| :--- | :--- | :--- |
| **Model A (Continuous)** | Force is required to sustain speed ($v \\propto F$) | Continuous forward push = Speed **increases without limit**! |
| **Model B (Coast-down)** | Objects naturally come to rest | In a vacuum, nothing pushes back! Speed remains **constant forever**. |
| **Model D (Burn-Coast-Retro)**| Force causes change in speed ($F \\propto a$) | **Zero Force = Constant Velocity**. Equal reverse burn needed to stop. |

#### Step 2: Canonical Physics Instruction (10 mins)
1. **Newton's First Law of Motion:** An object continues in its state of rest or uniform speed in a straight line unless acted upon by an **unbalanced (resultant) force**.
2. **Mathematical Formulation:**
   $$\\Sigma F = 0 \\implies a = 0 \\implies \\Delta v = 0$$
   $$\\Sigma F \\neq 0 \\implies a = \\frac{\\Sigma F}{m} \\implies \\text{Speed changes}$$
3. **Why Earth Lies to Us:** The reason cars, bicycles, and balls stop on Earth is not because "force ran out", but because an *unseen opposing force* (**Friction & Drag**) is constantly acting upon them.

#### Step 3: Immediate Transfer Challenge (5 mins)
* **Near Transfer:** A skydiver falls at a steady terminal velocity of $52\\text{ m/s}$ (Weight $= 720\\text{ N}$). What is the upward air resistance force? *(Most will guess $< 720\\text{ N}$; canonical answer is exactly $720\\text{ N}$ because acceleration is zero!)*
* **Far Transfer:** The Voyager 1 spacecraft is currently $24\\text{ billion km}$ from Earth cruising at $17\\text{ km/s}$ with engines off. How much rocket fuel is it burning right now to keep that velocity?`
  },
  {
    id: "doc-ib-kinematics",
    type: "lesson-design",
    category: "IB DP Y12",
    title: "IB DP Y12: Kinematics — The Hyperloop Telemetry Anomaly (PF Blueprint)",
    date: "2026-09-05",
    tags: ["#ProductiveFailure", "#IB-Y12", "#Kinematics", "#InstantaneousVelocity", "#CalculusIntuition"],
    content: `# PF Lesson Blueprint: IB DP Physics (Year 12)
## Topic: Theme A.1 Kinematics (Instantaneous Velocity & Geometrical Derivation of SUVAT)

> **👾 Monster Physics Threshold Trap:**  
> Students enter IB Physics with the reflexive middle-school formula $v = \\frac{d}{t}$ burned into memory. When acceleration is non-zero, this formula fails catastrophically, but students cling to it blindly.

---

### 1. Pedagogical Specifications
* **Syllabus Reference:** IB DP Physics Theme A: Space, Time, and Motion (A.1 Kinematics)  
* **Target Canonical Concepts:**
  * Average Velocity ($\\bar{v} = \\frac{\\Delta s}{\\Delta t}$) vs. Instantaneous Velocity ($v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t}$)
  * Geometrical proof of why the factor of $\\frac{1}{2}$ exists in $s = ut + \\frac{1}{2}at^2$
* **Duration:** 80 Minutes (Double Period)  
* **Materials:** Wipe-boards, graph paper, scientific calculators  

---

### 2. Phase 1: Exploration & Generation (35 Minutes)

#### The Mission: "The Hyperloop Telemetry Anomaly"
> *"A prototype magnetic levitation pod accelerates along an evacuated test tube from rest ($u = 0$). Laser telemetry stations recorded its position ($s$) every second:*
>
> | Time $t$ (s) | Position $s$ (m) |
> | :---: | :---: |
> | 0.0 | 0.0 |
> | 1.0 | 3.0 |
> | 2.0 | 12.0 |
> | 3.0 | 27.0 |
> | 4.0 | 48.0 |
> | 5.0 | 75.0 |
>
> **Your Engineering Directives:**  
> 1. What would the pod's digital speedometer display **at the exact instant $t = 3.0\\text{ s}$**? Prove it numerically.  
> 2. What is the pod's rate of acceleration ($a$ in $\\text{m/s}^2$)?  
> 3. Look at the algebraic pattern between $s$ and $t$ ($s = 3t^2$). Why is the formula for distance **not** simply $s = a \\times t^2$? Where did the missing factor go?  
> 4. Devise at least **two distinctly different mathematical or graphical methods** to estimate the instantaneous speed at $t = 3.0\\text{ s}$."

#### Student Intuitive Failure Models

1. **Model A: The Naive Global Quotient**
   * *Calculation:* $v = \\frac{s}{t} = \\frac{27}{3} = 9\\text{ m/s}$.
   * *The Flaw:* Checking $t = 4\\text{ s}$ gives $\\frac{48}{4} = 12\\text{ m/s}$. This only measures the *average from start*, not the velocity *at that instant*.
2. **Model B: The Backward Difference**
   * *Calculation:* $\\frac{\\Delta s}{\\Delta t} = \\frac{27 - 12}{3 - 2} = 15\\text{ m/s}$.
3. **Model C: The Forward Difference**
   * *Calculation:* $\\frac{\\Delta s}{\\Delta t} = \\frac{48 - 27}{4 - 3} = 21\\text{ m/s}$.
   * *The Conflict:* Model B gives $15\\text{ m/s}$, Model C gives $21\\text{ m/s}$. Both are valid intervals! Which is the speed at $t = 3.0\\text{ s}$?
4. **Model D: The Symmetrical Secant (Emerging Tangent)**
   * *Calculation:* $\\frac{48 - 12}{4 - 2} = \\frac{36}{2} = 18\\text{ m/s}$. Exactly the arithmetic mean of $15$ and $21$!
5. **The Structural Factor Riddle:**
   * Acceleration is $a = \\frac{18 - 0}{3} = 6\\text{ m/s}^2$.
   * If $a = 6$, why is the position formula $s = 3t^2$ and not $s = 6t^2$?

---

### 3. Phase 2: Consolidation & Direct Instruction (35 Minutes)

#### Step 1: The Tangent Squeeze (12 mins)
1. Display the conflict: $9\\text{ m/s}$ (global average) vs. $15\\text{ m/s}$ (backward interval) vs. $21\\text{ m/s}$ (forward interval).
2. Draw the curve $s$-$t$ and illustrate secant chords. Show that shrinking the time window $\\Delta t \\to 0$ rotates the secant into the **tangent**:
   $$v(t) = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}$$

#### Step 2: Geometrical Proof of the $\\frac{1}{2}$ Factor (13 mins)
1. Plot the velocity values: $t=0 \\to 0$, $t=1 \\to 6$, $t=2 \\to 12$, $t=3 \\to 18$.
2. Note that the $v$-$t$ graph is a triangle with base $t$ and height $v = at$.
3. Prove that displacement is the **area under the graph**:
   $$\\text{Displacement } s = \\text{Area of Triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times t \\times (at) = \\frac{1}{2} a t^2$$
4. **The Epiphany:** The coefficient in $s = 3t^2$ is 3 because $3 = \\frac{1}{2} \\times 6$! The missing factor is the geometry of a triangle!
5. Extend to $u \\neq 0$: Rectangle ($ut$) + Triangle ($\\frac{1}{2}at^2$):
   $$s = ut + \\frac{1}{2}at^2$$

#### Step 3: Formalizing the IB SUVAT Framework (10 mins)
* Introduce the 4 kinematic equations from the IB Physics Data Booklet:
  $$v = u + at$$
  $$s = ut + \\frac{1}{2}at^2$$
  $$v^2 = u^2 + 2as$$
  $$s = \\frac{(u+v)}{2}t$$
* **Transfer Problem:** An autonomous car cruising at $30\\text{ m/s}$ brakes with deceleration $a = -5.0\\text{ m/s}^2$. Explain the geometric fallacy of calculating stopping distance as $30 \\times 6 = 180\\text{ m}$, and calculate the true distance.`
  },
  {
    id: "doc-journal-01",
    type: "journal-entry",
    category: "Edexcel IGCSE Y11 & IB Y12",
    title: "Entry #01: Navigating the Pedagogical Itch & Letting Students Fail",
    date: "2026-09-06",
    tags: ["#ProductiveFailure", "#DonaldSchön", "#ReflectionInAction", "#TeacherGrowth", "#PedagogicalItch"],
    content: `# Reflective Journal Entry #01: Navigating the Pedagogical Itch
**Author:** @mormontx  
**Cohort:** Y11 Edexcel IGCSE & Y12 IB DP Physics  
**Framework:** Donald Schön's Reflection-in-Action & Manu Kapur's Productive Failure  

---

### 1. The Pedagogical Itch (Reflection-in-Action)
*How did I manage the urge to intervene during Phase 1?*
- **Temptation Moments:**  
  Around minute 14 in the Y11 class, Group 3 was in a deadlock. One student argued vehemently that *"if the rocket doesn't fire, the spaceship will drift off and freeze in space"*. Another student looked at me pleadingly: *"Sir, does the thruster stay on or off?"*
- **How I Responded (Micro-scripts used):**  
  Every instinct as a helpful teacher screamed to explain Newton's First Law. Instead, I took a breath and responded:  
  > *"What does the thruster actually do to the ship when it pushes? Does it set a speed, or does it change speed? Sketch both ideas on your board and let's see which one causes a disaster."*
- **Classroom Climate:**  
  The room was noticeably louder than my traditional lecture days. The struggle was loud, argumentative, but intensely engaged—not defeated.

---

### 2. Student Representation Harvest
*What unexpected models emerged during Phase 1?*
- **In Y11 (Deep Space Shuttle):**  
  - 5 out of 8 groups defaulted straight into Aristotle's trap (continuous forward burn).
  - 1 group invented a "pulsed thruster" model: firing in short bursts to "maintain" speed without accelerating too much! That was a fascinating intermediate intuitive bridge.
- **In Y12 (Hyperloop Telemetry):**  
  - The interval bracketing ($15\\text{ m/s}$ vs $21\\text{ m/s}$) created genuine cognitive dissonance. When students realized $18\\text{ m/s}$ was the average of both intervals, they had a breakthrough before I even started Phase 2.

---

### 3. Consolidation Efficacy (Phase 2 Review)
*How well did the bridge to canonical instruction work?*
- **Board Sequencing:**  
  Placing Board A (Continuous Burn) next to Board D (Burn-Coast-Retro) made the canonical law feel like a relief rather than an abstract formula to memorize.
- **The Epiphany Moment:**  
  In Y12, pointing to the triangle on the $v$-$t$ graph to explain why the formula has $\\frac{1}{2}$ made several students literally slap their foreheads. That $\\frac{1}{2}$ has been a mystery to them since Year 9.

---

### 4. Schön's Loop & Next Iteration
- **What Worked:** The dry-erase wipe boards were essential. They lowered the risk of being "wrong" because mistakes could be wiped or modified easily.
- **What Needs Recalibration:** In the Y11 lesson, Phase 1 ran 5 minutes too long (35 mins instead of 30 mins), making the terminal velocity transfer task feel slightly compressed at the bell.
- **Action for Next Lesson:** Strictly cap Phase 1 at 28 minutes using an audible visual countdown timer on the projector.`
  }
];

// TEMPLATES FOR SNIPPETS
const TEMPLATE_SCHON = `### 1. The Pedagogical Itch (Reflection-in-Action)
*How did I manage the urge to intervene during Phase 1?*
- **Temptation moments:** 
- **Micro-scripts used:** 
- **Affective state of students:** (Productive struggle vs toxic frustration)

### 2. Student Representation Harvest
*What intuitive models and failure modes emerged?*
- **Model 1 (Naive / Aristotelian):** 
- **Model 2 (Intermediate / Heuristic):** 
- **Model 3 (Emergent insight):** 

### 3. Consolidation Efficacy (Phase 2 Review)
*How well did the bridge to canonical instruction work?*
- **Board sequencing:** 
- **The Epiphany moment:** 
- **Direct instruction delivery:** 

### 4. Schön's Loop & Next Iteration
- **What worked:** 
- **What needs adjustment:** 
- **Action for next cycle:** `;

const TEMPLATE_PF_SCAFFOLD = `# PF Lesson Blueprint: [Topic Name]
## Target Concept: [Canonical Physics Concept]

> **👾 Monster Physics Threshold Trap:**  
> [Describe the intuitive misconception students naturally fall into]

---

### 1. Pedagogical Specifications
* **Course & Level:** [e.g. Edexcel IGCSE Y11 / IB DP Y12]
* **Target Canonical Law:** [e.g. Newton's 2nd Law, Conservation of Momentum]
* **Duration:** 60–80 mins

---

### 2. Phase 1: Exploration & Generation
#### The Challenge Mission:
> [State the scenario with real or simulated telemetry data]

#### Expected Student Intuitive Failures:
1. **Model A (Naive):** ...
2. **Model B (Intermediate):** ...
3. **Model C (Edge Case):** ...

#### Non-Evaluative Facilitation Prompts:
* *Prompt 1:* ...
* *Prompt 2:* ...

---

### 3. Phase 2: Consolidation & Direct Instruction
#### Step 1: The Contrast Matrix
[Compare naive models with canonical reality]

#### Step 2: Canonical Direct Instruction
[Formalize definition, equations, and data booklet references]

#### Step 3: Near & Far Transfer Checks
* **Near Transfer:** ...
* **Far Transfer:** ...`;

const TEMPLATE_CONTRAST_MATRIX = `| Student Model | What the Model Assumes | Physical Reality |
| :--- | :--- | :--- |
| **Model 1 (Intuitive)** | ... | ... |
| **Model 2 (Intermediate)** | ... | ... |
| **Canonical Law** | ... | ... |`;

const TEMPLATE_MATH = `$$\\Sigma F = ma$$
$$s = ut + \\frac{1}{2}at^2$$
$$v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}$$`;

const TEMPLATE_CALLOUT = `> **👾 Monster Physics Threshold Trap:**  
> [Insert your threshold challenge or student misconception here]`;

// ==========================================
// STATE MANAGEMENT
// ==========================================

let documents = [];
let activeDocId = null;
let currentFilter = "all";
let activeTag = null;
let searchQuery = "";

// DOM Elements
const docListEl = document.getElementById("document-list");
const articleViewerEl = document.getElementById("article-viewer");
const docTypeBadgeEl = document.getElementById("doc-type-badge");
const docMetaInfoEl = document.getElementById("doc-meta-info");
const tagCloudEl = document.getElementById("tag-cloud");
const searchInput = document.getElementById("search-input");

// Counts
const countAllEl = document.getElementById("count-all");
const countLessonsEl = document.getElementById("count-lessons");
const countJournalsEl = document.getElementById("count-journals");

// Modal Elements
const modalEditor = document.getElementById("modal-editor");
const formEditor = document.getElementById("form-editor");
const editDocIdInput = document.getElementById("edit-doc-id");
const editTitleInput = document.getElementById("edit-title");
const editTypeInput = document.getElementById("edit-type");
const editCourseInput = document.getElementById("edit-course");
const editDateInput = document.getElementById("edit-date");
const editTagsInput = document.getElementById("edit-tags");
const editContentInput = document.getElementById("edit-content");
const editorModalTitle = document.getElementById("editor-modal-title");
const editorActionTag = document.getElementById("editor-action-tag");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnCancelModal = document.getElementById("btn-cancel-modal");

// Editor Tabs
const tabWrite = document.getElementById("tab-write");
const tabPreview = document.getElementById("tab-preview");
const writeContainer = document.getElementById("write-container");
const previewContainer = document.getElementById("preview-container");

// Action Buttons
const btnNewEntry = document.getElementById("btn-new-entry");
const btnNewDesign = document.getElementById("btn-new-design");
const btnEditCurrent = document.getElementById("btn-edit-current");
const btnDeleteCurrent = document.getElementById("btn-delete-current");
const btnCopyMarkdown = document.getElementById("btn-copy-markdown");
const btnDownloadActiveMd = document.getElementById("btn-download-active-md");
const btnDownloadEditingMd = document.getElementById("btn-download-editing-md");
const btnExportBackup = document.getElementById("btn-export-backup");
const btnImportBackup = document.getElementById("btn-import-backup");
const importFileInput = document.getElementById("import-file-input");
const btnResetDefaults = document.getElementById("btn-reset-defaults");

// Snippet Buttons
document.getElementById("snip-schon").addEventListener("click", () => insertSnippet(TEMPLATE_SCHON));
document.getElementById("snip-pf-scaffold").addEventListener("click", () => insertSnippet(TEMPLATE_PF_SCAFFOLD));
document.getElementById("snip-contrast-matrix").addEventListener("click", () => insertSnippet(TEMPLATE_CONTRAST_MATRIX));
document.getElementById("snip-math").addEventListener("click", () => insertSnippet(TEMPLATE_MATH));
document.getElementById("snip-callout").addEventListener("click", () => insertSnippet(TEMPLATE_CALLOUT));

function insertSnippet(text) {
  const start = editContentInput.selectionStart;
  const end = editContentInput.selectionEnd;
  const current = editContentInput.value;
  editContentInput.value = current.substring(0, start) + "\n\n" + text + "\n\n" + current.substring(end);
  editContentInput.focus();
}

// Load Documents
function loadDocuments() {
  const stored = localStorage.getItem("physics_monster_pf_docs");
  if (stored) {
    try {
      const cleanJson = stored
        .replace(new RegExp(atob("VHVnY2FuXHMreWlsZGlyaW0="), "gi"), "@mormontx")
        .replace(new RegExp("Mr\\.\\s*" + atob("WWlsZGlyaW0="), "gi"), "Teacher");
      documents = JSON.parse(cleanJson);
      saveDocuments();
    } catch (e) {
      console.error("Storage parse error", e);
      documents = [...DEFAULT_DOCUMENTS];
    }
  } else {
    documents = [...DEFAULT_DOCUMENTS];
    saveDocuments();
  }
}

function saveDocuments() {
  localStorage.setItem("physics_monster_pf_docs", JSON.stringify(documents));
}

// Update Sidebar & Tag Cloud
function updateSidebar() {
  countAllEl.textContent = documents.length;
  countLessonsEl.textContent = documents.filter(d => d.type === "lesson-design").length;
  countJournalsEl.textContent = documents.filter(d => d.type === "journal-entry").length;

  let filtered = documents;

  // Filter by Type
  if (currentFilter !== "all") {
    filtered = filtered.filter(d => d.type === currentFilter);
  }

  // Filter by Tag
  if (activeTag) {
    filtered = filtered.filter(d => d.tags && d.tags.includes(activeTag));
  }

  // Filter by Search Query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(d => 
      d.title.toLowerCase().includes(q) ||
      d.content.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      (d.tags && d.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  // Render Cards
  docListEl.innerHTML = "";
  if (filtered.length === 0) {
    docListEl.innerHTML = `<div style="padding: 1rem; color: var(--text-dim); font-size: 0.8rem; text-align: center;">No matching documents</div>`;
  } else {
    filtered.forEach(doc => {
      const card = document.createElement("div");
      card.className = `doc-item-card type-${doc.type} ${doc.id === activeDocId ? "active" : ""}`;
      card.dataset.id = doc.id;
      card.innerHTML = `
        <div class="doc-item-title">${doc.title}</div>
        <div class="doc-item-meta">
          <span>${doc.type === "lesson-design" ? "📐 Blueprint" : "📝 Journal"}</span>
          <span>${doc.date}</span>
        </div>
      `;
      card.addEventListener("click", () => selectDocument(doc.id));
      docListEl.appendChild(card);
    });
  }

  // Render Tags
  const allTags = new Set();
  documents.forEach(d => {
    if (d.tags) d.tags.forEach(t => allTags.add(t));
  });

  tagCloudEl.innerHTML = "";
  allTags.forEach(tag => {
    const pill = document.createElement("span");
    pill.className = `tag-pill ${activeTag === tag ? "active" : ""}`;
    pill.textContent = tag;
    pill.addEventListener("click", () => {
      activeTag = activeTag === tag ? null : tag;
      updateSidebar();
    });
    tagCloudEl.appendChild(pill);
  });
}

// Render Document in Viewer
function selectDocument(id) {
  activeDocId = id;
  const doc = documents.find(d => d.id === id);
  if (!doc) return;

  // Header meta
  docTypeBadgeEl.textContent = doc.type === "lesson-design" ? "PF Lesson Blueprint" : "Reflective Journal";
  docTypeBadgeEl.className = `cyber-badge ${doc.type === "lesson-design" ? "badge-green" : "badge-pink"}`;
  docMetaInfoEl.textContent = `${doc.category} • ${doc.date}`;

  // Markdown parsing
  if (window.marked) {
    articleViewerEl.innerHTML = marked.parse(doc.content);
  } else {
    articleViewerEl.textContent = doc.content;
  }

  // Render KaTeX Math
  renderMath();

  // Active state in sidebar
  document.querySelectorAll(".doc-item-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === id);
  });
}

function renderMath(element = articleViewerEl) {
  if (window.renderMathInElement) {
    renderMathInElement(element, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }
}

// Search Listener
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  updateSidebar();
});

// Category Filter Buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    updateSidebar();
  });
});

// Open Modal for New Journal Entry
btnNewEntry.addEventListener("click", () => {
  openEditor({
    id: null,
    title: "",
    type: "journal-entry",
    category: "Edexcel IGCSE Y11",
    date: new Date().toISOString().split("T")[0],
    tags: ["#ProductiveFailure", "#ReflectionInAction"],
    content: `# Reflective Journal Entry
**Author:** @mormontx  
**Cohort:** [Cohort]  
**Topic:** [Topic]  

---\n\n` + TEMPLATE_SCHON
  }, "NEW REFLECTIVE ENTRY", "Reflective Teaching Journal");
});

// Open Modal for New PF Lesson Blueprint
btnNewDesign.addEventListener("click", () => {
  openEditor({
    id: null,
    title: "",
    type: "lesson-design",
    category: "IB DP Y12",
    date: new Date().toISOString().split("T")[0],
    tags: ["#ProductiveFailure", "#PhysicsMonster", "#LessonDesign"],
    content: TEMPLATE_PF_SCAFFOLD
  }, "NEW LESSON BLUEPRINT", "Productive Failure Lesson Blueprint");
});

// Open Modal to Edit Current Document
btnEditCurrent.addEventListener("click", () => {
  const doc = documents.find(d => d.id === activeDocId);
  if (!doc) return;
  openEditor(doc, "EDITING DOCUMENT", `Edit: ${doc.title}`);
});

function openEditor(doc, actionTag, modalTitle) {
  editorActionTag.textContent = actionTag;
  editorModalTitle.textContent = modalTitle;
  editDocIdInput.value = doc.id || "";
  editTitleInput.value = doc.title || "";
  editTypeInput.value = doc.type || "journal-entry";
  editCourseInput.value = doc.category || "";
  editDateInput.value = doc.date || new Date().toISOString().split("T")[0];
  editTagsInput.value = doc.tags ? doc.tags.join(", ") : "";
  editContentInput.value = doc.content || "";

  // Switch to write tab
  switchEditorTab("write");

  modalEditor.classList.remove("hidden");
  editTitleInput.focus();
}

function closeEditor() {
  modalEditor.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeEditor);
btnCancelModal.addEventListener("click", closeEditor);

// Editor Tab Switching
tabWrite.addEventListener("click", () => switchEditorTab("write"));
tabPreview.addEventListener("click", () => switchEditorTab("preview"));

function switchEditorTab(tab) {
  if (tab === "write") {
    tabWrite.classList.add("active");
    tabPreview.classList.remove("active");
    writeContainer.classList.remove("hidden");
    previewContainer.classList.add("hidden");
  } else {
    tabWrite.classList.remove("active");
    tabPreview.classList.add("active");
    writeContainer.classList.add("hidden");
    previewContainer.classList.remove("hidden");

    // Render Preview
    const raw = editContentInput.value;
    if (window.marked) {
      previewContainer.innerHTML = marked.parse(raw);
    } else {
      previewContainer.textContent = raw;
    }
    renderMath(previewContainer);
  }
}

// Form Submit: Save or Update Document
formEditor.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = editDocIdInput.value;
  const title = editTitleInput.value.trim();
  const type = editTypeInput.value;
  const category = editCourseInput.value.trim();
  const date = editDateInput.value;
  const tags = editTagsInput.value
    .split(",")
    .map(t => t.trim())
    .filter(t => t.length > 0);
  const content = editContentInput.value;

  if (id) {
    // Update existing
    const index = documents.findIndex(d => d.id === id);
    if (index !== -1) {
      documents[index] = { ...documents[index], title, type, category, date, tags, content };
    }
    activeDocId = id;
  } else {
    // Create new
    const newDoc = {
      id: "doc-" + Date.now(),
      type,
      category,
      title,
      date,
      tags,
      content
    };
    documents.unshift(newDoc);
    activeDocId = newDoc.id;
  }

  saveDocuments();
  closeEditor();
  updateSidebar();
  selectDocument(activeDocId);
});

// Delete Document
btnDeleteCurrent.addEventListener("click", () => {
  if (!activeDocId) return;
  const doc = documents.find(d => d.id === activeDocId);
  if (!doc) return;

  if (confirm(`Are you sure you want to delete "${doc.title}"?`)) {
    documents = documents.filter(d => d.id !== activeDocId);
    saveDocuments();
    updateSidebar();
    if (documents.length > 0) {
      selectDocument(documents[0].id);
    } else {
      articleViewerEl.innerHTML = `<div style="text-align: center; padding: 3rem; color: var(--text-dim);">No documents available. Click + NEW to create one.</div>`;
    }
  }
});

// Copy Markdown
btnCopyMarkdown.addEventListener("click", () => {
  const doc = documents.find(d => d.id === activeDocId);
  if (!doc) return;
  navigator.clipboard.writeText(doc.content).then(() => {
    const orig = btnCopyMarkdown.innerHTML;
    btnCopyMarkdown.innerHTML = `✓ COPIED`;
    setTimeout(() => { btnCopyMarkdown.innerHTML = orig; }, 2000);
  });
});

// Download Active .MD File
btnDownloadActiveMd.addEventListener("click", () => {
  const doc = documents.find(d => d.id === activeDocId);
  if (!doc) return;
  downloadMarkdown(doc.title, doc.content);
});

// Download Editing .MD File
btnDownloadEditingMd.addEventListener("click", () => {
  const title = editTitleInput.value.trim() || "document";
  const content = editContentInput.value;
  downloadMarkdown(title, content);
});

function downloadMarkdown(filename, content) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// Backup Export as JSON
btnExportBackup.addEventListener("click", () => {
  const dataStr = JSON.stringify(documents, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `physics-monster-pf-journal-backup-${new Date().toISOString().split("T")[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

// Backup Import
btnImportBackup.addEventListener("click", () => importFileInput.click());

importFileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (Array.isArray(imported)) {
        documents = imported;
        saveDocuments();
        updateSidebar();
        if (documents.length > 0) selectDocument(documents[0].id);
        alert("Backup imported successfully!");
      } else {
        alert("Invalid backup file format.");
      }
    } catch (err) {
      alert("Error reading JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
});

// Reset to Defaults
btnResetDefaults.addEventListener("click", () => {
  if (confirm("Reset to default sample lessons and reflections? Custom entries in local storage will be replaced.")) {
    documents = [...DEFAULT_DOCUMENTS];
    saveDocuments();
    updateSidebar();
    selectDocument(documents[0].id);
  }
});

// Initialize on Load
window.addEventListener("DOMContentLoaded", () => {
  loadDocuments();
  updateSidebar();
  if (documents.length > 0) {
    selectDocument(documents[0].id);
  }
});
