# Planning Documents Analysis App

A React-based application for analyzing planning documents using AI, built with TypeScript, Vite, and Tailwind CSS.

## Features

- 📄 PDF document viewing and navigation
- 📤 Drag-and-drop file upload
- 🔍 AI-powered planning document analysis with real-time progress tracking
- 📊 Interactive summary with collapsible sections
- 🔔 Toast notifications for user feedback
- 💾 Support for PDF, DWG, and IFC files
- 🎨 GOV.UK Design System inspired UI

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **React Router v6** - Client-side routing
- **react-pdf 9.1.0** - PDF rendering
- **pdfjs-dist 4.4.168** - PDF.js library
- **react-dropzone** - File upload handling
- **react-hot-toast** - Notifications
- **Lucide React** - Icon library
- **Prettier** - Code formatting

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

## Application Routes

- `/` - Landing page with file upload
- `/analysis` - Analysis progress page with real-time updates
- `/analysis/document/:index` - View specific uploaded document
- `/project/:projectId` - Direct project document access

## Project Structure

```
planning-docs-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── analysis/       # Analysis-specific components
│   │   │   ├── SummaryTab.tsx
│   │   │   ├── DocumentsTab.tsx
│   │   │   └── AnalysisLog.tsx
│   │   ├── common/         # Shared components
│   │   │   └── Tabs.tsx
│   │   ├── documents/      # Document viewer components
│   │   │   ├── PDFViewer.tsx
│   │   │   └── AnnotationSidebar.tsx
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Logo.tsx
│   │   ├── projects/       # Project components
│   │   │   └── ProjectHeaderInfo.tsx
│   │   └── upload/         # Upload components
│   │       └── FileUpload.tsx
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx
│   │   ├── AnalysisProgress.tsx
│   │   └── DocumentViewer.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── pdfSetup.ts
│   │   └── navigation.ts
│   ├── hooks/              # Custom React hooks
│   │   └── useDragPrevention.ts
│   ├── data/               # Mock data
│   │   └── mockData.ts
│   ├── routes/             # Route definitions
│   │   └── index.ts
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
│   └── .nojekyll          # GitHub Pages config
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Prettier ignore file
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Key Features

### File Upload

- Drag-and-drop interface with visual feedback
- Support for multiple file formats (PDF, DWG, IFC)
- File preview with size information
- Easy file removal

### Analysis Progress

- Real-time progress tracking with percentage display
- Live analysis log with step-by-step updates
- Interactive tabs (Summary and Documents)
- Document thumbnails with click-to-view functionality

### Document Viewer

- Full-screen PDF rendering
- Page navigation controls
- Issue annotations sidebar with expandable sections
- Results/Sources tabs for detailed information

### Summary View

- Status overview (Rejected/Approved/Warning)
- Collapsible policy sections:
  - Supporting documents & comments
  - National Policy
  - Local/Regional Policy
  - Geospatial Constraints
- Color-coded icons for quick status recognition

## Configuration

### Tailwind CSS

This project uses Tailwind CSS v4 with the Vite plugin. The configuration uses custom colors:

- `custom-blue`: #1D70B8 (GOV.UK blue)

### TypeScript

TypeScript configuration is in `tsconfig.json`. Path aliases are set up:

- `@/` maps to `./src/`

### React PDF

PDF rendering is configured in `src/utils/pdfSetup.ts`:

- Uses `pdfjs-dist@4.4.168` for compatibility
- Worker URL configured for proper PDF rendering
- Text and annotation layers disabled for cleaner display

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### First-time Setup

1. **Update `vite.config.ts`** - The base path is configured to work in both development and production:

```typescript
   base: process.env.NODE_ENV === 'production' ? '/planning-docs-app/' : '/',
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
- Extract reusable logic into custom hooks
- Separate concerns into dedicated component files

### File Naming

- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase (e.g., `Project.ts`)
- Hooks: camelCase with `use` prefix (e.g., `useDragPrevention.ts`)

### Code Formatting

This project uses Prettier for consistent code formatting:

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

VS Code will auto-format on save if you have the Prettier extension installed.

### Component Organization

Components are organized by feature/domain:

- `analysis/` - Components specific to the analysis page
- `common/` - Shared/reusable components
- `documents/` - Document viewing components
- `layout/` - Layout and structural components
- `projects/` - Project-related components
- `upload/` - File upload components

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

### PDF files not loading

- Ensure `react-pdf@9.1.0` and `pdfjs-dist@4.4.168` are installed
- Check that the worker URL is properly configured in `src/utils/pdfSetup.ts`
- Clear the Vite cache: `rm -rf node_modules/.vite` and restart dev server

### Drag and drop not working

- Ensure browser default drag-and-drop behavior is prevented
- This is handled in the `useDragPrevention` hook

### Routes not working in development

- Check that `vite.config.ts` has the correct base path configuration
- For local development, base should be `/`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Version mismatch errors with PDF.js

- Ensure `react-pdf` and `pdfjs-dist` versions are compatible
- Current working combination: `react-pdf@9.1.0` with `pdfjs-dist@4.4.168`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Live Demo

View the live app at: https://YOUR_USERNAME.github.io/planning-docs-app/

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Format code with Prettier
5. Submit a pull request

## License

[Your License Here]

## Acknowledgments

- GOV.UK Design System for design inspiration and color scheme
- React PDF for PDF rendering capabilities
- Tailwind CSS for the utility-first styling framework
- Lucide Icons for the comprehensive icon set
