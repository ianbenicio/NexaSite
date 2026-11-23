import { defineConfig } from "astro/config";

// Domínio ainda não definido (Doutrina 1.7). Trocar `site` quando houver.
export default defineConfig({
  site: "https://example.com",
  trailingSlash: "ignore",
  build: { format: "directory" },
  // Rotas antigas (antes do menu "Redes escolares" e "Conteúdos").
  redirects: {
    "/redes-publicas": "/redes-escolares/rede-publica",
    "/escolas": "/redes-escolares/escolas-particulares",
    "/workshops": "/conteudos",
  },
});
