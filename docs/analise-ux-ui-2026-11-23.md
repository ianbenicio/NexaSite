# Análise de web design e UX/UI — Nexa

Data: 23/11/2026. Escopo: leitura dos componentes, estilos, páginas e documentação; inspeção visual da home no navegador local; medição do layout em viewport 390 × 844; teste local do formulário com dados fictícios. Skill aplicada: aiox-ux-design-expert, perspectiva de UX e design system. Não foram realizadas entrevistas, análise de métricas de produção, auditoria completa WCAG ou medição de Core Web Vitals. Recomendações de conversão são hipóteses a validar. Nenhuma implementação foi alterada.

## Diagnóstico

A identidade tem uma base consistente: paleta Aurora, Sora e Manrope, espaçamento generoso, botões reconhecíveis e componentes compartilhados. O maior ganho está em facilitar a escolha do visitante, mostrar entregas concretas e concluir o contato. A home exige leitura extensa antes de apresentar os caminhos por público.

## Prioridades

| Prioridade | Evidência | Melhoria proposta | Critério de aceite |
|---|---|---|---|
| P0 — antes de publicar | E-mail e WhatsApp são nulos em `src/data/site.ts`; após preencher e enviar, o formulário informa que o canal está em configuração. | Ativar um canal real; implementar envio com confirmação, erro e preservação dos dados. Enquanto indisponível, informar antes do preenchimento. | Usuário consegue concluir contato e recebe confirmação verdadeira. |
| P1 | `conteudos.astro` envia `assunto=aulas`, `blog` e `conteudos`; o select só aceita `conversa`, `workshop`, `outro`. A página de aulas abriu com assunto vazio. | Aceitar e preservar essas intenções; usar fluxo curto para aviso de lançamento. | Cada CTA chega ao destino com intenção visível e válida. |
| P1 | Em 390 × 844, o bloco de públicos começa em aproximadamente 6.726 px; cenas ocupam 3.787 px e contexto 2.057 px. | Colocar os dois caminhos logo após o hero; reduzir cenas iniciais a três resumos, aprofundando nas páginas específicas. | O visitante encontra seu público antes dos blocos extensos. |
| P1 | Hero usa placeholder de foto; Sobre contém foto, cargo e área ainda em colchetes. | Usar fotografia autorizada e biografias verificadas. Até lá, composição gráfica deliberada sem placeholders públicos. | Nenhuma informação provisória visível na versão publicada. |
| P1 | A home enfatiza princípios e contexto; entregas aparecem mais tarde e nas páginas internas. | Mostrar exemplos de política de IA, versão para famílias, mapa de processos e relatório, apenas quando houver material autorizado. Modelos devem ser identificados como ilustrativos. | Visitante entende o que recebe antes de precisar ler o método completo. |
| P2 | Sobre apresenta missão, seis valores e cinco recusas antes dos sócios. | Antecipar pessoas, experiência verificável e atuação; condensar valores e recusas. | Quem executa o serviço aparece próximo da abertura. |
| P2 | Conteúdos dá espaço semelhante a workshops disponíveis e formatos futuros. | Destacar workshops; colocar aulas e blog em bloco secundário com inscrição curta. | Oferta disponível é a ação predominante. |
| P2 | Campos obrigatórios não têm indicação visual; foco dos inputs remove outline e usa borda. | Indicar obrigatórios/opcionais e reforçar foco; oferecer erros associados aos campos. | Preenchimento e correção compreensíveis por teclado e visualmente. |
| P2 | Header sticky e links para âncoras; CSS sem compensação de rolagem. | Validar destinos e adicionar scroll-margin-top/scroll-padding-top conforme necessário. | Título de destino e foco não ficam escondidos pelo topo. |
| P2 | Arquivos locais de fontes em TTF; Open Graph usa avatar e caminho relativo. | Avaliar WOFF2 e pesos realmente usados; criar imagem de compartilhamento e URLs absolutas após domínio confirmado. | Verificação em produção de carregamento e prévia de compartilhamento. |

## Direção visual

Preservar a identidade. A combinação de azul-noite, violeta e menta distingue a marca e sustenta uma apresentação institucional. O hero tem hierarquia clara, mas sua imagem ainda não adiciona evidência. O recorte diagonal pode funcionar com uma foto cuidadosamente enquadrada; caso prejudique a leitura de rostos e contexto, usar a faixa como moldura ou acento lateral.

Variar a apresentação conforme o conteúdo: cenas em resumos curtos, método em sequência, entregas em prévias de documentos e pessoas com fotos e biografias. Evitar transformar todo argumento em mais um cartão de texto. No mobile, reduzir o volume de conteúdo antes de reduzir fonte ou espaçamento.

## Ordem sugerida da home

1. Benefício e público, com CTA de conversa e informação de 40 minutos sem custo.
2. Rede pública / escola particular, com acesso direto às páginas correspondentes.
3. Três situações resumidas que mostrem reconhecimento da rotina.
4. Entregas concretas, com amostras autorizadas ou modelos identificados.
5. Método resumido em quatro etapas, com relação clara ao ciclo detalhado.
6. Pessoas e credenciais verificáveis.
7. Contexto e fontes em versão curta.
8. Conversa inicial: o que acontece, como solicitar e próximo passo.

Exemplo de título para avaliação editorial: “Organize o uso de IA na sua escola, começando pelos processos.” Subtítulo: “Apoiamos redes públicas e escolas particulares com política de IA, formação da equipe e melhoria das rotinas.” Validar aderência à doutrina antes de adotar.

## Microcopy e fluxos

- Usar “Solicitar conversa” se não houver escolha imediata de data; “Agendar” cria expectativa de calendário.
- Para aulas e blog, pedir inicialmente apenas os dados necessários ao aviso. Não obrigar o visitante a atravessar um formulário de contratação.
- Levar o título do workshop solicitado até o formulário, além da categoria genérica.
- Unificar a duração da conversa: a home comunica 40 minutos e o método 40 a 45.
- Trocar regras internas expostas, como “Workshop sem próximo passo não acontece”, por explicação do benefício e da continuidade para o participante.
- Tornar as fontes dos números clicáveis. As afirmações regulatórias e estatísticas do projeto não foram validadas nesta auditoria; não tratar sua presença no código como comprovação.

## Pontos positivos a preservar

- Tokens de cor, tipografia e espaçamento e componentes reutilizáveis.
- HTML com títulos, landmarks, labels, fieldset/legend e link para pular ao conteúdo.
- Estados de foco globais e tratamento de rolagem para movimento reduzido.
- Público pré-selecionado por URL nas páginas de serviço.
- Distinção editorial e visual entre rede pública e escola particular.
- Cuidado explícito para não inventar clientes, resultados e depoimentos.

## Validação recomendada após mudanças

Testar navegação e leitura em 320, 390, 768, 1024 e 1440 px, zoom de 200%, teclado e leitor de tela. Validar menu aberto, âncoras, sucesso e erro do formulário, preservação de dados e todas as origens de contato. Medir seleção de público, início/conclusão do formulário e solicitações qualificadas; não estimar aumento de conversão sem dados.

Referências de acessibilidade: [W3C — instruções de formulário](https://www.w3.org/WAI/tutorials/forms/instructions/) e [W3C — mensagens de retorno](https://www.w3.org/WAI/tutorials/forms/notifications/). Indicação de obrigatoriedade e mensagens claras seguem essas orientações. Esta análise não certifica conformidade WCAG.
