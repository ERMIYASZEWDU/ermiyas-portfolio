# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Production Deploy**
```bash
vercel --prod
```

**Or use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Vite config
4. Deploy! 🎉

---

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod --dir=dist
```

**Or use Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Done! ✨

---

### Option 3: GitHub Pages

1. **Install gh-pages**
```bash
npm install -D gh-pages
```

2. **Add to package.json scripts:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.ts:**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/ai-portfolio/', // Your repo name
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select `gh-pages` branch
   - Save

---

### Option 4: Render

1. Go to [render.com](https://render.com)
2. Create new "Static Site"
3. Connect your GitHub repository
4. Build Command: `npm run build`
5. Publish Directory: `dist`
6. Deploy! 🚀

---

### Option 5: Firebase Hosting

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login**
```bash
firebase login
```

3. **Initialize**
```bash
firebase init hosting
```

Configuration:
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub integration: `Optional`

4. **Build & Deploy**
```bash
npm run build
firebase deploy
```

---

## Environment Variables

If you're using EmailJS or other services:

1. **Create `.env` file:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

2. **Update Contact.tsx:**
```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;
```

3. **Add environment variables in your hosting platform:**
   - Vercel: Settings > Environment Variables
   - Netlify: Site settings > Environment variables
   - Render: Environment tab

---

## Custom Domain

### Vercel
1. Go to project settings
2. Domains tab
3. Add your domain
4. Update DNS records

### Netlify
1. Domain settings
2. Add custom domain
3. Update DNS records

### GitHub Pages
1. Create `CNAME` file in `public/` folder
2. Add your domain: `yourdomain.com`
3. Update DNS records:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`

---

## Performance Optimization

Before deploying:

1. **Build for production**
```bash
npm run build
```

2. **Check bundle size**
```bash
npm run preview
```

3. **Optimize images** (if you add any)
   - Use WebP format
   - Compress with tools like TinyPNG
   - Use lazy loading

4. **Enable gzip/brotli compression**
   - Most hosting platforms enable this by default
   - Check your platform documentation

---

## Post-Deployment Checklist

- [ ] Test all links work
- [ ] Test contact form (if EmailJS configured)
- [ ] Check mobile responsiveness
- [ ] Verify all sections load correctly
- [ ] Test navigation menu
- [ ] Check console for errors
- [ ] Test on multiple browsers
- [ ] Run Lighthouse audit
- [ ] Update README with live link
- [ ] Share on LinkedIn! 🎉

---

## Troubleshooting

**Build fails:**
- Check Node.js version (should be 18+)
- Delete `node_modules` and run `npm install`
- Check for TypeScript errors: `npm run build`

**Blank page after deploy:**
- Check base URL in `vite.config.ts`
- Check browser console for errors
- Verify build output in `dist` folder

**Assets not loading:**
- Ensure base path is correct
- Check if files are in `public` folder
- Verify relative paths

---

## Need Help?

- Check Vite docs: [vitejs.dev](https://vitejs.dev)
- Platform-specific docs
- Open an issue on GitHub

**Happy Deploying! 🚀**
