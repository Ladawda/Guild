# Contractie Interaction Patterns

## Overview

This document defines the animations, transitions, and interactive behaviors for Contractie. All interactions aim to feel responsive, natural, and purposeful—enhancing the user experience without being distracting.

---

## Page Transitions

### Route Transitions

**Standard Page Transition:**
```
Exit:  opacity 1 → 0, duration 150ms
Enter: opacity 0 → 1, duration 200ms, delay 50ms
```

**Implementation:**
- Use CSS transitions for simple fades
- React: Framer Motion or similar
- Vue: `<Transition>` component

**Specifications:**
- Duration: 200ms total
- Easing: `ease-out` for exit, `ease-in-out` for enter
- No layout shift during transition

### List Transitions

**Staggered List Load:**
```
Item 1: delay 0ms,   duration 300ms
Item 2: delay 50ms,  duration 300ms
Item 3: delay 100ms, duration 300ms
...
```

**Animation:**
- Start: opacity 0, translateY 20px
- End: opacity 1, translateY 0
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Use Cases:**
- Contractor list loading
- Search results appearing
- Activity feed updates

### Modal/Dialog Transitions

**Modal Open:**
```
Overlay: opacity 0 → 0.5, duration 200ms
Content: opacity 0 → 1, scale 0.95 → 1, duration 200ms, delay 50ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

**Modal Close:**
```
Content: opacity 1 → 0, scale 1 → 0.95, duration 150ms
Overlay: opacity 0.5 → 0, duration 150ms, delay 50ms
Easing: cubic-bezier(0.4, 0, 1, 1)
```

### Drawer/Panel Transitions

**Slide-in from Right:**
```
Start: translateX(100%)
End: translateX(0)
Duration: 300ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

**Slide-out:**
```
Start: translateX(0)
End: translateX(100%)
Duration: 200ms
Easing: cubic-bezier(0.4, 0, 1, 1)
```

**Overlay Fade:**
```
Enter: opacity 0 → 0.5, duration 200ms
Exit: opacity 0.5 → 0, duration 200ms
```

---

## Loading States

### Global Loading (Page Level)

**Skeleton Screen:**
- Show immediately on navigation
- Animate shimmer effect
- Replace with content when loaded

**Shimmer Animation:**
```
Background: linear-gradient(90deg, #F3F4F6 0%, #E5E7EB 50%, #F3F4F6 100%)
Background-size: 200% 100%
Animation: shimmer 1.5s infinite
```

