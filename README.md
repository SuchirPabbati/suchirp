# Minimal Portfolio Website

A beautiful, minimal portfolio website built with Astro featuring a dark theme, central pane design, and smooth tabbed navigation.

## ✨ Features

- **Dark Theme**: Modern dark color scheme with subtle gradients
- **Central Pane Design**: Content displayed in a centered card with rounded edges and shadows
- **Tabbed Navigation**: Smooth switching between Overview, Experience, and Projects sections
- **Responsive Design**: Optimized for both desktop and mobile devices
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Custom Favicon**: Branded favicon matching the portfolio theme
- **Smooth Animations**: Fade-in effects and hover transitions

## 🎨 Design

- **Background Colors**: 
  - Primary: `#141619` (overall background)
  - Inner Section: `#1B1D21` (content pane)
- **Typography**: Inter font family for clean, modern look
- **Gradient Effects**: Subtle radial gradient overlay
- **Interactive Elements**: Hover effects and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🛠️ Customization

### Personal Information

Edit the `portfolioData` object in `src/pages/index.astro` to customize your information:

```javascript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description...",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your.email@example.com"
  },
  // ... rest of your data
};
```

### Experience Section

Add or modify your work experience:

```javascript
experience: [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "Job description and responsibilities..."
  }
  // Add more experiences...
]
```

### Projects Section

Showcase your projects:

```javascript
projects: [
  {
    name: "Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project"
  }
  // Add more projects...
]
```

### Styling

The CSS is embedded in the same file for simplicity. You can customize:

- **Colors**: Modify the color variables in the CSS section
- **Fonts**: Change the Google Fonts import and font-family declarations
- **Layout**: Adjust padding, margins, and grid layouts
- **Animations**: Modify transition durations and effects

### Favicon

Replace `/public/favicon.svg` with your own custom favicon. The current favicon features a "P" for Portfolio with a blue gradient.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 768px and above
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with your static site ready for deployment.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` folder to a `gh-pages` branch
3. Enable GitHub Pages in your repository settings

## 🎯 SEO Features

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Optimized loading with font preloading

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg          # Custom favicon
├── src/
│   └── pages/
│       └── index.astro      # Main portfolio page
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🧞 Available Scripts

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Icons are inline SVGs for optimal performance