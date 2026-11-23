// Conteúdo central do site. Cada bloco cita a fonte na Doutrina/Portfólio/Método.
// Regra (D-007, D-017): nada de caso, cliente, número ou contato inventado. Campo sem fonte fica entre colchetes.

export const SITE = {
  nome: "Nexa Inteligência Educacional",
  assinatura: "Processos antes da tecnologia.",
  descricao:
    "Consultoria em educação para redes públicas e escolas particulares. Organizamos o processo, formamos a equipe e só então escolhemos a ferramenta.",
  // Doutrina 1.7 / Pontos a ver 7: domínio, e-mail e WhatsApp ainda em aberto.
  url: "https://[dominio].com.br",
  contato: {
    email: null as string | null, // ex.: "contato@[dominio].com.br"
    whatsapp: null as string | null, // ex.: "5586999999999"
    emailRotulo: "[E-mail institucional]",
    whatsappRotulo: "[WhatsApp]",
    cidade: "Teresina · Piauí",
    cnpj: "[CNPJ]",
  },
};

/**
 * Status regulatório (D-009). A Doutrina manda dizer "aprovadas pelo CNE" até a homologação ser confirmada.
 * Notícias de 11/2026 indicam homologação pelo MEC em 10/11/2026 — confirmar e, se for o caso, trocar aqui.
 */
export const CNE = {
  curto: "diretrizes aprovadas pelo CNE",
  data: "1º/09/2026",
  frase: "As diretrizes aprovadas pelo CNE em 1º/09/2026 trazem vedações imediatas e 12 meses de adequação.",
};

export const NAV = [
  { href: "/redes-publicas", rotulo: "Redes públicas" },
  { href: "/escolas", rotulo: "Escolas" },
  { href: "/metodo", rotulo: "Método" },
  { href: "/workshops", rotulo: "Workshops" },
  { href: "/sobre", rotulo: "Sobre" },
];

// Doutrina 5.2 · os únicos números que o material da Nexa usa sobre o tema, sempre com a fonte.
export const DADOS = [
  { valor: "22%", texto: "das escolas têm diretriz de uso de IA.", fonte: "TIC Educação 2025" },
  { valor: "53%", texto: "dos gestores já usam IA.", fonte: "TIC Educação 2025" },
  { valor: "56%", texto: "dos professores já usam IA.", fonte: "TIC Educação 2025" },
];

// Doutrina 5.1 · uma mensagem, três falas.
export const FALAS = {
  trinta:
    "A IA já está na sua escola, ou na sua rede, e quase sempre sem regra. As diretrizes aprovadas pelo CNE dão 12 meses para organizar isso. A Nexa começa pelo processo, forma a equipe e só então implementa a ferramenta.",
  b2g: "Em 12 meses, sua rede precisa ter governança de IA, letramento no currículo e formação docente. Entregamos a diretriz, o plano de adequação e a formação com relatório de evidência, com planilha aberta e prazo claro.",
  b2b: "Sua escola vai ter uma resposta clara sobre IA quando a família perguntar, e uma equipe que usa IA para devolver tempo ao professor, não para substituí-lo.",
};

// Guia 4.1 · Slides "Como trabalhamos": quatro etapas, nesta ordem.
export const ETAPAS_CURTAS = [
  { nome: "Escutar", texto: "A rotina de quem vai usar, em camadas: direção, coordenação e professores.", icone: "dialogo" },
  { nome: "Desenhar", texto: "O processo, com etapas e responsáveis, junto de quem executa.", icone: "processos" },
  { nome: "Formar", texto: "A equipe, com prática em cima do trabalho real, não da ferramenta isolada.", icone: "formacao" },
  { nome: "Escolher", texto: "A ferramenta e o acompanhamento: usar o que existe, contratar ou construir.", icone: "tecnologia" },
] as const;

// Método 1 · Ciclo Nexa. Etapas 0–4 = Nível 1; 5–7 = Nível 2.
export const CICLO = [
  { n: 0, nome: "Conversa inicial", texto: "40 a 45 minutos, sem custo. Entendemos o pedido nas palavras de quem pede e fechamos o escopo por escrito.", artefato: "Acordo de escopo", nivel: 1 },
  { n: 1, nome: "Escuta em camadas", texto: "Direção, coordenação e professores, cada camada em separado. Ao menos uma conversa presencial. Registro em até 48 horas.", artefato: "Ficha de registro por camada", nivel: 1 },
  { n: 2, nome: "Cruzamento e leitura", texto: "Trabalho interno da Nexa: cruzamos o que cada camada disse. Toda prioridade precisa de apoio em pelo menos duas camadas.", artefato: "Matriz de prioridades", nivel: 1, interno: true },
  { n: 3, nome: "Devolutiva e pactuação", texto: "Apresentamos a leitura e a instituição escolhe as prioridades, por escrito.", artefato: "Ata de prioridades", nivel: 1, marco: 1 },
  { n: 4, nome: "Entrega da política ou diretriz", texto: "Política de IA da escola com versão para famílias, ou diretriz da rede com plano de adequação de 12 meses.", artefato: "Documento aprovado", nivel: 1, marco: 2 },
  { n: 5, nome: "Redesenho do processo", texto: "Com quem executa o processo. Passa quando essa pessoa diz que consegue trabalhar assim na semana seguinte.", artefato: "Mapa de processos", nivel: 2 },
  { n: 6, nome: "Equipar", texto: "Usar o que já existe, contratar por curadoria ou construir. Ao menos duas opções comparadas.", artefato: "Comparativo de ferramentas", nivel: 2 },
  { n: 7, nome: "Formar e medir", texto: "Formação no processo novo e medição entre 60 e 90 dias, com o campo “o que não melhorou”.", artefato: "Relatório de evidência", nivel: 2, marco: 3 },
] as const;

