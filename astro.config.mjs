import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    vue(),
    preact(),
    react(),
    tailwind(),
    mdx(),
  ],
});
