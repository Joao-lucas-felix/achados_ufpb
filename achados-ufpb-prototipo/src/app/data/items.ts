export type FoundItem = {
  slug: string;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  accent: string;
};

export const foundItems: FoundItem[] = [
  {
    slug: 'iphone-verde',
    title: 'iPhone com capa verde neon',
    location: 'Secretaria do centro',
    date: '13 de marco',
    description:
      'Celular encontrado sobre uma mesa de atendimento. A proposta visual destaca o contraste da capa e o fundo neutro de madeira.',
    image: 'assets/examples/IMG_20260313_131158410.jpg',
    accent: 'lime',
  },
  {
    slug: 'smartphone-preto',
    title: 'Smartphone preto',
    location: 'Bloco administrativo',
    date: '13 de marco',
    description:
      'A foto frontal mostra o aparelho inteiro, com enquadramento simples e leitura direta para identificacao imediata.',
    image: 'assets/examples/IMG_20260313_131225279.jpg',
    accent: 'amber',
  },
  {
    slug: 'bolsa-preta',
    title: 'Bolsa termica preta',
    location: 'Recepcao',
    date: '19 de marco',
    description:
      'Volume grande, alca marrom e boa presenca visual. Funciona bem como card principal em telas de apresentacao.',
    image: 'assets/examples/IMG_20260319_184743658.jpg',
    accent: 'sand',
  },
  {
    slug: 'maleta-com-potes',
    title: 'Maleta com potes coloridos',
    location: 'Sala de apoio',
    date: '24 de marco',
    description:
      'Item com identidade forte pela composicao das cores. Ideal para mostrar como a vitrine destaca objetos diferentes.',
    image: 'assets/examples/IMG_20260324_185101719.jpg',
    accent: 'coral',
  },
  {
    slug: 'garrafa-tucano',
    title: 'Garrafa preta com tucano',
    location: 'Balcao da secretaria',
    date: '25 de marco',
    description:
      'Objeto vertical com ilustracao marcante. A imagem inspira cards limpos com foco total no item e pouco texto.',
    image: 'assets/examples/IMG_20260325_190030643.jpg',
    accent: 'cyan',
  },
];
