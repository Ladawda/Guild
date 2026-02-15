# Contractie - Recommended Tech Stack & Starter Template

## Overview

Use a battle-tested open-source starter to accelerate development. Don't build from scratch.

## Recommended Starter Template

### **Supabase Full-Stack SaaS Template**
**Repository**: `Razikus/supabase-nextjs-template`
**URL**: https://github.com/Razikus/supabase-nextjs-template

**Why This Template:**
- ✅ Next.js 15 (App Router)
- ✅ Supabase Auth + Database + Storage
- ✅ Tailwind CSS + shadcn/ui components
- ✅ TypeScript throughout
- ✅ File upload example (for contractor photos)
- ✅ Row Level Security (RLS) configured
- ✅ Dark mode support
- ✅ FREE and open source (Apache 2.0)

**What's Included Out of the Box:**
| Feature | Status |
|---------|--------|
| Email/Password Auth | ✅ |
| OAuth (Google, GitHub, etc.) | ✅ |
| Multi-factor Auth (MFA) | ✅ |
| File Storage | ✅ |
| PostgreSQL Database | ✅ |
| Row Level Security | ✅ |
| User Profiles | ✅ |
| Task Management Demo | ✅ |
| Responsive UI | ✅ |
| Toast Notifications | ✅ |
| Dark Mode | ✅ |
| Cookie Consent (GDPR) | ✅ |

**What You Build:**
- Job posting flow with Stripe payment
- Contractor profile pages
- Job browse/search
- "Express Interest" system
- Admin dashboard for manual intros
- Email notification system

---

## Alternative Templates

### Option 2: NextBase Lite (Minimal)
**Repository**: `imbhargav5/nextbase-nextjs-supabase-starter`
- Lighter weight
- Less built-in features
- Good if you want minimal bloat

### Option 3: MakerKit Lite (More Features)
**Repository**: `makerkit/next-supabase-saas-kit`
- More opinionated
- Organizations/teams built-in
- Good for future multi-contractor firms

---

## UI Component Libraries

### shadcn/ui (Recommended)
Already included in the Razikus template. Add these components:

```bash
npx shadcn add card
npx shadcn add button
npx shadcn add input
npx shadcn add form
npx shadcn add avatar
npx shadcn add badge
npx shadcn add dialog
npx shadcn add dropdown-menu
npx shadcn add tabs
npx shadcn add table
npx shadcn add select
npx shadcn add textarea
npx shadcn add separator
npx shadcn add skeleton
n```

### Additional Libraries
```bash
# Animations
npm install framer-motion

# Icons (already included via Lucide)
# Date formatting
npm install date-fns

# Phone input
npm install react-phone-number-input

# Image carousel for contractor photos
npm install embla-carousel-react
```

---

## Quick Start Guide

### Step 1: Clone Template
```bash
git clone https://github.com/Razikus/supabase-nextjs-template.git contractie
cd contractie
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Supabase
1. Create account at https://supabase.com
2. Create new project
3. Get Project URL and Anon Key from Project Settings → API
4. Get Service Role Key (for admin operations)

### Step 4: Environment Variables
```bash
cp .env.template .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
PRIVATE_SUPABASE_SERVICE_KEY=your_service_role_key
```

### Step 5: Link Supabase Project
```bash
npx supabase login
npx supabase link --project-ref your_project_ref
npx supabase config push
npx supabase migrations up --linked
```

### Step 6: Generate Types
```bash
npm run generate:types:local
```

### Step 7: Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

---

## Customization for Contractie

### 1. Database Schema

Add to Supabase migrations:

```sql
-- Contractor profiles
CREATE TABLE contractor_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone TEXT,
  license_number TEXT,
  license_verified BOOLEAN DEFAULT FALSE,
  trade TEXT, -- plumbing, electrical, etc.
  bio TEXT,
  zip_code TEXT,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Contractor photos
CREATE TABLE contractor_photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contractor_id UUID REFERENCES contractor_profiles(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Past jobs
CREATE TABLE past_jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contractor_id UUID REFERENCES contractor_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  photos TEXT[], -- array of photo URLs
  completed_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Jobs (posted by homeowners)
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  homeowner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  trade TEXT,
  zip_code TEXT NOT NULL,
  budget_min INTEGER,
  budget_max INTEGER,
  status TEXT DEFAULT 'open', -- open, filled, closed
  is_paid BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Job applications (contractor expresses interest)
CREATE TABLE job_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  contractor_id UUID REFERENCES contractor_profiles(id) ON DELETE CASCADE,
  message TEXT,
  status TEXT DEFAULT 'pending', -- pending, approved, rejected
  created_at TIMESTAMP DEFAULT NOW()
);

-- Payments
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT,
  amount INTEGER, -- in cents
  status TEXT, -- pending, completed, failed
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. File Storage Setup

Create buckets in Supabase:
- `contractor-photos` - Profile and portfolio photos
- `license-documents` - License verification docs

Set RLS policies for public read, authenticated write.

### 3. Pages to Create

```
app/
├── (marketing)/
│   ├── page.tsx              # Landing page
│   ├── about/page.tsx
│   └── pricing/page.tsx
├── (dashboard)/
│   ├── layout.tsx            # Dashboard layout
│   ├── page.tsx              # Dashboard home
│   ├── profile/page.tsx      # Edit profile
│   ├── jobs/
│   │   ├── page.tsx          # Browse jobs
│   │   ├── [id]/page.tsx     # Job detail
│   │   └── post/page.tsx     # Post a job (paid)
│   └── applications/
│       └── page.tsx          # View applications (admin)
```

### 4. Key Components to Build

- `JobCard` - Display job summary
- `ContractorCard` - Display contractor profile
- `JobPostForm` - Create job with Stripe payment
- `ContractorProfileForm` - Complete profile
- `ExpressInterestButton` - Apply to job
- `PhotoUpload` - Upload portfolio photos

### 5. Stripe Integration

```bash
npm install stripe @stripe/stripe-js
```

Create checkout session for job posting fee.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Deploy

### Update Supabase Config

In `supabase/config.toml`:
```toml
site_url = "https://your-domain.com"
additional_redirect_urls = ["https://your-domain.com/**"]
```

---

## Migration from Template

After cloning, you'll customize:

1. **Remove demo content**: Task management demo, file management demo
2. **Update branding**: Logo, colors, fonts
3. **Add Contractie pages**: Job board, contractor profiles
4. **Configure auth**: Email templates, OAuth providers
5. **Setup payments**: Stripe integration
6. **Add email**: Resend or SendGrid for notifications

---

## Timeline with Template

| Task | Time |
|------|------|
| Clone & setup | 2 hours |
| Customize branding | 4 hours |
| Database schema | 4 hours |
| Auth flows | 4 hours |
| Job posting (with Stripe) | 8 hours |
| Contractor profiles | 8 hours |
| Job browse/search | 6 hours |
| Express interest flow | 4 hours |
| Admin dashboard | 6 hours |
| Email notifications | 4 hours |
| Polish & testing | 8 hours |
| **Total** | **~58 hours (~1 week)** |

vs. **4-6 weeks** building from scratch.

---

## Next Steps

1. Clone the template: `git clone https://github.com/Razikus/supabase-nextjs-template.git contractie`
2. Follow setup guide above
3. Customize for Contractie
4. Deploy and launch

See `QUICK_START.md` for detailed commands.
