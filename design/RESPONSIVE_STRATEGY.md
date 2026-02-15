# Contractie Responsive Strategy

## Overview

Contractie follows a mobile-first approach, ensuring core functionality works seamlessly on all devices while taking advantage of larger screens for enhanced experiences. The map-centric design requires special consideration for touch interactions and viewport constraints.

---

## Breakpoints

### Breakpoint Definitions

| Name | Min Width | Max Width | Target Devices |
|------|-----------|-----------|----------------|
| **XS** | 0px | 479px | Small phones |
| **SM** | 480px | 767px | Large phones, small tablets |
| **MD** | 768px | 1023px | Tablets, small laptops |
| **LG** | 1024px | 1279px | Laptops, small desktops |
| **XL** | 1280px | 1535px | Desktops |
| **2XL** | 1536px | ∞ | Large desktops |

### Breakpoint Usage

```css
/* Mobile First - Base styles for XS */
.component { }

/* SM - Large phones */
@media (min-width: 480px) { }

/* MD - Tablets */
@media (min-width: 768px) { }

/* LG - Laptops */
@media (min-width: 1024px) { }

/* XL - Desktops */
@media (min-width: 1280px) { }

/* 2XL - Large screens */
@media (min-width: 1536px) { }
```

---

## Mobile-First Approach

### Philosophy

1. **Content Priority** — Core content and actions work on all screens
2. **Progressive Enhancement** — Add complexity as screen size increases
3. **Touch-First** — Design for fingers, then adapt for mouse
4. **Performance** — Mobile constraints drive efficient code

### Implementation Strategy

**Base Styles (Mobile):**
- Single column layouts
- Full-width elements
- Stacked navigation
- Simplified interactions
- Essential content only

**Progressive Additions:**
| Breakpoint | Additions |
|------------|-----------|
| SM | Slight padding increases, 2-column grids possible |
| MD | Sidebar navigation, split-pane layouts, hover states |
| LG | Full navigation, multi-column layouts, map+list view |
| XL | Max-width containers, increased spacing |
| 2XL | Full utilization of wide screens, side panels |

---

## Mobile Navigation

### Header (56px height)

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│  [☰]        [Logo]              [🔍]  [💬]                        │
│  Menu       Center              Search  Messages                    │
└─────────────────────────────────────────────────────────────────────┘
```

**Elements:**
- Hamburger menu: Left, 44x44px touch target
- Logo: Centered, 120px width
- Actions: Right, icons only

### Side Drawer (Navigation)

**Open Animation:**
```
Overlay: opacity 0 → 0.5, duration 200ms
Drawer:  translateX(-100%) → translateX(0), duration 300ms
Easing:  cubic-bezier(0.16, 1, 0.3, 1)
```

**Drawer Content:**
```
┌─────────────────────────────────────────┐
│  [👤]  User Name                        │
│        View Profile                     │
├─────────────────────────────────────────┤
│  🔍  Find Contractors                   │
│  📋  My Jobs                            │
│  💬  Messages                    [3]    │
│  🔖  Saved Pros                         │
├─────────────────────────────────────────┤
│  📊  Dashboard (if contractor)          │
│  ⭐  My Reviews                         │
│  📅  Calendar                           │
├─────────────────────────────────────────┤
│  ⚙️  Settings                           │
│  ❓  Help & Support                     │
│  🚪  Log Out                            │
└─────────────────────────────────────────┘
```

**Specifications:**
- Width: 280px (80% of screen on XS)
- Background: White
- Shadow: `4px 0 24px rgba(0,0,0,0.1)`
- Close: Swipe left, tap overlay, or tap X

### Bottom Navigation Bar

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│  [🔍]        [📋]        [💬]        [👤]                          │
│  Search     Jobs       Messages    Profile                          │
└─────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 64px (80px with iOS safe area)
- Background: White
- Border-top: 1px `#E5E7EB`
- Position: Fixed bottom
- Safe area padding: `env(safe-area-inset-bottom)`

**Active State:**
- Icon: `#2563EB` (Primary Blue)
- Label: `#2563EB`, visible
- Inactive: `#9CA3AF` (Medium Gray)

### Floating Action Button (FAB)

**Use Cases:**
- Post a Job (homeowner)
- Quick Quote (contractor)
- New Message

**Specifications:**
- Size: 56x56px
- Position: Bottom-right, 16px from edges
- Above bottom nav: margin-bottom 80px
- Background: `#2563EB`
- Icon: White, 24px
- Shadow: `0 4px 12px rgba(37, 99, 235, 0.4)`
- Tap: Scale 0.95 → 1

---

## Touch-Friendly Targets

### Minimum Touch Target Sizes

