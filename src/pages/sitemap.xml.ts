import type { APIRoute } from "astro";

// Páginas públicas indexáveis. 404 fica de fora.
const ROTAS = [
  "/",
  "/redes-escolares/",
  "/redes-escolares/rede-publica/",
  "/redes-escolares/escolas-particulares/",
  "/metodo/",
  "/conteudos/",
  "/sobre/",
  "/contato/",
  "/privacidade/",
];

export const GET: APIRoute = ({ site }) => {
  const urls = ROTAS.map((r) => `  <url><loc>${new URL(r, site).href}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
