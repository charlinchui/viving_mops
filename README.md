# 🧹 Viving Mops

**Cleaning Up Vibe-Coded Chaos**

A modern, playful website for Viving Mops, a fictional DevOps startup that rescues applications built entirely by AI prompts and vibes.

## 🚀 Features

- **Modern Design**: Clean, responsive layout with Tailwind CSS
- **Playful Animations**: Subtle floating emojis and hover effects
- **Three Pages**: Home, About, and Contact with real content
- **CI/CD Ready**: GitHub Actions workflow for automatic deployment
- **Lightweight**: Under 20 files, optimized for performance

## 🛠️ Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **GitHub Pages** - Hosting and deployment

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Features

- **Responsive Navigation**: Mobile-friendly menu with smooth animations
- **Gradient Text**: Eye-catching hero text with CSS gradients
- **Floating Emojis**: Animated background elements (🧹, 🧽, ✨, 🔧)
- **Hover Effects**: Interactive cards with lift animations
- **Modern Typography**: Clean, readable fonts with proper hierarchy

## 📄 Pages

### Home (`/`)
- Hero section with animated emojis
- Feature cards showcasing services
- Statistics section
- Call-to-action buttons

### About (`/about`)
- Company story and mission
- Detailed list of fixes we provide
- Team information
- Process explanation

### Contact (`/contact`)
- Emergency contact options
- Contact form with urgency levels
- Service areas covered
- Response time guarantees

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages:

1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages automatically
4. Available at `https://[username].github.io/viving_mops`

## 🧹 The Story

Viving Mops rescues applications that were built with more enthusiasm than engineering knowledge. We specialize in:

- **Broken Pipelines**: Fix CI/CD workflows that were "just vibes"
- **Spaghetti Code**: Refactor AI-generated chaos into maintainable code
- **Missing Tests**: Add comprehensive test coverage
- **Documentation**: Create proper README files and architecture docs

## 📁 Project Structure

```
viving_mops/
├── .github/workflows/ci-cd.yml    # GitHub Actions workflow
├── public/favicon.svg            # Site favicon
├── src/
│   ├── layouts/Layout.astro      # Base layout with navigation
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── about.astro          # About page
│   │   └── contact.astro        # Contact page
│   └── styles/global.css        # Global styles and animations
├── astro.config.mjs             # Astro configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🎯 Ready for Extension

The project is designed to be easily extensible:

- Add new pages in `src/pages/`
- Modify the layout in `src/layouts/Layout.astro`
- Update styles in `src/styles/global.css`
- The CI/CD pipeline will automatically deploy changes

---

**Built and deployed automatically via CI/CD ✨**

*We bring hygiene to hybrid human-AI codebases.*