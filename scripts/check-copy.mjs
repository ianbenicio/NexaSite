// Checklist de saída (Doutrina 1.6 e 5.6) aplicado ao HTML gerado em dist/.
// Uso: npm run build && npm run check:copy
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const BANIDAS = ["revolucionar", "transformar a educação", "disruptiv", "metodologia proprietária", "garantimos resultado"];
const VETADAS_B2B = ["diagnóstico", "problema", "correção", "erro", "déficit"];
const VETADOS_FACHADA = ["JTBD", "Jobs to be Done", "Wiggins", "McTighe", "Black & Wiliam", "Black e Wiliam"];

const arquivos = [];
(function andar(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) andar(p);
    else if (p.endsWith(".html")) arquivos.push(p);
  }
})("dist");

const texto = (html) =>
  html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").toLowerCase();

let falhas = 0;
for (const f of arquivos) {
  const t = texto(readFileSync(f, "utf8"));
  const achar = (lista, motivo) => {
    for (const w of lista) {
      const re = new RegExp(`(^|[^a-zà-ú])${w.toLowerCase().replace(/[.*+?^${}()|[\]\&]/g, "\$&")}`, "i");
      if (re.test(t)) { console.log(`✗ ${f}: "${w}" (${motivo})`); falhas++; }
    }
  };
  achar(BANIDAS, "banida em qualquer material");
  achar(VETADOS_FACHADA, "referencial sem artefato, D-017");
  // B2B: página de escolas particulares, página geral de redes e home (canal aberto lido por escolas)
  const rel = f.split(/[\\/]/).join("/");
  if (/escolas-particulares|^dist\/(redes-escolares\/)?index\.html$/.test(rel)) achar(VETADAS_B2B, "vetada no B2B, D-010");
}
console.log(falhas ? `\n${falhas} ocorrência(s).` : `✓ ${arquivos.length} páginas sem vocabulário vetado.`);
process.exit(falhas ? 1 : 0);
