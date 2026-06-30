# 🚀 AI Engineer Portfolio - Ermiyas Zewdu

A **world-class, production-ready** personal portfolio website for an Intelligent Data & AI Engineer. Built with modern web technologies and designed to feel like a premium tech product landing page.

![Portfolio Preview](preview.png)

## ✨ Features

### 🎨 Premium Design
- **Dark Mode First**: Elite dark theme with optional light mode
- **Glassmorphism UI**: Modern glass panels with blur effects
- **Gradient Accents**: Beautiful blue, purple, and cyan gradients
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Mobile-first, looks perfect on all devices

### 🧩 Sections

1. **Hero Section**
   - Animated background with floating gradients
   - Auto-typing role animation (AI Engineer, Data Scientist, ML Developer)
   - Profile badge with glow effect
   - CTA buttons and social links
   - Smooth scroll indicator

2. **About Section**
   - Story-driven narrative
   - Highlight cards with icons
   - Professional background
   - Passion for AI and data

3. **Skills Dashboard**
   - Categorized skill sets (Programming, AI/ML, Data Tools, Platforms)
   - Animated progress bars
   - Color-coded categories
   - Interactive hover effects

4. **Experience Timeline**
   - Professional work history
   - IT Support role at Tewos Technology
   - Responsibilities with icons
   - Technologies and skills used

5. **Education Timeline**
   - Intelligent Data & AI Engineering (Qiyas Program)
   - Computer Science degree
   - Vertical timeline design
   - Alternating layout

6. **Projects Showcase**
   - 6 ML/AI projects presented as product features
   - Problem-Solution structure
   - Tech stack badges
   - GitHub and demo links
   - Color-coded categories

7. **GitHub Dashboard**
   - Repository stats
   - Most used languages chart
   - Featured repositories
   - Contribution metrics

8. **Certifications**
   - Professional credentials
   - Issuer and date information
   - Badge icons
   - Verified checkmarks

9. **Learning Hub (Blog)**
   - Placeholder for future articles
   - Category tags
   - Read time estimates
   - Coming soon notice

10. **Contact Section**
    - Working contact form with validation
    - EmailJS integration ready
    - Contact information cards
    - Social media links
    - Availability status

11. **Footer**
    - Quick links
    - Social media
    - Copyright information

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: EmailJS
- **Font**: Inter & Plus Jakarta Sans

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/ERMIYASZEWDU/ermiyas-portfolio.git
cd ermiyas-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## ⚙️ Configuration

### EmailJS Setup (Optional)
To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `src/components/Contact.tsx`:
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_USER_ID'
);
```

### Customization

#### Update Personal Information
Edit these files:
- `src/components/Hero.tsx` - Name, roles, social links
- `src/components/About.tsx` - Personal story
- `src/components/Experience.tsx` - Work history
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact details

#### Color Scheme
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: { /* Your color palette */ },
  dark: { /* Dark mode colors */ }
}
```

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod --dir=dist
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- Focus indicators
- Color contrast compliance

## 🎯 Performance

- ⚡ Fast loading with Vite
- 🎨 Optimized animations
- 📦 Code splitting
- 🖼️ Lazy loading ready
- 📊 Lighthouse score optimized

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Ermiyas Zewdu**
- GitHub: [@ERMIYASZEWDU](https://github.com/ERMIYASZEWDU)
- LinkedIn: [Ermiyas Zewdu](https://www.linkedin.com/in/ermiyas2)
- Email: ermiyaszewdu266@gmail.com

## 🙏 Acknowledgments

- Design inspiration from top tech portfolios
- Icons from Lucide React
- Fonts from Google Fonts
- Built with React + TypeScript + Vite

---

**Built with ❤️ by Ermiyas Zewdu**

*Turning data into intelligent systems.*
