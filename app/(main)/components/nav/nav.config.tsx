import { RootCategories } from "@/lib/TopPage.api";

import BooksIcon from "./icons/Books";
import CoursesIcon from "./icons/Courses";
import ProductsIcon from "./icons/Products";
import ServicesIcon from "./icons/Services";

export const ROOT_PATHS = {
  [RootCategories.Courses]: "courses",
  [RootCategories.Services]: "services",
  [RootCategories.Books]: "books",
  [RootCategories.Products]: "products",
};

export const NAV_CONFIG = [
  {
    label: "Курсы",
    categoryId: RootCategories.Courses,
    icon: <CoursesIcon />,
    alias: ROOT_PATHS[RootCategories.Courses],
  },
  {
    label: "Сервисы",
    categoryId: RootCategories.Services,
    icon: <ServicesIcon />,
    alias: ROOT_PATHS[RootCategories.Services],
  },
  {
    label: "Книги",
    categoryId: RootCategories.Books,
    icon: <BooksIcon />,
    alias: ROOT_PATHS[RootCategories.Books],
  },
  {
    label: "Товары",
    categoryId: RootCategories.Products,
    icon: <ProductsIcon />,
    alias: ROOT_PATHS[RootCategories.Products],
  },
];
