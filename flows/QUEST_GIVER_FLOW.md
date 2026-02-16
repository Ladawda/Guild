# Guild - Quest Giver User Flow

## Overview

Complete user journey for **Quest Givers** (anyone posting quests) — homeowners, property managers, business owners, real estate investors, or anyone needing contractor work.

---

## Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Launch Promo** | **FREE** | First month free for all quest posts |
| **Regular** | **$10 per quest** | One-time fee, no recurring charges |

---

## Phase 1: Discovery

### Entry Points

| Source | Search Query | Landing Experience |
|--------|--------------|-------------------|
| Google SEO | "flooring contractor near me" | Local adventurer directory |
| Google SEO | "licensed plumber [city]" | City-specific landing page |
| Google SEO | "property management contractors" | Commercial focus page |
| Referral | Direct link | Generic landing |
| Social | Facebook/Nextdoor post | Campaign landing |

### Landing Page (`/`)

**Hero Section:**
- Headline: "Join the Guild"
- Subheadline: "Post a quest. Find your party. Get it done."
- CTAs:
  - Primary: "Post a Quest" (for quest givers)
  - Secondary: "Join as Adventurer" (for adventurers)

**Launch Promo Banner:**
🎉 **GRAND OPENING** — Post your first quest FREE this month!

**Trust Signals:**
- "Join 1,000+ quest givers finding reliable adventurers"
- "Verified licenses • No middleman fees • Direct contact"

---

## Phase 2: Onboarding

### Step 1: Account Creation

**Route**: `/signup?type=quest-giver`

**Options:**
- Email + Password
- Continue with Google
- Continue with Apple

**Fields:**
- Email
- Password
- Account Type (can change later):
  - Homeowner
  - Property Manager
  - Business Owner
  - Real Estate Investor
  - Other (text input)

### Step 2: Email Verification
Same flow as before.

### Step 3: Profile Setup

**Route**: `/onboarding/quest-giver/profile`

**Fields:**
```typescript
{
  fullName: string;           // Required
  companyName: string;        // Optional (for PMs/businesses)
  phone: string;              // Required
  preferredContact: 'phone' | 'text' | 'email';
  primaryZipCode: string;     // Required
  accountType: string;        // From signup, editable
}
```

---

## Phase 3: Quest Posting

### Quest Post Wizard

**Route**: `/post-quest`

**Step 1: Quest Basics**
```typescript
{
  title: string;              // e.g., "Bathroom renovation - 2 units"
  trade: string;              // Select from list
  description: string;        // Textarea, min 50 chars
  questType: 'residential' | 'commercial' | 'multi-family';
}
```

**Step 2: Location**
```typescript
{
  address: string;            // Street address
  city: string;
  state: string;
  zipCode: string;
  // Pre-filled from profile, editable
}
```

**Step 3: Timeline & Budget**
```typescript
{
  timeline: 'asap' | 'within-week' | 'within-month' | 'flexible';
  budgetMin: number;          // Optional
  budgetMax: number;          // Optional
  budgetType: 'fixed' | 'hourly' | 'not-sure';
}
```

**Step 4: Photos (Optional)**
- Upload up to 5 photos
- Drag & drop

**Step 5: Review & Payment**

**Review Card:**
```
+------------------------+
| Quest Summary          |
| Title: [title]         |
| Trade: [trade]         |
| Location: [address]    |
| Budget: [range]        |
| Photos: [count]        |
+------------------------+
| Payment                |
| Quest posting fee: $10 |
| [Pay with Stripe]      |
+------------------------+
```

**Launch Promo:** "FREE — Grand Opening Offer"

**Success:**
- Quest posted
- Confirmation email
- Redirect to dashboard

---

## Phase 4: Adventurer Matching

### Quest Giver Dashboard

**URL**: `/dashboard`

**Sections:**

**Active Quests:**
```
+------------------------+
| [Quest Title]          |
| Status: [Open/Filled]  |
| 3 adventurers applied  |
| [Review Applicants]    |
+------------------------+
```

**Applicant Review:**
- Adventurer cards with:
  - Name, photo
  - License verified badge
  - Years experience
  - Past quest photos
  - "View Profile" button
  - "Form Party" button

**Party Formation Flow:**
1. Quest giver clicks "Form Party" on adventurer
2. System emails both parties with intro
3. They communicate off-platform
4. Quest giver marks quest as "Party Formed"

---

## Phase 5: Quest Execution

### Quest Status Tracking

**Statuses:**
- Open (accepting applications)
- Reviewing (evaluating adventurers)
- Party Formed
- In Progress
- Quest Complete
- Cancelled

**Quest Giver Actions:**
- Mark as "Party Formed"
- Mark as "In Progress"
- Mark as "Quest Complete"
- Cancel quest (if no adventurer selected, refund issued)

---

## Refund Policy

If no adventurer applies within 7 days:
- Automatic credit for another free quest post
- Email notification with option to boost visibility

---

## Summary

The **Quest Giver** flow supports:
- ✅ Homeowners with single projects
- ✅ Property managers with portfolios
- ✅ Business owners with commercial needs
- ✅ Real estate investors with flips/renovations
- ✅ Anyone else needing contractor work

**Key Differentiator:** $10 flat fee (FREE launch month) vs $50-100/lead on competitor platforms.
