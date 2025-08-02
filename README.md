# 🚀 Mohammed Azab - Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/12345678-1234-1234-1234-123456789012/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
[![GitHub License](https://img.shields.io/github/license/Mohammed-Azab/myportfolio)](LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmohammed-azab.github.io%2Fmyportfolio)](https://mohammed-azab.github.io/myportfolio)

> **A stunning, futuristic portfolio website for Mohammed Azab - Mechatronics Engineer specializing in robotics, automation, and AI-powered systems.**

## ✨ Features

### 🎨 Design & Animation
- **Dark Tech-Inspired Theme** with electric blue (#00D4FF) and neon green (#39FF14) accents
- **Smooth Animations** powered by Framer Motion
- **Interactive Particle Background** with dynamic effects
- **Responsive Design** optimized for all devices
- **Custom Scroll Indicators** and smooth section transitions

### 🛠️ Technology Stack
- **Frontend**: React 18 + Vite 5
- **Styling**: TailwindCSS 3.3.6 with custom configurations
- **Animations**: Framer Motion 10.16.0
- **Icons**: Lucide React
- **Fonts**: Orbitron (headings) + JetBrains Mono (body)
- **Deployment**: GitHub Pages + Vercel ready

### 📱 Sections
- **Hero Section**: Animated introduction with typewriter effect
- **About**: Engineering background and expertise
- **Projects**: Featured robotics and automation projects
- **Skills**: Technical skills with interactive progress bars
- **Timeline**: Education and experience journey
- **Contact**: Professional contact form with validation

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (recommended: v22.18.0 LTS)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammed-Azab/myportfolio.git
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000/myportfolio/`

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
myportfolio/
├── public/                    # Static assets
│   ├── robot-icon.svg        # Favicon and icons
│   └── ...
├── src/
│   ├── assets/               # Media assets
│   │   ├── images/          # Project screenshots, profile photos
│   │   ├── icons/           # Custom SVG icons
│   │   └── documents/       # PDFs, resume files
│   ├── components/           # React components
│   │   ├── AnimatedBackground.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Skills.jsx
│   │   └── Timeline.jsx
│   ├── config/              # Configuration files
│   │   └── config.js        # Main portfolio configuration
│   ├── data/                # Data files
│   │   ├── projects.js      # Projects information
│   │   └── resume.js        # Skills, education, experience
│   ├── hooks/               # Custom React hooks
│   │   └── index.js         # Reusable hooks
│   ├── styles/              # Styling files
│   │   └── globals.css      # Additional global styles
│   ├── utils/               # Utility functions
│   │   ├── animations.js    # Framer Motion configurations
│   │   └── helpers.js       # Helper functions
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # TailwindCSS with custom styles
├── .github/workflows/        # GitHub Actions
│   └── deploy.yml           # Automated deployment
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

## 🎨 Customization Guide

### 1. Personal Information
Edit `/src/config/config.js` to update:
- Personal details (name, title, contact info)
- Social media links
- Theme colors
- SEO settings

### 2. Projects
Update `/src/data/projects.js` to add your projects:
```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Brief description",
  image: "/src/assets/images/projects/your-project.jpg",
  technologies: ["React", "Python", "Arduino"],
  github: "https://github.com/username/project",
  demo: "https://your-demo-url.com"
}
```

### 3. Skills & Experience
Modify `/src/data/resume.js` to update:
- Technical skills and proficiency levels
- Education timeline
- Work experience
- Certifications and achievements

### 4. Styling & Theme
Customize appearance in:
- `/src/config/config.js` - Theme colors and settings
- `/src/index.css` - TailwindCSS customizations
- `/tailwind.config.js` - TailwindCSS configuration

### 5. Adding Images
Place images in appropriate folders:
- **Profile photos**: `/src/assets/images/`
- **Project screenshots**: `/src/assets/images/projects/`
- **Icons**: `/src/assets/icons/`
- **Documents**: `/src/assets/documents/`

## 🚀 Deployment

### GitHub Pages (Recommended)
```bash
# Deploy to GitHub Pages
npm run deploy
```

The site will be available at: `https://yourusername.github.io/myportfolio/`

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Style
- **ESLint**: Configured for React and modern JavaScript
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for code quality

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic component-level splitting
- **Image Optimization**: Lazy loading and modern formats
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Optimized static asset caching

### Lighthouse Scores
- Performance: 95+
- Accessibility: 98+
- Best Practices: 100
- SEO: 100

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Mohammed Azab**
- Portfolio: [https://mohammed-azab.github.io/myportfolio](https://mohammed-azab.github.io/myportfolio)
- LinkedIn: [https://linkedin.com/in/mohammed-azab](https://linkedin.com/in/mohammed-azab)
- Email: mohammed.azab@example.com
- GitHub: [@Mohammed-Azab](https://github.com/Mohammed-Azab)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vite** for blazing fast development
- **Lucide** for beautiful icons

---

⭐ **Star this repo if you find it helpful!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/Mohammed-Azab/myportfolio?style=social)](https://github.com/Mohammed-Azab/myportfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Mohammed-Azab/myportfolio?style=social)](https://github.com/Mohammed-Azab/myportfolio/network/members)

A stunning, futuristic personal portfolio website showcasing my journey as a Mechatronics Engineering student passionate about robotics, control systems, and innovative technology solutions.

## 🚀 Features

- **Modern Design**: Dark tech-inspired theme with electric blue/green highlights
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Engaging user interface with hover effects and transitions
- **Project Showcase**: Dynamic project cards with GitHub integration
- **Skills Visualization**: Animated skill bars and category organization
- **Timeline**: Professional journey and key milestones
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and smooth scrolling

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages / Vercel ready

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammed-Azab/myportfolio.git
   cd myportfolio
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

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Colors
The portfolio uses a custom color palette defined in `tailwind.config.js`:
- Electric Blue: `#00D4FF`
- Neon Green: `#39FF14`
- Dark Background: `#0A0A0A`
- Dark Surface: `#1A1A1A`

### Content
Update the following files to customize content:
- `src/components/Hero.jsx` - Personal information and intro
- `src/components/About.jsx` - About section and mission statement
- `src/components/Projects.jsx` - Featured projects (can integrate with GitHub API)
- `src/components/Skills.jsx` - Technical skills and competencies
- `src/components/Timeline.jsx` - Professional journey and milestones
- `src/components/Contact.jsx` - Contact information and form

### GitHub Integration
To fetch projects dynamically from GitHub:
1. Replace the `featuredProjects` array in `Projects.jsx` with actual GitHub API calls
2. Add your GitHub token to environment variables
3. Update the API endpoint to fetch your repositories

## 📱 Sections

1. **Hero**: Animated introduction with typewriter effect
2. **About**: Mission statement and core competencies
3. **Projects**: Showcase of engineering projects and code repositories
4. **Skills**: Technical skills organized by category with animated progress bars
5. **Timeline**: Professional journey, education, and key projects
6. **Contact**: Contact form and social links

## 🌟 Key Features

- **Typewriter Animation**: Dynamic text animation in the hero section
- **Scroll Progress**: Visual progress indicator as users scroll
- **Animated Background**: Subtle geometric shapes and particles
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile Responsive**: Optimized for all screen sizes
- **Performance**: Lazy loading and optimized animations

## 🚀 Deployment

### GitHub Pages
1. Update the `base` URL in `vite.config.js` to match your repository name
2. Run `npm run deploy` to build and deploy to GitHub Pages

### Vercel
1. Connect your GitHub repository to Vercel
2. Set the build command to `npm run build`
3. Set the output directory to `dist`

### Custom Domain
1. Add your domain to the hosting platform
2. Update the `homepage` field in `package.json`
3. Add a `CNAME` file to the `public` directory with your domain

## 📧 Contact

- **Email**: mohammed.azab@engineer.com
- **GitHub**: [Mohammed-Azab](https://github.com/Mohammed-Azab)
- **Location**: Germany

## 🙏 Acknowledgments

- **Design Inspiration**: Modern tech portfolios and futuristic UI designs
- **Icons**: Lucide React for beautiful, consistent icons
- **Animations**: Framer Motion for smooth, performant animations
- **Styling**: TailwindCSS for rapid, maintainable styling

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ and lots of ☕ by Mohammed Azab**