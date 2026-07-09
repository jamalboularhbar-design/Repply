# Repply

Review OS for local business. One inbox for every review platform, AI reply drafts in the customer's language, WhatsApp-first review invites with negative-review interception, and Map Pack rank tracking against the local competitor.

**One plan · one location** — $29/mo (US) · 149 MAD/mo (Morocco) · 25 €/mo (Europe) · 109 AED/mo (Gulf).

## Repo layout

| Path | What it is |
|---|---|
| [`app/`](app/) | The application — React 19 + Vite, one codebase for web + mobile (Capacitor-ready). See [`app/README.md`](app/README.md) to run it. |
| [`design_handoff_repply/`](design_handoff_repply/) | Canonical design handoff: [spec](design_handoff_repply/README.md) + high-fidelity `.dc.html` design references. |

## Quick start

```bash
cd app
npm install
npm run dev   # http://localhost:5199
```

Routes: `#/` landing (EN/FR/ES/AR) · `#/app` review manager · `#/digest` weekly digest preview.
