import type { Project } from '@/models/Project';

export const projects: Project[] = [
  {
    slug: 'aula-logica',
    title: 'Fase 1: O Despertar da Lógica',
    subtitle: 'Fundamentos de JavaScript',
    description:
      'Onde tudo começou. Exercícios de lógica, estruturas de controle e os primeiros passos com JavaScript.',
    longDescription:
      'Nesta fase inicial, construí a base de tudo o que viria depois. Cada exercício era um pequeno desafio: condicionais, laços, funções e manipulação de dados. O objetivo era treinar o raciocínio lógico antes de avançar para projetos mais complexos. Foi aqui que aprendi que programar é, antes de tudo, resolver problemas.',
    repoUrl: 'https://github.com/Eduardoescola007/aula_logica',
    tech: ['JavaScript', 'Lógica de Programação', 'Algoritmos'],
    difficulty: 1,
    chapter: 'Capítulo I',
    objectives: [
      'Dominar variáveis, tipos e operadores',
      'Estruturar condicionais e laços de repetição',
      'Criar funções reutilizáveis e limpas',
    ],
    learnings: [
      'Pensar antes de codar economiza tempo',
      'Nomes claros valem mais que comentários',
      'Testar cada parte isola o problema',
    ],
    status: 'concluído',
    year: 2024,
  },
  {
    slug: 'api-biblioteca',
    title: 'Fase 2: A API Perdida',
    subtitle: 'Back-end RESTful de uma biblioteca',
    description:
      'Uma API RESTful para gerenciar livros, autores e empréstimos — o primeiro contato real com arquitetura de servidor.',
    longDescription:
      'A missão era construir uma API completa para uma biblioteca. Modelagem de dados, rotas REST, validação e tratamento de erros. Cada endpoint precisava ser previsível e cada resposta, consistente. Aprendi a separar responsabilidades entre rotas, controllers e modelos, e a pensar como o cliente da API (front-end) usaria cada recurso.',
    repoUrl: 'https://github.com/Eduardoescola007/api-biblioteca',
    tech: ['Node.js', 'Express', 'API REST', 'JSON'],
    difficulty: 2,
    chapter: 'Capítulo II',
    objectives: [
      'Modelar entidades de biblioteca',
      'Criar endpoints REST para CRUD',
      'Tratar erros de forma consistente',
    ],
    learnings: [
      'Uma API bem projetada é previsível',
      'HTTP tem semântica — use os verbos corretos',
      'Validação é parte do design, não do depois',
    ],
    status: 'concluído',
    year: 2024,
  },
  {
    slug: 'api-frontend-atividade2',
    title: 'Fase 3: A Interface do Herói',
    subtitle: 'Front-end consumindo a API',
    description:
      'A ponte entre usuário e servidor. Uma interface que consome a API da biblioteca e dá vida aos dados.',
    longDescription:
      'Chegou a hora de dar rosto ao back-end. Construí a interface que consome a API de biblioteca, com listagem, filtros e formulários. Foi o primeiro contato real com estados de carregamento, tratamento de erros de rede e feedback visual. A lição: o usuário nunca deve ficar sem resposta.',
    repoUrl: 'https://github.com/Eduardoescola007/api_frontend_atividade2',
    tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
    difficulty: 2,
    chapter: 'Capítulo III',
    objectives: [
      'Consumir endpoints REST via fetch',
      'Exibir estados de loading e erro',
      'Validar formulários antes de enviar',
    ],
    learnings: [
      'UX é feedback constante',
      'Assincronismo precisa de tratamento explícito',
      'Front e back são parceiros, não adversários',
    ],
    status: 'concluído',
    year: 2024,
  },
  {
    slug: 'eclasses-back-end-api',
    title: 'Fase 4: O Guardião dos Dados',
    subtitle: 'Arquitetura de back-end',
    description:
      'Uma API estruturada para gerenciar classes e entidades — foco em organização, padrões e escalabilidade.',
    longDescription:
      'A fase mais madura do back-end. Estruturar uma API que gerencia classes e entidades exige pensar em arquitetura: separação de camadas, reutilização de código e padrões de projeto. Cada decisão foi tomada pensando em como o sistema cresceria. Foi aqui que entendi que código bom é código que outro dev entende rápido.',
    repoUrl: 'https://github.com/Eduardoescola007/eclasses_back_end_api_eduardo',
    tech: ['Node.js', 'Express', 'Arquitetura', 'Back-end'],
    difficulty: 3,
    chapter: 'Capítulo IV',
    objectives: [
      'Separar responsabilidades em camadas',
      'Aplicar padrões de projeto no back-end',
      'Preparar a API para crescer',
    ],
    learnings: [
      'Arquitetura é sobre o futuro, não o presente',
      'Abstrações prematuras também são um erro',
      'Consistência vale mais que cleverness',
    ],
    status: 'concluído',
    year: 2025,
  },
];