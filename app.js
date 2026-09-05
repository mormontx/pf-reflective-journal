// Initial Built-in Knowledge Base
const DEFAULT_DOCUMENTS = [
  {
    id: "doc-igcse-forces",
    type: "lesson-design",
    category: "Edexcel IGCSE Y11",
    title: "IGCSE Y11: Forces & Motion — The Deep-Space Shuttle (PF Design)",
    date: "2026-09-05",
    tags: ["#ProductiveFailure", "#IGCSE-Y11", "#Forces", "#NewtonsLaws", "#ThresholdConcepts"],
    content: `# PF Lesson Design: Edexcel IGCSE Physics (Year 11)
## Topic: Forces and Motion (Lesson 1 — Resultant Force & Newton's First Law)

**Specification Reference:** Edexcel IGCSE Physics (4PH1) — 1.13, 1.14, 1.16, 1.17  
**Core Target Concept:** Newton's First Law of Motion ($\\Sigma F = 0 \\implies \\Delta v = 0$), Resultant Force vs. Velocity, and unlearning the Aristotelian intuition that "force is needed to sustain motion".

---

### 1. Pedagogical Architecture

| Parameter | Specification |
| :--- | :--- |
| **Duration** | 60 minutes (30 min Phase 1 + 25 min Phase 2 + 5 min Exit Ticket) |
| **Grouping** | Heterogeneous pairs or trios with a single A3 dry-erase board & two colored markers |
| **Cognitive Conflict** | The deep-seated instinct that moving forward requires a forward force vs. the physical reality that force causes *acceleration*, not *velocity*. |

---

### 2. Phase 1: Exploration & Generation (30 minutes)

#### The Prompt: "The Deep-Space Ore Shuttle"
> *"You are flight directors for a deep-space mining cargo shuttle travelling between Space Station Alpha and Space Station Beta (distance: 1,000 km) in deep interstellar vacuum (zero gravity, zero air resistance, zero friction).*  
> 
> *The shuttle starts at rest at Alpha and must dock safely at Beta at exactly 0 km/h.*  
> *The shuttle has two thrusters: a Forward Thruster (pushes forward) and a Retro Thruster (pushes backward).*  
> 
> **Your Task:**  
> 1. Draw a timeline showing **exact thruster firing events** (When are engines ON, OFF, or REVERSED?).  
> 2. Sketch the corresponding **Speed-Time graph** for the journey.  
> 3. Write a rule: *'To keep an object moving at a constant cruising speed of 500 km/h in space, the thrusters must...'*  
> 4. Create at least **two alternative propulsion plans** and debate which is safest and most fuel-efficient."

#### Expected Student Intuitive Representations (The "Failures")

1. **Model A: The Continuous Burn (The Aristotelian Intuition)**
   - *What students draw:* Forward thruster ON during the entire journey until right before Beta.
   - *Underlying belief:* "If the engine turns off, the ship will stop or lose speed."
2. **Model B: The Coast-Down (The Terrestrial Friction Bias)**
   - *What students draw:* Thruster fires at start, turns off, and speed slowly drops to zero on its own without retro-thrusters.
   - *Underlying belief:* "Things naturally come to rest." (Projecting Earth friction onto vacuum).
3. **Model C: The Instant Stop**
   - *What students draw:* Forward thruster fires, turns off, then at Beta they just "cut the engine" and speed drops vertically to 0.
   - *Underlying belief:* Velocity is directly proportional to applied force ($v \\propto F$), so $F=0 \\implies v=0$.
4. **Model D: The Symmetric Burn (Emergent Insight)**
   - *What students draw:* Forward thrust to speed up, thrusters OFF to coast at constant speed, Retro-thrust for equal time to stop.

#### Teacher Role & Non-Evaluative Facilitation Prompts
- **The Golden Rule of PF:** DO NOT tell them Model A is wrong. DO NOT validate Model D as "correct".
- **Harvesting:** Walk the room with a clipboard. Catalog which groups produced Model A, B, C, and D.
- **Intervention prompts (when groups are stuck or asking for confirmation):**
  - *"If the thruster continues pushing with 5000 N of force, will the ship stay at 500 km/h, or will something else happen to its speed?"*
  - *"What is pushing against the shuttle to slow it down when the engine turns off?"*
  - *"Test your rule against a hockey puck gliding on infinitely smooth, frictionless ice. What would happen to it?"*

---

### 3. Phase 2: Consolidation & Direct Instruction (25 minutes)

#### Step 1: Contrast Matrix on the Board (10 mins)
Photograph or bring 3 student boards to the front rail:
- Board 1 (Model A: Continuous Burn)
- Board 2 (Model B: Natural Slow-down)
- Board 3 (Model D: Burn-Coast-Retro)

| Solution Model | What this model assumes | Physical reality test |
| :--- | :--- | :--- |
| **Model A (Burn)** | Force is needed for speed (Aristotle) | Continuous push = Speed INCREASES forever! |
| **Model B (Coast)** | Objects naturally stop (Earth habit) | In space, nothing pushes back! Speed never drops. |
| **Model D (Retro)** | Force changes speed; zero force = cruise | Force causes ACCEL. Zero force = CONSTANT $v$. |

#### Step 2: Canonical Direct Instruction (10 mins)
1. **Name the historical debate:** Explain that for 2,000 years, humanity believed Model A (Aristotle). It took Galileo and Newton to realize Model D.
2. **State Newton's First Law:** An object continues in a state of rest or uniform speed in a straight line unless acted upon by a **resultant (unbalanced) force**.
3. **Define Resultant Force ($\\Sigma F$):**
   - When $\\Sigma F = 0 \\implies \\text{Acceleration } a = 0 \\implies \\text{Speed is constant}$.
   - When $\\Sigma F \\neq 0 \\implies \\text{Speed changes (acceleration or deceleration)}$.
4. **Link back to Earth:** Why does a bicycle stop when you stop pedaling? Not because "motion died", but because of an *unseen external resultant force*: **Friction and Drag**.

#### Step 3: Immediate Near & Far Transfer (5 mins)
- **Near Transfer:** A skydiver falls at terminal velocity of 50 m/s. The downward gravitational force is 700 N. What is the upward air resistance force? *(Most will want to say < 700 N; canonical answer is exactly 700 N because speed is constant!)*
- **Far Transfer:** Voyager 1 has been moving away from Earth for 45+ years at 17 km/s with its engines dead. How much fuel is it burning right now to maintain that speed?`
  },
  {
    id: "doc-ib-kinematics",
    type: "lesson-design",
    category: "IB DP Y12",
    title: "IB DP Y12: Kinematics — The Hyperloop Telemetry Anomaly (PF Design)",
    date: "2026-09-05",
    tags: ["#ProductiveFailure", "#IB-Y12", "#Kinematics", "#InstantaneousVelocity", "#CalculusIntuition"],
    content: `# PF Lesson Design: IB DP Physics (Year 12)
## Topic: Theme A.1 Kinematics (Lesson 1 — Instantaneous Velocity & Deriving SUVAT)

**Specification Reference:** IB DP Physics Guide (Theme A: Space, Time and Motion — A.1 Kinematics)  
**Core Target Concept:** Differentiating between Average Velocity ($\\bar{v} = \\frac{\\Delta s}{\\Delta t}$) and Instantaneous Velocity ($v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t}$), and deriving the canonical kinematic relationship $s = ut + \\frac{1}{2}at^2$ geometrically rather than through rote algebraic substitution.

---

### 1. Pedagogical Architecture

| Parameter | Specification |
| :--- | :--- |
| **Duration** | 70–80 minutes (Double period) |
| **Grouping** | Pairs with scientific calculators, graph paper, and A3 wipe-boards |
| **Cognitive Conflict** | Students enter IB relying on the middle-school reflex $v = \\frac{d}{t}$. When acceleration is present, this reflex yields contradictory answers depending on which time window is chosen. |

---

### 2. Phase 1: Exploration & Generation (35 minutes)

#### The Prompt: "The Hyperloop Telemetry Anomaly"
> *"An automated sensor array recorded the position ($s$) of a prototype maglev shuttle launched from rest ($u = 0$) along a test vacuum tube:*
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
> **Your Engineering Mission:**  
> 1. What would the shuttle's digital speedometer display **at the exact moment $t = 3.0\\text{ s}$**? Provide numerical proof.  
> 2. What was the shuttle's rate of acceleration ($a$ in $\\text{m/s}^2$)?  
> 3. Notice the mathematical pattern connecting $s$ and $t$. Why is the relationship between displacement, acceleration, and time **not** simply $s = a \\times t^2$? Where does the missing factor come from?  
> 4. Devise at least **two distinctly different mathematical or graphical methods** to determine the speed at $t = 3.0\\text{ s}$."

#### Expected Student Intuitive Representations (The "Failures")

1. **Model A: The Naive Global Quotient (The IGCSE Reflex)**
   - *Calculation:* $\\text{Speed} = \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{27\\text{ m}}{3\\text{ s}} = 9\\text{ m/s}$.
   - *The Failure Point:* If they calculate for $t = 4\\text{ s}$, they get $\\frac{48}{4} = 12\\text{ m/s}$. Why would the average from the start represent the speed *at* 3 seconds?
2. **Model B: The Backward Difference**
   - *Calculation:* $\\frac{\\Delta s}{\\Delta t} = \\frac{27 - 12}{3 - 2} = 15\\text{ m/s}$.
   - *The Failure Point:* This is the average speed between $t=2$ and $t=3$, not the speed *at* $t=3$.
3. **Model C: The Forward Difference**
   - *Calculation:* $\\frac{\\Delta s}{\\Delta t} = \\frac{48 - 27}{4 - 3} = 21\\text{ m/s}$.
   - *The Conflict:* Why does Model B give $15\\text{ m/s}$ while Model C gives $21\\text{ m/s}$? Which one is right?
4. **Model D: The Symmetrical Secant (The Emerging Tangent)**
   - *Calculation:* $\\frac{48 - 12}{4 - 2} = \\frac{36}{2} = 18\\text{ m/s}$.
   - *Observation:* $18\\text{ m/s}$ is exactly halfway between $15$ and $21$.
5. **Model E: The Power Law Pattern Match**
   - *Observation:* $s = 3 t^2$.
   - *The Mystery:* If students calculate acceleration as $\\frac{\\Delta v}{\\Delta t} = \\frac{18 - 0}{3} = 6\\text{ m/s}^2$, why does the equation have $3 t^2$ instead of $6 t^2$?

#### Teacher Role & Non-Evaluative Facilitation Prompts
- Observe whether students realize that Model B ($15\\text{ m/s}$) and Model C ($21\\text{ m/s}$) bracket the true speed.
- **Prompts to groups:**
  - *"Group 2 got 15 m/s using the previous second. Group 4 got 21 m/s using the next second. Can both be right? How could you get closer to the truth?"*
  - *"If you shrink the time window from 1.0 second to 0.1 seconds, what happens to the difference between the forward and backward estimate?"*
  - *"If the speed at $t=0$ is 0 and at $t=3$ is 18 m/s, sketch what the speed-time graph looks like. What does the area under that line represent?"*

---

### 3. Phase 2: Consolidation & Direct Instruction (35 minutes)

#### Step 1: The Squeeze to Instantaneous Velocity (12 mins)
1. Display the conflict: $9\\text{ m/s}$ (average from start) vs. $15\\text{ m/s}$ (backward interval) vs. $21\\text{ m/s}$ (forward interval) vs. $18\\text{ m/s}$ (symmetric interval).
2. **Introduce the Secant-to-Tangent Concept:**
   - Draw the curve $s$-$t$. Show the secant line between $t=2$ and $t=4$.
   - Show how as $\\Delta t \\to 0$, the chord rotates to become the **tangent line** at $t=3$.
   - **Canonical Definition:** Instantaneous velocity is the gradient of the tangent to the displacement-time graph:
     $$v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}$$

#### Step 2: Demystifying the $\\frac{1}{2}$ in $s = \\frac{1}{2}at^2$ (13 mins)
1. Plot the velocities calculated ($t=0 \\to 0$, $t=1 \\to 6$, $t=2 \\to 12$, $t=3 \\to 18$).
2. Note that the $v$-$t$ graph is a straight line with slope $a = 6\\text{ m/s}^2$.
3. Ask: *"What is the total displacement at $t = 3\\text{ s}$ from the graph?"*
4. Calculate the area of the shape under the $v$-$t$ graph:
   $$\\text{Area} = \\text{Area of Triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times t \\times v$$
5. Since $v = at$ (when starting from rest):
   $$s = \\frac{1}{2} \\times t \\times (at) = \\frac{1}{2} a t^2$$
6. **The Epiphany:** The coefficient in $s = 3t^2$ is 3 because $3 = \\frac{1}{2} \\times 6$! The missing factor of $1/2$ is the geometry of a triangle!
7. Extend to initial velocity $u \\neq 0$: Rectangle ($ut$) + Triangle ($\\frac{1}{2}at^2$):
   $$s = ut + \\frac{1}{2}at^2$$

#### Step 3: Formalizing the IB SUVAT Framework & Transfer (10 mins)
- Formalize the 4 kinematic variables ($s, u, v, a, t$) and the 4 canonical equations from the IB Physics data booklet.
- **Transfer Challenge:**
  *"A driver traveling at $30\\text{ m/s}$ sees a hazard and decelerates at $5.0\\text{ m/s}^2$. A student calculates stopping distance as $d = 30 \\times (30/5) = 180\\text{ m}$. Explain the fundamental geometric error in this student's reasoning using a $v$-$t$ sketch, and determine the correct stopping distance."*`
  },
  {
    id: "doc-journal-01",
    type: "journal-entry",
    category: "General Pedagogical Reflection",
    title: "Entry #01: Preparing the Productive Failure Shift & Holding the Rescue Urge",
    date: "2026-09-06",
    tags: ["#ProductiveFailure", "#ReflectionInAction", "#DonaldSchön", "#TeacherGrowth", "#PedagogicalItch"],
    content: `# Reflective Journal Entry #01: Preparing the Productive Failure Shift
**Date:** 2026-09-06  
**Author:** Tugcan Yildirim (@mormontx)  
**Context:** Launching Term 1 with Year 11 (Edexcel IGCSE Forces) and Year 12 (IB DP Kinematics)  
**Tags:** \`#ProductiveFailure\`, \`#ReflectionInAction\`, \`#IGCSE-Y11\`, \`#IB-Y12\`, \`#ThresholdConcepts\`

---

### 1. Intentionality & Pedagogical Vulnerability (Pre-Action Reflection)
For years, the standard pedagogical script for mechanics has been reassuringly linear: define terms, present formulas ($F=ma$ or $v=u+at$), demonstrate two worked examples on the board, and set students loose on drill worksheets. 

It feels efficient. The classroom is quiet. The students feel "successful" because they can substitute numbers into variables. But every year, when non-standard exam questions or real-world conceptual traps appear, the facade collapses:
- Year 11 students stubbornly believe that a rocket moving at constant speed needs a continuous engine blast.
- Year 12 IB students blindly plug $v = \\frac{s}{t}$ into accelerating bodies and cannot explain why the $\\frac{1}{2}$ exists in $s = ut + \\frac{1}{2}at^2$.

This term, I am embracing Manu Kapur's **Productive Failure (PF)** architecture. The goal is not to prevent struggle, but to engineer *high-fidelity, productive struggle*.

---

### 2. Anticipating "The Pedagogical Itch"
Donald Schön highlights that professionals operate with deeply ingrained tacit repertoires. My biggest personal hurdle as a teacher will not be designing the task—it will be **holding back my urge to rescue**.

When a student looks up at me with genuine distress saying:
> *"Mr. Yildirim, Group 2 says the speed is 15 m/s and we got 21 m/s, which one is right?"*

My instinct is to explain secant lines and show them the formula. In PF, doing so short-circuits the cognitive activation process.

#### My Non-Evaluative Micro-Scripts for Tomorrow:
1. *"What assumptions did Group 2 make that led them to 15? What assumptions did you make?"*
2. *"Don't erase that mistake—it's a critical clue. Put a box around it."*
3. *"You two have just found a genuine contradiction in how we measure speed. Can you invent a way to reconcile them before we meet at the board?"*

---

### 3. What I Will Observe and Catalog During Phase 1

#### In Y11 IGCSE (Deep-Space Ore Shuttle):
- [ ] How many groups instinctively default to Model A (continuous forward thrust during cruise)?
- [ ] Do any groups recognize that in vacuum, friction is literally zero?
- [ ] Who invents the reverse (retro) thruster concept first, and how does the group negotiate the deceleration?

#### In Y12 IB (Hyperloop Telemetry):
- [ ] Does anyone immediately use differential calculus or power rule without understanding the physical geometry?
- [ ] How do students explain why the average speed over 3 seconds ($9\\text{ m/s}$) is so different from the interval speeds ($15$ and $21\\text{ m/s}$)?
- [ ] The $\\frac{1}{2}$ epiphany: Will any pair connect the triangular area on a $v$-$t$ sketch to the formula coefficient?

---

### 4. Post-Lesson Debrief Criteria (Schön's Loop)
Following tomorrow's double blocks, I will evaluate:
1. **Affective Balance:** Did students stay in the zone of productive struggle, or did anyone tip into learned helplessness?
2. **Consolidation Quality:** Did I give student models enough spotlight in Phase 2, or did I rush into lecture mode?
3. **Artifact Evidence:** Did the exit tickets demonstrate genuine conceptual change on the terminal velocity and deceleration transfer problems?`
  }
];

