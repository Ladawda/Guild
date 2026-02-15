# Contractie Component Library

## Overview

This document defines the reusable UI components for Contractie. All components are designed with accessibility (WCAG AA), responsiveness, and consistency in mind.

---

## Buttons

### Primary Button

**Visual:**
- Background: `#2563EB` (Contractie Blue)
- Text: White (`#FFFFFF`)
- Border-radius: 8px
- Padding: 12px 24px
- Font: Inter, 16px, SemiBold (600)

**States:**
```
Default:   Blue background, white text
Hover:     `#1D4ED8` (darker blue), shadow-sm
Active:    `#1E40AF` (darkest blue), inset shadow
Disabled:  `#93C5FD` (light blue), white text, no shadow
Loading:   Blue background, spinner + text
```

**Usage:** Main CTAs, form submissions, primary actions

**Example:**
```
┌─────────────────────┐
│   Find Contractors  │
└─────────────────────┘
```

### Secondary Button

**Visual:**
- Background: White
- Border: 1px `#2563EB`
- Text: `#2563EB`
- Border-radius: 8px
- Padding: 12px 24px
- Font: Inter, 16px, SemiBold (600)

**States:**
```
Default:   White background, blue border, blue text
Hover:     `#EFF6FF` (light blue tint), blue border
Active:    `#DBEAFE` (lighter blue), inset shadow
Disabled:  White background, `#E5E7EB` border, `#9CA3AF` text
```

**Usage:** Secondary actions, cancel buttons, alternative options

### Ghost Button

**Visual:**
- Background: Transparent
- Text: `#2563EB`
- Border-radius: 8px
- Padding: 12px 24px
- Font: Inter, 16px, SemiBold (600)

**States:**
```
Default:   Transparent, blue text
Hover:     `#EFF6FF` background
Active:    `#DBEAFE` background
Disabled:  Transparent, `#9CA3AF` text
```

**Usage:** Tertiary actions, icon buttons, subtle CTAs

### Destructive Button

**Visual:**
- Background: `#EF4444` (Error Red)
- Text: White
- Border-radius: 8px
- Padding: 12px 24px

**States:**
```
Default:   Red background
Hover:     `#DC2626` (darker red)
Active:    `#B91C1C` (darkest red)
Disabled:  `#FCA5A5` (light red)
```

**Usage:** Delete actions, cancel subscriptions, irreversible actions

### Button Sizes

| Size | Padding | Font Size | Usage |
|------|---------|-----------|-------|
| Small | 8px 16px | 14px | Dense UIs, inline actions |
| Medium | 12px 24px | 16px | Default, most actions |
| Large | 16px 32px | 18px | Hero CTAs, important actions |

### Button with Icon

**Layout:**
- Icon size: 20px
- Icon position: Left (default) or Right
- Gap between icon and text: 8px

**Example:**
```
┌──────────────────────────┐
│  [🔍]  Search            │
└──────────────────────────┘
```

---

## Cards

### Contractor Card

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│ ┌─────┐  [Name]                           [Verified]    │
│ │     │  ★★★★★ [Rating] ([Count])  [Badge]             │
│ │Photo│  [Trade] • [Distance]                           │
│ └─────┘                                                 │
│ "[Review snippet]" — [Reviewer]                         │
│ [Secondary]                              [Primary]      │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: White
- Border: 1px `#E5E7EB`
- Border-radius: 12px
- Padding: 20px
- Shadow on hover: `0 4px 12px rgba(0,0,0,0.08)`
- Transition: all 200ms ease

**Elements:**
| Element | Size/Style |
|---------|-----------|
| Photo | 80x80px, rounded-full |
| Name | H5 (20px), SemiBold |
| Verified badge | 16px icon + caption |
| Rating stars | 16px, filled Coral |
| Review snippet | Body Small, max 2 lines, ellipsis |
| Actions | Secondary + Primary buttons |

