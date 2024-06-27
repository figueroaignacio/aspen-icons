export const navigation: { title: string; href: string }[] = [
  { title: "Productos", href: "/products" },
  { title: "Blog", href: "/blog" },
];

export const categories: {
  title: string;
  href?: string;
  description: string;
  value: string;
  slug: string;
}[] = [
  {
    value: "item-1",
    title: "Todas las categorías",
    slug: "categories",
    description:
      "Mirá todas las categorías disponibles que Sneakerf tiene para ofrecerte",
  },
  {
    value: "item-2",
    title: "Nike",
    slug: "nike",
    description: "Innovación y rendimiento en cada diseño.",
  },
  {
    value: "item-3",
    title: "Adidas",
    slug: "adidas",
    description: "Estilo icónico y versatilidad en cada paso.",
  },
  {
    value: "item-4",
    title: "New Balance",
    slug: "new-balance",
    description: "Comodidad y rendimiento se fusionan.",
  },
  {
    value: "item-5",
    title: "Vans",
    slug: "vans",
    description: "Autenticidad y estilo en cada diseño.",
  },
  {
    value: "item-6",
    title: "Puma",
    slug: "puma",
    description: "Innovación y estilo urbano se unen.",
  },
];