| Element | Minimum Size | Preferred Size |
|---------|--------------|----------------|
| Buttons | 44x44px | 48x48px |
| List items | 44px height | 48px height |
| Form inputs | 44px height | 48px height |
| Navigation items | 44x44px | 48x48px |
| Map markers | 44x44px tappable | 48x48px |
| Checkboxes/Radios | 44x44px | 44x44px |
| Icons (tappable) | 44x44px | 44x44px |

### Spacing Guidelines

**Between Touch Targets:**
- Minimum: 8px
- Preferred: 16px
- Lists: 0px (full-width items with internal padding)

**Implementation:**
```css
.touch-target {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 16px;
}

/* Visual element can be smaller if touch target is larger */
.icon-button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-button svg {
  width: 24px;
  height: 24px;
}
```

### Touch Feedback

**Active States:**
```css
.interactive-element {
  transition: background-color 100ms, transform 100ms;
}

.interactive-element:active {
  background-color: rgba(0, 0, 0, 0.05);
  transform: scale(0.98);
}
```

**Ripple Effect (Optional):**
- Centered on touch point
- Duration: 400ms
- Color: `rgba(0, 0, 0, 0.1)`

---

## Map on Mobile

### Map View Modes

**Toggle Control:**
```
┌─────────────────────────────────────────┐
│  [List]  [Map]                         │
└─────────────────────────────────────────┘
```
- Position: Sticky below header
- Background: White
- Active: Filled background
- Switch: Instant (no animation)

### List View (Default)

**Layout:**
```
┌─────────────────────────────────────────┐
│  [Search & Filter Bar]                 │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │ Contractor Card 1                 │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ Contractor Card 2                 │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ Contractor Card 3                 │  │
│  └───────────────────────────────────┘  │
│              ...                        │
│  ┌───────────────────────────────────┐  │
│  │  [Show on Map]                    │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Card Adaptations:**
- Full width with 16px horizontal padding
- Horizontal layout: Photo left, content right
- Reduced padding: 16px
- Larger touch targets for CTAs

### Map View

**Layout:**
```
┌─────────────────────────────────────────┐
│  [Search & Filter Bar]                 │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│              [MAP]                      │
│                                         │
│         [Contractor Card]               │
│         (bottom sheet peek)             │
│                                         │
└─────────────────────────────────────────┘
```

**Bottom Sheet (Contractor Preview):**
- Initial height: 120px (peek)
- Expanded height: 70% viewport
- Pull up to expand
- Swipe down to collapse
- Tap marker to open

**Bottom Sheet Specifications:**
```
┌─────────────────────────────────────────┐
│         ─────── (handle)                │
│  Contractor Name              [Close]   │
│  ★★★★★ 4.8 (24 reviews)                │
│  0.5 miles away                         │
│  [View Profile]  [Contact]              │
└─────────────────────────────────────────┘
```

### Map Interactions (Touch)

**Gestures:**
| Gesture | Action |
|---------|--------|
| Single tap | Select marker, show info |
| Double tap | Zoom in |
| Two-finger tap | Zoom out |
| Pan | Move map |
| Pinch | Zoom in/out |
| Long press | Drop pin (if feature enabled) |

**Marker Tap:**
- Area: 48x48px minimum
- Visual feedback: Scale up briefly
- Info window: Appear above marker

---

## Content Prioritization

### Mobile Content Hierarchy

**Landing Page Priority:**
1. Search bar (immediate action)
2. Nearby contractors (3-5 results)
3. Trust signals (badges, reviews)
4. How it works (3 steps)
5. CTA to post job

**Hidden/Deferred on Mobile:**
- Detailed filters (behind "Filters" button)
- Full trade categories (behind "See All")
- Secondary CTAs
- Large imagery

### Progressive Disclosure

**Filter Pattern:**
```
Mobile:
[Search input]
[Trade ▼] [Distance ▼] [More Filters]

