# Portfolio Website - Layout Map & Documentation

## PDF-to-Web Mapping

This document details how sections from the original PDF portfolio have been translated to the modern web application.

### 1. Header/Navigation Section

**PDF Source**: Cover page header with name and title

**Web Implementation**:
- **Component**: `components/Header.tsx`
- **Features**:
  - Fixed sticky navigation with gradient background
  - Mobile hamburger menu for responsive design
  - Smooth scrolling to sections
  - Animated logo with gradient text

**Routes**:
- Home (`/`)
- Projects (`/#projects`)
- About (`/#about`)
- Contact (`/#contact`)

---

### 2. Hero/Introduction Section

**PDF Source**: "Ayushya Rao - Sr. Product Engineer" with introduction paragraph

**Web Implementation**:
- **Component**: `components/Hero.tsx`
- **File**: `app/page.tsx`
- **Features**:
  - Full-screen hero section with animated gradients
  - Professional title and role display
  - Introduction text matching PDF content
  - Call-to-action buttons (View Work, Get in Touch)
  - Scroll indicator animation
  - Animated blob backgrounds

**Data Source**: `data/portfolio.ts` - `portfolioData.introduction`

---

### 3. Projects Section

**PDF Source**: Four detailed projects with problem-solution-impact structure

**Web Implementation**:
- **Component**: `components/Projects.tsx` (grid layout)
- **Component**: `components/ProjectCard.tsx` (individual cards)
- **Pages**: `app/projects/[id]/page.tsx` (detailed project pages)
- **File**: `data/portfolio.ts` (project data)

**Projects Included**:

#### 3.1 Mahavitharan
- **ID**: `mahavitharan`
- **URL**: `/projects/mahavitharan`
- **Sections on Detail Page**:
  - Problem: Safety training challenge
  - Approach: VR + motion capture + haptics
  - Contribution: Project leadership & software development
  - Impact: 41% injury risk reduction
  - Learning: Leadership and innovation skills
  - Technologies: VR, Motion Capture, Haptic Feedback, Unity, C#
  - Key Metrics: 41% injury reduction, 15+ team members

#### 3.2 Root-based 3D Reconstruction
- **ID**: `3d-reconstruction`
- **URL**: `/projects/3d-reconstruction`
- **Focus**: Human pose estimation research
- **Key Achievement**: Research paper publication
- **Technologies**: Python, TensorFlow, CNN, MocapNet, Blender

#### 3.3 Manav
- **ID**: `manav`
- **URL**: `/projects/manav`
- **Focus**: Metahuman lip sync and emotional intelligence
- **Key Achievement**: 60s → <1s response time reduction
- **Technologies**: NLP, ASR, Blend Shapes, AI/ML

#### 3.4 Schrödinger's Cat
- **ID**: `schrodingers-cat`
- **URL**: `/projects/schrodingers-cat`
- **Focus**: Quantum computing visualization and education
- **Key Achievement**: 200+ students educated, 90% positive feedback
- **Technologies**: IBM Qiskit, Quantum Circuits, Python

**Card Features**:
- Project role badge
- Short description
- Technology tags (first 3 visible, +N more indicator)
- Key metrics display
- Hover animation and gradient overlay
- Link to detailed project page

---

### 4. About & Skills Section

**PDF Source**: Scattered throughout project descriptions and introduction

**Web Implementation**:
- **Component**: `components/About.tsx`
- **Features**:
  - Four highlight cards (Innovation, Leadership, Impact, Growth)
  - Comprehensive technical skills organized by category
  - Visual badges and icons
  - Responsive grid layout

**Skills Categories**:
- Immersive Tech: VR/XR, Motion Capture, Haptic Feedback, 3D Modeling
- AI & Machine Learning: Computer Vision, Neural Networks, NLP, Pose Estimation
- Software Development: C#, Python, C++, TypeScript/JavaScript
- Quantum Computing: IBM Qiskit, Quantum Circuits, Quantum Algorithms
- Tools & Platforms: Unity, Blender, TensorFlow, AWS

---

### 5. Contact Section

**PDF Source**: Email "KOLLURI.RAO@STUDENT.TUGRAZ.AT" and contact information

**Web Implementation**:
- **Component**: `components/Contact.tsx`
- **Features**:
  - Contact information display (email)
  - Functional contact form with validation
  - Social media links (LinkedIn, GitHub)
  - Real-time form submission feedback
  - Success message confirmation

**Form Fields**:
- Name (required)
- Email (required, validated)
- Message (required)
- Submit button with loading state

---

### 6. Footer Section

**PDF Source**: Contact details and location information

**Web Implementation**:
- **Component**: `components/Footer.tsx`
- **Features**:
  - Brand/name section
  - Quick navigation links
  - Call-to-action for contact
  - Social media links
  - Copyright information
  - Technology stack attribution

---

## Component Architecture

### Component Hierarchy

```
Layout (app/layout.tsx)
├── Header
├── Main
│   ├── Hero (page.tsx)
│   ├── Projects (page.tsx)
│   │   └── ProjectCard (mapped from portfolio data)
│   ├── About (page.tsx)
│   ├── Contact (page.tsx)
│   └── [Dynamic Routes]
│       └── ProjectDetail (projects/[id]/page.tsx)
└── Footer
```