### Job Card

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│ [Job Title]                                [Status]     │
│ Posted [Date] • [Trade] • [Location]                    │
│                                                         │
│ [Description preview...]                                │
│                                                         │
│ [Responses count]  [View]  [Action]                     │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: White
- Border: 1px `#E5E7EB`
- Border-radius: 12px
- Padding: 20px
- Status badge: Positioned top-right

**Status Variants:**
| Status | Background | Text |
|--------|-----------|------|
| Active | `#DBEAFE` | `#1D4ED8` |
| In Progress | `#FEF3C7` | `#D97706` |
| Completed | `#D1FAE5` | `#059669` |
| Cancelled | `#F3F4F6` | `#6B7280` |

### Lead Card (Contractor View)

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│ ┌─────┐  [Job Title]                          [Time]    │
│ │     │  [Homeowner Name] • [Location]                  │
│ └─────┘                                                 │
│ "[Description preview...]"                              │
│                                                         │
│ Budget: [Range]  •  Timeline: [When]                    │
│                                                         │
│ [Decline]                                [Respond]      │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: White
- Border-left: 4px `#2563EB` (for new leads)
- Border: 1px `#E5E7EB`
- Border-radius: 12px
- Padding: 20px

### Info Card

**Layout:**
```
┌─────────────────────────┐
│       [Icon]            │
│                         │
│      [Title]            │
│      [Description]      │
│                         │
│      [Action]           │
└─────────────────────────┘
```

**Specifications:**
- Background: White or Off White
- Border: 1px `#E5E7EB` (optional)
- Border-radius: 12px
- Padding: 32px 24px
- Text-align: center
- Icon: 48px, Primary Blue

---

## Forms

### Text Input

**Visual:**
```
Label
┌─────────────────────────────────────────┐
│ Placeholder text                        │
└─────────────────────────────────────────┘
```

**Specifications:**
- Height: 48px
- Background: White
- Border: 1px `#E5E7EB`
- Border-radius: 8px
- Padding: 12px 16px
- Font: Inter, 16px, Regular
- Placeholder color: `#9CA3AF`

**States:**
```
Default:   Light gray border
Hover:     `#D1D5DB` border
Focus:     `#2563EB` border (2px), subtle blue glow
Error:     `#EF4444` border, red error text below
Disabled:  `#F3F4F6` background, `#9CA3AF` text
```

**With Icon:**
```
┌─────────────────────────────────────────┐
│ [👤]  Input text                        │
└─────────────────────────────────────────┘
```
- Icon position: Left, 16px from edge
- Icon color: `#9CA3AF`
- Text padding-left: 48px

### Textarea

**Specifications:**
- Min-height: 120px
- Same styling as text input
- Resize: vertical only
- Line-height: 1.5

### Select Dropdown

**Visual:**
```
┌─────────────────────────────────────────┐
│ Selected option              [▼]        │
└─────────────────────────────────────────┘
```

**Specifications:**
- Height: 48px
- Same base styling as text input
- Chevron icon: 20px, `#6B7280`
- Dropdown menu: White, shadow-lg, rounded-lg

**Dropdown Menu:**
```
┌─────────────────────────────────────────┐
│ Option 1                          ✓     │
│ Option 2                                │
│ ─────────────────────────────────────── │
│ Option 3                                │
└─────────────────────────────────────────┘
```

### Checkbox

**Visual:**
```
┌─────┐  Label text
│  ✓  │
└─────┘
```

**Specifications:**
- Size: 20x20px
- Border-radius: 4px
- Border: 2px `#D1D5DB`
- Checked: Blue fill (`#2563EB`), white checkmark

**States:**
```
Unchecked: White background, gray border
Checked:   Blue background, white checkmark
Hover:     Light blue tint background
Disabled:  Gray background, gray border
```

### Radio Button

**Specifications:**
- Size: 20x20px
- Border-radius: 50%
- Border: 2px `#D1D5DB`
- Checked: Blue outer ring, white center with blue dot

