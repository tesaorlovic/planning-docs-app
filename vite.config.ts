import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Only use base path in production (for GitHub Pages)
  // base: command === 'build' ? '/planning-docs-app/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/planning-docs-app/' : '/',
}));
