# Complete Admin Dashboard Development Prompt

## Project Overview
Create a modern, production-ready admin dashboard application using Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Shadcn UI components. The dashboard should be fully responsive, performant, and follow best practices.

---

## Technology Stack Requirements

### Core Technologies
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v3+
- **UI Components**: Shadcn UI (https://ui.shadcn.com/)
- **Icons**: Lucide React
- **Backend/CMS**: Sanity.io (headless CMS)
- **State Management**: React Context API or Zustand
- **Data Fetching**: Sanity Client + GROQ queries
- **Form Handling**: React Hook Form + Zod validation

### Additional Libraries
- **CMS Client**: @sanity/client, next-sanity
- **Image Handling**: @sanity/image-url
- **Charts**: Recharts or Chart.js
- **Tables**: TanStack Table (React Table v8)
- **Date Handling**: date-fns
- **Notifications**: Sonner (toast notifications)
- **Theme**: next-themes (dark/light mode support - BLACK & WHITE ONLY)

---

## Project Structure

```
admin-dashboard/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── content/
│   │   │   ├── posts/
│   │   │   ├── pages/
│   │   │   └── media/
│   │   ├── users/
│   │   │   └── page.tsx
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   └── [...routes]/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   ├── dashboard/
│   │   ├── stat-card.tsx
│   │   ├── recent-activity.tsx
│   │   ├── chart-card.tsx
│   │   └── quick-actions.tsx
│   └── shared/
│       ├── data-table.tsx
│       ├── search-bar.tsx
│       └── user-menu.tsx
├── lib/
│   ├── utils.ts
│   ├── validations/
│   └── hooks/
├── types/
│   └── index.ts
└── public/
```

---

## Sanity Backend Integration

### Setup Sanity Client

Install Sanity dependencies:

```bash
npm install @sanity/client @sanity/image-url next-sanity
```

**Environment Variables (.env.local):**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=e6ou6t4t
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

**Create Sanity Client (lib/sanity.ts):**
```typescript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
```

---

## Complete Sanity Schema Fields Reference

### 1. Banner Data Schema (`bannerData`)

**Fields to include in the admin dashboard:**
- `title` (string) - Banner title text
- `subTitle` (string) - Banner subtitle text

**Form Layout:**
```
Banner Management
├── Title (text input, required)
└── Subtitle (text input, required)
```

---

### 2. Our Story Schema (`ourstory`)

**Fields:**
- `sections` (array of objects) - Multiple sections

**Each Section Object Contains:**
- `title` (string, required) - Section heading
- `content` (array of strings, required) - Paragraph content
- `points` (array of strings, optional) - Bullet points list
- `ending` (string, optional) - Closing text
- `subTitle` (string, optional) - Subsection title
- `subPoints` (array of strings, optional) - Sub-bullet points

**Form Layout:**
```
Our Story Editor
└── Sections (repeatable)
    ├── Title* (text input)
    ├── Content* (text array - add/remove paragraphs)
    ├── Points (string array - bullet list)
    ├── Ending (textarea)
    ├── Sub Title (text input)
    └── Sub Points (string array)
```

**Example Data Structure:**
```json
{
  "sections": [
    {
      "title": "WHO ARE FRIENDS UNITED?",
      "content": ["Infuriated Australians who believe..."],
      "points": ["owning your own home...", "cost of living..."],
      "ending": "Friends United are ordinary Australian citizens..."
    }
  ]
}
```

---

### 3. Services Schema (`services`)

**Fields:**
- `title` (string, required) - Service title
- `description` (string, required) - Service description
- `image` (image, required, hotspot enabled) - Service image
- `link` (string, required) - URL slug for the service
- `demands` (array of strings, required, min 1) - Key demands list
- `demandText` (text, optional) - Additional demand information
- `references` (array of objects) - Reference links
  - `label` (string, required)
  - `link` (URL, required)
- `details` (object) - Detailed information
  - `intro` (text) - Introduction text
  - `sections` (array) - Detail sections

**Form Layout:**
```
Service Editor
├── Basic Information
│   ├── Title* (text input)
│   ├── Description* (textarea)
│   ├── Image* (image upload with hotspot)
│   └── Link Slug* (text input)
├── Key Demands*
│   └── Demands List (string array, min 1)
├── Demand Extra Text (textarea)
├── References (repeatable)
│   ├── Label* (text input)
│   └── Link URL* (URL input)
└── Details
    ├── Introduction (textarea)
    └── Sections (array)
```

---

### 4. The Fight Schema (`theFight`)

**Fields:**
- `title` (string) - Main title
- `subTitle` (string) - Subtitle
- `voices` (array of objects) - List of voices
  - `heading` (string)
  - `subHeading` (string)

**Form Layout:**
```
The Fight Editor
├── Title (text input)
├── Subtitle (text input)
└── Voices List (repeatable)
    ├── Heading (text input)
    └── Sub Heading (text input)
```

---

### 5. United Voices Schema (`unitedVoices`)

**Fields:**
- `title` (string) - Main title
- `subTitle` (string) - Subtitle
- `description` (string) - Description text
- `frontimage` (image, required) - Main front image (JPEG/PNG, max 2MB)
- `backimage` (image, required) - Back image (JPEG/PNG, max 2MB)
- `voices` (array of objects) - Voices list
  - `heading` (string)
  - `subHeading` (string)

**Form Layout:**
```
United Voices Editor
├── Basic Info
│   ├── Title (text input)
│   ├── Subtitle (text input)
│   └── Description (textarea)
├── Images
│   ├── Main Image* (image upload, JPEG/PNG, max 2MB)
│   └── Back Image* (image upload, JPEG/PNG, max 2MB)
└── Voices List (repeatable)
    ├── Heading (text input)
    └── Sub Heading (text input)
```

---

### 6. Real Winners Schema (`realWinners`)

**Fields:**
- `sectionTitle` (string, required) - Section title
- `sectionDescription` (string, required) - Section description
- `winnersList` (array of objects, required) - Winners array
  - `icon` (string, required) - Icon name/identifier
  - `title` (string, required) - Winner title
  - `description` (string, required, max 500 chars) - Winner description

**Form Layout:**
```
Real Winners Editor
├── Section Info
│   ├── Section Title* (text input)
│   └── Section Description* (textarea)
└── Winners List* (repeatable)
    ├── Icon* (icon picker)
    ├── Title* (text input)
    └── Description* (textarea, max 500 chars)
```

---

### 7. FAQ Schema (`faq`)

**Fields:**
- `image` (image, hotspot enabled) - FAQ section image
- `faq` (array of objects) - FAQ items
  - `question` (string)
  - `answer` (text, 3 rows)

**Form Layout:**
```
FAQ Editor
├── Image (image upload with hotspot)
└── FAQ Items (repeatable)
    ├── Question (text input)
    └── Answer (textarea, 3 rows)
```

---

### 8. Settings Schema (`setting`)

**Fields:**
- `siteTitle` (string, required) - Website title
- `siteDescription` (text, required, 4 rows) - Site description
- `logo` (image, hotspot) - Site logo
- `address` (string) - Physical address
- `phone` (string) - Phone number
- `email` (string) - Contact email
- `socialLinks` (array of objects) - Social media links
  - `platform` (string) - Platform name
  - `url` (URL) - Profile URL
  - `icon` (string, dropdown) - Icon selection
    - Options: FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaTiktok

**Form Layout:**
```
Settings Editor
├── Site Information
│   ├── Site Title* (text input)
│   ├── Site Description* (textarea, 4 rows)
│   └── Logo (image upload)
├── Contact Details
│   ├── Address (text input)
│   ├── Phone (text input)
│   └── Email (email input)
└── Social Media Links (repeatable)
    ├── Platform Name (text input)
    ├── URL (URL input)
    └── Icon (dropdown: Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp, TikTok)
```

---

### 9. Contact/Contract Schema (`contact`)

**Fields:**
- `firstName` (string, required) - First name
- `lastName` (string, required) - Last name
- `email` (string, required) - Email address
- `phoneNumber` (string, required) - Phone number
- `message` (string, required) - Message content

**Form Layout (READ-ONLY - Form Submissions):**
```
Contact Submissions Table
├── First Name
├── Last Name
├── Email
├── Phone Number
├── Message
└── Actions (View, Delete)
```

---

## Dashboard Pages Implementation

### 1. Dashboard Home Page (`app/(dashboard)/dashboard/page.tsx`)

**Required Stats (using Sanity data):**
- Total Content Items (count all documents)
- Total Services (count services)
- Total FAQs (count FAQ items)
- Contact Submissions (count contact forms)

**GROQ Queries:**
```typescript
// Get total counts
const stats = await client.fetch(`{
  "totalContent": count(*[_type in ["ourstory", "services", "theFight", "unitedVoices", "realWinners"]]),
  "totalServices": count(*[_type == "services"]),
  "totalFAQs": count(*[_type == "faq"][0].faq),
  "totalContacts": count(*[_type == "contact"])
}`)
```

**Stats Display (Black & White):**
- White cards with black text
- Gray borders
- Black icons in light gray circles
- No colors, only grayscale

---

### 2. Content Pages with CRUD Operations

#### Banner Management Page

**List View:**
- Show all banner entries
- Columns: Title, Subtitle, Actions
- Actions: Edit, Delete

**Edit/Create Form:**
```typescript
interface BannerForm {
  title: string
  subTitle: string
}
```

**GROQ Query:**
```typescript
const banners = await client.fetch(`*[_type == "bannerData"] | order(_createdAt desc)`)
```

**Create/Update:**
```typescript
await client.create({
  _type: 'bannerData',
  title: formData.title,
  subTitle: formData.subTitle
})
```

---

#### Our Story Management Page

**Form with Dynamic Sections:**
- Add/Remove sections dynamically
- Each section can have multiple content paragraphs
- Points and subPoints as arrays
- Real-time preview (optional)

**GROQ Query:**
```typescript
const ourStory = await client.fetch(`*[_type == "ourstory"][0]`)
```

**Update:**
```typescript
await client.createOrReplace({
  _id: documentId,
  _type: 'ourstory',
  sections: formData.sections
})
```

---

#### Services Management Page

**Table Columns:**
- Image (thumbnail)
- Title
- Description (truncated)
- Link Slug
- Actions (Edit, Delete, View)

Create a new Next.js project with TypeScript and Tailwind CSS:

```bash
npx create-next-app@latest admin-dashboard --typescript --tailwind --app
cd admin-dashboard
```

Initialize Shadcn UI:

```bash
npx shadcn-ui@latest init
```

**IMPORTANT: When prompted for colors, choose "Slate" or "Zinc" for a grayscale theme.**

Install all required Shadcn components:

```bash
npx shadcn-ui@latest add button card input label select table dropdown-menu avatar badge separator switch dialog alert sheet sidebar navigation-menu
```

Install additional dependencies:

```bash
npm install lucide-react recharts @tanstack/react-table date-fns sonner react-hook-form @hookform/resolvers zod zustand next-themes @sanity/client @sanity/image-url next-sanity
```

---

### 2. Responsive Design Requirements

#### Main Dashboard Layout (`app/(dashboard)/layout.tsx`)

Create a responsive layout with:
- **Collapsible Sidebar** (260px desktop, hidden on mobile with toggle)
- **Top Header Bar** with:
  - Breadcrumbs
  - Global search
  - Notifications bell with badge
  - User profile dropdown
  - Theme toggle (dark/light mode) - **BLACK & WHITE ONLY**
- **Main Content Area** with proper spacing
- **Mobile Navigation** (slide-out drawer)

**KEY DESIGN RULE: NO COLORS - Only black, white, and grayscale shades**

**Key Features:**
- Sidebar should be fixed on desktop, overlay on mobile
- Smooth transitions for sidebar collapse/expand
- Active route highlighting (using black/white/gray)
- Nested menu support with expand/collapse

#### Sidebar Navigation (`components/layout/sidebar.tsx`)

**Menu Structure:**
```
📊 Dashboard (home)
📝 Content Management
  ├── Banner
  ├── Our Story
  ├── The Fight
  ├── Services
  ├── United Voices
  ├── Real Winners
  └── FAQs
👥 Contacts & Forms
  ├── Contact Submissions
  └── Member Inquiries
⚙️ Settings
  ├── General Settings
  ├── Site Information
  └── Social Media Links
```

**Sidebar Design Requirements:**
- Logo at top with bBLACK background (light mode) or WHITE background (dark mode)
- Hover states with GRAY backgrounds only
- Icons from Lucide React (all black/white/gray)
- Collapsible sections with chevron indicators
- Footer with user info and logout button
- **NO COLORS - grayscale only**
- Collapsible sections with chevron indicators
- Footer with user info and logout button

---

### 3. Dashboard Home Page (`app/(dashboard)/dashboard/page.tsx`)
Content Items**: Count with trend indicator
- **Total Services**: Count with comparison
- **Total FAQs**: Count
- **Contact Submissions**: Count with trend

**Card Design (BLACK & WHITE ONLY):**
- White background with gray border (light mode)
- Black background with gray border (dark mode)
- Icon in gray circle (NO colors)
- Large number display (32px-36px font) in black/white
- Small trend indicator with up/down arrow (BLACK/GRAY only)
- Subtle hover effect (gray shadow)
- **ABSOLUTELY NO COLORS - only black, white, and gray shades**

#### Charts Section (2 columns)
1. **Line Chart**: Content growth over time (last 12 months)
2. **Bar Chart**: Content type distribution

**Chart Requirements (BLACK & WHITE):**
- Use Recharts library
- **BLACK and GRAY lines/bars only**
- White/light gray background
- Gray grid lines and axis labels
- No color coding - use different gray shades or patterns
- Interactive tooltips (gray background) tooltips
- Custom colors matching brand
- Gradient fills
- Grid lines and axis labels

#### Recent Activity Feed
Display list of recent actions from Sanity:
- Document icon (gray)
- Action description ("Updated Services", "Added FAQ")
- Timestamp (relative, e.g., "2 hours ago")
- Status badge in grayscale (Published = black, Draft = gray)
- Click to view details

#### Quick Actions Grid
4-6 action cards (BLACK & WHITE):
- Add New Service
- Create FAQ
- Manage Banner
- View Contacts
- Update Settings
- View All Content

**Design (NO COLORS):**
- Icon + text layout (black icons, white/light gray background)
- Hover effect with darker gray background
- Black borders
- Direct navigation links

**Image Handling:**
```typescript
import { urlFor } from '@/lib/sanity'

<Image 
  src={urlFor(service.image).width(200).height(150).url()} 
  alt={service.title}
  width={200}
  height={150}
/>
```

**Complete Service Form:**
- All fields from schema
- Image upload with preview
- References repeater
- Validation with Zod

---

#### United Voices & The Fight Pages

Similar CRUD operations with their specific fields.

---

#### Real Winners Page

**Special Features:**
- Icon picker component for winner icons
- Character counter for description (max 500)
- Drag-and-drop reordering (optional)

---

#### FAQ Management

**Accordion Style Editor:**
- Add/Remove FAQ items
- Question/Answer pairs
- Image upload for section

---

### Contact Submissions Page (READ-ONLY)

**Table View:**
- Display all contact form submissions
- Columns: Name, Email, Phone, Message, Date
- Actions: View Details, Delete
- No editing (forms are submissions)
- Export to CSV functionality

**GROQ Query:**
```typescript
const contacts = await client.fetch(`
  *[_type == "contact"] | order(_createdAt desc) {
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    _createdAt
  }
`)
```

---

### Settings Page

**Tabbed Interface:**

**Tab 1: Site Information**
- Site Title
- Site Description
- Logo Upload

**Tab 2: Contact Details**
- Address
- Phone
- Email

**Tab 3: Social Media**
- Add/Remove social links
- Platform, URL, Icon selection

**Save to Sanity:**
```typescript
await client.createOrReplace({
  _id: 'settings', // singleton document
  _type: 'setting',
  siteTitle: formData.siteTitle,
  siteDescription: formData.siteDescription,
  logo: formData.logo,
  // ... other fields
})
```

---

## Detailed Implementation Requirements

### 1. Initial Setup

**Breakpoints:**
- Mobile: < 640px (sidebar becomes overlay)
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Mobile Optimizations:**
- Hamburger menu for sidebar
- Stacked stats cards
- Simplified tables (card view)
- Touch-friendly buttons (min 44px height)
- Bottom navigation for key actions

---

### 9. Dark Mode Implementation

Use `next-themes` for theme switching:

**Requirements:**
- Toggle in header (sun/moon icon)
- Persist preference in localStorage
- Smooth transition between themes
- All components must support both modes
- Proper contrast ratios (WCAG AA)

**Color Scheme:**
```
Light Mode:
- Background: #ffffff, #f8fafc
- Text: #0f172a, #334155
- Border: #e2e8f0
- Accent: #2563eb

Dark Mode:
- Background: #0f172a, #1e293b
- Text: #f1f5f9, #cbd5e1
- Border: #334155
- Accent: #3b82f6
```

---

### 10. Authentication (Optional but Recommended)

Implement authentication with:
- Login page with email/password
- Protected routes
- Session management
- "Remember me" functionality
- Password reset flow
- JWT or session-based auth

**Login Page Design:**
- Centered card layout
- Logo at top
- Form with email/password
- "Remember me" checkbox
- "Forgot password?" link
- Social login buttons (optional)
- Gradient background

---

### 11. Component Specifications

#### Stat Card Component

```typescript
interface StatCardProps {
  title: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  icon: React.ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow'
}
```

**Design:**
- Card with rounded corners (8px-12px)
- Padding: 24px
- Icon in circle (48px) with background color
- Title in muted color (14px)
- Large value (28px-32px, bold)
- Trend with arrow and percentage
- Hover effect (subtle shadow lift)

#### Data Table Component

Use TanStack Table with features:
- Column sorting (click header)
- Global search
- Column filters
- Pagination controls
- Row selection (checkboxes)
- Custom cell renderers
- Loading states
- Empty states with illustration

---

### 12. Accessibility Requirements

**WCAG 2.1 AA Compliance:**
- Keyboard navigation (Tab, Enter, Escape)
- Focus indicators (visible outline)
- ARIA labels on all interactive elements
- Screen reader support
- Color contrast ratios > 4.5:1
- Alt text for images
- Semantic HTML elements
- Skip to content link

---

### 13. Performance Optimizations

**Required Optimizations:**
- Use Next.js Image component for all images
- Implement React Server Components where possible
- Code splitting (dynamic imports for heavy components)
- Lazy load charts and tables
- Debounce search inputs
- Virtualize long lists (react-window)
- Optimize font loading (next/font)
- Minimize client-side JavaScript

**Target Metrics:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

---

### 14. Error Handling & Loading States

**Implement:**
- Suspense boundaries with loading skeletons
- Error boundaries with retry buttons
- Toast notifications for actions (success/error)
- Form validation with clear error messages
- 404 page (custom design)
- 500 error page (custom design)
- Loading spinners for async operations

---

### 15. Best Practices

**Code Quality:**
- TypeScript strict mode enabled
- ESLint + Prettier configured
- Consistent naming conventions
- Reusable components
- Custom hooks for logic reuse
- Proper TypeScript interfaces/types
- Comments for complex logic

**File Organization:**
- One component per file
- Group related components in folders
- Separate business logic from UI
- Utils in lib/ folder
- Types in types/ folder

---

### 16. Testing (Optional but Recommended)

**Setup Testing:**
```bash
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

**Test Coverage:**
- Unit tests for utility functions
- Component tests for UI components
- Integration tests for pages
- E2E tests for critical flows (Playwright)

---

### 17. Deployment Checklist

**Before Production:**
- Environment variables setup (.env.production)
- Database migrations (if applicable)
- Error tracking (Sentry)
- Analytics integration (Google Analytics/Plausible)
- Performance monitoring
- Security headers configured
- HTTPS enabled
- Sitemap generated
- Robots.txt configured
- Backup strategy

**Recommended Hosting:**
- Vercel (optimal for Next.js)
- Netlify
- AWS Amplify

---

## Final Deliverables

### What You Should Have:

1. **Fully Functional Admin Dashboard** with:
   - ✅ Responsive sidebar navigation
   - ✅ Dashboard home with stats and charts
   - ✅ Content management (CRUD operations)
   - ✅ User management
   - ✅ Analytics page
   - ✅ Settings page
   - ✅ Dark/Light mode
   - ✅ Search functionality
   - ✅ Data tables with sorting/filtering
   - ✅ Toast notifications
   - ✅ Loading states
   - ✅ Error handling

2. **Production-Ready Code:**
   - Clean, maintainable TypeScript
   - Proper component structure
   - Reusable utilities
   - Type-safe API calls
   - Optimized performance

3. **Modern UI/UX:**
   - Consistent design system
   - Smooth animations
   - Intuitive navigation
   - Professional appearance
   - Mobile-first approach

---

## Color Palette (BLACK & WHITE ONLY)

**IMPORTANT: Use ONLY black, white, and grayscale colors. NO colors allowed.**

**Light Mode:**
- Background: `#ffffff` (white)
- Secondary Background: `#f8f9fa` (very light gray)
- Text Primary: `#000000` (black)
- Text Secondary: `#6c757d` (gray)
- Border: `#dee2e6` (light gray)
- Hover: `#e9ecef` (light gray)
- Active/Selected: `#212529` (dark gray)

**Dark Mode:**
- Background: `#000000` (black)
- Secondary Background: `#1a1a1a` (very dark gray)
- Text Primary: `#ffffff` (white)
- Text Secondary: `#adb5bd` (light gray)
- Border: `#343a40` (dark gray)
- Hover: `#2d3239` (dark gray)
- Active/Selected: `#f8f9fa` (light gray)

**Grayscale Shades (only these):**
- Gray 100: `#f8f9fa`
- Gray 200: `#e9ecef`
- Gray 300: `#dee2e6`
- Gray 400: `#ced4da`
- Gray 500: `#adb5bd`
- Gray 600: `#6c757d`
- Gray 700: `#495057`
- Gray 800: `#343a40`
- Gray 900: `#212529`

---

## Sample Components to Implement

### Priority Order:
1. Sidebar Component
2. Header Component
3. Stat Card Component
4. Data Table Component
5. Chart Components
6. Form Components
7. Modal/Dialog Components
8. Search Component
9. User Menu Component
10. Theme Toggle Component

---

## Additional Features (Nice to Have)

- **Drag & Drop**: File uploads, reordering lists
- **Real-time Updates**: WebSocket integration
- **Export Functionality**: CSV, PDF, Excel
- **Bulk Operations**: Multi-select actions
- **Advanced Filters**: Date ranges, multi-select
- **Command Palette**: Keyboard shortcuts (Cmd+K)
- **Activity Timeline**: Visual history of actions
- **Role-Based Access Control**: Permission system
- **Notifications Center**: In-app notification system
- **Multi-language Support**: i18n integration

---

## Resources & References

**Official Documentation:**
- Next.js: https://nextjs.org/docs
- Shadcn UI: https://ui.shadcn.com/
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

**Component Libraries:**
- Lucide Icons: https://lucide.dev/
- Recharts: https://recharts.org/
- TanStack Table: https://tanstack.com/table

**Design Inspiration:**
- Vercel Dashboard
- Linear App
- Stripe Dashboard
- Notion
- Retool Admin

---

## Getting Started Command

Use this exact prompt when starting:

**Use this exact prompt when starting:**

**"Create a modern admin dashboard for Friends United using Next.js 14 with App Router, TypeScript, Tailwind CSS, and Shadcn UI with ONLY BLACK, WHITE, and GRAYSCALE colors (NO other colors allowed). 

Backend: Use Sanity.io as the headless CMS with project ID 'e6ou6t4t' and dataset 'production'.

Sanity Schemas to integrate:
1. bannerData (title, subTitle)
2. ourstory (sections array with title, content, points, ending, subTitle, subPoints)
3. services (title, description, image, link, demands array, demandText, references array, details object)
4. theFight (title, subTitle, voices array with heading and subHeading)
5. unitedVoices (title, subTitle, description, frontimage, backimage, voices array)
6. realWinners (sectionTitle, sectionDescription, winnersList array with icon, title, description)
7. faq (image, faq array with question and answer)
8. setting (siteTitle, siteDescription, logo, address, phone, email, socialLinks array)
9. contact (firstName, lastName, email, phoneNumber, message - read-only submissions)

Features needed:
- Collapsible sidebar with navigation (Dashboard, Content Management with all schemas, Contacts, Settings)
- Dashboard home with stat cards showing Sanity document counts (total content, services, FAQs, contacts)
- CRUD pages for each Sanity schema with proper forms matching exact field structures
- Data tables using TanStack Table with sorting, filtering, pagination
- Image upload integration with Sanity's image handling
- Dark/light mode with next-themes (BLACK & WHITE ONLY - use only grayscale shades)
- Form validation with React Hook Form and Zod matching Sanity schema validation
- Toast notifications with Sonner
- Responsive design (mobile, tablet, desktop)
- Contact submissions page (read-only table view)
- Settings page with tabs for Site Info, Contact Details, and Social Media

Design requirements:
- Use ONLY black (#000000), white (#ffffff), and grayscale shades (no colors)
- Light mode: white background, black text, gray borders
- Dark mode: black background, white text, dark gray borders
- All stat cards, charts, buttons, badges in grayscale only
- Charts must use different gray shades or patterns (no colors)
- Hover states use darker/lighter gray only
- Professional, clean, modern minimalist design

Make it production-ready with proper TypeScript types, error handling, loading states, and follow Next.js best practices with Server Components where possible."**

---

## Success Criteria

Your admin dashboard is complete when:

✅ All pages are fully functional and navigable
✅ Responsive on mobile, tablet, and desktop
✅ Dark and light modes work perfectly
✅ Data tables support sorting, filtering, and pagination
✅ Forms have proper validation and error handling
✅ Loading states are implemented everywhere
✅ No TypeScript errors
✅ Clean, maintainable code structure
✅ Professional UI that matches modern design standards
✅ Fast performance (good Lighthouse scores)

---

**Good luck building your admin dashboard! 🚀**
