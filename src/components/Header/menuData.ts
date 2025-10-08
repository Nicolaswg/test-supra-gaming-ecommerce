import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Popular",
    newTab: false,
    path: "/popular?sort=popular",
  },
  {
    id: 2,
    title: "Tienda",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Contacto",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "Carrito",
    newTab: false,
    path: "/cart",
  },
  {
    id: 7,
    title: "blogs",
    newTab: false,
    path: "/blogs",
    submenu: [
      {
        id: 71,
        title: "Blog Cuadrícula con Barra Lateral",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Blog Cuadrícula",
        newTab: false,
        path: "/blogs/blog-grid",
      },
    ],
  },
];