const SCHON_TEMPLATE = `### 1. The Pedagogical Itch (Reflection-in-Action)
*How did I manage the urge to intervene during Phase 1?*
- **Temptation moments:** 
- **How I responded / Micro-scripts used:** 
- **Affective state of students:** (Productive debate vs. toxic frustration)

### 2. Student Representation Harvest
*What models and failure modes emerged from the students?*
- **Model 1 (Naive):** 
- **Model 2 (Intermediate):** 
- **Model 3 (Emergent/Novel):** 
- **Surprise insights or unexpected metaphors:** 

### 3. Consolidation Efficacy (Phase 2 Review)
*How well did the bridge to canonical instruction work?*
- **Ordering of student boards:** 
- **The Epiphany moment:** (Did the contrast matrix reveal the concept?)
- **Pacing & Direct Instruction:** 

### 4. Schön's Loop & Next Iteration
- **What worked:** 
- **What needs recalibration:** 
- **Action for next lesson:** `;

// Application State
let documents = [];
let activeDocId = null;
let currentFilter = "all";
let activeTag = null;

// DOM Elements
const docListEl = document.getElementById("document-list");
const articleViewerEl = document.getElementById("article-viewer");
const docTypeBadgeEl = document.getElementById("doc-type-badge");
const docDateEl = document.getElementById("doc-date");
const tagCloudEl = document.getElementById("tag-cloud");
const countAllEl = document.getElementById("count-all");
const countLessonsEl = document.getElementById("count-lessons");
const countJournalsEl = document.getElementById("count-journals");

