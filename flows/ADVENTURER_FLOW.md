# Guild - Adventurer User Flow

## Overview

Complete journey for adventurers (contractors) from discovery to getting hired and completing quests.

---

## Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Founding Member** | **$25/month** | Unlimited quest applications, lifetime rate (first 100 only) |
| **Regular** | **$49/month** | Unlimited quest applications |

---

## Phase 1: Discovery

### Entry Points
| Source | Experience |
|--------|------------|
| Google Search | "Find local contractor jobs" → SEO landing page |
| Referral | Link from friend/other adventurer |
| Direct | joinguild.app/adventurers |

### Landing Page (Adventurer Focus)
**URL**: `/adventurers`

**Hero Section:**
- Headline: "Join the Guild"
- Subheadline: "Stop paying $50-100 for leads that ghost you. One flat fee, unlimited quests."
- CTA: "Create Free Profile"
- Trust badges: "No Lead Fees", "No Commission", "Direct Connection"

**Launch Promo Banner:**
🎉 **GRAND OPENING** — First 100 adventurers get $25/month forever (50% off!)

**Social Proof:**
- "Join 500+ adventurers already finding work"
- Testimonial carousel from adventurers

**How It Works (3 steps):**
1. Create your profile (5 min)
2. Browse quests in your area
3. Get contacted by quest givers

**FAQ Preview:**
- Is it really $25/month? → Yes, for founding members
- How do I get paid? → Directly by quest giver, we take 0%
- What trades are accepted? → All licensed trades

**CTA**: "Get Started" button → Signup modal

---

## Phase 2: Signup & Onboarding

### Step 1: Account Creation
**Screen**: Signup modal/page

**Options:**
- Email + Password
- Continue with Google
- Continue with Apple

**Fields:**
- Email (validated)
- Password (min 8 chars, strength indicator)
- Terms acceptance checkbox

**After Signup:**
- Verification email sent
- Screen: "Check your email" with resend option
- Auto-redirect to onboarding after verification

### Step 2: Profile Wizard

**Progress Indicator**: Step X of 7

#### Step 2.1: Personal Information
**Fields:**
- Full Name (text input)
- Business Name (optional, text input)
- Phone Number (with country code)
- Preferred contact method (radio: Phone/Text/Email)

#### Step 2.2: Trade Selection
**Screen**: Trade selector

**Options (checkboxes, select all that apply):**
- Plumbing
- Electrical
- HVAC
- Roofing
- Flooring
- Painting
- Carpentry
- Masonry
- Landscaping
- General Contracting
- Other (text input)

#### Step 2.3: License Information
**Screen**: License verification

**Fields:**
- License Number (text input)
- State (dropdown)
- License Type (dropdown: Residential, Commercial, Both)
- Upload License Photo (file picker)

**Help Text**: 
- "Why we need this: Quest givers trust verified adventurers. We manually verify every license."
- "Don't have a license yet? [Learn about licensing requirements]"

**File Upload:**
- Drag & drop or click to browse
- Accepted: JPG, PNG, PDF
- Max size: 5MB

#### Step 2.4: Service Area
**Screen**: Location setup

**Options:**
- Option A: Enter ZIP codes (comma separated)
- Option B: Set radius from address
  - Address input
  - Radius slider: 5, 10, 25, 50 miles

#### Step 2.5: Portfolio Photos
**Screen**: Photo upload

**Instructions**: "Show quest givers your best work. Upload 3-10 photos of completed quests."

**Requirements:**
- Minimum 3 photos
- Maximum 10 photos
- Format: JPG, PNG
- Max per file: 5MB

#### Step 2.6: Bio & Description
**Screen**: About you

**Fields:**
- Headline (60 chars max): "e.g., Expert Plumber with 15 Years Experience"
- Bio (500 chars max): Textarea with character counter
- Years of Experience (number input)

#### Step 2.7: Review & Submit
**Screen**: Profile preview

**Sections:**
- Personal Info (editable)
- Trades (editable)
- License (status: pending verification)
- Service Area (map preview)
- Portfolio (photo grid)
- Bio (editable)

**Checkbox**: "I confirm all information is accurate and I hold valid licenses for my trade(s)."

**CTA**: "Submit for Approval"

**After Submit:**
- Success screen: "Profile Submitted!"
- Message: "We're verifying your license. This usually takes 24-48 hours."
- Email confirmation sent
- "While you wait, browse available quests" (optional)

---

## Phase 3: Pending Approval

### State: adventurer.status = "pending"

**Dashboard View:**
- Banner: "Your profile is being reviewed"
- Progress indicator: Step 3 of 3 - Verification
- Estimated time: "24-48 hours"
- What happens next explanation