### Toggle Switch

**Visual:**
```
[────●────]  Label
```

**Specifications:**
- Width: 44px
- Height: 24px
- Border-radius: 12px (pill shape)
- Off: `#E5E7EB` background, white knob
- On: `#2563EB` background, white knob (right)
- Transition: 200ms ease

### Form Group

**Layout:**
```
Label *
[Input field]
Helper text or error message
```

**Specifications:**
- Label margin-bottom: 8px
- Label font: 14px, SemiBold, `#374151`
- Required indicator: Red asterisk
- Helper text: 14px, Regular, `#6B7280`
- Error text: 14px, Regular, `#EF4444`
- Spacing between groups: 24px

---

## Map Markers and Overlays

### Standard Marker

**Visual:**
```
     ┌───┐
    /     \
   │   🔧  │
    \     /
     └───┘
       ▼
```

**Specifications:**
- Size: 36x48px
- Shape: Location pin
- Fill: `#2563EB`
- Icon: White, 16px
- Shadow: `0 2px 4px rgba(0,0,0,0.2)`

### Active Marker

**Specifications:**
- Size: 44x56px (scaled 120%)
- Fill: `#2563EB`
- White ring border: 3px
- Shadow: `0 4px 8px rgba(0,0,0,0.25)`
- Animation: Gentle bounce on appear

### Cluster Marker

**Visual:**
```
    ┌─────┐
   │  12   │
    └─────┘
```

**Specifications:**
- Size: 40x40px (circular)
- Background: Blue gradient (`#2563EB` to `#1D4ED8`)
- Border: 3px white
- Text: White, 14px, Bold
- Shadow: `0 2px 6px rgba(0,0,0,0.2)`

### Info Window

**Layout:**
```
┌─────────────────────────────────────┐
│ Contractor Name          [×]        │
│ ★★★★★ 4.8 (24 reviews)              │
│ 0.5 miles away                      │
│                                     │
│ [View]  [Contact]                   │
└─────────────────────────────────────┘
     ▼
```

**Specifications:**
- Width: 280px
- Background: White
- Border-radius: 12px
- Shadow: `0 4px 20px rgba(0,0,0,0.15)`
- Padding: 16px
- Arrow: 12px, centered below

### Map Controls

**Zoom Controls:**
```
┌─────┐
│  +  │
├─────┤
│  -  │
└─────┘
```
- Size: 40x40px each
- Background: White
- Border: 1px `#E5E7EB`
- Border-radius: 8px
- Icon: 20px, `#374151`

**Location Button:**
```
┌─────┐
│  📍  │
└─────┘
```
- Same styling as zoom controls
- Active state: Blue icon, light blue background

---

## Modals and Drawers

### Modal

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │  Modal Title                                    [×]         │   │
│   ├─────────────────────────────────────────────────────────────┤   │
│   │                                                             │   │
│   │  Modal content goes here...                                 │   │
│   │                                                             │   │
│   ├─────────────────────────────────────────────────────────────┤   │
│   │                                    [Cancel]    [Confirm]    │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Overlay: `rgba(0,0,0,0.5)`
- Max-width: 560px (default), 720px (large), 400px (small)
- Background: White
- Border-radius: 16px
- Shadow: `0 25px 50px rgba(0,0,0,0.25)`
- Padding: 24px
- Animation: Fade in + scale up (200ms)

**Sizes:**
| Size | Max-width | Usage |
|------|-----------|-------|
| Small | 400px | Confirmations, alerts |
| Default | 560px | Forms, details |
| Large | 720px | Complex workflows |
| Full | 90vw | Media, maps |

### Drawer (Slide-out Panel)

**Layout:**
```
┌─────────────────────────────────────────────────────┬───────────────┐
│                                                     │  Drawer Title │
│                                                     │  [×]          │
│                                                     ├───────────────┤
│                    Main Content                     │               │
│                                                     │  Drawer       │
│                                                     │  content...   │
│                                                     │               │
│                                                     │               │
│                                                     ├───────────────┤
│                                                     │  [Action]     │
└─────────────────────────────────────────────────────┴───────────────┘
```

