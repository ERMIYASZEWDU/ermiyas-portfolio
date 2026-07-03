# 🎨 Customization Guide

Make this portfolio **truly yours** by following this comprehensive customization guide.

## 🎯 Quick Customization Checklist

- [ ] Update personal information
- [ ] Replace project details
- [ ] Update social media links
- [ ] Change color scheme (optional)
- [ ] Add your resume PDF
- [ ] Configure contact form
- [ ] Add your GitHub stats
- [ ] Update meta tags for SEO

---

## 1. Personal Information

### Hero Section (`src/components/Hero.tsx`)

**Update your name:**
```typescript
<h1 className="text-6xl md:text-8xl font-bold mb-6">
  Your Name <span className="gradient-text">Here</span>
</h1>
```

**Update roles:**
```typescript
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3'];
```

**Update tagline:**
```typescript
<p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
  Your unique value proposition here.
</p>
```

**Update social links:**
```typescript
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="mailto:your.email@example.com" ...>
```

---

### About Section (`src/components/About.tsx`)

Replace the paragraph text with your own story:
```typescript
<p className="text-lg text-gray-300 leading-relaxed">
  Your background and journey...
</p>
```

Update highlight cards with your strengths.

---

### Skills (`src/components/Skills.tsx`)

**Add/Remove/Modify skills:**
```typescript
const skillCategories = [
  {
    category: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 85 }, // 0-100
    ],
  },
];
```

---

### Experience (`src/components/Experience.tsx`)

**Update work history:**
```typescript
<h3>Your Job Title</h3>
<p>Company Name</p>
<p>Start Year - End Year (or Present)</p>
```

**Add more experiences:**
Duplicate the experience card div and modify the content.

---

### Projects (`src/components/Projects.tsx`)

**This is crucial!** Replace with your actual projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    icon: <YourIcon className="w-6 h-6" />,
    problem: 'What problem does it solve?',
    solution: 'How did you solve it?',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/you/project',
    demo: 'https://your-demo-link.com',
    color: 'from-blue-500 to-cyan-500',
  },
];
```

**Color options for projects:**
- `from-blue-500 to-cyan-500`
- `from-purple-500 to-pink-500`
- `from-green-500 to-emerald-500`
- `from-orange-500 to-red-500`
- `from-yellow-500 to-orange-500`
- `from-indigo-500 to-purple-500`

---

### Contact Section (`src/components/Contact.tsx`)

**Update contact info:**
```typescript
const contactInfo = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  {
    label: 'Phone',
    value: '+1 234 567 8900',
    link: 'tel:+12345678900',
  },
  {
    label: 'Location',
    value: 'Your City, Country',
  },
];
```

---

## 2. Color Scheme

### Option A: Use Preset Colors

Edit `tailwind.config.js`:

**Blue/Cyan (Default)**
```javascript
primary: {
  500: '#0ea5e9',
  600: '#0284c7',
}
```

**Purple/Pink**
```javascript
primary: {
  500: '#a855f7',
  600: '#9333ea',
}
```

**Green/Emerald**
```javascript
primary: {
  500: '#10b981',
  600: '#059669',
}
```

### Option B: Custom Colors

Use a color generator:
1. Visit [uicolors.app](https://uicolors.app/create)
2. Pick your base color
3. Copy the generated palette
4. Replace in `tailwind.config.js`

---

## 3. Typography

### Change Fonts

1. **Pick fonts from Google Fonts:**
   - Visit [fonts.google.com](https://fonts.google.com)
   - Choose 2 fonts (one for headings, one for body)

2. **Update `src/index.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@...&display=swap');
```

3. **Update `tailwind.config.js`:**
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  heading: ['Your Heading Font', 'sans-serif'],
}
```

---

## 4. Add Your Resume

1. **Place your PDF:**
   - Save as `resume.pdf`
   - Put in `public/resume.pdf`

2. **Verify the link in Hero.tsx:**
```typescript
<a href="/resume.pdf" download>
  Download Resume
</a>
```

---

## 5. GitHub Stats Integration

Want real GitHub stats? Consider using:

### Option 1: GitHub API

```typescript
useEffect(() => {
  fetch('https://api.github.com/users/yourusername')
    .then(res => res.json())
    .then(data => {
      // Update stats with data.public_repos, etc.
    });
}, []);
```

### Option 2: GitHub Readme Stats

Add as an image:
```html
<img src="https://github-readme-stats.vercel.app/api?username=yourusername" />
```

---

## 6. EmailJS Configuration

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Create a service** (Gmail, Outlook, etc.)

3. **Create a template** with these variables:
   - `{{name}}`
   - `{{email}}`
   - `{{message}}`

4. **Get your credentials:**
   - Service ID
   - Template ID
   - User ID

5. **Update `src/components/Contact.tsx`:**
```typescript
await emailjs.send(
  'service_xxxxxxx',  // Your Service ID
  'template_xxxxxxx', // Your Template ID
  formData,
  'user_xxxxxxxxxxxx' // Your User ID
);
```

---

## 7. SEO Optimization

### Update `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Your Name - AI Engineer & Data Scientist</title>
  <meta name="title" content="Your Name - AI Engineer" />
  <meta name="description" content="Your compelling description" />
  <meta name="keywords" content="AI, Machine Learning, Data Science, Your Name" />
  <meta name="author" content="Your Name" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yoursite.com/" />
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="https://yoursite.com/preview.png" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yoursite.com/" />
  <meta property="twitter:title" content="Your Name - Portfolio" />
  <meta property="twitter:description" content="Your description" />
  <meta property="twitter:image" content="https://yoursite.com/preview.png" />
</head>
```

---

## 8. Add Analytics (Optional)

### Google Analytics

1. Get your tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 9. Animations Customization

### Adjust Animation Speed

In component files, modify `transition` values:

**Slower:**
```typescript
transition={{ duration: 1.2, delay: 0.4 }}
```

**Faster:**
```typescript
transition={{ duration: 0.3, delay: 0.1 }}
```

### Disable Animations

Remove or comment out `motion` components:
```typescript
// From:
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// To:
<div>
```

---

## 10. Adding New Sections

1. **Create component:** `src/components/NewSection.tsx`
2. **Import in App.tsx**
3. **Add between existing sections**

**Template:**
```typescript
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const NewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="new-section" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Your content */}
        </motion.div>
      </div>
    </section>
  );
};

export default NewSection;
```

---

## 🎓 Pro Tips

1. **Keep it updated:** Regularly add new projects and skills
2. **Quality over quantity:** Show your best 4-6 projects
3. **Real data:** Use actual numbers and metrics
4. **Professional tone:** Keep content polished and error-free
5. **Fast loading:** Optimize images and assets
6. **Test thoroughly:** Check on mobile, tablet, desktop
7. **Get feedback:** Ask peers to review before going live

---

## 📞 Need Help?

- Check component comments
- Refer to Framer Motion docs
- Review Tailwind CSS docs
- Open an issue on GitHub

**Happy Customizing! 🎨**
