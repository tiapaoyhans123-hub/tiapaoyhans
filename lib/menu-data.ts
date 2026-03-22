export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Entradas
  {
    id: "empanada-pino",
    name: "Empanada de Pino",
    description:
      "Empanada horneada rellena de carne, cebolla, huevo, aceituna y pasas",
    price: 2500,
    image: "/empanadapino.jpg",
    category: "entradas",
    popular: true,
  },
  {
    id: "empanada-queso",
    name: "Empanada de Queso",
    description: "Empanada horneada rellena de queso derretido",
    price: 2200,
    image: "/empanadaqueso.jpg",
    category: "entradas",
  },
  {
    id: "sopaipillas",
    name: "Sopaipillas (6 unidades)",
    description:
      "Sopaipillas de zapallo fritas, crujientes por fuera y suaves por dentro",
    price: 3000,
    image: "/sopaipillas.jpg",
    category: "entradas",
  },
  {
    id: "sopaipillas-pasadas",
    name: "Sopaipillas Pasadas",
    description: "Sopaipillas bañadas en chancaca",
    price: 3500,
    image: "/sopaipillapasada.jpg",
    category: "entradas",
  },

  // Fondo
  {
    id: "cazuela-vacuno",
    name: "Cazuela de Vacuno",
    description: "Cazuela tradicional chilena",
    price: 6500,
    image: "/cazuelavacuno.jpg",
    category: "platos",
  },
  {
    id: "cazuela-pollo",
    name: "Cazuela de Pollo",
    description: "Cazuela con trutro de pollo",
    price: 5500,
    image: "/cazuelapollo.jpg",
    category: "platos",
  },
  {
    id: "pastel-choclo",
    name: "Pastel de Choclo",
    description: "Pastel tradicional chileno",
    price: 7000,
    image: "/pastelchoclo.jpg",
    category: "platos",
  },
  {
    id: "porotos",
    name: "Porotos Granados",
    description: "Porotos con choclo y albahaca",
    price: 5500,
    image: "/porotosgranados.jpg",
    category: "platos",
  },

  // Sandwiches
  {
    id: "completo",
    name: "Completo",
    description: "Completo italiano",
    price: 3500,
    image: "/completo.jpg",
    category: "sandwich",
  },
  {
    id: "completo-italiano",
    name: "Italiano",
    description: "Completo italiano",
    price: 3200,
    image: "/completoitaliano.jpg",
    category: "sandwich",
  },
  {
    id: "churrasco",
    name: "Churrasco Italiano",
    description: "Carne con palta y tomate",
    price: 5500,
    image: "/crurrascoitaliano.jpg", // ⚠️ tal cual tu archivo
    category: "sandwich",
  },
  {
    id: "lomito",
    name: "Lomito Italiano",
    description: "Lomo con palta",
    price: 5500,
    image: "/lomitoitaliano.jpg",
    category: "sandwich",
  },
  {
    id: "barros-luco",
    name: "Barros Luco",
    description: "Carne con queso",
    price: 5000,
    image: "/barrosluco.jpg",
    category: "sandwich",
  },
  {
    id: "barros-jarpa",
    name: "Barros Jarpa",
    description: "Jamón con queso",
    price: 4000,
    image: "/barrosjarpa.jpg",
    category: "sandwich",
  },

  // Extras
  {
    id: "papas",
    name: "Papas Fritas",
    description: "Papas crocantes",
    price: 3000,
    image: "/papasfritas.jpg",
    category: "extras",
  },
  {
    id: "ensalada",
    name: "Ensalada Chilena",
    description: "Tomate y cebolla",
    price: 2500,
    image: "/ensaladachilena.jpg",
    category: "extras",
  },
  {
    id: "arroz",
    name: "Arroz Graneado",
    description: "Arroz blanco",
    price: 2000,
    image: "/arrozgraneado.jpg",
    category: "extras",
  },

  // Bebidas
  {
    id: "bebida",
    name: "Bebida en Lata",
    description: "Bebidas varias",
    price: 1200,
    image: "/bebidaenlata.jpg",
    category: "bebidas",
  },
  {
    id: "jugo",
    name: "Jugo Natural",
    description: "Jugos naturales",
    price: 2500,
    image: "/jugonatural.jpg",
    category: "bebidas",
  },
  {
    id: "mote",
    name: "Mote con Huesillo",
    description: "Tradicional chileno",
    price: 2000,
    image: "/moteconhuesillo.jpg",
    category: "bebidas",
  },
  {
    id: "agua",
    name: "Agua Mineral",
    description: "Con o sin gas",
    price: 1000,
    image: "/aguamineral.jpg",
    category: "bebidas",
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CL")}`;
}