# Deployment Guide

This guide covers deploying your Ayushya Rao portfolio website to various platforms.

## Pre-Deployment Checklist

Before deploying, ensure:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build

# Verify build completes without errors
npm start
```

---

## Option 1: Vercel (Recommended) ⭐

Vercel is the creator of Next.js and offers the best integration.

### Steps:

1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Connect your repository**
   - Click "Import Project"
   - Select your Git repository
   - Vercel auto-detects Next.js

3. **Configure environment variables** (if needed)
   - Go to Settings → Environment Variables
   - Add any `.env.local` variables
   - Keep sensitive data in Vercel, not in code

4. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys
   - Get a live URL instantly

5. **Custom domain** (optional)
   - Settings → Domains
   - Add your custom domain
   - Follow DNS configuration steps

### Benefits:
- Instant deployment with Git push
- Automatic HTTPS
- Global CDN
- Zero-config deployment
- Free tier available

---

## Option 2: Netlify

### Steps:

1. **Create account** at [netlify.com](https://netlify.com)

2. **Connect Git repository**
   - Click "New site from Git"
   - Select your repository
   - Authorize Netlify

3. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Set environment variables if needed

4. **Deploy**
   - Netlify automatically deploys on Git push
   - Get a live URL and SSL certificate

### Benefits:
- Simple Git-based deployment
- Great free tier
- Good analytics and monitoring

---

## Option 3: AWS Amplify

### Steps:

1. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
amplify configure
```

2. **Initialize Amplify**
```bash
amplify init
```

3. **Add hosting**
```bash
amplify add hosting
# Select Amplify Console
```

4. **Deploy**
```bash
amplify publish
```

### Benefits:
- Full AWS integration
- Scalable infrastructure
- Good for advanced use cases

---

## Option 4: Docker + Self-Hosted

### Dockerfile

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build Next.js
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
```

### Build and run:

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -p 3000:3000 portfolio:latest

# Or use Docker Compose
docker-compose up -d
```

### Docker Compose Example:

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

---

## Option 5: Static Export (If needed)

For static hosting (GitHub Pages, S3, etc.):

1. **Update `next.config.js`**:
```javascript
const nextConfig = {
  output: 'export',
  // ... other config
};
```

2. **Build static site**:
```bash
npm run build
# Creates ./out directory
```

3. **Deploy `out` folder to static host**

**Note**: This disables server features like dynamic routing.

---

## Post-Deployment

### 1. Test Live Site
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms are functional
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] No console errors

### 2. Performance Check
```bash
# Test Lighthouse score
# DevTools → Lighthouse → Generate report

# Aim for:
# Performance: 90+
# Accessibility: 90+
# Best Practices: 90+
# SEO: 90+
```

### 3. SEO Verification
- [ ] Meta tags correct
- [ ] Open Graph tags appear
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured
- [ ] Google Search Console setup
- [ ] Analytics configured

### 4. Security
- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Security headers configured
- [ ] No sensitive data in code
- [ ] Environment variables secure

### 5. Monitoring
- [ ] Setup uptime monitoring
- [ ] Configure alerts
- [ ] Monitor error logs
- [ ] Track performance metrics

---

## Maintenance

### Regular Updates

**Monthly**:
```bash
npm update
npm audit
npm audit fix
```

**Quarterly**:
```bash
npm outdated  # Check for major updates
# Review changelogs before updating
npm install @package@latest
```

### Content Updates

Edit `data/portfolio.ts` to:
- Add new projects
- Update project details
- Modify skills and technologies
- Change contact information

Changes automatically deploy on Git push (if using Git-based platform).

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Pages Not Found
- Check dynamic route files: `app/projects/[id]/page.tsx`
- Verify data in `data/portfolio.ts`
- Test locally: `npm run dev`

### Performance Issues
```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')()
# export default withBundleAnalyzer(nextConfig)

npm run build
```

### Images Not Loading
- Check relative paths
- Use Next.js Image component
- Verify images in `public/` folder

---

## Environment Variables

### Production (.env.local)
```
NEXT_PUBLIC_SITE_NAME=Ayushya Rao Portfolio
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

### Keep Secure
- Never commit `.env.local`
- Use platform secrets for sensitive data
- Rotate secrets periodically

---

## Domain Setup

### For Vercel/Netlify
1. Go to your registrar (GoDaddy, Namecheap, etc.)
2. Update nameservers to Vercel/Netlify
3. Or add CNAME record pointing to platform

### Custom Domain Example
- Point `ayushyarao.com` to your deployment
- Auto-HTTPS certificate issued
- Redirects from www and non-www

---

## Performance Optimization

### Before Deployment

1. **Minimize images**
   - Use WebP format
   - Compress with TinyPNG, ImageOptim
   - Use Next.js Image optimization

2. **Code splitting**
   - Next.js does this automatically
   - Verify with bundle analyzer

3. **Caching**
   - Static assets cached long-term
   - ISR for frequent updates

### Monitor After Deployment

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev

2. **WebPageTest**
   - https://www.webpagetest.org

3. **Lighthouse CI** (for CI/CD)
   - Automated performance testing
   - Fails builds if score drops

---

## CI/CD Pipeline Example (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run build
      
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## Questions?

For Next.js specific deployment help:
- https://nextjs.org/docs/deployment

For platform specific help:
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **AWS Amplify**: https://docs.amplify.aws

---

**Happy deploying! 🚀**
