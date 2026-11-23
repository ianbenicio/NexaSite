# Site Nexa — Estrutura v1

**Data:** 23/11/2026 · **Base:** Guia de Identidade Visual 4.1 (18/11/2026), Doutrina MVP v1, Método e Processos Internos v1, Portfólio de Serviços v1 (todos de 20/09/2026).
**Regra de texto:** tudo que está no site sai desses documentos. Campo sem fonte fica entre colchetes (D-007, D-017).

---

## 1. O que a Nexa precisa do site

| Necessidade | De onde vem | Como o site responde |
|---|---|---|
| Ser lida como **consultoria em educação**, não empresa de tecnologia | Guia 4.1 · "A ideia visual"; Doutrina 1.1 | Papel claro, texto noite, cor só para identificar. Nenhuma imagem de robô/holograma. |
| Falar com **dois mercados sem misturar gramáticas** (D-005) | Doutrina 1.6 | Duas páginas separadas: **Redes públicas** (registro Dossiê) e **Escolas** (registro Encontro). A home só faz a triagem. |
| Usar o **gatilho de prazo**: diretrizes aprovadas pelo CNE, 12 meses | Doutrina 5.2 | Seção "Por que agora" com os três números e fonte ao lado. |
| Converter em **conversa inicial** (etapa 0 do Ciclo, sem custo) | Método 1 | Um só CTA em todo o site: **Agendar conversa**, com perfil (rede / escola / empresa). |
| **Workshops como porta de entrada** (D-052) | Doutrina 5.5; Portfólio | Página de workshops por público; todo tema aponta para o Nível 1 do seu mercado. |
| Mostrar **método com artefatos**, não promessa | Método 1 e 3 | Página Método: Ciclo em 8 etapas, 3 marcos, regra usar → contratar → construir, medição Guskey 1–3 com "o que não melhorou". Só referenciais liberados no inventário de fachada. |
| **Independência declarada** e integridade | Doutrina 1.3 | Valores como regras ("o que recusamos") na página Sobre; aviso de curadoria sem comissão nas páginas de serviço. |
| LGPD e dados de crianças | Doutrina 4.4 | Página de Privacidade + bloco "Dados" nas páginas de serviço. |

## 2. Referências de mercado (pesquisa 23/11/2026)

Consultorias de política e formação em IA para escolas e redes (EUA) e o debate brasileiro após o CNE:

- **AI for Education** — menu de serviços: auditoria de política, workshops, política-modelo. Padrão: oferta modular e recursos gratuitos como porta de entrada. <https://www.aiforeducation.io/our-services>
- **Education Elements** — "parceiro de distrito, não template". Padrão: diferenciação contra o modelo pronto. <https://www.edelements.com/ai-for-educators>
- **SSA (Ohio)** / **LTC Illinois** — oferta amarrada a prazo legal e serviços combináveis. Padrão: gatilho regulatório explícito. <https://www.ltcillinois.org/services/ai/>
- **CORE Policy Consulting** — pacote de entrada com escopo fechado. Padrão: primeiro passo pequeno e claro.
- Contexto BR: CNE vedou correção exclusivamente automatizada e uso autônomo nos anos iniciais; famílias devem ser informadas da finalidade pedagógica. <https://fastcompanybrasil.com/news/cne-veta-ia-correcao-redacoes-provas/>

**O que adotamos:** separação por público, prazo como gatilho, porta de entrada pequena (conversa + workshop), método visível.
**O que recusamos (Doutrina):** logos de clientes e números fabricados, "metodologia proprietária", promessa de resultado, linguagem de lançamento de app.

> **Atenção (a validar):** notícias de 11/2026 indicam homologação pelo MEC em 10/11/2026 (Parecer CNE/CP nº 15/2026). A Doutrina manda dizer "aprovadas pelo CNE" até a homologação ser confirmada (D-009, Pontos a ver 16). O site mantém "aprovadas pelo CNE"; o texto fica centralizado em `src/data/site.ts` para trocar num lugar só.

## 3. Mapa do site

```
/                      Home (triagem)
├── /redes-publicas    B2G · registro Dossiê
├── /escolas           B2B · registro Encontro
├── /metodo            Ciclo Nexa, regra de ferramenta, medição
├── /workshops         Temas por público → Nível 1
├── /sobre             Quem somos, valores-regra, o que não somos, sócios
├── /contato           Formulário com perfil + canais [em colchetes]
├── /privacidade       LGPD
└── /404
```

Navegação (Guia 4.1 · "Site e redes"): **Redes públicas · Escolas · Método · Workshops · Sobre** + botão **Agendar conversa**.

## 4. Seções por página

