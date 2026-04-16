const menu = [
  // Espresso Classics
  {
    id: 1,
    category: "Espresso Classics",
    name: "Single Origin Espresso",
    description: "A clean, focused shot — bright acidity, stone fruit finish, no milk needed.",
    price: 3.5,
    tags: ["Bold", "Fruity"],
    emoji: "☕",
  },
  {
    id: 2,
    category: "Espresso Classics",
    name: "Cortado",
    description: "Equal parts espresso and warm whole milk. Balanced, silky, just right.",
    price: 4.25,
    tags: ["Balanced", "Smooth"],
    emoji: "🥛",
  },
  {
    id: 3,
    category: "Espresso Classics",
    name: "Classic Cappuccino",
    description: "Velvety micro-foam, rich espresso, a dusting of cacao. A daily ritual.",
    price: 4.75,
    tags: ["Creamy", "Classic"],
    emoji: "☕",
  },
  {
    id: 4,
    category: "Espresso Classics",
    name: "Flat White",
    description: "Ristretto shots meet steamed whole milk. Dense, sweet, dangerously drinkable.",
    price: 4.75,
    tags: ["Strong", "Velvety"],
    emoji: "☕",
  },

  // Pour-Overs
  {
    id: 5,
    category: "Pour-Overs",
    name: "Ethiopian Yirgacheffe",
    description: "Jasmine florals, blueberry sweetness, and a clean tea-like body.",
    price: 5.5,
    tags: ["Floral", "Light"],
    emoji: "🌸",
  },
  {
    id: 6,
    category: "Pour-Overs",
    name: "Colombian Huila",
    description: "Red apple, caramel, and a lingering brown sugar finish.",
    price: 5.0,
    tags: ["Fruity", "Sweet"],
    emoji: "🍎",
  },
  {
    id: 7,
    category: "Pour-Overs",
    name: "Sumatra Mandheling",
    description: "Dark chocolate, cedar, and earthy spice — full-bodied and brooding.",
    price: 5.0,
    tags: ["Earthy", "Bold"],
    emoji: "🌿",
  },

  // Cold & Iced
  {
    id: 8,
    category: "Cold & Iced",
    name: "Cold Brew Reserve",
    description: "24-hour steep, never bitter. Chocolate and walnut, over ice.",
    price: 5.5,
    tags: ["Smooth", "Chilled"],
    emoji: "🧊",
  },
  {
    id: 9,
    category: "Cold & Iced",
    name: "Iced Oat Latte",
    description: "Silky oat milk, double ristretto, served long and cold.",
    price: 5.75,
    tags: ["Creamy", "Dairy-Free"],
    emoji: "🌾",
  },
  {
    id: 10,
    category: "Cold & Iced",
    name: "Honey Cold Foam",
    description: "Cold brew crowned with wildflower honey cold foam. Effortlessly elegant.",
    price: 6.25,
    tags: ["Sweet", "Seasonal"],
    emoji: "🍯",
  },

  // Specialty Drinks
  {
    id: 11,
    category: "Specialty",
    name: "Cardamom Latte",
    description: "House-pulled espresso, steamed milk, and a swirl of green cardamom syrup.",
    price: 5.5,
    tags: ["Spiced", "Warming"],
    emoji: "🌿",
  },
  {
    id: 12,
    category: "Specialty",
    name: "Café de Olla",
    description: "Inspired by Mexican tradition — cinnamon, piloncillo, and dark roast.",
    price: 5.25,
    tags: ["Spiced", "Rich"],
    emoji: "🪵",
  },
];

export const categories = [...new Set(menu.map((i) => i.category))];
export default menu;
