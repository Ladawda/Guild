# Guild - Communication Flow

## How Quest Givers and Adventurers Connect

This document outlines the complete manual process for connecting users. No in-app messaging - everything flows through you via email.

---

## The 6-Step Connection Process

### Step 1: Quest Giver Posts Quest

**What happens:**
- Quest giver fills out quest posting form
- Quest appears in adventurer browse feed
- Quest giver receives confirmation email

**Your action:** None (automated)

---

### Step 2: Adventurer Applies to Quest

**What happens:**
- Adventurer browses quests in their area/trade
- Clicks "Apply to Quest" button
- System records the application in database

**Your action:** None yet (automated)

---

### Step 3: You Review and Verify

**What happens:**
- You receive notification (email or admin dashboard)
- Review adventurer profile:
  - Is their license verified?
  - Do they have relevant experience?
  - Is their profile complete?
- Review quest details

**Your action:**
- Log into admin dashboard
- Click adventurer name to view full profile
- Check license on state contractor board website
- Verify they match the quest requirements

**Decision:**
- ✅ **Approve** → Proceed to Step 4
- ❌ **Reject** → Send polite decline email to adventurer

---

### Step 4: You Send Party Formation Email

**What happens:**
- You manually send party formation email to BOTH parties
- Email includes contact info for both sides
- Sets expectation for off-platform communication

**Your action:**
- Copy email template from EMAIL_TEMPLATES.md
- Customize with:
  - Adventurer name and company
  - Quest giver name
  - Quest details
  - Both email addresses
- Send to both parties (CC or separate emails)

**Important:** Include this line:
> "I'll follow up in one week to see how the quest went!"

---

### Step 5: They Communicate Off-Platform

**What happens:**
- Adventurer calls/emails quest giver
- They discuss quest details
- They negotiate price and timeline
- Payment happens off-platform (cash, check, Venmo, etc.)

**Your action:** None - let them handle it

---

### Step 6: You Follow Up for Outcome

**What happens:**
- 7 days after party formation, you send follow-up email
- Ask if they connected and quest status
- Record outcome in tracking spreadsheet

**Your action:**
- Check tracking spreadsheet for parties formed 7 days ago
- Send follow-up email to BOTH parties
- Update spreadsheet with outcome:
  - Connected? (Yes/No)
  - Quest status? (Quoted / In Progress / Completed / Declined)
  - Feedback?

---

## Tracking Spreadsheet Template

Create a Google Sheet with these columns:

| Date | Quest ID | Quest Giver | Adventurer | Status | Party Formed | Follow-up Date | Outcome | Notes |
|------|----------|-------------|------------|--------|--------------|----------------|---------|-------|
| 2/16 | 101 | John D. | ABC Roofing | Pending | 2/16 | 2/23 | - | Waiting |
| 2/15 | 102 | Sarah M. | Pro Electric | Approved | 2/15 | 2/22 | Connected | Quote given |

---

## Notification Setup

### What You Need to Check

**Daily:**
- New adventurer signups (verify licenses)
- New quest applications (send party formations)

**Weekly:**
- Follow-ups due (7 days after party formation)
- New quest posts (send to adventurer email list)

### How to Stay Notified

**Option 1: Simple (Recommended)**
- Set up email notifications for new signups/applications
- Check email 2x daily
- Process in batches

**Option 2: Admin Dashboard**
- Simple page showing:
  - Pending verifications (adventurers to approve)
  - Pending party formations (applications to email)
  - Follow-ups due today

---

## Email Templates Quick Reference

See [EMAIL_TEMPLATES.md](./EMAIL_TEMPLATES.md) for full templates:

1. **Adventurer Welcome** - Sent after signup
2. **Quest Giver Welcome** - Sent after signup  
3. **Adventurer Approved** - After you verify license
4. **Party Formation** - THE KEY EMAIL - intro to both parties
5. **Follow-up** - 7 days after party formation

---

## Common Scenarios

### Scenario: Adventurer Not Verified
- Don't send party formation
- Email adventurer: "Please complete your profile and verify license"

### Scenario: Quest Already Filled
- Quest giver emails you: "I found someone"
- Mark quest as completed in database
- Notify any pending adventurers: "This quest has been completed"

### Scenario: Bad Match
- Quest giver complains about adventurer
- Note in spreadsheet
- Don't use that adventurer for similar quests
- If serious issue, remove adventurer from guild

### Scenario: No Response to Party Formation
- After 3 days, email adventurer: "Did you connect with [Quest Giver]?"
- After 7 days, mark as "No response" and move on

---

## Time Commitment

| Activity | Time/Day |
|----------|----------|
| Check notifications | 5 mins |
| Verify 1-2 adventurers | 10 mins |
| Send 1-2 party formation emails | 5 mins |
| Follow-ups | 5 mins |
| **Total** | **~25 mins/day** |

Once you have 10+ active parties/week, consider building automated messaging.

---

## Guild Terminology in Practice

| Standard Term | Guild Term | Usage |
|---------------|------------|-------|
| Job | Quest | Public-facing |
| Contractor | Adventurer | Public-facing |
| Client | Quest Giver | Public-facing |
| Match | Party Formation | Internal/process |
| Apply | Apply to Quest | Button text |
| Complete | Quest Complete | Status |
