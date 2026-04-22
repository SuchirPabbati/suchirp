// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // <-- your custom domain
  site: 'https://suchirpabbati.com',

  // <-- root of the domain
  base: '/',

  devToolbar: {
    enabled: false
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});