### Home
1. **Topo** — rótulo "Consultoria em educação", título, frase "Organizamos o processo, formamos a equipe e só então escolhemos a ferramenta.", botão com seta, foto no corte em faixa ([FOTO REAL DE FORMAÇÃO]).
2. **Por que agora** — 22% / 53% / 56% (TIC Educação 2025) + prazo de 12 meses em colchetes gráficos.
3. **Dois caminhos** — cartão Redes públicas / cartão Escolas, cada um com a frase da sua gramática (Doutrina 5.1).
4. **Como trabalhamos** — trilho de setas: Escutar → Desenhar → Formar → Escolher.
5. **O que não somos** — 5 itens (Doutrina 1.4).
6. **Workshops** — chamada curta.
7. **Fechamento** (faixa diagonal, registro de tela) — próximo passo nomeado.

### Redes públicas (Dossiê: claro, noite, violeta; menta só em entregas)
Topo com a fala B2G · Prazo e vedações · Nível 1 Diretriz de IA da Rede (entregáveis, 6–8 semanas) · Nível 2 Formação e Implementação Assistida (entregáveis, 4–6 meses) · Trilho de etapas com marcos · Como contratamos (planilha aberta, parcelas por marco, sem redigir TR de processo que disputamos) · Dados e LGPD · Workshops 1–4 · CTA.
Preço **não** aparece (faixas B2G provisórias até pendência 7).

### Escolas (Encontro: menta papel, faixas ampliadas)
Topo com a fala B2B · Matrícula 2027 / resposta às famílias · Nível 1 Escola Preparada para IA (4–6 semanas) · Nível 2 Processos Inteligentes (trilhas pedagógica e gestão, 10–16 semanas) · Ferramenta: usar → contratar → construir · Medição em 60–90 dias · Workshops 5–8 · CTA.
**Vocabulário vetado nesta página:** diagnóstico, problema, correção, erro, déficit.

### Método
Princípio · Ciclo Nexa 0–7 com Nível 1 / Nível 2 e 3 marcos · Regras de condução públicas (confidencialidade, professor fala com uma pessoa, registro em 48h) · Ferramenta: usar → contratar → construir; vira produto em 3 clientes · Medição Guskey 1–3 + "o que não melhorou" · Vedações do CNE como requisito de projeto · Referenciais que usamos (só os liberados: Schein, Block, Investigação Apreciativa, Service Blueprint, TPACK, Darling-Hammond, Guskey).

### Workshops
Formato (2–3 h, prático, sai com ferramenta) · Para redes (temas 1–4) · Para escolas (5–8) · Para empresas do ecossistema (9) · Gratuito em evento/associação; in-company sob proposta · Todo workshop termina com convite ao Nível 1.

### Sobre
Quem somos · Propósito / missão / visão 2030 · Valores (tabela "na prática / o que recusamos") · O que não somos · Sócios ([foto], [cargo]).

### Contato
Formulário: perfil (Rede pública / Escola particular / Empresa do ecossistema), nome, instituição, cargo, e-mail, WhatsApp, mensagem, consentimento LGPD · Canais em colchetes até domínio/e-mail/WhatsApp existirem (Doutrina 1.7).

## 5. Identidade aplicada

| Item | Regra do Guia | No código |
|---|---|---|
| Cores | Aurora; proporção claro 55 / noite 25 / violeta 10 / menta 7 / ciano 3 | `src/styles/tokens.css` (de `07_Digital/cores.css`) |
| Tipografia | Sora 600 títulos (−2% acima de 32 px); Manrope 400 corpo, 700 rótulo caixa alta | `public/fonts/` (OFL), escala em `global.css` |
| Marca | Símbolo SVG + lettering SVG + descritor Manrope 600, 0,135 H, 14% | `src/components/Logo.astro` (montada, sem digitar o nome) |
| Mínimos | Principal ≥ 320 px; compacta ≥ 140 px; símbolo ≥ 32 px | Topo usa principal em desktop, compacta em telas estreitas |
| Malha | Base 8; margem ≥ 5% da largura | Espaços em múltiplos de 8 |
| Ação | Violeta com texto branco + seta | `.btn` |
| Destaque | Menta com texto noite | `.tag--menta` |
| Contraste | Nunca menta ou ciano como texto sobre claro | Menta só em fundo/forma |
| Grafismo | Um por seção; formas a 48°, saindo pela borda, longe do texto | `src/components/Shape.astro` |
| Fotografia | Fotos reais autorizadas; até lá, campo [FOTO] | Placeholder no corte em faixa |
| Assinatura | "Processos antes da tecnologia." uma vez por peça | Só no rodapé |

## 6. Pendências que travam publicação

1. Domínio, e-mail institucional e WhatsApp (Doutrina 7, item 7) — formulário e rodapé estão em colchetes.
2. Fotos reais autorizadas de formação.
3. Confirmar status da homologação do MEC e ajustar a frase do CNE (D-009).
4. Cargos e fotos dos sócios; validar divisão de papéis com Marina.
5. Nomes dos serviços são provisórios (pendência 6 ampliada).
6. Backend do formulário (sugestão: Formspree/Netlify Forms) + política de privacidade revisada por advogado (pendência 12).
7. Checklist de adequação ao CNE como material gratuito para download: decidir se vira isca de conteúdo (fase 2).
