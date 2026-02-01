// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://matteorosi.github.io",
  base: "/psicologamiselli",
  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "static",
});
