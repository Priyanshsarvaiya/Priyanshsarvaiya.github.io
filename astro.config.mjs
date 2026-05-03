import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://priyanshsarvaiya.github.io",
  integrations: [mdx()],
});
