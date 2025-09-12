// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://suchirpabbati.github.io',
  base: '/suchirp',
  devToolbar: {
    enabled: false
  }
});
