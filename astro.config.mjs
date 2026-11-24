import { defineConfig } from "astro/config";

// Domínio principal: nexa-int-edu.com.br (o .com redireciona para cá).
export default defineConfig({
  site: "https://nexa-int-edu.com.br",
  trailingSlash: "ignore",
  build: { format: "directory" },
  // Rotas antigas (antes do menu "Redes escolares" e "Conteúdos").
  redirects: {
    "/redes-publicas": "/redes-escolares/rede-publica",
    "/escolas": "/redes-escolares/escolas-particulares",
    "/workshops": "/conteudos",
  },
});
