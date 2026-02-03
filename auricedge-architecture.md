# Auric Edge Architecture Guide

## Executive Summary
Auric Edge is a **modular, multi-layered platform** with clear separation of concerns. The frontend lives separately from the backend and automation layers, enabling independent development and scalability.

---

## 1. THE TRUTH ABOUT YOUR ECOSYSTEM

### ❌ What You DON'T Have (Yet)
```
auricedge-site/          ← Frontend only (visible)
aurorasync/              ← Future internal tools (later phase)
n8n/                     ← Automation workflows (OK)
```

### ✅ What You're Missing
```
auricedge-core/          ← Backend API (NEED THIS)
```

### 🎯 The Key Point
Your **auricedge.site frontend lives outside that ecosystem**, so:
- Opencode cannot see the code
- Cannot attach workflows, DBs, APIs, or automations

This is **expected behavior**, not a mistake on your part.

---

## 2. REQUIRED HIGH‑LEVEL ARCHITECTURE (FINAL FORM)

Auric Edge must be split into **four layers**:

```
[1] Frontend (auricedge.site)
[2] Backend API (Auric Edge Core)
[3] Automation + Orchestration (n8n / Antigravity)
[4] AI + Intelligence Layer (Phase 3)
```

Each layer has a clear responsibility.

---

## 3. FRONTEND ARCHITECTURE (auricedge.site)

### 3.1 Tech Stack (Recommended)
- Next.js (App Router)
- Deployed on Vercel
- Environment‑based API endpoints

### 3.2 Frontend Responsibilities ONLY

The frontend **must not**:
- Store business logic
- Generate PDFs
- Send emails directly
- Call AI models directly

It **only**:
- Collects audit data
- Displays results
- Sends data to backend
- Displays backend responses

### 3.3 Key Routes

| Route          | Purpose         |
| -------------- | --------------- |
| /              | Landing page    |
| /audit         | Audit flow      |
| /audit/results | Results display |
| /agent-demo    | Demo chat UI    |
| /book-call     | Calendar embed  |

### 3.4 Audit Submission Payload

Frontend submits **one clean JSON payload**:

```json
{
  "companyName": "",
  "email": "",
  "industry": "",
  "businessType": "",
  "customBusinessType": "",
  "answers": {},
  "tools": {},
  "score": 0
}
```

Frontend never decides outcomes — backend does.

---

## 4. BACKEND CORE (AURIC EDGE ENGINE)

### 4.1 This Is What You Are Missing

You currently **do not have this layer**.

This is what makes everything real.

### 4.2 Where It Lives

You have two correct options:

#### Option A (RECOMMENDED)
Create a **new Git repo**:
```
auricedge-core
```

This repo is:
- Connected to Antigravity
- Managed by Opencode
- Invisible to the public

Frontend talks to it via API.

#### Option B (Less clean)
Move auricedge.site into a monorepo with orasync
(Not recommended right now)

---

## 5. DATABASE DESIGN (CRITICAL)

### 5.1 Core Tables

#### leads
- id
- company_name
- email
- industry
- business_type
- custom_business_type
- score
- created_at

#### audit_answers
- id
- lead_id
- question_id
- answer

#### audit_results
- lead_id
- maturity_level
- recommendations
- created_at

#### automation_events
- id
- lead_id
- event_type
- payload
- processed_at

---

## 6. BACKEND CORE: MINIMUM MVP ENDPOINTS

### 6.1 Audit Processing
```
POST /api/audits
POST /api/audits/:id/results
GET /api/audits/:id/results
```

### 6.2 Lead Management
```
POST /api/leads
GET /api/leads/:id
PUT /api/leads/:id
```

### 6.3 Automation Triggers
```
POST /api/automations/trigger
```

### 6.4 Public Endpoints
```
GET /api/industries
GET /api/questions
```

---

## 7. AUTOMATION + ORCHESTRATION LAYER

### 7.1 Where It Lives
- **Antigravity**: Your managed n8n hosting
- **Workflows**: Stored in your n8n/ directory
- **Triggers**: Called by backend via webhooks

### 7.2 Workflow Types

#### Immediate Triggers
- New audit submission
- Demo request
- Contact form submission

#### Delayed Triggers
- Follow-up sequences (24h, 72h, 1 week)
- No-response follow-ups

---

## 8. AI + INTELLIGENCE LAYER (Phase 3)

### 8.1 Where It Lives
- Backend services calling external AI APIs
- Future: Dedicated AI processing pipeline

### 8.2 Responsibilities
- Audit answer analysis
- Recommendation generation
- Demo agent responses

---

## 9. SECURITY & DATA FLOW

### 9.1 API Keys & Environment
```
Frontend: NEXT_PUBLIC_API_URL
Backend: DATABASE_URL, AI_API_KEYS, N8N_WEBHOOK_URL
```

### 9.2 Data Flow
```
Frontend → Backend → n8n → (email, calendar, crm)
```

Never bypass the backend for automation triggers.

---

## 10. DEPLOYMENT TARGETS

### 10.1 Production Stack
```
Frontend:    Vercel
Backend:     Antigravity
Database:    Supabase (Antigravity)
Automations: Antigravity n8n
```

### 10.2 Development Workflow
```
1. auricedge-core (backend)
2. n8n workflows (automation)
3. aurorasync (internal tools)
```

---

## 11. WHAT TO BUILD FIRST

### 11.1 Priority Order
1. **Backend Core** (auricedge-core)
2. **Database Schema**
3. **API Endpoints**
4. **n8n Workflows**
5. **Frontend Integration**

### 11.2 Critical Path
```
Backend → n8n → Frontend → Internal Tools
```

---

## 12. NEXT STEPS

### 12.1 Immediate Actions
1. ✅ Create auricedge-core repo
2. ⏳ Set up database schema
3. ⏳ Build MVP endpoints
4. ⏳ Create first n8n workflow
5. ⏳ Update frontend API calls

### 12.2 Timeline Estimate
- Backend Core: 1-2 weeks
- n8n Integration: 1 week
- Frontend Updates: 2-3 days
- Full Integration: 2-3 weeks

---

## 13. COMMON PITFALLS TO AVOID

### 13.1 Architecture Violations
- ❌ Frontend calling n8n directly
- ❌ Business logic in frontend
- ❌ Hardcoded decision trees
- ❌ Missing data validation

### 13.2 Anti-Patterns
- ❌ Monolith thinking
- ❌ Skipping backend layer
- ❌ Ignoring security boundaries

---

## 14. CONCLUSION

Auric Edge is **not just a website** — it's a **four-layer platform**.

The frontend is just the UI layer. The real work happens in:
- Backend Core (auricedge-core)
- Automation Layer (n8n/Antigravity)
- AI Layer (future)

This architecture enables:
✅ Independent development
✅ Scalable automation
✅ Clear security boundaries
✅ Maintainable codebase

Build in layers. Start with the backend core.

---

## 15. FILES TO REFERENCE

- `auricedge-tech-debt-v2.md` - Technical debt analysis
- `auricedge-action-plan.md` - Immediate action steps
- `docs/5-auricedge-system-architecture.drawio` - Visual architecture