// Modal Elements
const modalNewEntry = document.getElementById("modal-new-entry");
const btnNewEntry = document.getElementById("btn-new-entry");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnCancelModal = document.getElementById("btn-cancel-modal");
const btnInsertTemplate = document.getElementById("btn-insert-template");
const formEntry = document.getElementById("form-entry");
const btnDownloadMd = document.getElementById("btn-download-md");

// Toolbar Elements
const btnCopyMarkdown = document.getElementById("btn-copy-markdown");
const themeToggle = document.getElementById("theme-toggle");

// Initialize Data
function loadDocuments() {
  const localDocs = localStorage.getItem("pf_journal_documents");
  if (localDocs) {
    try {
      documents = JSON.parse(localDocs);
    } catch (e) {
      console.error("Error parsing local docs", e);
      documents = [...DEFAULT_DOCUMENTS];
    }
  } else {
    documents = [...DEFAULT_DOCUMENTS];
    saveDocuments();
  }
}

function saveDocuments() {
  localStorage.setItem("pf_journal_documents", JSON.stringify(documents));
}

// Render Document List & Tag Cloud
function updateSidebar() {
  // Counts
  countAllEl.textContent = documents.length;
  countLessonsEl.textContent = documents.filter(d => d.type === "lesson-design").length;
  countJournalsEl.textContent = documents.filter(d => d.type === "journal-entry").length;

  // Filter documents
  let filtered = documents;
  if (currentFilter !== "all") {
    filtered = filtered.filter(d => d.type === currentFilter);
  }
  if (activeTag) {
    filtered = filtered.filter(d => d.tags && d.tags.includes(activeTag));
  }

  // Render cards
  docListEl.innerHTML = "";
  filtered.forEach(doc => {
    const card = document.createElement("div");
    card.className = `doc-item-card ${doc.id === activeDocId ? "active" : ""}`;
    card.dataset.id = doc.id;
    card.innerHTML = `
      <div class="doc-item-title">${doc.title}</div>
      <div class="doc-item-meta">
        <span>${doc.type === "lesson-design" ? "📐 Design" : "📝 Journal"}</span>
        <span>${doc.date}</span>
      </div>
    `;
    card.addEventListener("click", () => selectDocument(doc.id));
    docListEl.appendChild(card);
  });

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

// Render Active Document in Viewer
function selectDocument(id) {
  activeDocId = id;
  const doc = documents.find(d => d.id === id);
  if (!doc) return;

  // Update meta
  docTypeBadgeEl.textContent = doc.type === "lesson-design" ? "PF Lesson Design" : "Reflective Journal";
  docTypeBadgeEl.className = `badge ${doc.type === "journal-entry" ? "journal" : ""}`;
  docDateEl.textContent = `${doc.category} • ${doc.date}`;

  // Markdown parsing
  if (window.marked) {
    articleViewerEl.innerHTML = marked.parse(doc.content);
  } else {
    articleViewerEl.textContent = doc.content;
  }

  // Render Math with KaTeX
  if (window.renderMathInElement) {
    renderMathInElement(articleViewerEl, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }

  // Highlight active card
  document.querySelectorAll(".doc-item-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === id);
  });
}

// Copy Raw Markdown
btnCopyMarkdown.addEventListener("click", () => {
  const doc = documents.find(d => d.id === activeDocId);
  if (!doc) return;
  navigator.clipboard.writeText(doc.content).then(() => {
    const origText = btnCopyMarkdown.innerHTML;
    btnCopyMarkdown.innerHTML = `✓ Copied!`;
    setTimeout(() => { btnCopyMarkdown.innerHTML = origText; }, 2000);
  });
});

// Category Filter Buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    updateSidebar();
  });
});

