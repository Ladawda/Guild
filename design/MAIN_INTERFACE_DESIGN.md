# Contractie Main Interface Design

## Overview

The main application interface serves two distinct user types: homeowners seeking contractors and contractors managing their business. Each dashboard is optimized for their primary workflows while maintaining visual consistency.

---

## Homeowner Dashboard

### Layout Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]  [Search...]                    [Messages] [Account ▼]     │  ← Header (72px)
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────────────────────────────────┐ │
│  │              │  │                                             │ │
│  │   SIDEBAR    │  │            MAIN CONTENT AREA                │ │
│  │   (240px)    │  │          (flex: 1, max-width)               │ │
│  │              │  │                                             │ │
│  │  Navigation  │  │                                             │ │
│  │  - Find Pros │  │                                             │ │
│  │  - My Jobs   │  │                                             │ │
│  │  - Messages  │  │                                             │ │
│  │  - Saved     │  │                                             │ │
│  │              │  │                                             │ │
│  │  Recent      │  │                                             │ │
│  │  Activity    │  │                                             │ │
│  │              │  │                                             │ │
│  └──────────────┘  └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### Header (72px height)

**Elements:**
- Logo (left): 140px width, links to dashboard
- Global Search (center): 400px width, searches contractors/jobs
- Actions (right): Messages icon (with badge), Account dropdown

**Search Dropdown:**
```
┌─────────────────────────────────────────┐
│  🔍 Search contractors, jobs, or help   │
├─────────────────────────────────────────┤
│  Recent Searches                        │
│  • Plumbers near me                     │
│  • Kitchen remodel                      │
├─────────────────────────────────────────┤
│  Popular Searches                       │
│  • Emergency plumber                    │
│  • HVAC repair                          │
└─────────────────────────────────────────┘
```

### Sidebar Navigation

**Primary Navigation:**
| Icon | Label | Badge |
|------|-------|-------|
| 🔍 | Find Contractors | — |
| 📋 | My Jobs | 2 |
| 💬 | Messages | 3 |
| 🔖 | Saved Pros | — |
| ⚙️ | Settings | — |

**Recent Activity (Collapsed by default):**
- Last 3 viewed contractor profiles
- Last 2 active job posts
- Timestamp indicators

**Sidebar Specifications:**
- Width: 240px (fixed)
- Background: White
- Border-right: 1px Light Gray
- Active item: Blue left border (3px), Off White background
- Hover: Off White background
- Padding: 16px

### Dashboard Home View

**Welcome Header:**
```
Good morning, Sarah! 👋
Ready to tackle your home projects?
```

**Quick Actions Row:**
```
┌─────────────────┬─────────────────┬─────────────────┐
│   [🔍]          │   [📋]          │   [✓]           │
│   Find a Pro    │   Post a Job    │   Track Progress│
│                 │                 │                 │
│   Browse and    │   Describe your │   View active   │
│   hire local    │   project and   │   projects and  │
│   contractors   │   get quotes    │   updates       │
└─────────────────┴─────────────────┴─────────────────┘
```

**Active Jobs Section:**
```
Your Active Jobs                          [View All →]

┌─────────────────────────────────────────────────────┐
│ Kitchen Remodel                        [In Progress] │
│ Posted 3 days ago • 4 contractor responses          │
│                                                     │
│ [View Responses]  [Mark Complete]  [Need Help?]    │
└─────────────────────────────────────────────────────┘
```

**Recommended Contractors:**
```
Recommended for You                     [Browse All →]
Based on your location and recent searches

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   [Photo]   │  │   [Photo]   │  │   [Photo]   │
│             │  │             │  │             │
│ John Smith  │  | Maria Garcia│  │ Tom Wilson  │
│ ★★★★★ 4.9   │  │ ★★★★★ 4.8   │  │ ★★★★★ 4.7   │
│ Plumber     │  │ Electrician │  │ Carpenter   │
│ 0.8 mi away │  │ 1.2 mi away │  │ 2.1 mi away │
│             │  │             │  │             │
│ [View]      │  │ [View]      │  │ [View]      │
└─────────────┘  └─────────────┘  └─────────────┘
```

---

## Contractor Dashboard

### Layout Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]  [Search...]  [Insights] [Leads] [Messages] [Profile ▼]    │  ← Header (72px)
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────────────────────────────────┐ │
│  │              │  │                                             │ │
│  │   SIDEBAR    │  │            MAIN CONTENT AREA                │ │
│  │   (240px)    │  │                                             │ │
│  │              │  │                                             │ │
│  │  Dashboard   │  │                                             │ │
│  │  - Overview  │  │                                             │ │
│  │  - Leads     │  │                                             │ │
│  │  - Jobs      │  │                                             │ │
│  │  - Reviews   │  │                                             │ │
│  │  - Calendar  │  │                                             │ │
│  │              │  │                                             │ │
│  │  Profile     │  │                                             │ │
│  │  - Edit      │  │                                             │ │
│  │  - Photos    │  │                                             │ │
│  │  - Services  │  │                                             │ │
│  │              │  │                                             │ │
│  │  Business    │  │                                             │ │
│  │  - Insights  │  │                                             │ │
│  │  - Billing   │  │                                             │ │
│  │  - Settings  │  │                                             │ │
│  │              │  │                                             │ │
│  └──────────────┘  └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### Dashboard Overview

