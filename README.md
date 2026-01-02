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
- **react-pdf** - PDF rendering
- **react-dropzone** - File upload handling
- **react-hot-toast** - Notifications
- **Lucide React** - Icon library

## Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
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

## Project Structure
```
planning-docs-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Layout components (Header, etc.)
│   │   ├── documents/      # Document-related components
│   │   └── projects/       # Project-related components
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx
│   │   ├── ProjectOverview.tsx
│   │   ├── ProjectDetails.tsx
│   │   └── DocumentViewer.tsx
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── data/               # Mock data
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
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

## Building for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Environment Variables

Currently, no environment variables are required. When connecting to a backend API, create a `.env` file:
```
VITE_API_URL=your_api_url_here
```

## Troubleshooting

### PDF files not loading

Make sure the PDF.js worker is properly configured. The worker URL is set in `src/utils/pdfSetup.ts`.

### Drag and drop not working

Ensure browser default drag-and-drop behavior is prevented. This is handled in the main App component.

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

[Your License Here]

## Support

For issues and questions, please open an issue on GitHub.