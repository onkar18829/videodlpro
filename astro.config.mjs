import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.com/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});