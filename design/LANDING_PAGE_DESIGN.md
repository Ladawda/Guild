# Contractie Landing Page Design

## Overview

The landing page serves as both an SEO-optimized directory entry point and a conversion-focused introduction to Contractie. It must rank well for local contractor searches while immediately demonstrating value to visitors.

---

## Page Structure

### 1. Hero Section

**Layout:**
- Full-width, min-height: 600px (desktop), 500px (mobile)
- Two-column layout on desktop (55% content / 45% map preview)
- Single column, stacked on mobile
- Background: Off White (`#F9FAFB`) with subtle gradient overlay

**Content:**
```
Headline: "Find Trusted [Trade] Contractors in [Location]"
Subheadline: "Browse verified local professionals, read real reviews, and get your project done right."
```

**Dynamic Elements:**
- `[Trade]` and `[Location]` populated via URL parameters or geolocation
- Default: "Find Trusted Local Contractors Near You"

**Search Component (Hero):**
```
┌─────────────────────────────────────────────────────────┐
│  [Trade Select ▼]  [Location Input      ]  [Search]     │
│  "What do you need done?"  "ZIP code or city"           │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- Container: White background, rounded-xl (12px), shadow-lg
- Trade select: 200px width, searchable dropdown
- Location input: 280px width, autocomplete-enabled
- Search button: 140px width, Primary Blue, Warm Coral on hover
- Padding: 24px internal, 16px between elements

**Map Preview (Right Column):**
- Interactive mini-map showing contractor density
- 3-5 visible markers clustered around central location
- Clicking map expands to full map view
- Height: 350px, rounded corners (16px)

**Trust Bar (Below Hero):**
```
┌─────────────────────────────────────────────────────────────┐
│  ★ 4.8/5 from 12,000+ reviews  •  50,000+ jobs completed   │
│  •  Verified contractors only  •  Free to use               │
└─────────────────────────────────────────────────────────────┘
```
- Background: White
- Border-bottom: 1px Light Gray
- Padding: 16px 0
- Text: Body Small, Medium Gray

---

### 2. Search & Filter Section

**Layout:**
- Sticky on scroll (top: 72px, below nav)
- Full-width, white background
- Border-bottom when sticky

**Filter Bar:**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [All Trades ▼]  [Any Distance ▼]  [Any Rating ▼]  [More Filters]   │
│                                                           [View Map] │
└──────────────────────────────────────────────────────────────────────┘
```

**Filter Specifications:**
- Dropdowns: 160px width, outline style
- More Filters: Text button with chevron
- View Map: Icon button (map icon + "Map")
- Active filters: Show as removable chips below

---

### 3. Contractor Listings Section

**Layout:**
- Two-column layout: List (60%) + Map (40%)
- Map is sticky on scroll (top: 140px)
- Toggle to full-width list or full-screen map on mobile

**Contractor Card:**
```
┌─────────────────────────────────────────────────────────┐
│ ┌─────┐  Contractor Name                    [Verified]  │
│ │Photo│  ★★★★★ 4.8 (127 reviews)    [Top Pro]          │
│ │     │  Trade Specialty • 2.3 miles away               │
│ └─────┘                                                 │
│ "Great communication and quality work. Fixed our        │
│  leak same day!" — Sarah M.                             │
│                                                         │
│ [View Profile]                              [Contact]   │
└─────────────────────────────────────────────────────────┘
```

**Card Specifications:**
- Width: 100% of container
- Background: White
- Border: 1px Light Gray
- Border-radius: 12px
- Padding: 20px
- Margin-bottom: 16px
- Shadow on hover: `0 4px 12px rgba(0,0,0,0.08)`

**Card Elements:**

| Element | Specifications |
|---------|---------------|
| Photo | 80x80px, rounded-full, object-fit: cover |
| Name | H5 (20px), SemiBold, Near Black |
| Verified Badge | 16px icon + "Verified" caption, Teal color |
| Rating | 5 stars (16px), 4.8 rating (Body, Bold), review count (Body Small) |
| Top Pro Badge | Coral background, white text, 8px padding, 4px radius |
| Specialty | Body Small, Dark Gray |
| Distance | Body Small, Medium Gray |
| Review Snippet | Body Small, Dark Gray, italic, max 2 lines |
| CTA Buttons | Secondary (View Profile), Primary (Contact) |

**Map Integration:**
- Height: calc(100vh - 200px)
- Markers: 36px pins, blue for standard, coral for featured
- Info window on marker click (mini card)
- Clustering at zoom levels < 12
- Current location indicator (blue pulse)

**Empty State:**
```
┌─────────────────────────────────────────┐
│           [Map Icon]                    │
│                                         │
│   No contractors found                  │
│   Try expanding your search area        │
│   or selecting a different trade        │
│                                         │
│      [Expand to 25 miles]               │
└─────────────────────────────────────────┘
```

---

### 4. How It Works Section

**Layout:**
- Full-width, Off White background
- Padding: 80px 0
- 3-column grid on desktop, single column on mobile

**Section Header:**
```
How Contractie Works
Find the right contractor in three simple steps
```

**Steps:**

| Step | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | Search | Search | "Enter your location and the type of work you need. Browse verified contractors in your area." |
| 2 | Compare | Compare | "View profiles, read real reviews, and compare quotes. All contractors are verified and reviewed." |
| 3 | Connect | Connect | "Contact contractors directly. No middleman, no hidden fees. Get your project started." |

**Step Card Specifications:**
- Icon: 48px circle, Teal background, white icon
- Title: H4 (24px), SemiBold
- Description: Body, Dark Gray
- Centered text alignment
- Max-width: 320px per card

