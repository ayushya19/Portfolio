# Ayushya Rao - Portfolio Website

A modern, responsive, and production-ready portfolio website showcasing innovative technology projects, immersive experiences, and professional achievements.

## 🌟 Features

- **Modern Design**: Contemporary gradient aesthetics with smooth animations
- **Responsive Layout**: Mobile-first approach, optimized for all screen sizes
- **Interactive Components**: Smooth transitions, hover effects, and form validation
- **Project Showcase**: Detailed project pages with problem, approach, impact, and learning
- **Optimized Performance**: Next.js with server-side rendering and image optimization
- **SEO Ready**: Comprehensive metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper contrast and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Runtime**: Node.js

## 📋 Project Structure

```
Portfolio/
├── app/
│   ├── projects/
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic project detail pages
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   ├── not-found.tsx             # 404 page
│   └── globals.css               # Global styles & animations
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── Hero.tsx                  # Hero section
│   ├── Projects.tsx              # Projects grid
│   ├── ProjectCard.tsx           # Individual project card
│   ├── About.tsx                 # About & skills section
│   ├── Contact.tsx               # Contact form
│   └── Footer.tsx                # Footer navigation
├── data/
│   └── portfolio.ts              # Portfolio data & types
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository** (if using Git)
```bash
git clone <repository-url>
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the site in action.

### Development

The site will automatically reload when you make changes to files.

- Edit components in `components/` folder
- Update portfolio data in `data/portfolio.ts`
- Customize styles in `tailwind.config.js` and `app/globals.css`

## 📦 Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build ready for deployment.

## 📝 Content Structure

### Portfolio Data

All portfolio content is stored in `data/portfolio.ts`:

```typescript
{
  id: string;              // Unique identifier
  title: string;           // Project title
  role: string;            // Your role
  description: string;     // Short description
  problem: string;         // Problem statement
  approach: string;        // Solution approach
  contribution: string;    // Your specific contributions
  impact: string;          // Results and impact
  learning: string;        // Key learnings
  technologies: string[];  // Tech stack used
  metrics?: object[];      // Optional key metrics
  color: string;           // Tailwind gradient class
}
```

## 🎨 Customization

### Colors
Edit the custom theme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* purple palette */ },
  accent: { /* blue palette */ }
}
```

### Typography
- Default fonts are system-level safe fonts
- Add custom Google Fonts: Update `tailwind.config.js` theme.fontFamily

### Animations
- Customize animation speeds and keyframes in `app/globals.css`
- Modify Tailwind animation configs in `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Build and host in AWS
- **Docker**: Create a Dockerfile for containerization
- **Self-hosted**: Use `npm run build` and `npm start`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components are tested and optimized for each breakpoint.

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 📊 Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices)
- Core Web Vitals optimized
- Image optimization
- Code splitting
- CSS-in-JS elimination

## 🔒 Security

- Content Security Policy headers
- XSS protection
- SQL injection prevention (no database involved)
- Environment variable handling for sensitive data

## 🐛 Troubleshooting

**Port already in use:**
```bash
npm run dev -- -p 3001
```

**Dependencies issue:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run type-check  # Check TypeScript errors
npm run lint        # Check ESLint issues
```

## 📈 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Dark/Light mode toggle
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] CMS integration for dynamic content
- [ ] Multi-language support
- [ ] Social sharing features
- [ ] Search functionality

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

**Ayushya Rao** - Sr. Product Engineer

With 4+ years of experience in immersive technology, I specialize in creating innovative solutions that bridge the gap between complex technology and user-centric design.

## 🔗 Quick Links

- Portfolio: [ayushyarao.com](https://ayushyarao.com)
- LinkedIn: [linkedin.com/in/ayushyarao](https://linkedin.com/in/ayushyarao)
- Email: contact@ayushyarao.com

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

**Built with ❤️ using Next.js, React, Tailwind CSS, and TypeScript**
