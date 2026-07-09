# Handoff: Repply — Review & Reputation Manager for Local Business

## Overview
Repply helps single-location businesses (cafés, barbers, shops, fitness & spa, bars/clubs) grow and defend their online rating. Core loop: unify reviews from all platforms into one inbox → AI-draft replies in the customer's language → request new reviews (WhatsApp-first) with negative-review interception → track Map Pack rank against the local competitor.

Target price: $29/mo (US), 25 €/mo (Europe), 149 MAD/mo (Morocco), 109 AED/mo (Gulf). Beachhead markets: tourism-driven cities (Marrakech, Casablanca, Dubai, Doha, Riyadh).

## About the Design Files
The files in this bundle are **design references created in HTML** — interactive prototypes showing intended look and behavior, **not production code to copy directly**. The `.dc.html` files use a proprietary streaming template runtime (`support.js`, `<x-dc>`, `{{ holes }}`, `sc-for`/`sc-if`); ignore that machinery. Your task is to **recreate these designs in the target codebase's environment**.

**Recommended stack** (matches the founder's existing BuilderOS repo): **React 19 + Vite**, packaged for mobile with **Capacitor** (Android first, iOS second). If you choose differently, keep: offline-tolerant local persistence, one codebase for web + mobile.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, and copy are final. Recreate pixel-perfectly. The device frames in `Repply Mobile` / `Repply iOS` are presentation chrome only — do not implement bezels.

## Design Tokens (BuilderOS design system)
- **Page background**: `#070b18`, with a fixed 40px grid overlay: `linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px)` horizontal + vertical
- **Panel**: bg `#101526`, border `1px solid #28304a`, radius `12px`, padding `20-24px`
- **Inner card**: bg `#161c32`, border `1px solid #28304a`, radius `8px`, padding `12-16px`
- **Text**: primary `#e8e8f0`, body `#d0d0e8`, secondary `#a0a0c8`, muted `#7a7a9a`, dim `#4a4a6a`
- **Accent (tweakable)**: default violet `#6c63ff`; premium options `#e3b341` (gold), `#2fe6a8` (emerald), `#7cc4ff` (ice), `#ff6584` (rose), `#c084fc` (orchid)
- **Status colors**: negative/pink `#ff6584`, warning/yellow `#f4c55a`, success/green `#43e97b`, info/cyan `#3ad6e0`, orange `#ff9f5a`
- **Gradient strip** (top of panels, 2px): `linear-gradient(90deg, <accent>, #ff6584)` (varies per tab: →#43e97b Get reviews, →#f4c55a Rank, →#3ad6e0 Insights/Setup)
- **Headline gradient text**: `linear-gradient(135deg, #fff 30%, <accent> 100%)` with background-clip: text
- **Fonts**: `'Segoe UI', system-ui, sans-serif` body; `monospace` for micro-labels (10px, letter-spacing 1–3px, uppercase) and data values
- **Pills**: radius `20px`; selected = bg `rgba(108,99,255,0.18)`, border+text accent; unselected = bg `#161c32` or transparent, border `#28304a`, text `#a0a0c8`/`#7a7a9a`
- **Primary button**: bg accent, white text, radius `6-8px`, weight 600
- **Tabs**: radius 6px; active = solid accent bg + white text; inactive = `#101526` bg, `#28304a` border, `#7a7a9a` text
- **Platform tag chips**: monospace 10px bold uppercase, 1px border in platform color, radius 2px. Platform colors: Google `#3ad6e0`, Yelp/Treatwell `#ff6584`, Tripadvisor `#34e0a1`, Facebook/Fresha `#6c63ff`, ClassPass `#f4c55a`, Mindbody `#ff9f5a`, Trustpilot `#43e97b`

## Screens / Views

### 1. Web app — `Repply Review Manager.dc.html` (max-width 920px, centered)
**Header**: logo tile (36px, rounded 8, accent border, 💬) + gradient "Repply" wordmark + mono sub "REVIEW OS · {business}". Right: connected-platform pills (green 6px dot) driven by vertical preset + "+ More" dashed button.

**Tab bar**: 📥 Inbox · 🚀 Get reviews · 📍 Rank · 📊 Insights · ⚙️ Setup (right-aligned, shows progress badge "n/4").

**Inbox**: alerts toggle strip (🔔 "Instant alerts — SMS + push when a review ≤ 3★ lands", ON/OFF pill); filter pills (All / Needs reply / Negative / Replied); review cards:
- Card: platform chip, star string (★ filled `#f4c55a`), author, mono time, optional `🌐 FR · auto-detected` language chip (cyan bordered), status label right-aligned (`NEEDS REPLY` pink / `✓ REPLIED` green)
- Unreplied negative cards get border `rgba(255,101,132,0.45)`
- "✍ draft reply" button expands an inline composer: tone pills (Warm / Professional / Brief) that regenerate the draft, editable textarea, Send (accent) + Cancel. **Tripadvisor reviews**: send button reads "Copy & open Tripadvisor" (no public reply API — copy to clipboard and deep-link).
- Reply drafts must match review language (EN/FR/ES/AR samples in the file) and read human: short, owner-voiced, no emoji spam.

**Get reviews**: stats (Invites sent / Left a review + conversion % / Intercepted); invite composer with auto-send trigger line (per vertical), channel pills (WhatsApp / SMS / Email / QR card), message textarea with `{link}` token, send button + "✓ queued" flash; interception section with ON/OFF toggle and funnel: "How was your visit?" → 😊 happy → Google (green card) / 😕 unhappy → private feedback form (pink card); intercepted private feedback list (pink left-border rows).

**Rank**: keyword rows (mono keyword, `#n` rank colored green ≤2 / yellow 3–4 / pink ≥5, ▲▼ delta, leader note); review-velocity comparison bars (you vs named competitor); insight callout linking to Get reviews.

**Insights**: stat cards (avg rating, new reviews, response rate, median response); 8-week rating trend bar chart (bar color by value: ≥4.2 green, ≥4.0 yellow, else pink); sentiment split bar (68/18/14 green/yellow/pink); keyword mention chips (± counts, colored by sentiment).

**Setup (4 steps, progress bar)**:
1. Business type picker — ☕ Café & restaurant / 💈 Barber & beauty / 🛍️ Shop & retail / 🧘 Fitness & spa / 🍸 Bar & club. **The vertical preset re-tunes**: connected platform list, invite auto-send trigger ("2 hours after checkout" / "30 min after the appointment ends" / "1 day after purchase" / "after their 3rd visit" / "next morning at 11:00"), rank keywords + named competitor, sample content.
2. Connect platforms (green ✓ pills + "Connect Facebook" CTA)
3. Import review history (button → "✓ 214 reviews imported · sentiment analyzed")
4. Alert phone number (input + save → "✓ SMS alerts → {phone}")

### 2. Landing page — `Repply Landing.dc.html` (max-width 860px)
Nav (logo + EN/FR/ES/AR language pills + "Get early access" CTA); hero (mono badge, gradient 2-line headline, sub, waitlist email capture with joined-state flash and per-locale price note); 3 problem stat cards; 6 feature cards (2px gradient strip, icon tile, title, desc); pricing card (accent border, locale price, 7-item checklist, CTA); footer. **Arabic sets `dir="rtl"` on the whole page.** Price per locale: $29 / 149 MAD / 25 € / 109 AED (manual override possible).

### 3. Weekly digest email — `Repply Weekly Digest.dc.html` (600px email)
Subject preview card; header (logo + "Your reputation this week" + business/date range); 3 stat tiles (4.3★ ▲0.1 / 11 new / 91% answered); "Needs you today" pink-bordered review card with "Reply now — draft is ready" CTA; "Best moment of the week" quote card; "Rank watch" row + competitor velocity note; "Open Repply" ghost CTA; footer with unsubscribe/preferences. Same EN/FR/ES/AR content model.

### 4. Mobile apps — `Repply Mobile.dc.html` (Android) & `Repply iOS.dc.html`
Same inbox flow compressed for a 393–412px viewport: compact header with rating + needs-reply count, horizontally scrolling filter pills, review cards with full-width "✍ draft reply" (≥44px hit targets), inline draft + Send/Cancel, bottom tab bar (INBOX / INVITES / RANK / STATS — mono 9px labels, active in accent). iOS variant: floating pill tab bar (radius 26, blur backdrop), card radius 14, -apple-system font.

## Interactions & Behavior
- Tab/filter switching: instant, no route change needed (SPA state)
- Draft reply: opening a card generates a draft from (sentiment × tone × language); switching tone regenerates; user edits persist per review until sent
- Send: marks review replied, collapses composer; Tripadvisor → clipboard + open URL instead
- Toggles (alerts, interception): ON = green pill `rgba(67,233,123,0.12)` bg + `#43e97b` border/text; OFF = transparent + `#28304a`/`#7a7a9a`
- Invite send: "✓ queued" mono green flash for ~1.8s
- Waitlist join: validates non-empty email, swaps note for "✓ you're on the list"
- Setup steps check off (○ gray → ✓ green) and advance the progress bar (n/4, gradient fill, 0.4s ease width transition)

## State Management
- `vertical` (cafe|barber|shop|fitness|club) — drives platforms, trigger, competitors, keywords, sample data
- `filter`, `openReviewId`, `tone`, `drafts{id: text}`, `replied{id: bool}`
- `alertsOn`, `interceptOn`, `channel`, `inviteMsg`
- Setup: `fbConnected`, `imported`, `alertPhone`, `phoneSaved`
- Landing/digest: `lang` (en|fr|es|ar), `email`, `joined`
- Persist app state locally (localStorage/Capacitor Preferences), consistent with the offline-first BuilderOS pattern
- Real backend eventually needs: Google Business Profile API, Yelp Fusion, Facebook Graph, review-invite sending (Twilio/WhatsApp Business API), language detection + LLM drafting, rank-grid data (phase 2)

## Assets
No image assets. Icons are emoji (part of the BuilderOS design language). Platform names rendered as typographic chips, not logos.

## Files
- `Repply Review Manager.dc.html` — main web app (5 tabs, vertical presets)
- `Repply Landing.dc.html` — marketing/waitlist page (4 languages, RTL)
- `Repply Weekly Digest.dc.html` — retention email (4 languages)
- `Repply Mobile.dc.html` / `Repply iOS.dc.html` — mobile mockups (`android-frame.jsx` / `ios-frame.jsx` are presentation chrome only)
- Pitch deck intentionally excluded — investor material, not implementation scope