**Keyframes:**
```css
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Component Loading

**Button Loading State:**
```
[Spinner] Loading...
```
- Spinner: 16px, rotates 360deg in 1s
- Text: "Loading..." or action-specific ("Searching...", "Saving...")
- Disabled state during load

**Spinner Specifications:**
- Size: 16px (small), 24px (medium), 32px (large)
- Stroke: 2px
- Color: Current text color
- Animation: rotate 1s linear infinite

**Input Loading (Search):**
```
┌─────────────────────────────────────────┐
│ Search term...              [Spinner]   │
└─────────────────────────────────────────┘
```
- Spinner: 16px, right side
- Debounce: 300ms before showing spinner

### Map Loading

**Map Placeholder:**
- Gray background with grid pattern
- Loading indicator centered
- Fade in map when tiles loaded

**Marker Loading:**
- Markers fade in staggered (50ms delay each)
- Scale 0 → 1 with slight bounce

---

## Hover Effects

### Button Hover

**Primary Button:**
```
Default:  background #2563EB, shadow none
Hover:    background #1D4ED8, shadow 0 4px 12px rgba(37, 99, 235, 0.3)
Duration: 150ms
Easing:   ease-out
```

**Secondary Button:**
```
Default:  background white, border #2563EB
Hover:    background #EFF6FF, border #1D4ED8
Duration: 150ms
```

**Ghost Button:**
```
Default:  background transparent
Hover:    background #EFF6FF
Duration: 150ms
```

### Card Hover

**Contractor Card:**
```
Default:  shadow 0 1px 3px rgba(0,0,0,0.05), translateY(0)
Hover:    shadow 0 4px 12px rgba(0,0,0,0.08), translateY(-2px)
Duration: 200ms
Easing:   cubic-bezier(0.4, 0, 0.2, 1)
```

**Job Card:**
```
Default:  border #E5E7EB
Hover:    border #2563EB, shadow 0 4px 12px rgba(0,0,0,0.08)
Duration: 200ms
```

### Link Hover

**Text Links:**
```
Default:  color #2563EB, underline transparent
Hover:    color #1D4ED8, underline currentColor
Duration: 150ms
```

**Navigation Links:**
```
Default:  color #6B7280
Hover:    color #2563EB, background #F9FAFB
Active:   color #2563EB, background #EFF6FF, left border 3px
Duration: 150ms
```

### Image Hover

**Profile Photos:**
```
Default:  scale(1)
Hover:    scale(1.05)
Duration: 200ms
Overflow: hidden (container)
```

**Gallery Images:**
```
Default:  opacity 1, scale(1)
Hover:    opacity 0.9, scale(1.02)
Overlay:  gradient fade + icon
Duration: 200ms
```

---

## Map Interactions

### Marker Interactions

**Marker Appear:**
```
Start:    opacity 0, scale 0
End:      opacity 1, scale 1
Duration: 300ms
Easing:   cubic-bezier(0.34, 1.56, 0.64, 1) (slight bounce)
```

**Marker Hover:**
```
Default:  scale(1), z-index 1
Hover:    scale(1.15), z-index 10
Duration: 150ms
Cursor:   pointer
```

**Marker Click:**
```
Click:    scale 1 → 0.9 → 1.1 → 1
Duration: 200ms
Result:   Info window opens, marker stays scaled 1.1
```

**Marker Active State:**
```
Scale:    1.2
Border:   3px white ring
Shadow:   0 4px 12px rgba(0,0,0,0.2)
Z-index:  100
```

### Map Pan/Zoom

**Smooth Pan:**
- Duration: 500ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Zoom Transition:**
- Duration: 300ms
- Easing: `ease-in-out`

**Cluster Expand:**
```
Click cluster → Zoom to bounds of markers
Duration: 400ms
Easing:   cubic-bezier(0.4, 0, 0.2, 1)
```

### Info Window

**Open Animation:**
```
Start:    opacity 0, scale 0.9, translateY(10px)
End:      opacity 1, scale 1, translateY(0)
Duration: 200ms
Easing:   cubic-bezier(0.16, 1, 0.3, 1)
```

**Close Animation:**
```
Start:    opacity 1, scale 1
End:      opacity 0, scale 0.95
Duration: 150ms
Easing:   ease-in
```

---

## Scroll Behaviors

### Smooth Scroll

**Anchor Links:**
```javascript
behavior: 'smooth'
block: 'start'
offset: 80px (header height)
```

**Back to Top:**
- Appears after scrolling 300px
- Animation: fade in + translateY(10px → 0)
- Click: smooth scroll to top

### Infinite Scroll

**Loading Trigger:**
- Trigger: 200px before list end
- Indicator: Spinner at bottom
- Animation: fade in

**New Items:**
- Fade in + slide up
- Stagger: 50ms between items

### Sticky Headers

**Navigation:**
```
Position: sticky
Top: 0
Z-index: 50
Shadow on scroll: 0 2px 8px rgba(0,0,0,0.1)
Shadow transition: 200ms
```

**Filter Bar:**
```
Position: sticky
Top: 72px (below nav)
Background: white
Border-bottom on scroll: 1px #E5E7EB
```

### Parallax (Subtle)

**Hero Section:**
```
Background: translateY at 0.5x scroll speed
Content: translateY at 1x (normal)
Max offset: 50px
```

---

## Micro-interactions

### Form Interactions

**Input Focus:**
```
Border:        #E5E7EB → #2563EB
Border-width:  1px → 2px
Shadow:        0 0 0 3px rgba(37, 99, 235, 0.1)
Duration:      150ms
Label:         scale(0.85), translateY(-24px), color #2563EB
```

**Floating Label (if used):**
```
Empty:    translateY(0), scale(1), color #9CA3AF
Focused:  translateY(-24px), scale(0.85), color #2563EB
Filled:   Same as focused
Duration: 200ms
Easing:   cubic-bezier(0.4, 0, 0.2, 1)
```

**Checkbox Check:**
```
Checkmark: stroke-dashoffset 100% → 0%
Duration:  200ms
Scale:     1 → 1.1 → 1 (subtle bounce)
```

**Toggle Switch:**
```
Knob:     translateX(0) → translateX(20px)
Duration: 200ms
Easing:   cubic-bezier(0.4, 0, 0.2, 1)
```

### Button Micro-interactions

**Click Ripple (Optional):**
```
Origin:   click position
Scale:    0 → 2
Opacity:  0.3 → 0
Duration: 400ms
```

**Success State:**
```
Text:     "Save" → "Saved!" → "Save"
Icon:     Checkmark appears
Color:    Blue → Green → Blue
Duration: 2s total
```

### Badge/Notification

**New Badge Pulse:**
```
0%:    scale(1), box-shadow 0 0 0 0 rgba(37, 99, 235, 0.4)
50%:   scale(1.05)
100%:  scale(1), box-shadow 0 0 0 10px rgba(37, 99, 235, 0)
Duration: 2s
Iteration: infinite (until seen)
```

**Count Update:**
```
Old number: opacity 1, translateY(0)
New number: opacity 0, translateY(-10px) → opacity 1, translateY(0)
Duration: 300ms
```

### Favorite/Save

**Heart Icon:**
```
Click:
  - Scale: 1 → 1.3 → 1
  - Fill: none → #EF4444
  - Duration: 300ms
  - Easing: cubic-bezier(0.175, 0.885, 0.32, 1.275) (bounce)
