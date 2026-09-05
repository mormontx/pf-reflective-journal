# Productive Failure (PF) & Reflective Practice Lab
> **Author:** [@mormontx](https://github.com/mormontx)  
> **Classes:** Edexcel IGCSE Physics (Y11) & IB DP Physics (Y12)  
> **Framework:** Manu Kapur's Productive Failure + Donald Schön's Reflective Practitioner

---

## 📖 Overview

This repository serves as both:
1. **The Curricular Design Engine:** Houses complete Productive Failure (PF) lesson plans, student challenge scenarios, expected intuitive failure models, non-evaluative facilitation scripts, and consolidation pathways.
2. **The Dynamic Reflective Journal:** A clean, responsive, live web application where reflections can be read, composed, filtered by tags, and exported as markdown.

---

## 🚀 Live GitHub Pages Deployment Guide

To deploy this site live to `https://mormontx.github.io/pf-reflective-journal`:

### Step 1: Create the GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Name the repository: `pf-reflective-journal`.
3. Set visibility to **Public** (required for free GitHub Pages).
4. Leave README, .gitignore, and license unticked. Click **Create repository**.

### Step 2: Initialize & Push from Local Machine
In your terminal, run:

```bash
cd ~/projects/pf-reflective-journal
git init
git add .
git commit -m "feat: initial PF lesson designs for IGCSE Y11 and IB Y12 with reflective journal app"
git branch -M main
git remote add origin https://github.com/mormontx/pf-reflective-journal.git
git push -u origin main
```

*(Note: If your git CLI requires authentication, run `gh auth login` or enter your GitHub Personal Access Token).*

### Step 3: Enable GitHub Pages
1. In your GitHub repository, navigate to **Settings** > **Pages** (under Code and automation).
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, your journal is live at:
   **`https://mormontx.github.io/pf-reflective-journal/`**

---

## 💻 Local Preview

To view and edit the journal on your local Mac right now:

```bash
cd ~/projects/pf-reflective-journal
python3 -m http.server 8085
```
Then open [http://localhost:8085](http://localhost:8085) in your browser.

---

## 🗂 File Structure

```
pf-reflective-journal/
├── index.html              # Main web app layout and interactive modal
├── styles.css              # Typography, themes (Light/Dark), responsive layout
├── app.js                  # Document reader, KaTeX rendering, local storage, filters
├── README.md               # Deployment and pedagogical documentation
└── entries/                # Modular Markdown files for version control
    ├── 01-igcse-forces-motion-pf-design.md
    ├── 02-ib-kinematics-pf-design.md
    └── 03-journal-entry-01-pre-lesson-reflections.md
```

---

## 🧠 Pedagogical Foundations

### 1. The Two Phases of Productive Failure (Manu Kapur)
- **Phase 1: Exploration & Generation (Students):** Collaborative struggle with low-floor/high-ceiling problems, generating diverse informal representations and hitting real conceptual boundaries.
- **Phase 2: Consolidation & Direct Instruction (Teacher):** Systematic harvesting, comparison, and contrasting of student models to introduce the canonical physical concept as the logical resolution to their struggle.

### 2. The Reflective Practitioner (Donald Schön)
- **Reflection-in-Action:** Noticing the "pedagogical itch" (the urge to rescue struggling students) and using non-evaluative prompts in the moment.
- **Reflection-on-Action:** Post-lesson debriefing on task affordances, emotional climate, and consolidation timing to iterate future instruction.