Tap "More Filters" →
┌─────────────────────────────────────────┐
│  Filters                    [Apply]     │
│  ─────────────────────────────────────  │
│  Rating                                 │
│  [Any] [4★+] [4.5★+] [5★]              │
│                                         │
│  Availability                           │
│  [Any] [Today] [This Week]             │
│                                         │
│  Price Range                            │
│  ━━━━━━━━━━━━━━━━━━━━━━━━              │
│  $0                    $5000+          │
│                                         │
│  [Reset]                    [Show 24]   │
└─────────────────────────────────────────┘
```

**Modal/Bottom Sheet:**
- SM and below: Bottom sheet
- MD and above: Side panel or inline

### Typography Scaling

| Element | XS/SM | MD | LG+ |
|---------|-------|-----|-----|
| H1 | 32px | 40px | 48px |
| H2 | 28px | 32px | 36px |
| H3 | 24px | 26px | 28px |
| H4 | 20px | 22px | 24px |
| Body | 16px | 16px | 16px |
| Small | 14px | 14px | 14px |

### Spacing Scaling

| Spacing | XS/SM | MD | LG+ |
|---------|-------|-----|-----|
| Section padding | 48px 0 | 64px 0 | 80px 0 |
| Container padding | 16px | 24px | 32px |
| Card padding | 16px | 20px | 24px |
| Grid gap | 16px | 24px | 32px |

---

## Layout Adaptations

### Landing Page

**XS/SM:**
- Single column
- Hero: Stacked (text above search)
- Search: Full width, stacked inputs
- Contractors: Vertical list
- Trades: 2-column grid

**MD:**
- Hero: Side-by-side possible
- Search: Horizontal layout
- Contractors: List with map toggle
- Trades: 3-column grid

**LG+:**
- Hero: Two-column (55/45)
- Search: Compact horizontal
- Contractors: List + sticky map (60/40)
- Trades: 4-column grid

### Dashboard

**XS/SM:**
- Bottom navigation
- Single column content
- Cards stack vertically
- FAB for primary action

**MD:**
- Collapsible sidebar
- Two-column card grids
- Persistent navigation

**LG+:**
- Fixed sidebar (240px)
- Multi-column layouts
- Full feature visibility

### Job Posting Flow

**XS/SM:**
- Single column form
- Full-width inputs
- Step indicator sticky top
- One question per screen feel

**MD+:**
- Wider form (max 600px)
- Side-by-side inputs where logical
- Progress bar visible

---

## Responsive Images

### Image Sizing

```html
<img 
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="
    (max-width: 480px) 100vw,
    (max-width: 768px) 50vw,
    33vw
  "
  src="image-800.jpg"
  alt="Description"
/>
```

### Aspect Ratios

| Use Case | XS/SM | MD+ |
|----------|-------|-----|
| Hero images | 16:9 | 21:9 |
| Contractor photos | 1:1 | 1:1 |
| Project photos | 4:3 | 16:9 |
| Cover photos | 3:1 | 4:1 |

---

## Responsive Components

### Search Bar

**XS:**
```
┌─────────────────────────────────────────┐
│ What do you need?                       │
├─────────────────────────────────────────┤
│ ZIP code or city                        │
├─────────────────────────────────────────┤
│         [Find Pros]                     │
└─────────────────────────────────────────┘
```

**SM+:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ What do you need?      │ ZIP code or city      │ [Find Pros]        │
└─────────────────────────────────────────────────────────────────────┘
```

### Contractor Card

**XS:**
```
┌─────────────────────────────────────────┐
│ ┌─────┐  Name                    [★]    │
│ │Photo│  ★★★★★ 4.8 (24)                 │
│ └─────┘  Plumber • 0.5 mi               │
│                                         │
│ "Great service..."                      │
│                                         │
│ [View]              [Contact]           │
└─────────────────────────────────────────┘
```

**MD+:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ ┌─────┐  Name                                [Verified]  [Save]     │
│ │     │  ★★★★★ 4.8 (24 reviews)    [Top Pro]                      │
│ │Photo│  Plumber • 0.5 miles away                                   │
│ └─────┘                                                             │
│ "Great service and fast response..." — Sarah M.                     │
│                                                                     │
│ [View Profile]                              [Request Quote]         │
└─────────────────────────────────────────────────────────────────────┘
```

### Filter Bar

**XS:**
- Horizontal scroll
- Chip-style buttons
- "More" button for additional filters

**MD+:**
- Dropdown selects
- All filters visible
- Inline layout

---

## Testing Checklist

### Devices to Test

**Physical Devices:**
- iPhone SE (small screen)
- iPhone 14/15 (standard)
- iPhone 14/15 Pro Max (large)
- Samsung Galaxy S series
- iPad Mini, iPad Air

**Emulators:**
- Chrome DevTools device mode
- Safari Responsive Design Mode
- BrowserStack (if available)

### Touch Testing

- [ ] All buttons have 44px+ touch targets
- [ ] No accidental taps on adjacent elements
- [ ] Scroll performance is smooth (60fps)
- [ ] Pinch/zoom works on map
- [ ] Swipe gestures function correctly

### Visual Testing

- [ ] No horizontal scroll on any device
- [ ] Text remains readable at all sizes
- [ ] Images don't overflow containers
- [ ] Modals fit within viewport
- [ ] Bottom nav doesn't obscure content

---

## Responsive Summary

> Contractie's responsive strategy ensures that whether a homeowner is posting a job from their phone or a contractor is managing leads on their laptop, the experience feels native and optimized. The mobile-first approach keeps us focused on essential features, while progressive enhancement adds value on larger screens.

**Key Principles:**
1. **Mobile-first** — Core functionality works everywhere
2. **Touch-optimized** — Fingers, not cursors
3. **Performance** — Fast on all connections
4. **Context-aware** — Map vs list based on device
5. **Accessible** — Readable, navigable, usable for all
