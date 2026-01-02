# Planning Documents Analysis App

A React-based application for analyzing planning documents using AI, built with TypeScript, Vite, and Tailwind CSS.

## Features

- 📄 PDF document viewing and navigation
- 📤 Drag-and-drop file upload
- 🔍 AI-powered planning document analysis
- 📊 Project overview and management
- 🔔 Toast notifications for user feedback
- 💾 Support for PDF, DWG, and IFC files

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** UI Component Library
- **react-pdf** - PDF rendering
- **react-dropzone** - File upload handling
- **react-hot-toast** - Notifications
- **Lucide React** - Icon library
- **React Router** - Client-side routing

## Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:YOUR_USERNAME/planning-docs-app.git
cd planning-docs-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
planning-docs-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Layout components (Header, etc.)
│   │   ├── documents/      # Document-related components
│   │   ├── projects/       # Project-related components
│   │   └── upload/         # Upload components
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx
│   │   ├── AnalysisProgress.tsx
│   │   ├── ProjectOverview.tsx
│   │   ├── ProjectDetails.tsx
│   │   └── DocumentViewer.tsx
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── data/               # Mock data
│   ├── routes/             # Route definitions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
│   └── .nojekyll          # GitHub Pages config
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Configuration

### Tailwind CSS

This project uses Tailwind CSS v4 with the Vite plugin. Configuration is minimal and handled in `vite.config.ts`.

### TypeScript

TypeScript configuration can be found in `tsconfig.json`. Path aliases are set up for cleaner imports:

- `@/` maps to `./src/`

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### First-time Setup

1. **Update `vite.config.ts`** - Make sure the `base` path matches your repository name:

```typescript
export default defineConfig({
  base: '/planning-docs-app/', // Replace with your repo name
  // ...
});
```

2. **Install gh-pages** (already included in dependencies):

```bash
   npm install -D gh-pages
```

### Deploy

To deploy your app to GitHub Pages:

```bash
npm run deploy
```

This will:

1. Build your app (`npm run build`)
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages

### Enable GitHub Pages

After first deployment:

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your app will be live at: `https://YOUR_USERNAME.github.io/planning-docs-app/`

### Updating the Deployed App

When you make changes:

```bash
# Commit your changes
git add .
git commit -m "Description of changes"
git push

# Deploy updates
npm run deploy
```

### Custom Domain (Optional)

To use a custom domain:

1. Add a file `public/CNAME` with your domain:

```
   yourdomain.com
```

2. In GitHub **Settings** → **Pages**, add your custom domain
3. Configure your domain's DNS settings to point to GitHub Pages

## Development Guidelines

### Code Style

- Use functional components with hooks
- Follow TypeScript best practices
- Use meaningful component and variable names
- Keep components focused and single-responsibility

### File Naming

- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase (e.g., `Project.ts`)

### Code Formatting

This project uses Prettier for consistent code formatting:

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

VS Code will auto-format on save if you have the Prettier extension installed.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Environment Variables

Currently, no environment variables are required. When connecting to a backend API, create a `.env` file:

```
VITE_API_URL=your_api_url_here
```

## Troubleshooting

### PDF files not loading

Make sure the PDF.js worker is properly configured. The worker URL is set in `src/utils/pdfSetup.ts`.

### Drag and drop not working

Ensure browser default drag-and-drop behavior is prevented. This is handled in the `useDragPrevention` hook.

### Routing issues on GitHub Pages

If routes don't work after deploying to GitHub Pages, the app uses `BrowserRouter` which requires server-side routing configuration. GitHub Pages doesn't support this out of the box, but the `404.html` fallback handles this.

Alternatively, you can switch to `HashRouter` in `src/App.tsx` for simpler deployment (routes will look like `#/overview` instead of `/overview`).

## Live Demo

View the live app at: https://YOUR_USERNAME.github.io/planning-docs-app/

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

[Your License Here]

## Support

For issues and questions, please open an issue on GitHub.

## Acknowledgments

- GOV.UK Design System for design inspiration
- React PDF for PDF rendering capabilities
- Tailwind CSS for styling framework
