import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://juankuri.pages.dev",
  integrations: [sitemap()]
});