---

### 5. Trust Signals Section

**Layout:**
- Full-width, White background
- Padding: 60px 0
- 4-column grid on desktop, 2x2 on tablet, single column on mobile

**Trust Indicators:**

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  [Shield]   │  │  [Users]    │  │  [Star]     │  │  [Check]    │
│             │  │             │  │             │  │             │
│  Verified   │  │  50,000+    │  │  4.8/5      │  │  Free to    │
│  Contractors│  │  Happy      │  │  Average    │  │  Use        │
│             │  │  Homeowners │  │  Rating     │  │             │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

**Trust Card Specifications:**
- Icon: 48px, Primary Blue
- Title: H5 (20px), SemiBold
- Subtitle: Body Small, Medium Gray
- Centered alignment
- Border-right on desktop (except last), removed on mobile

---

### 6. Popular Trades Section (SEO)

**Layout:**
- Full-width, Off White background
- Padding: 80px 0
- 4-column grid of trade cards

**Section Header:**
```
Popular Trades in [Location]
Find specialists for every home improvement need
```

**Trade Card:**
```
┌─────────────────────────┐
│       [Icon]            │
│                         │
│    Plumbers             │
│    247 contractors      │
│    in your area         │
│                         │
│    [Browse Plumbers →]  │
└─────────────────────────┘
```

**Trade Card Specifications:**
- Background: White
- Border: 1px Light Gray
- Border-radius: 12px
- Padding: 32px 24px
- Icon: 48px, Primary Blue
- Title: H5, centered
- Count: Body Small, Medium Gray
- Link: Text button, Primary Blue

**Trade Categories (12 total):**
1. Plumbers
2. Electricians
3. Roofers
4. HVAC Technicians
5. Carpenters
6. Painters
7. Landscapers
8. General Contractors
9. Flooring Specialists
10. Window & Door Installers
11. Deck & Patio Builders
12. Kitchen & Bath Remodelers

---

### 7. Testimonials Section

**Layout:**
- Full-width, White background
- Padding: 80px 0
- Horizontal scroll on mobile, 3-column grid on desktop

**Testimonial Card:**
```
┌─────────────────────────────────────────┐
│  ★★★★★                                │
│                                         │
│  "Contractie made it so easy to find    │
│   a reliable plumber. The reviews       │
│   were spot on!"                        │
│                                         │
│  ┌─────┐  Jennifer K.                  │
│  │Photo│  Homeowner in Austin, TX      │
│  └─────┘                                │
└─────────────────────────────────────────┘
```

**Testimonial Specifications:**
- Background: Off White
- Border-radius: 12px
- Padding: 24px
- Stars: 16px, Coral fill
- Quote: Body, Near Black
- Photo: 40px circle
- Name: Body Small, SemiBold
- Location: Caption, Medium Gray

---

### 8. CTA Section

**Layout:**
- Full-width, gradient background (Blue to Teal)
- Padding: 100px 0
- Centered content

**Content:**
```
Ready to Start Your Project?
Join thousands of homeowners who found the perfect contractor on Contractie.

[Find Contractors Now]  [Post a Job for Free]
```

**CTA Specifications:**
- Headline: H2 (36px), White, Bold
- Subheadline: Body Large, White, 70% opacity
- Primary button: White background, Blue text
- Secondary button: Transparent, white border, white text
- Button padding: 16px 32px

---

### 9. Footer

**Layout:**
- Full-width, Near Black background
- Padding: 60px 0 24px
- 4-column layout on desktop

**Footer Columns:**
1. **Brand**
   - Logo (white version)
   - Tagline: "Find trusted local contractors"
   - Social icons

2. **For Homeowners**
   - Find a Contractor
   - Post a Job
   - How It Works
   - Safety Center

3. **For Contractors**
   - Join as a Pro
   - Success Stories
   - Pricing
   - Resources

4. **Company**
   - About Us
   - Careers
   - Press
   - Contact

**Bottom Bar:**
- Border-top: 1px Dark Gray
- Padding-top: 24px
- Copyright | Privacy | Terms | Sitemap

---

## SEO Optimization

### URL Structure
```
/contractors/[trade]/[location]
/contractors/plumbers/austin-tx
/contractors/electricians/seattle-wa
```

### Meta Tags
```html
<title>[Trade] Contractors in [Location] - Contractie</title>
<meta name="description" content="Find trusted [trade] in [location]. Browse verified reviews, compare quotes, and hire local professionals. Free to use.">
```

### Structured Data
- LocalBusiness schema for each contractor
- AggregateRating schema for trade/location pages
- BreadcrumbList for navigation
- FAQ schema for common questions

### Content Optimization
- H1: "[Trade] Contractors in [Location]"
- First paragraph: Include trade, location, and key benefits
- Internal linking: Link to related trades and nearby locations
- Image alt text: Descriptive, include location where relevant

---

## Responsive Behavior

### Desktop (1280px+)
- Two-column layout with sticky map
- 4-column trade grid
- Full navigation visible

### Tablet (768px - 1279px)
- Single column, map below list
- 2-column trade grid
- Condensed navigation

### Mobile (< 768px)
- Single column, stacked sections
- Map toggle (List/Map view)
- Bottom sheet for filters
- Hamburger navigation
- Touch-optimized tap targets (min 44px)

---

## Landing Page Summary

> The landing page balances SEO requirements with user experience. Every element serves dual purposes: ranking for local search terms while guiding visitors toward conversion. The map-first approach differentiates from competitors, while trust signals and social proof reduce friction in the decision process.