**Available Actions:**
- Edit profile (changes reset approval timer)
- Browse quests (view only, can't apply)
- Help/FAQ

**Notifications:**
- Email: "Profile received, verifying license"
- Email (24 hours): "Still reviewing, here's what to expect"

---

## Phase 4: Approved & Active

### Approval Email
**Subject**: "You're approved! Join the Guild"

**Content:**
- Congratulations message
- "Your license has been verified"
- CTA: "Browse Quests Now"
- Quick tips for success

### Subscription Step
**Screen**: Choose your plan

**Options:**
```
+------------------------+
| FOUNDING MEMBER        |
| $25/month              |
| Unlimited applications |
| Lifetime rate          |
| [Subscribe]            |
| (First 100 only!)      |
+------------------------+
| REGULAR                |
| $49/month              |
| Unlimited applications |
| [Subscribe]            |
+------------------------+
```

**Payment:**
- Stripe checkout
- Monthly billing
- Cancel anytime

### First Login (Post-Approval)
**Screen**: Welcome back

**Onboarding Checklist:**
- [x] Create profile
- [x] Verify license
- [ ] Subscribe
- [ ] Complete first quest

**Quick Tour Modal:**
1. "This is your dashboard" - shows quest feed
2. "Filter by your trades" - shows filter bar
3. "Apply to quests" - shows button
4. "Quest giver contacts you directly" - explains process

**CTA**: "Start Browsing Quests"

---

## Phase 5: Browsing & Applying to Quests

### Dashboard
**URL**: `/adventurer/dashboard`

**Layout:**
- Header: Logo, navigation, profile menu
- Sidebar: Filters
- Main: Quest feed

**Quest Card:**
```
+------------------------+
| [Trade Badge]          |
| Quest Title            |
| Location: ZIP Code     |
| Budget: $X - $Y        |
| Posted: 2 hours ago    |
| [View Details]         |
+------------------------+
```

**Filters (Sidebar):**
- Trade (checkboxes of adventurer's trades)
- Distance (5, 10, 25, 50 miles)
- Budget (min/max sliders)
- Posted (last 24h, 7 days, 30 days)

### Quest Detail View
**URL**: `/quests/[id]`

**Content:**
- Quest title
- Trade type
- Full description
- Location (ZIP, approximate area)
- Budget range (if provided)
- Photos (if quest giver uploaded)
- Posted date
- "Apply to Quest" button

**Apply to Quest Modal:**
- Pre-filled message: "Hi, I'm [Name], a licensed [Trade] with [X] years of experience. I'd love to discuss your quest."
- Editable message (500 chars)
- "Send Application" button

**After Applying:**
- Success toast: "Application sent! Quest giver will review your profile."
- Quest marked as "Applied" in feed
- Email notification to quest giver

---

## Phase 6: Getting Selected

### Notification: Quest Giver Selected You
**Email Subject**: "[Quest Giver Name] wants to form a party for [Quest Title]"

**Email Content:**
- Quest giver name and contact info
- Quest details
- Your next step: "Contact them within 24 hours"
- Tips for first contact

**Dashboard Notification:**
- Badge on "My Applications"
- Entry in applications list

### Applications Dashboard
**URL**: `/adventurer/applications`

**Tabs:**
- Active (quest giver hasn't decided)
- Selected (you're chosen, awaiting contact)
- Completed (quest done)
- Declined (quest giver chose someone else)

**Selected Quest Card:**
```
+------------------------+
| 🎉 SELECTED            |
| Quest Title            |
| Quest Giver: [Name]    |
| Phone: [Number]        |
| Email: [Email]         |
| [Mark as Contacted]    |
+------------------------+
```

**After Contact:**
- Adventurer clicks "Mark as Contacted"
- Optional: Add notes (private)
- Status changes to "In Discussion"

---

## Phase 7: Quest Execution

### Marking Quest Status

**Status Options:**
- In Discussion (initial contact made)
- Scheduled (appointment set)
- In Progress (work started)
- Quest Complete (work done)

**Completion Flow:**
1. Adventurer marks "Quest Complete"
2. Uploads completion photos (optional, 0-5)
3. Adds final notes
4. Requests quest giver mark as complete

---

## Summary

The **Adventurer** flow supports:
- ✅ All licensed trades
- ✅ Multiple service areas
- ✅ Portfolio showcasing
- ✅ Direct quest giver connection

**Key Differentiator:** $25-49/month unlimited vs $25-120/lead on competitor platforms. Keep 100% of earnings.