// Doutrina 1.3 · valores como regras.
export const VALORES = [
  { valor: "Processo antes da ferramenta", pratica: "Nenhuma ferramenta é recomendada, vendida ou construída antes de mapearmos o processo que ela vai servir. Às vezes a resposta certa é “ainda não”.", recusa: "“Só instala isso pra gente” sem o mapeamento do processo." },
  { valor: "O educador decide", pratica: "Toda solução mantém com a pessoa a decisão pedagógica final. As vedações do CNE são requisito de projeto, não detalhe.", recusa: "Automação que tire do professor a decisão sobre o aluno." },
  { valor: "Só afirmamos o que mostramos", pratica: "Nenhum caso, número ou referência sem evidência em arquivo. Resultado negativo entra no relatório.", recusa: "Prometer resultado de aprendizagem que não conseguimos medir." },
  { valor: "Independência declarada", pratica: "Curadoria sem comissão. Quando uma solução da Nexa está entre as opções, dizemos isso e mostramos ao menos duas alternativas.", recusa: "Comissão de fornecedor; esconder que a opção recomendada é nossa." },
  { valor: "Medimos o que entregamos", pratica: "Todo serviço termina com evidência do que mudou: reação, aprendizagem da equipe, condições da instituição.", recusa: "Relatório só de presença e satisfação." },
  { valor: "Integridade sem zona cinzenta", pratica: "Preço defensável em auditoria, planilha aberta no setor público, contrato dentro da nossa capacidade.", recusa: "Redigir o termo de referência de um processo que disputamos; qualquer prática cinzenta." },
];

// Doutrina 1.4
export const NAO_SOMOS = [
  { titulo: "Vendedora de ferramenta", texto: "Não chegamos com plataforma pronta procurando onde encaixar. Chegamos pelo processo." },
  { titulo: "Fábrica de software genérica", texto: "Construímos software quando ele nasce de um processo que redesenhamos com a instituição." },
  { titulo: "Produtora de cursos avulsos", texto: "Formação solta, sem processo e sem acompanhamento, não muda a prática." },
  { titulo: "Revendedora com comissão", texto: "A independência da curadoria é parte do que entregamos." },
  { titulo: "Consultoria de “sim, senhor”", texto: "Apontamos o que não deve ser feito, mesmo quando isso reduz o nosso contrato." },
];

// Portfólio v1 · Workshops. Todo workshop termina com convite ao Nível 1 (D-052).
export const WORKSHOPS = {
  redes: [
    { titulo: "Diretrizes do CNE sobre IA: o que a rede precisa ter em 12 meses", publico: "Secretário(a) e equipe técnica" },
    { titulo: "A IA que já está na sua rede", publico: "Gestores escolares e coordenadores da rede", sub: "Mapeamento ao vivo do uso sem regra." },
    { titulo: "Avaliação e IA: o que o professor pode e não pode delegar", publico: "Coordenadores pedagógicos e professores" },
    { titulo: "O coordenador pedagógico como formador em IA", publico: "Coordenadores da rede" },
  ],
  escolas: [
    { titulo: "Quando a família perguntar sobre IA, o que a escola responde?", publico: "Diretores e mantenedores" },
    { titulo: "Tempo devolvido ao professor: planejamento com IA", publico: "Coordenação e professores" },
    { titulo: "Atendimento e secretaria: onde a IA aproxima e onde afasta a família", publico: "Direção e secretaria" },
    { titulo: "A IA que sua escola já paga e não usa", publico: "Direção e coordenação", sub: "Ferramentas que já vêm no sistema de ensino." },
  ],
  empresas: [
    { titulo: "Formar o professor que vai usar o seu produto", publico: "Editoras, edtechs e plataformas", sub: "O professor aprende o processo pedagógico em que a ferramenta entra, não um tutorial da ferramenta." },
  ],
};

// Método 3 · inventário de fachada: só referenciais com artefato interno podem ser citados.
export const REFERENCIAIS = [
  { nome: "Consultoria de processo", autor: "Edgar Schein", uso: "Conversa inicial" },
  { nome: "Contratação compartilhada", autor: "Peter Block", uso: "Acordo de escopo" },
  { nome: "Investigação Apreciativa", autor: "Cooperrider e Whitney", uso: "Escuta nas escolas" },
  { nome: "Service Blueprint", autor: "Shostack; Stickdorn e outros", uso: "Mapa de processos" },
  { nome: "TPACK", autor: "Mishra e Koehler", uso: "Avaliação de ferramenta" },
  { nome: "Formação eficaz", autor: "Darling-Hammond", uso: "Desenho da formação" },
  { nome: "Avaliação de formação", autor: "Thomas Guskey, níveis 1 a 3", uso: "Relatório de evidência" },
];
