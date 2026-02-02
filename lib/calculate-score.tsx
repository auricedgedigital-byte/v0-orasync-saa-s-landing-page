```tsx file="lib/calculate-score.ts"

✅ v0.dev PROMPT — Auric Edge Digital (v2 – EDIT CURRENT VERSION)

IMPORTANT:
You are extending and refining the existing Auric Edge Digital site (v1).
Do not redesign from scratch.
Preserve layout, routing, and structure unless explicitly stated below.

🔹 GLOBAL CHANGES (APPLY EVERYWHERE)

Maintain premium, consulting-grade aesthetic

Keep demo / mock-data approach

Prepare structure for future backend + AI

Improve conversion, personalization, and audit depth

All buttons and navigation must continue working

🔹 HOMEPAGE (/) — REFINEMENTS ONLY
1️⃣ Niches section (EDIT)

For each niche card, add a sub-list of specific business types.

Healthcare (non-hospital)

Dental clinics

Medical clinics

Therapy & physiotherapy practices

Professional Services

Law firms

Accounting firms

Consulting firms

Local Multi-Location Businesses

Clinics with multiple branches

Education & training centers

Fitness & wellness chains

Hospitality & Hotel Restaurants

Hotel restaurants

Multi-location restaurant groups

Hospitality operators

Each card should visually show:

Niche title

3–4 example business types (small text)

Optional icon

2️⃣ Hero CTA microcopy (EDIT)

Primary CTA text:

Get Your Free Systems Audit

Below CTA (small, subtle text):

8 minutes · Instant personalized summary · No obligation

🔹 AUDIT PAGE (/audit) — MAJOR ENHANCEMENT
Overall structure

Multi-step audit (10–14 questions)

Progress indicator with section labels

Calm, professional tone

Demo-only logic (no backend)

Step 1: Industry Selection (existing, keep)

Industries:

Healthcare

Professional Services

Multi-location Business

Hospitality / Hotel Restaurant

Step 2: Operations Review

Example questions:

How many active staff members?

1–5 / 6–20 / 21–50 / 50+

How are daily operations managed?

Mostly manual

Partially systemized

Mostly automated

Step 3: Revenue & Growth

Do you actively re-engage past customers/clients?

Yes (automated)

Yes (manual)

No

Are missed appointments / drop-offs tracked?

Yes

Somewhat

No

Step 4: Visibility & Decision-Making

Do you have real-time visibility into performance?

Yes (dashboards)

Partial (reports/spreadsheets)

No

How confident are you in your operational data?

High / Medium / Low

Step 5: Tools Used (NEW – IMPORTANT)

Use multi-select pickers, NOT text input.

Group tools by category:

CRM

HubSpot

Zoho

Salesforce

None / Not sure

Scheduling / Booking

Calendly

OpenTable

Google Calendar

None

POS / Payments (industry-aware)

Square

Toast

Stripe

PayPal

None

Email / Marketing

Mailchimp

ActiveCampaign

WhatsApp Business

None

Allow multiple selections per group.

Step 6: Company Details (NEW – LEAD CAPTURE)

This is the final step before results.

Fields:

Company name (required)

Work email (required)

Reassurance text:

We’ll use this only to send your audit summary.

Submit → /audit/results

🔹 AUDIT RESULTS PAGE (/audit/results) — INDUSTRY-SPECIFIC
Page behavior

Results must vary based on:

Industry

Answers

Score bucket

Display sections
1️⃣ Personalized Header

{{company_name}} — Systems Audit Summary

Include:

Industry

Audit score (0–100)

Maturity level

Maturity levels

0–40 → Foundational

41–70 → Developing

71–100 → Optimized

2️⃣ Key Findings

Show top 3 issues, different per industry.

Example (Healthcare):

Appointment leakage

Manual intake workflows

No patient reactivation system

3️⃣ Recommended Systems (Industry-Specific)

Show pre-made system templates relevant to that niche.

Examples:

Healthcare → Intake automation, recall system

Professional services → Lead qualification, CRM cleanup

Multi-location → Unified dashboard, reporting

Hospitality → No-show reduction, reactivation flows

4️⃣ Sample System Preview

Render template HTML

Replace placeholders:

{{company_name}}

{{industry}}

Include light interactivity (toggles, preview states)

5️⃣ Actions

Primary CTA:

Book a Walkthrough Call

Secondary CTA:

Download Audit Summary (PDF)

PDF is demo-generated client-side.

🔹 AGENT DEMO PAGE (/agent-demo)

No changes to structure, but:

Make agent responses reference:

Company name

Industry

Audit findings

Clearly label:

Demo Systems Assistant (no live AI yet)

🔹 BOOK CALL PAGE (/book-call)

No functional backend.

Add copy:

What will be reviewed

What the client will see

Placeholder calendar embed

🔹 TECHNICAL NOTES

Use mock JSON data

Use rule-based scoring

Prepare /api/* stubs but do not implement

Client-side PDF generation only

Code must be clean and extensible

🔹 END v2 PROMPT
B️⃣ MOCK DEMO DATA (PER NICHE)
healthcare_demo.json
{
  "company": "Acme Dental Clinic",
  "industry": "Healthcare",
  "answers": {
    "staff": "6-20",
    "operations": "Partial",
    "reactivation": "No",
    "visibility": "Low",
    "tools": ["Google Calendar", "Stripe"]
  },
  "score": 52,
  "bucket": "Developing",
  "issues": [
    "Appointment leakage",
    "Manual patient intake",
    "No reactivation system"
  ]
}

hospitality_demo.json
{
  "company": "Harborview Hotel Restaurant",
  "industry": "Hospitality",
  "answers": {
    "staff": "21-50",
    "operations": "Mostly manual",
    "reactivation": "Manual",
    "visibility": "Medium",
    "tools": ["OpenTable", "Square"]
  },
  "score": 47,
  "bucket": "Foundational",
  "issues": [
    "Reservation no-shows",
    "No guest reactivation",
    "Disconnected systems"
  ]
}


(Professional services & multi-location follow same structure.)

C️⃣ CLIENT-SIDE SCORING LOGIC (DEMO)
function calculateScore(answers) {
  let score = 0;

  // Operations
  if (answers.operations === "Mostly automated") score += 30;
  else if (answers.operations === "Partial") score += 15;

  // Revenue
  if (answers.reactivation === "Automated") score += 20;
  else if (answers.reactivation === "Manual") score += 10;

  // Visibility
  if (answers.visibility === "High") score += 20;
  else if (answers.visibility === "Medium") score += 10;

  // Tools maturity
  if (answers.tools.length >= 3) score += 15;
  else if (answers.tools.length >= 1) score += 5;

  // Team scale
  if (answers.staff === "21-50" || answers.staff === "50+") score += 15;

  return Math.min(score, 100);
}

D️⃣ TEMPLATE HTML (EXAMPLE — HEALTHCARE)
<div class="system-template">
  <h2>{{company_name}} — Patient Operations System</h2>

  <ul>
    <li>Automated appointment reminders</li>
    <li>Digital intake & forms</li>
    <li>Patient reactivation workflows</li>
  </ul>

  <p>
    Designed specifically for {{industry}} practices to reduce no-shows,
    save staff time, and increase repeat visits.
  </p>
</div>


(Equivalent templates exist for the other 3 niches.)
