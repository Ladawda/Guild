# Communication Flow

## How Homeowners and Contractors Connect

This document outlines the complete manual process for connecting users. No in-app messaging - everything flows through you via email.

---

## The 6-Step Connection Process

### Step 1: Homeowner Posts Job

**What happens:**
- Homeowner fills out job posting form
- Job appears in contractor browse feed
- Homeowner receives confirmation email

**Your action:** None (automated)

---

### Step 2: Contractor Expresses Interest

**What happens:**
- Contractor browses jobs in their area/trade
- Clicks "Express Interest" button
- System records the match in database

**Your action:** None yet (automated)

---

### Step 3: You Review and Verify

**What happens:**
- You receive notification (email or admin dashboard)
- Review contractor profile:
  - Is their license verified?
  - Do they have relevant experience?
  - Is their profile complete?
- Review job details

**Your action:**
- Log into admin dashboard
- Click contractor name to view full profile
- Check license on state contractor board website
- Verify they match the job requirements

**Decision:**
- ✅ **Approve** → Proceed to Step 4
- ❌ **Reject** → Send polite decline email to contractor

---

### Step 4: You Send Email Introduction

**What happens:**
- You manually send intro email to BOTH parties
- Email includes contact info for both sides
- Sets expectation for off-platform communication

**Your action:**
- Copy email template from EMAIL_TEMPLATES.md
- Customize with:
  - Contractor name and company
  - Homeowner name
  - Job details
  - Both email addresses
- Send to both parties (CC or separate emails)

**Important:** Include this line:
> "I'll follow up in one week to see how things went!"

---

### Step 5: They Communicate Off-Platform

**What happens:**
- Contractor calls/emails homeowner
- They discuss project details
- They negotiate price and timeline
- Payment happens off-platform (cash, check, Venmo, etc.)

**Your action:** None - let them handle it

---

### Step 6: You Follow Up for Outcome

**What happens:**
- 7 days after intro, you send follow-up email
- Ask if they connected and project status
- Record outcome in tracking spreadsheet

**Your action:**
- Check tracking spreadsheet for intros sent 7 days ago
- Send follow-up email to BOTH parties
- Update spreadsheet with outcome:
  - Connected? (Yes/No)
  - Project status? (Quoted / In Progress / Completed / Declined)
  - Feedback?

---

## Tracking Spreadsheet Template

Create a Google Sheet with these columns:

| Date | Job ID | Homeowner | Contractor | Status | Intro Sent | Follow-up Date | Outcome | Notes |
|------|--------|-----------|------------|--------|------------|----------------|---------|-------|
| 2/16 | 101 | John D. | ABC Roofing | Pending | 2/16 | 2/23 | - | Waiting |
| 2/15 | 102 | Sarah M. | Pro Electric | Approved | 2/15 | 2/22 | Connected | Quote given |

---

## Notification Setup

### What You Need to Check

**Daily:**
- New contractor signups (verify licenses)
- New "Express Interest" clicks (send intros)

**Weekly:**
- Follow-ups due (7 days after intro)
- New job posts (send to contractor email list)

### How to Stay Notified

**Option 1: Simple (Recommended)**
- Set up email notifications for new signups/interests
- Check email 2x daily
- Process in batches

**Option 2: Admin Dashboard**
- Simple page showing:
  - Pending verifications (contractors to approve)
  - Pending intros (matches to email)
  - Follow-ups due today

---

## Email Templates Quick Reference

See [EMAIL_TEMPLATES.md](./EMAIL_TEMPLATES.md) for full templates:

1. **Contractor Welcome** - Sent after signup
2. **Homeowner Welcome** - Sent after signup  
3. **Contractor Approved** - After you verify license
4. **Match Intro** - THE KEY EMAIL - intro to both parties
5. **Follow-up** - 7 days after intro

---

## Common Scenarios

### Scenario: Contractor Not Verified
- Don't send intro
- Email contractor: "Please complete your profile and verify license"

### Scenario: Job Already Filled
- Homeowner emails you: "I found someone"
- Mark job as closed in database
- Notify any pending contractors: "This job has been filled"

### Scenario: Bad Match
- Homeowner complains about contractor
- Note in spreadsheet
- Don't use that contractor for similar jobs
- If serious issue, remove contractor from platform

### Scenario: No Response to Intro
- After 3 days, email contractor: "Did you connect with [Homeowner]?"
- After 7 days, mark as "No response" and move on

---

## Time Commitment

| Activity | Time/Day |
|----------|----------|
| Check notifications | 5 mins |
| Verify 1-2 contractors | 10 mins |
| Send 1-2 intro emails | 5 mins |
| Follow-ups | 5 mins |
| **Total** | **~25 mins/day** |

Once you have 10+ active matches/week, consider building automated messaging.