### Data Flow

```
data/portfolio.ts
├── portfolioData (main portfolio object)
│   ├── name, title, introduction
│   └── projects[] (array of 4 projects)
└── studyEntry (Industrial error processing study)

Components consume data via:
- Direct imports from data/portfolio.ts
- Props drilling where necessary
- URL params for dynamic routes
```

---

## Responsive Design

### Breakpoints

- **Mobile**: 320px - 640px
  - Single column layouts
  - Touch-friendly spacing
  - Hamburger navigation menu
  - Simplified header

- **Tablet**: 641px - 1024px
  - Two-column grids
  - Balanced spacing
  - Standard navigation
  - Optimized typography

- **Desktop**: 1025px+
  - Multi-column grids
  - Full navigation visible
  - Hover animations enabled
  - Maximum content width: 1440px

### Mobile-First Approach

All styles start with mobile defaults, with media queries for larger screens:
```css
/* Mobile default */
.grid { grid-template-columns: 1fr; }

/* Tablet and up */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## Design System

### Color Palette

**Primary Colors** (Purples):
- `primary-600`: `#9333ea`
- `primary-700`: `#7e22ce`
- `primary-400`: `#c084fc`

**Accent Colors** (Blues):
- `accent-600`: `#0284c7`
- `accent-500`: `#0ea5e9`

**Supporting Colors**:
- Background: `#0f172a` (slate-950)
- Cards: `#1e293b` (slate-800)
- Text: `#e2e8f0` (slate-100)
- Muted: `#64748b` (slate-500)

### Typography

- **Headings (H1-H3)**: Bold (weight: 700)
- **Subheadings**: Semibold (weight: 600)
- **Body Text**: Regular (weight: 400)
- **Accent Text**: Gradient text using `bg-clip-text`

### Spacing System

Based on Tailwind's spacing scale:
- Sections: 80px (py-20)
- Cards: 24px (p-6)
- Elements: 16px (p-4)

### Animations

- **Fade-in**: 0.5s ease-in-out
- **Slide-up**: 0.6s ease-out
- **Glow**: 2s ease-in-out infinite
- **Bounce**: Default scroll indicator
- **Float**: Custom blob animation (7s)

---

## Study Project Integration

**From**: `StudyPoster.png` - "Error processing in Industrial environment"

**Integration Point**: 
- Referenced in `data/portfolio.ts` as `studyEntry`
- Can be added as a fifth project or separate study section
- Currently available for future expansion

**Structure**:
```typescript
{
  id: 'industrial-error-processing',
  title: 'Error Processing in Industrial Environment',
  role: 'Research/Study Project',
  description: 'VR-based Industrial Safety and Error Processing',
  technologies: ['VR', 'Industrial Design', 'HCI']
}
```

---

## Performance Optimizations

### Image Handling
- Next.js Image component (when images are added)
- Responsive image sizing
- Lazy loading with placeholder
- WebP format support

### Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting via Next.js
- Tree-shaking for unused Lucide icons

### CSS Optimization
- Tailwind CSS utility-first (no bloat)
- PurgeCSS removes unused styles in production
- CSS-in-JS eliminated for better performance

### Runtime Optimization
- Server-side rendering (default in App Router)
- Static generation for static pages
- Incremental static regeneration (ISR) option
- No external font loading (system fonts)

---

## SEO & Meta

### Open Graph Tags
- Title: "Ayushya Rao | Sr. Product Engineer"
- Description: Portfolio with project details
- Type: website
- Image: (Can be configured)

### Meta Robots
- `index, follow` for home page
- Structured for search engines

### Sitemap
Auto-generated by Next.js (can be enhanced with `next-sitemap`)

---

## Future Enhancements

1. **Blog Section**: MDX-based articles about projects
2. **Case Studies**: Extended project documentation
3. **Dark/Light Mode**: User preference toggle
4. **Internationalization**: Multi-language support
5. **Analytics**: Google Analytics integration
6. **Newsletter**: Email subscription feature
7. **Search**: Full-text search across content
8. **Comments**: Project feedback system

---

## Deployment Checklist

- [ ] Environment variables configured (.env.local)
- [ ] Build passes without errors: `npm run build`
- [ ] Type-checking passes: `npm run type-check`
- [ ] Linting passes: `npm run lint`
- [ ] Contact form backend integrated (optional)
- [ ] Analytics configured (optional)
- [ ] Social media links updated
- [ ] Meta tags customized
- [ ] Images optimized
- [ ] Lighthouse audit passed (90+)
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified

---

## Maintenance Notes

### Regular Updates
- Update dependency versions quarterly
- Review and update project descriptions
- Add new projects to `data/portfolio.ts`
- Monitor performance metrics

### Content Updates
- Edit project details in `data/portfolio.ts`
- Update skills in `components/About.tsx`
- Modify colors in `tailwind.config.js`
- Add new projects following the established structure

### Technical Debt
- Monitor Next.js for latest features
- Keep TypeScript version current
- Audit security vulnerabilities
- Optimize for Core Web Vitals

---

**Last Updated**: May 27, 2026
**Status**: Production-Ready