**Performance Header:**
```
┌─────────────────────────────────────────────────────────────────────┐
│  Your Business This Month                    [View Full Report →]  │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │   Views     │  │    Leads    │  │  Response   │  │  Rating    │ │
│  │             │  │             │  │    Rate     │  │            │ │
│  │    1,247    │  │     23      │  │    94%      │  │   4.9/5    │ │
│  │   ↑ 12%     │  │   ↑ 5%      │  │   → 0%      │  │   ↑ 0.1    │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

**Stats Card Specifications:**
- Background: White
- Border: 1px Light Gray
- Border-radius: 12px
- Padding: 24px
- Number: H2 (36px), ExtraBold, Near Black
- Label: Caption, Medium Gray, uppercase
- Trend: Body Small (green for ↑, red for ↓, gray for →)

**New Leads Section:**
```
New Leads (3)                           [View All Leads →]

┌─────────────────────────────────────────────────────────────────────┐
│ ┌─────┐  Kitchen Remodel Quote Needed              [New - 2h ago]  │
│ │👤   │  Sarah Johnson • Austin, TX                                 │
│ └─────┘  "Looking to remodel our 200 sq ft kitchen..."             │
│                                                                     │
│ Budget: $15,000-$25,000  •  Timeline: Within 1 month               │
│                                                                     │
│ [Decline]                              [Respond Now]               │
└─────────────────────────────────────────────────────────────────────┘
```

**Upcoming Jobs:**
```
This Week's Schedule                    [View Calendar →]

Mon 15  │  ┌─────────────────────────────────────────────┐
        │  │ 9:00 AM  Plumbing repair - Johnson residence │
        │  │ 2:00 PM  Consultation - Smith project        │
        ├──────────────────────────────────────────────────┤
Tue 16  │  ┌─────────────────────────────────────────────┐
        │  │ 10:00 AM Installation - Martinez home        │
        └──────────────────────────────────────────────────┘
```

---

## Job Posting Flow

### Step 1: Select Trade

```
Post a Job                              Step 1 of 4

What type of work do you need?

┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   [🔧]      │  │   [⚡]      │  │   [🏠]      │  │   [🌡️]      │
│             │  │             │  │             │  │             │
│  Plumbing   │  │ Electrical  │  │  Roofing    │  │    HVAC     │
│             │  │             │  │             │  │             │
│ Leaks,      │  │ Wiring,     │  │ Repairs,    │  │ Heating,    │
│ fixtures,   │  │ panels,     │  │ installs,   │  │ cooling,    │
│ drains      │  │ lighting    │  │ inspections │  │ ventilation │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘

[Can't find your trade? Browse all categories →]
```

**Trade Card Specifications:**
- Background: White, Off White on hover
- Border: 2px Light Gray, Blue when selected
- Border-radius: 12px
- Padding: 32px 24px
- Icon: 48px, Primary Blue
- Title: H5, centered
- Description: Body Small, Medium Gray

### Step 2: Job Details

```
Post a Job                              Step 2 of 4

Tell us about your [Plumbing] project

Project Title *
┌─────────────────────────────────────────────────────────────────────┐
│ Leaky faucet in master bathroom                                     │
└─────────────────────────────────────────────────────────────────────┘

Description *
┌─────────────────────────────────────────────────────────────────────┐
│ The faucet in our master bathroom has been dripping for about a     │
│ week. We've tried tightening it but it's still leaking. Looking     │
│ for someone to diagnose and fix the issue.                          │
│                                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Project Photos (optional)
┌─────────────────────────────────────────────────────────────────────┐
│  [📷 Drop photos here or click to upload]                           │
│  Add up to 10 photos to help contractors understand the project     │
└─────────────────────────────────────────────────────────────────────┘

                              [Back]  [Continue →]
```

### Step 3: Location & Timing

```
Post a Job                              Step 3 of 4

Where and when do you need this done?

Project Location *
┌─────────────────────────────────────────────────────────────────────┐
│ 123 Main Street, Austin, TX 78701                                   │
└─────────────────────────────────────────────────────────────────────┘
[📍 Use my current location]

Preferred Timeline *
○ As soon as possible
○ Within 1 week
○ Within 2 weeks
○ Within 1 month
○ Flexible

Budget Range (optional)
┌─────────────────────────────────────────────────────────────────────┐
│  $     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  $                  │
│  0                                               50,000+            │
└─────────────────────────────────────────────────────────────────────┘
Or select a range: [Under $500] [$500-$1,000] [$1,000-$5,000] [...]

                              [Back]  [Continue →]
```

### Step 4: Review & Post

```
Post a Job                              Step 4 of 4

Review your job post

┌─────────────────────────────────────────────────────────────────────┐
│  Project: Leaky faucet in master bathroom              [Edit]      │
│  Trade: Plumbing                                                    │
│  Location: 123 Main Street, Austin, TX 78701                        │
│  Timeline: Within 1 week                                            │
│  Budget: $500 - $1,000                                              │
├─────────────────────────────────────────────────────────────────────┤
│  Description:                                                       │
│  The faucet in our master bathroom has been dripping for about...   │
└─────────────────────────────────────────────────────────────────────┘

Who can see your job?
○ All verified contractors in my area
● Only contractors I invite (recommended)

Contact Preferences
☑ Contractors can call me
☑ Contractors can message me through Contractie

By posting, you agree to our Terms of Service and Privacy Policy

                              [Back]  [Post Job →]
```

---

## Contractor Profile Page

### Profile Header

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Cover Photo - 400px height]                                       │
│                                                                     │
│  ┌──────────┐                                                       │
│  │          │  John Smith Plumbing & Repair              [Save]    │
│  │  Photo   │  ★★★★★ 4.9 (127 reviews) • Verified Pro              │
│  │          │  Plumber • Austin, TX • Member since 2021            │
│  └──────────┘                                                       │
│                                                                     │
│  [📞 Contact]  [💬 Message]  [📋 Request Quote]                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Profile Photo Specifications:**
- Size: 160x160px
- Border: 4px white
- Border-radius: 50%
- Position: Overlapping cover photo bottom by 50%
- Shadow: `0 4px 12px rgba(0,0,0,0.15)`

### Profile Content Tabs

```
[Overview] [Services] [Reviews] [Photos] [Credentials]
```

**Overview Tab:**
```
About
We've been serving the Austin area for over 15 years. Specializing in 
residential plumbing repairs, installations, and emergency services. 
Licensed, insured, and committed to quality workmanship.

Business Information
┌────────────────────┬────────────────────┬────────────────────┐
│  License #         │  Insurance         │  Years in Business │
│  PL-12345          │  Verified          │  15 years          │
└────────────────────┴────────────────────┴────────────────────┘

Service Area
📍 Austin, TX and surrounding areas (25 mile radius)

Hours of Operation
Monday - Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 2:00 PM
Sunday: Emergency only
```

**Services Tab:**
```
Services & Pricing

┌─────────────────────────────────────────────────────────────────────┐
│  Emergency Plumbing Repairs                                         │
│  Available 24/7 for urgent issues. $150 service call + parts.      │
│  [Request Service]                                                  │
├─────────────────────────────────────────────────────────────────────┤
│  Faucet & Fixture Installation                                      │
│  New fixture installation or replacement. Starting at $125.        │
│  [Request Quote]                                                    │
├─────────────────────────────────────────────────────────────────────┤
│  Drain Cleaning                                                     │
│  Professional drain clearing and maintenance. $95-$250.            │
│  [Request Quote]                                                    │
└─────────────────────────────────────────────────────────────────────┘
```

**Reviews Tab:**
```
Reviews (127)                    [Sort: Newest ▼]

Overall Rating
┌─────────────────────────────────────────────────────────────────────┐
│  4.9                         ★★★★★                                  │
│  out of 5                    127 reviews                            │
│                                                                     │
│  5 stars ████████████████████████████  112                        │
│  4 stars ████                           12                          │
│  3 stars █                               2                          │
│  2 stars                                 1                          │
│  1 star                                  0                          │
└─────────────────────────────────────────────────────────────────────┘

Recent Reviews
┌─────────────────────────────────────────────────────────────────────┐
│ ★★★★★  Sarah M.                    2 weeks ago                      │
│ "John was prompt, professional, and fixed our leak same day.        │
│  Fair pricing and great communication. Highly recommend!"           │
│                                                                     │
│ Job: Emergency pipe repair                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Job Detail Page

### Job Header

```
┌─────────────────────────────────────────────────────────────────────┐
│  [My Jobs] > [Active] > Kitchen Remodel                             │
│                                                                     │
│  Kitchen Remodel                                         [Active]   │
│  Posted January 12, 2026 • Plumbing • Austin, TX                    │
│                                                                     │
│  [Edit Job]  [Mark Complete]  [Cancel Job]                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Job Details

```
Project Details

Description
Looking to completely remodel our 200 sq ft kitchen. Need plumbing 
relocated for new sink location, new dishwasher hookup, and refrigerator 
water line. Also interested in tankless water heater if budget allows.

Timeline: Within 1 month
Budget: $15,000 - $25,000
Address: 123 Main Street, Austin, TX 78701

Project Photos
┌──────────┐  ┌──────────┐  ┌──────────┐
│ [Photo 1]│  │ [Photo 2]│  │ [Photo 3]│
└──────────┘  └──────────┘  └──────────┘
```

### Contractor Responses

```
Contractor Responses (4)

┌─────────────────────────────────────────────────────────────────────┐
│ ┌─────┐  Mike's Plumbing & Heating                     [Viewed]    │
│ │Photo│  ★★★★★ 4.8 (89 reviews) • Verified                           │
│ └─────┘                                                             │
│                                                                     │
│ "Thanks for the detailed photos. I can definitely help with this    │
│  project. I've completed 50+ kitchen remodels in Austin."           │
│                                                                     │
│ Quote: $18,500 (includes tankless water heater)                     │
│ Available to start: Next Monday                                     │
│                                                                     │
│ [View Profile]  [Message]  [Accept Quote]                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Map Integration Design

### Map Container

**Specifications:**
- Full-height container (calc(100vh - 72px))
- Z-index: 1 (below overlays)
- Default zoom: 13 (neighborhood level)
- Max zoom: 18 (street level)
- Min zoom: 10 (city level)

### Map Controls

```
┌─────────────────┐
│      [+]        │  ← Zoom in
│      [-]        │  ← Zoom out
├─────────────────┤
│    [📍]         │  ← My location
└─────────────────┘
```

**Control Specifications:**
- Position: Right side, 24px from edge, vertically centered
- Button size: 40x40px
- Background: White
- Border: 1px Light Gray
- Border-radius: 8px
- Shadow: `0 2px 8px rgba(0,0,0,0.1)`
- Hover: Off White background

### Map Markers

**Standard Contractor Marker:**
- Shape: Location pin
- Size: 36x48px
- Fill: Primary Blue (`#2563EB`)
- Icon: White trade icon or initial
- Shadow: `0 2px 4px rgba(0,0,0,0.2)`

**Featured/Top Pro Marker:**
- Same shape, Coral fill (`#F97316`)
- Small "TOP" badge overlay

**Active/Hover Marker:**
- Scaled to 44x56px (120%)
- Bounce animation on appear
- Larger shadow

**Cluster Marker:**
- Circle, 40px diameter
- Blue gradient background
- White text: count
- Border: 3px white

### Info Window

```
┌─────────────────────────────────────────┐
│  John Smith Plumbing         [×]        │
│  ★★★★★ 4.9 (127 reviews)               │
│  0.8 miles away                         │
│                                         │
│  [View Profile]  [Contact]              │
└─────────────────────────────────────────┘
```

**Info Window Specifications:**
- Width: 280px
- Background: White
- Border-radius: 12px
- Shadow: `0 4px 20px rgba(0,0,0,0.15)`
- Padding: 16px
- Arrow: 12px triangle pointing to marker

---

## Mobile Responsive Considerations

### Navigation Patterns

**Mobile Header (56px):**
- Hamburger menu (left)
- Logo (center)
- Messages icon (right)

**Bottom Navigation (iOS/Android):**
```
┌─────────────────────────────────────────────────────────────────────┐
│  [🔍]        [📋]        [💬]        [👤]                          │
│  Search     Jobs       Messages    Profile                          │
└─────────────────────────────────────────────────────────────────────┘
```

**Bottom Sheet (Filters/Details):**
- Swipe up to expand
- Swipe down to dismiss
- Handle indicator at top
- Max-height: 90vh

### Touch Targets

| Element | Minimum Size | Padding |
|---------|--------------|---------|
| Buttons | 44x44px | 12px min |
| List items | 48px height | 16px horizontal |
| Form inputs | 48px height | 16px internal |
| Map markers | 44x44px tappable area | — |
| Navigation items | 48x48px | — |

### Viewport Adaptations

**Mobile (< 768px):**
- Single column layouts
- Map takes full screen, toggle to list
- Cards stack vertically
- Bottom sheets for details
- Floating action button for primary actions

**Tablet (768px - 1023px):**
- Two-column where appropriate
- Collapsible sidebar
- Map alongside list (50/50)
- Touch-optimized but more desktop-like

**Desktop (1024px+):**
- Full layouts as designed
- Hover states enabled
- Persistent sidebar
- Larger map interactions

---

## Interface Summary

> The main interface prioritizes clarity and efficiency for both user types. Homeowners get a streamlined discovery and job management experience, while contractors have tools to manage their business and respond to opportunities. The map remains central to discovery, and consistent patterns reduce cognitive load across the application.