**Specifications:**
- Position: Right side (default), can be left
- Width: 400px (default), 560px (wide), 100% (mobile)
- Height: 100vh
- Background: White
- Shadow: `-4px 0 24px rgba(0,0,0,0.1)`
- Animation: Slide in from right (300ms ease-out)
- Overlay on mobile: `rgba(0,0,0,0.5)`

### Bottom Sheet (Mobile)

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                                                                     │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                         ───────                             │   │
│   │  Sheet Title                                      [×]       │   │
│   ├─────────────────────────────────────────────────────────────┤   │
│   │                                                             │   │
│   │  Content...                                                 │   │
│   │                                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Handle: 40x4px, `#D1D5DB`, rounded
- Border-radius: 16px (top corners only)
- Max-height: 90vh
- Background: White
- Swipe to dismiss
- States: Collapsed (peek), Expanded (full)

---

## Navigation Patterns

### Top Navigation

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo]  [Search...]          [Messages] [Notifications] [Profile ▼] │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 72px (desktop), 56px (mobile)
- Background: White
- Border-bottom: 1px `#E5E7EB`
- Position: Sticky top
- Z-index: 50

### Sidebar Navigation

**Layout:**
```
┌─────────────────┐
│  [Icon] Label   │
│  [Icon] Label   │
│  [Icon] Label   │
├─────────────────┤
│  Section        │
│  [Icon] Label   │
│  [Icon] Label   │
└─────────────────┘
```

**Specifications:**
- Width: 240px (expanded), 72px (collapsed)
- Background: White
- Border-right: 1px `#E5E7EB`
- Item height: 48px
- Active: Blue left border (3px), Off White background
- Icon: 24px, `#6B7280` (inactive), `#2563EB` (active)

### Bottom Navigation (Mobile)

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│  [🔍]        [📋]        [💬]        [👤]                          │
│  Search     Jobs       Messages    Profile                          │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 64px (iOS: 80px with safe area)
- Background: White
- Border-top: 1px `#E5E7EB`
- Position: Fixed bottom
- Active: Blue icon + label
- Inactive: Gray icon + label

### Breadcrumbs

**Layout:**
```
Home > Category > Subcategory > Current Page
```

**Specifications:**
- Font: 14px, Regular
- Separator: `>` or `/`, `#9CA3AF`
- Active: `#1F2937`, SemiBold
- Inactive: `#6B7280`, Regular, underlined on hover

### Tabs

**Layout:**
```
[Tab 1]  [Tab 2]  [Tab 3]  [Tab 4]
─────────────────────────────────────
```

**Specifications:**
- Height: 48px
- Font: 16px, Medium
- Active: `#1F2937`, bottom border 2px `#2563EB`
- Inactive: `#6B7280`, no border
- Hover: Off White background

**Pill Tabs (Alternative):**
```
┌────────┐  ┌────────┐  ┌────────┐
│  Tab 1 │  │  Tab 2 │  │  Tab 3 │
└────────┘  └────────┘  └────────┘
```
- Border-radius: 8px
- Active: Blue background, white text
- Inactive: White background, gray border

---

## Badges and Tags

### Status Badges

| Type | Background | Text | Example |
|------|-----------|------|---------|
| Success | `#D1FAE5` | `#059669` | Verified |
| Warning | `#FEF3C7` | `#D97706` | Pending |
| Error | `#FEE2E2` | `#DC2626` | Rejected |
| Info | `#DBEAFE` | `#1D4ED8` | New |
| Neutral | `#F3F4F6` | `#6B7280` | Archived |

**Specifications:**
- Padding: 4px 12px
- Border-radius: 12px (pill) or 4px (square)
- Font: 12px, SemiBold, uppercase
- Letter-spacing: 0.02em

