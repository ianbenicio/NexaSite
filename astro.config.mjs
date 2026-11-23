import { defineConfig } from "astro/config";

// Domínio ainda não definido (Doutrina 1.7). Trocar `site` quando houver.
export default defineConfig({
  site: "https://example.com",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
