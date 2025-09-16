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
    title: "Paginas",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Tienda con Barra Lateral",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Tienda sin Barra Lateral",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Carrito",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Favoritos",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Contacto",
        newTab: false,
        path: "/contact",
      },
    ],
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
      {
        id: 73,
        title: "Blog detalles con Barra Lateral",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        title: "Blog detalles",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