// Modal Logic
btnNewEntry.addEventListener("click", () => {
  document.getElementById("entry-date").value = new Date().toISOString().split("T")[0];
  document.getElementById("entry-title").value = "";
  document.getElementById("entry-body").value = SCHON_TEMPLATE;
  modalNewEntry.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", () => modalNewEntry.classList.add("hidden"));
btnCancelModal.addEventListener("click", () => modalNewEntry.classList.add("hidden"));

btnInsertTemplate.addEventListener("click", () => {
  const textarea = document.getElementById("entry-body");
  textarea.value = SCHON_TEMPLATE + "\n" + textarea.value;
});

// Save Entry Form
formEntry.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("entry-title").value.trim();
  const date = document.getElementById("entry-date").value;
  const course = document.getElementById("entry-course").value;
  const tags = document.getElementById("entry-tags").value
    .split(",")
    .map(t => t.trim())
    .filter(t => t.length > 0);
  const content = document.getElementById("entry-body").value;

  const newDoc = {
    id: "doc-journal-" + Date.now(),
    type: "journal-entry",
    category: course,
    title: title,
    date: date,
    tags: tags,
    content: `# ${title}\n**Date:** ${date}  \n**Course:** ${course}  \n**Tags:** ${tags.join(", ")}\n\n---\n\n` + content
  };

  documents.unshift(newDoc);
  saveDocuments();
  modalNewEntry.classList.add("hidden");
  updateSidebar();
  selectDocument(newDoc.id);
});

// Download Markdown File
btnDownloadMd.addEventListener("click", () => {
  const title = document.getElementById("entry-title").value.trim() || "journal-entry";
  const content = document.getElementById("entry-body").value;
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md`;
  a.click();
  URL.revokeObjectURL(url);
});

// Dark/Light Theme Toggle
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("theme-dark");
  document.body.classList.toggle("theme-light", !isDark);
  localStorage.setItem("pf_theme", isDark ? "dark" : "light");
});

// Initialize on Load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("pf_theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
    document.body.classList.remove("theme-light");
  }

  loadDocuments();
  updateSidebar();
  if (documents.length > 0) {
    selectDocument(documents[0].id);
  }
});
