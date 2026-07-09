# Google Business Profile API — access playbook

The GBP API is the only major review platform that supports reading **and replying to** reviews programmatically. It is also gated: Google grants access per project, after a manual review, and new projects start with **quota 0** until approved. Typical turnaround is 2 weeks, sometimes longer — which is why this application goes in before any more code is written.

## Step 1 — Google Cloud project (15 min, do today)

1. Go to [console.cloud.google.com](https://console.cloud.google.com) signed in as `jamal.boularhbar@gmail.com` (the account that owns/manages the Riad & Routes and ArtKech Business Profiles).
2. Create project: name `repply-prod`, no organization.
3. Enable these APIs (APIs & Services → Library — search "Business Profile"):
   - **My Business Account Management API**
   - **My Business Business Information API**
   - **Google My Business API** (the v4 legacy API — this is the one that has `accounts.locations.reviews` including the **reply** endpoint; the newer APIs don't cover reviews yet)

## Step 2 — request API access (15 min, do today)

1. Fill in the official access request form linked from the prerequisites page: <https://developers.google.com/my-business/howtos/prereqs>
2. What to write (short, factual answers get approved; marketing language gets rejected):
   - **Company**: NexusAI Lab / Repply — review management tool for single-location businesses in Morocco and MENA.
   - **Use case**: retrieve reviews for a business's own verified locations and post owner replies, with the location owner's OAuth consent. No scraping, no third-party data.
   - **Business email**: use a domain email if possible (an address at a domain you own reads far better than gmail — worth setting up `jamal@repply.app` or similar first if the domain exists).
   - **Own listings for testing**: mention you manage verified Business Profiles (Riad & Routes, ArtKech) that will be used for development.
3. Watch for the approval email; after approval, go to APIs & Services → Quotas and confirm the per-minute quota is no longer 0 (if it is, request a quota increase referencing the approval).

## Step 3 — OAuth consent screen (do while waiting)

1. APIs & Services → OAuth consent screen: External, app name **Repply**, support email, developer contact.
2. Scope: `https://www.googleapis.com/auth/business.manage` (sensitive scope — Google will verify the app before public launch, but **Testing mode with up to 100 test users is enough for the whole founding cohort**; add each pilot business's Google account as a test user and skip verification until later).
3. Create OAuth client ID (Web application). Redirect URIs: `http://localhost:5199/oauth/callback` for dev plus the production URL once the app is hosted.

## Step 4 — what gets built once quota is granted

- **Connect flow**: Setup step 2's "Connect" button starts the OAuth dance; store the refresh token server-side (Netlify function + Blobs for the pilot, real DB later).
- **Review sync**: poll `accounts/{id}/locations/{id}/reviews` (v4). GBP also supports Pub/Sub push notifications for new reviews — wire that later; polling every 5 min is fine for pilots.
- **Reply**: `PUT .../reviews/{reviewId}/reply` — this powers the real "Send reply" button.
- First integration target: Riad & Routes' own profile. Customer zero.

## Honest constraints to remember

- Reviews API is the **legacy v4** surface; Google has been migrating GBP APIs piecemeal for years. Budget for API churn.
- Rate limits are per-project and modest; batch and cache.
- Yelp and Tripadvisor have **no public reply APIs** — the app's copy-and-deep-link flow for Tripadvisor is the permanent design there, not a stopgap.
- Booking.com / Airbnb (riad vertical) are partner-gated; the realistic v1 path for those is parsing their notification emails into the inbox, replying via deep link.
