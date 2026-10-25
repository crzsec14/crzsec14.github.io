import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Replace with your real address once deployed (used for SEO/meta tags).
  site: 'https://crzsec14.github.io',
  vite: { plugins: [tailwindcss()] },
});
