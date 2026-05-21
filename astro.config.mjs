import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  outDir: 'dist',
  build: {
    inlineStylesheets: 'always',
    assets: 'assets',
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