### Tag Chips

**Visual:**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Plumbing  ✕ │  │  Austin    ✕ │  │  + Add Tag   │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Specifications:**
- Background: `#F3F4F6`
- Border-radius: 16px (pill)
- Padding: 6px 12px
- Font: 14px, Medium
- Remove icon: 16px, `#9CA3AF`, hover `#EF4444`

---

## Data Display

### Avatar

**Sizes:**
| Size | Dimensions | Usage |
|------|-----------|-------|
| XS | 24x24px | Inline mentions, lists |
| SM | 32x32px | Comments, activity |
| MD | 40x40px | Cards, headers |
| LG | 80x80px | Profile cards |
| XL | 160x160px | Profile pages |

**Specifications:**
- Border-radius: 50%
- Object-fit: cover
- Fallback: Initials on colored background
- Status indicator: 8px dot, bottom-right

### Rating Stars

**Visual:**
```
★★★★☆ 4.0
```

**Specifications:**
- Size: 16px (default), 20px (large)
- Filled: `#F97316` (Coral)
- Empty: `#E5E7EB` (Light Gray)
- Spacing: 2px between stars

### Progress Bar

**Visual:**
```
┌─────────────────────────────────────┐
│███████████████████░░░░░░░░░░░░░░░░░│  65%
└─────────────────────────────────────┘
```

**Specifications:**
- Height: 8px
- Background: `#E5E7EB`
- Fill: `#2563EB`
- Border-radius: 4px

### Stat Card

**Layout:**
```
┌─────────────────┐
│     1,247       │
│     Views       │
│      ↑ 12%      │
└─────────────────┘
```

**Specifications:**
- Background: White
- Border: 1px `#E5E7EB`
- Border-radius: 12px
- Padding: 24px
- Number: H2 (36px), ExtraBold
- Label: Caption, uppercase
- Trend: Body Small, color-coded

---

## Feedback Components

### Alert/Toast

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│  [✓]  Success message                              [×]              │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Position: Top-right (desktop), top-full-width (mobile)
- Width: 400px max
- Background: White
- Border-left: 4px semantic color
- Border-radius: 8px
- Shadow: `0 4px 12px rgba(0,0,0,0.15)`
- Animation: Slide in from right
- Auto-dismiss: 5 seconds

**Variants:**
| Type | Border | Icon |
|------|--------|------|
| Success | `#10B981` | Check circle |
| Error | `#EF4444` | Alert circle |
| Warning | `#F59E0B` | Alert triangle |
| Info | `#3B82F6` | Info circle |

### Skeleton Loader

**Visual:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ ┌─────┐  ┌─────────────────────┐  ┌─────────────────────────────┐   │
│ │     │  │                     │  │                             │   │
│ └─────┘  └─────────────────────┘  └─────────────────────────────┘   │
│          ┌───────────────────────────────────────────────────────┐  │
│          │                                                       │  │
│          └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `#F3F4F6`
- Shimmer animation: Left to right gradient
- Border-radius: 4px
- Pulse duration: 1.5s

### Empty State

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                         [Illustration]                              │
│                                                                     │
│                    No contractors found                             │
│           Try adjusting your filters or search area                 │
│                                                                     │
│                        [Clear Filters]                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Illustration: 120px, `#E5E7EB` or brand color
- Title: H4, centered
- Description: Body, Medium Gray, centered
- Action: Secondary or Primary button

---

## Component Summary

> This component library ensures consistency across Contractie while providing flexibility for different use cases. All components are built with accessibility in mind—proper contrast ratios, keyboard navigation, and screen reader support.

**Key Principles:**
1. **Consistency** — Same component, same behavior everywhere
2. **Accessibility** — WCAG AA compliance minimum
3. **Responsiveness** — Components adapt to viewport
4. **Feedback** — Clear states for all interactions
5. **Performance** — Lightweight, efficient rendering
