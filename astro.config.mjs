import { defineConfig } from 'astro/config';

// Configura PUBLIC_SITE_URL en producción para URLs canónicas reales.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://tinkerly-ni.vercel.app',
});
