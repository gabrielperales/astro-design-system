import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    vue(),
    preact(),
    react(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
