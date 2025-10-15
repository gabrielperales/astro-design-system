import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerMetaHighlight,
} from "@shikijs/transformers";
// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "css-variables",
        transformers: [
          transformerNotationDiff({
            classLineAdd: "diff add",
            classLineRemove: "diff remove",
          }),
          transformerNotationFocus({
            classActiveLine: "focused",
          }),
          transformerMetaHighlight(),
        ],
        wrap: true,
      },
    }),
  ],
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  syntaxHighlight: "shiki",
  shikiConfig: {
    theme: "css-variables",
    transformers: [
      transformerNotationDiff({
        // Make sure these match your CSS classes
        classLineAdd: "diff add",
        classLineRemove: "diff remove",
      }),
      transformerNotationFocus({
        classActiveLine: "focused",
      }),
      transformerMetaHighlight(),
    ],
    wrap: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
