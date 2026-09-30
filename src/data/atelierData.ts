export interface ClothingModel {
  id: string;
  title: string;
  category: string;
  age: string;
  image: string;
  description: string;
  details: string[];
  fabrics: string[];
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  childAge: string;
  image: string;
}

export const WHATSAPP_NUMBER = "5521988887777"; // Número configurável do Ateliê

export const CATEGORIES = [
  { id: 'todos', name: 'Todas as Peças' },
  { id: 'vestidos', name: 'Vestidos de Festa' },
  { id: 'batizado', name: 'Batizado & Ceremonial' },
  { id: 'conjuntos', name: 'Conjuntos & Passeio' },
  { id: 'recemnascido', name: 'Enxoval & Bebê' },
  { id: 'daminhas', name: 'Daminhas & Pajens' },
];

export const CLOTHING_MODELS: ClothingModel[] = [
  {
    id: '1',
    title: 'Vestido Floral Romântico',
    category: 'vestidos',
    age: '1 a 4 anos',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=800',
    description: 'Vestido delicado em algodão acetinado com estampa floral exclusiva, gola francesa com bordado à mão e laço nas costas.',
    details: ['100% Algodão antialérgico', 'Forro macio em cambraia', 'Bordado manual na gola', 'Ajuste nas costas com laço'],
    fabrics: ['Algodão Sateen', 'Cambraia 100% Algodão', 'Organza de Algodão'],
    tag: 'Mais Pedido'
  },
  {
    id: '2',
    title: 'Conjunto Príncipe em Linho',
    category: 'conjuntos',
    age: '6 meses a 3 anos',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
    description: 'Conjunto elegante composto por camisa em linho puro com gola padre e bermuda com suspensório removível.',
    details: ['Linho misto de alta qualidade', 'Suspensório ajustável com botões de madeira', 'Cintura com elástico confortável', 'Acabamento impecável'],
    fabrics: ['Linho com Algodão', 'Batistinha Pura'],
    tag: 'Exclusivo'
  },
  {
    id: '3',
    title: 'Vestido de Batizado Renda Inglesa',
    category: 'batizado',
    age: 'Recém-nascido a 1 ano',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    description: 'Longo clássico de batizado com barrado em renda inglesa verdadeira, nervuras feitas à mão no corpete e touca charmosa inclusa.',
    details: ['Acompanha touca coordenada', 'Renda inglesa importada', 'Botões madrepérola', 'Abertura total para facilidade ao vestir'],
    fabrics: ['Seda Pura', 'Cambraia de Linho', 'Renda de Algodão'],
    tag: 'Especial Batizado'
  },
  {
    id: '4',
    title: 'Vestido Daminha Jardim Encantado',
    category: 'daminhas',
    age: '2 a 8 anos',
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&q=80&w=800',
    description: 'Vestido rodado com tule francês macio que não pinica, apliques de flores 3D costuradas uma a uma e faixa de cetim na cintura.',
    details: ['Tule francês super macio', 'Flores 3D artesanais', 'Armação interna leve e confortável', 'Cauda discreta opcional'],
    fabrics: ['Tule Cristal', 'Cetim Duchese', 'Organza Cristal'],
    tag: 'Casamentos'
  },
  {
    id: '5',
    title: 'Macacão Tricô Antialérgico',
    category: 'recemnascido',
    age: 'Prematura a 9 meses',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800',
    description: 'Saída de maternidade e conjunto em tricô antialérgico com ponto ajurado delicado e detalhes em pérolas.',
    details: ['Fio acrílico antialérgico premium', 'Toque extremamente suave para pele de bebê', 'Manta coordenada opcional', 'Fácil higienização'],
    fabrics: ['Tricô 100% Antialérgico', 'Fio de Algodão Egípcio'],
    tag: 'Maternidade'
  },
  {
    id: '6',
    title: 'Conjunto Casual Chic Sarja',
    category: 'conjuntos',
    age: '1 a 6 anos',
    image: 'https://images.unsplash.com/photo-1503944583220-7eeec390d6af?auto=format&fit=crop&q=80&w=800',
    description: 'Jardineira em sarja leve com bolso frontal bordado à mão com o nome ou inicial da criança, acompanhada de blusa de gola alta.',
    details: ['Sarja stretch comfortable', 'Alças reguláveis com fivelas', 'Bordado personalizado incluso', 'Bolsos funcionais'],
    fabrics: ['Sarja com Elastano', 'Algodão Pima'],
    tag: 'Personalizável'
  },
  {
    id: '7',
    title: 'Vestido Festa Bailarina',
    category: 'vestidos',
    age: '3 a 7 anos',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    description: 'Vestido inspirado no mundo do ballet, corpete em bodice estruturado com brilho sutil e saia em camadas de tule em degradê suave.',
    details: ['Efeito degradê artesanal', 'Conforto garantido para brincar e dançar', 'Zíper invisível nas costas', 'Forro 100% algodão'],
    fabrics: ['Tule Premium', 'Cetim de Seda', 'Forro Algodão'],
    tag: 'Aniversários'
  },
  {
    id: '8',
    title: 'Traje Pajem Clássico',
    category: 'daminhas',
    age: '2 a 10 anos',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800',
    description: 'Calça social em linho ou sarja leve, camisa branca de manga longa com botões madre-pérola e gravata borboleta coordenada.',
    details: ['Corte alfaiataria infantil', 'Conforto total sem apertar', 'Gravata removível', 'Bermuda opcional para dias quentes'],
    fabrics: ['Linho Puro', 'Algodão Egípcio'],
    tag: 'Cerimônia'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Camila Mendonça',
    role: 'Mãe da Alice (3 anos)',
    childAge: '3 anos',
    content: 'O vestido de aniversário da Alice ficou simplesmente deslumbrante! A Aline teve todo o cuidado de tirar as medidas certas por vídeo e o caimento ficou perfeito. Todos os convidados perguntaram onde mandei fazer.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Juliana e Rafael',
    role: 'Pais do Bernardo (Batizado)',
    childAge: '6 meses',
    content: 'Encomendamos a roupa de batizado do Bernardo e superou todas as expectativas. O linho é de primeiríssima qualidade e o bordado com as iniciais dele deu um toque de exclusividade emocionante.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Fernanda Vasconcelos',
    role: 'Mãe da Sofia (Daminha)',
    childAge: '5 anos',
    content: 'A Sofia foi daminha de casamento e usou o modelo Jardim Encantado. Ela não queria tirar o vestido de jeito nenhum de tão confortável que era! A Aline é um amor de pessoa e extremamente profissional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  }
];

export const STEPS = [
  {
    number: '01',
    title: 'Escolha ou Envie sua Ideia',
    description: 'Navegue pelo nosso catálogo, selecione um modelo de inspiração ou envie uma foto/referência do que você sonhou para o seu pequeno.'
  },
  {
    number: '02',
    title: 'Medidas e Preferências',
    description: 'Conversamos pelo WhatsApp para alinhar a idade, a estatura da criança, ajustes de tamanho e a data do evento especial.'
  },
  {
    number: '03',
    title: 'Tecidos e Detalhes',
    description: 'Aline auxilia na escolha dos melhores tecidos (antialérgicos, linho puro, algodão sateen) e detalhes como cores e bordados.'
  },
  {
    number: '04',
    title: 'Produção Artesanal',
    description: 'Cada peça é cortada e costurada à mão com todo o rigor de alfaiataria infantil e muito carinho em cada ponto.'
  },
  {
    number: '05',
    title: 'Entrega com Afeto',
    description: 'Sua encomenda chega embalada com perfume delicado e pronto para vestir seu filho(a) em momentos inesquecíveis.'
  }
];
