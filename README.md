# 2026_crafter-s
repo for HACKPRENEUR

# ⚖️ NyayaAI — Multi-Agent Judicial Decision Support System

> **An Explainable AI Co-Pilot for Faster, Transparent and Evidence-Based Legal Case Analysis**

NyayaAI is a **multi-agent AI-powered legal workflow platform** designed to assist judges and legal professionals in analyzing complex court cases.

The system reviews case documents, extracts facts and evidence, identifies applicable laws, searches relevant precedents, compares arguments from both parties, and generates an **explainable, citation-backed case analysis**.

> ⚠️ **NyayaAI does not replace judges or make legally binding decisions.**
> The final decision always remains with the authorized human decision-maker.

---

## 🚨 Problem Statement

Indian courts and legal teams handle enormous volumes of:

* Case petitions and affidavits
* Evidence and supporting documents
* Previous judgments
* Legal provisions
* Witness statements
* Procedural information

Analyzing all this information manually can be time-consuming and difficult, especially when relevant precedents are spread across thousands of judgments.

The challenge is not simply finding information — it is **connecting facts, evidence, laws and precedents into a clear case workflow.**

---

## 💡 Our Solution

NyayaAI uses a **team of specialized AI agents** that collaborate to analyze a case.

Instead of asking one AI chatbot:

> "Who should win this case?"

we break the legal workflow into multiple specialized tasks.

### Example

Consider a property dispute between two brothers.

The parties upload:

* Property documents
* Sale deeds
* Inheritance documents
* Tax receipts
* Witness statements
* Previous agreements
* Case petition and response

NyayaAI processes these documents and produces:

1. Case summary
2. Chronological timeline
3. Arguments from both sides
4. Evidence comparison
5. Applicable legal provisions
6. Similar previous judgments
7. Contradictions and missing evidence
8. Explainable case assessment
9. Human review checkpoint

---

# 🤖 Multi-Agent Architecture

```text
                    ┌─────────────────────┐
                    │   Case Documents    │
                    │ PDFs / Images / Docs│
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Document Processing │
                    │   & OCR Pipeline    │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
      ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
      │ Document    │  │ Evidence    │  │ Timeline    │
      │ Agent       │  │ Agent       │  │ Agent       │
      └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
             │                │                │
             └────────────────┼────────────────┘
                              ▼
                    ┌─────────────────────┐
                    │ Legal Research      │
                    │ & Precedent Agent   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Argument / Counter  │
                    │ Analysis Agent      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Recommendation      │
                    │ & Explanation Agent │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Human-in-the-Loop   │
                    │ Review Checkpoint   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Judicial Dashboard  │
                    └─────────────────────┘
```

---

# 🧠 AI Agents

## 1. 📄 Document Review Agent

Analyzes uploaded case documents and extracts:

* Parties involved
* Important facts
* Dates
* Claims
* Legal sections
* Important statements
* Supporting documents

---

## 2. ⚖️ Evidence Analysis Agent

Organizes evidence presented by both parties.

Example:

| Plaintiff             | Defendant          |
| --------------------- | ------------------ |
| Sale deed             | Inheritance claim  |
| Property tax receipts | Family agreement   |
| Witness statement     | Ownership document |

It can also identify:

* Contradictions
* Missing evidence
* Weak evidence
* Conflicting statements

---

## 3. 🕒 Timeline Agent

Automatically converts documents into a chronological case timeline.

Example:

```text
1998 → Property purchased
2005 → Father passes away
2007 → Property transferred
2015 → Dispute begins
2020 → Legal notice issued
2022 → Case filed
2026 → Case analysis
```

This allows users to understand the case quickly.

---

## 4. 🔎 Legal Research Agent

Searches a legal knowledge base for:

* Similar cases
* Relevant judgments
* Applicable laws
* Legal provisions
* Previous interpretations

The system provides the source/citation for retrieved cases rather than presenting unsupported AI claims.

---

## 5. 🥊 Argument Analysis Agent

Analyzes both sides independently.

### Plaintiff Side

* Main arguments
* Supporting evidence
* Applicable laws
* Supporting precedents
* Weaknesses

### Defendant Side

* Main arguments
* Supporting evidence
* Applicable laws
* Supporting precedents
* Weaknesses

This creates a balanced analysis instead of asking the AI to immediately choose a winner.

---

## 6. 🧑‍⚖️ Recommendation Agent

Combines the outputs of all previous agents.

It generates:

* Case assessment
* Relevant legal principles
* Supporting precedents
* Evidence considered
* Missing information
* Conflicting evidence
* Confidence/uncertainty indicators
* Explanation for the assessment

The output is advisory only.

---

## 🏆 Judging Criteria Alignment

NyayaAI is engineered specifically to address key hackathon evaluation criteria:

| Criterion | Alignment & Implementation |
| --- | --- |
| **1. Innovation & Problem Impact** | Targets judicial backlog and document analysis fatigue in Indian court systems using structured, multi-agent AI workflows instead of simple Q&A bots. |
| **2. Technical Complexity & Architecture** | Features a 6-agent orchestrated pipeline (Document Review, Evidence Analysis, Timeline Generation, Legal Research, Argument Comparison, and Advisory Synthesis). |
| **3. Explainability & Trust** | Every recommendation is backed by extracted evidence citations, chronological timelines, and explicit confidence/contradiction flags. |
| **4. Human-in-the-Loop & Safety** | Built strictly as a human-assisted advisory co-pilot—never an automated decision maker. Preserves final authority with judges and legal professionals. |
| **5. UI/UX & Production Readiness** | High-performance Next.js 16 (Turbopack) frontend with TypeScript type safety, custom glassmorphism design system, and responsive layout. |

---

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Features

* Interactive judicial dashboard landing page
* Unique gradient styling with Tailwind CSS
* Multi-agent legal workflow presentation
* Human review checkpoint emphasis
* Advisory and explainability focused design
