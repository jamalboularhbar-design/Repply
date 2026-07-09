# Repply — app

React 19 + Vite implementation of the Repply design handoff (see repo root for the `.dc.html` design references).

## Run

```bash
npm install
npm run dev      # http://localhost:5199
npm run build    # production build → dist/
```

## Routes

| Route | Surface |
|---|---|
| `#/` | Landing page (EN / FR / ES / AR, RTL for Arabic) |
| `#/app` | Review Manager — Inbox · Get reviews · Rank · Insights · Setup |
| `#/digest` | Weekly digest email preview (EN / FR / ES / AR) |

Under 520px viewport, `#/app` switches to the mobile chrome (bottom tab bar; floating pill bar on iOS).

## State

All app state persists to `localStorage` (`repply-state-v1`) — offline-first, consistent with the BuilderOS pattern. The vertical preset chosen in Setup step 1 re-tunes platforms, invite trigger, rank keywords, competitor, and sample reviews.

## Mobile packaging (Capacitor)

`capacitor.config.json` is included. To package:

```bash
npm run build
npm i -D @capacitor/cli && npm i @capacitor/core @capacitor/android
npx cap add android && npx cap sync && npx cap open android
```

iOS later via `@capacitor/ios` (needs a Mac).