```

### Pull to Refresh (Mobile)

**Gesture:**
```
Pull down > 60px → Trigger refresh
Visual: Spinner appears, rotates
Release: Content reloads with fade
```

---

## Error States

### Shake Animation

**Form Validation Error:**
```
0%:    translateX(0)
20%:   translateX(-10px)
40%:   translateX(10px)
60%:   translateX(-10px)
80%:   translateX(10px)
100%:  translateX(0)
Duration: 400ms
```

**Applied to:**
- Input containers with errors
- Modal on failed submission
- Toast notification container

### Error Toast

**Appear:**
```
Start:    translateX(100%), opacity 0
End:      translateX(0), opacity 1
Duration: 300ms
Easing:   cubic-bezier(0.16, 1, 0.3, 1)
```

**Dismiss:**
```
Swipe right: translateX(100%), opacity 0
Duration: 200ms
```

---

## Accessibility Considerations

### Reduced Motion

**Respect `prefers-reduced-motion`:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States

**Visible Focus Ring:**
```
Outline: 2px solid #2563EB
Outline-offset: 2px
Transition: none (instant)
```

**Skip to Content:**
- Visible on Tab press
- First focusable element
- Smooth scroll to main content

### Screen Reader Announcements

**Live Regions:**
- `aria-live="polite"` for non-urgent updates
- `aria-live="assertive"` for errors
- Announce: "5 new results loaded", "Form submitted successfully"

---

## Performance Guidelines

### Animation Performance

**Use GPU-Accelerated Properties:**
- `transform` (translate, scale, rotate)
- `opacity`
- Avoid: `width`, `height`, `top`, `left`, `margin`, `padding`

**Will-Change:**
```css
.animated-element {
  will-change: transform, opacity;
}
```
- Add before animation
- Remove after animation completes

### Debouncing

**Scroll Events:**
- Debounce: 16ms (1 frame)
- Use `requestAnimationFrame`

**Resize Events:**
- Debounce: 100ms
- Recalculate layout after resize ends

**Search Input:**
- Debounce: 300ms
- Cancel previous requests on new input

---

## Interaction Summary

> Contractie's interactions aim to be felt, not noticed. Every animation serves a purpose—providing feedback, guiding attention, or creating a sense of responsiveness. We prioritize performance and accessibility, ensuring the experience is smooth for all users.

**Key Principles:**
1. **Purposeful** — Every animation has a reason
2. **Performant** — 60fps target, GPU-accelerated
3. **Accessible** — Respect reduced motion preferences
4. **Consistent** — Same patterns throughout
5. **Delightful** — Subtle moments of personality
