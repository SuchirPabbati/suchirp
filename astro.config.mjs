// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://suchirpabbati.com',  // <-- your custom domain
  base: '/',                          // <-- root of the domain
  devToolbar: {
    enabled: false
  }
});
