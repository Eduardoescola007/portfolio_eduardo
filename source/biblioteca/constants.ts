export const SITE = {
    name: 'Eduardo',
    title: 'Desenvolvedor em Formação',
    github: 'https://github.com/Eduardoescola007',
    email: 'seu-email@exemplo.com',
  } as const;
  
  export const NAV_LINKS = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Fases', href: '#projetos' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contato', href: '#contato' },
  ] as const;
  
  export const DIFFICULTY_LABELS: Record<number, string> = {
    1: 'Iniciante',
    2: 'Intermediário',
    3: 'Avançado',
  };