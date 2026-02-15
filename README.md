# Contractie

A marketplace connecting verified contractors with serious homeowners.

**Status:** MVP in development - Launching in 1 week

---

## The Problem

- Homeowners struggle to find trustworthy, licensed contractors
- Contractors waste time on unqualified leads and expensive per-lead fees
- Existing platforms are flooded with unverified workers and spam

## The Solution

Contractie is a lean marketplace where:
- **Contractors** create verified profiles (we manually check every license)
- **Homeowners** post jobs and get matched with 2-3 qualified contractors
- **Connections** happen via email intro - no complex messaging system
- **Payments** happen off-platform - no escrow complexity

---

## Simplified MVP

**Launch Timeline: 1 Week**

### What's In:
- Contractor signup with license upload
- Homeowner job posting
- Browse jobs by location/trade
- "Express Interest" button (no messaging)
- Manual license verification (by you)
- Manual email introductions (by you)
- Stripe subscriptions ($25/month for unlimited access)

### What's Out (Manual Instead):
- ❌ In-app messaging → Manual email intros
- ❌ Automated license verification → You check state databases
- ❌ Escrow payments → Off-platform (cash/check/Venmo)
- ❌ Reviews/ratings → Manual reference checks
- ❌ Mobile apps → Responsive web only

### Pricing:

**Homeowners:**
- Free: 1 job post/month, 3 contractor contacts
- Pro ($25/month): Unlimited posts, unlimited contacts, priority listing

**Contractors:**
- Free: Profile, browse jobs, 5 interest expressions/month
- Pro ($25/month): Unlimited expressions, priority placement, "Verified Pro" badge

---

## How It Works

### For Homeowners:
1. Post your job (2 minutes)
2. We match you with 2-3 verified contractors
3. Get introduced via email
4. Hire directly - no platform fees

### For Contractors:
1. Create profile and upload license
2. We verify you manually (24-48 hours)
3. Browse jobs and express interest
4. Get introduced to homeowners
5. Work directly - keep 100% of your pay

### For You (Admin):
1. Check new signups daily
2. Verify contractor licenses (10 mins each)
3. Send email intros when matches happen
4. Follow up after 7 days for outcomes

**Time commitment: ~25 minutes/day**

---

## Tech Stack (Minimal)

- **Frontend:** Next.js 14 + Tailwind CSS
- **Database:** Supabase (Auth + PostgreSQL + Storage)
- **Payments:** Stripe (subscriptions only)
- **Email:** Resend or your personal email
- **Hosting:** Vercel

**Pages needed:** 6
1. Landing page
2. Contractor signup
3. Homeowner signup
4. Job posting form
5. Job browse page
6. Simple admin dashboard

---

## Documentation

### Core Docs
- [REVISED_MVP.md](./REVISED_MVP.md) - Simplified MVP approach
- [COMMUNICATION_FLOW.md](./COMMUNICATION_FLOW.md) - How users connect (6-step process)
- [EMAIL_TEMPLATES.md](./EMAIL_TEMPLATES.md) - Ready-to-use email templates
- [LANDING_PAGE_COPY.md](./LANDING_PAGE_COPY.md) - Complete landing page copy
- [MARKETING_STRATEGY.md](./MARKETING_STRATEGY.md) - Go-to-market plan

### Legacy Docs (`/docs`)
- [PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md) - Original problem/solution
- [MVP_FEATURES.md](./docs/MVP_FEATURES.md) - Original scope
- [USER_FLOWS.md](./docs/USER_FLOWS.md) - Detailed user journeys
- [DATABASE_SCHEMA.md](./docs/DATABASE_SCHEMA.md) - SQL tables
- [PAGE_LIST.md](./docs/PAGE_LIST.md) - All pages needed
- [MANUAL_PROCESSES.md](./docs/MANUAL_PROCESSES.md) - What you'll handle by hand
- [LAUNCH_CHECKLIST.md](./docs/LAUNCH_CHECKLIST.md) - Original 4-week plan

### Technical Docs (`/tech`)
- [QUICK_START.md](./tech/QUICK_START.md) - Setup commands
- [FILE_STRUCTURE.md](./tech/FILE_STRUCTURE.md) - Folder organization
- [KEY_COMPONENTS.md](./tech/KEY_COMPONENTS.md) - Component pseudocode
- [SUPABASE_SETUP.md](./tech/SUPABASE_SETUP.md) - Database SQL
- [STRIPE_SETUP.md](./tech/STRIPE_SETUP.md) - Payment setup
- [DEPLOY.md](./tech/DEPLOY.md) - Vercel deployment

---

## Quick Start

```bash
# 1. Create project
npx create-next-app@latest contractie --typescript --tailwind --app

# 2. Install dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs stripe

# 3. Setup environment variables
# See tech/QUICK_START.md for full list

# 4. Run dev server
npm run dev
```

---

## Launch Timeline (1 Week)

| Day | Task |
|-----|------|
| Day 1 | Setup project, database schema, auth |
| Day 2 | Landing page + contractor signup |
| Day 3 | Homeowner signup + job posting |
| Day 4 | Job browse + "Express Interest" button |
| Day 5 | Stripe subscriptions + admin dashboard |
| Day 6 | Email templates + testing |
| Day 7 | Deploy + soft launch |

---

## Success Metrics (First 30 Days)

- **10 contractors** signed up and verified
- **10 job posts** from homeowners
- **5 successful matches** (intro emails sent)
- **2 paid subscriptions** (either side)

---

## Key Principle

**Don't build it until it hurts NOT to have it.**

Manual processes are fine. Unvalidated features are waste. Launch fast, learn from real users, automate what actually needs automating.

---

## License

Proprietary - All rights reserved
