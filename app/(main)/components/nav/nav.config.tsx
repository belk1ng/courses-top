import BooksIcon from "@/app/(main)/components/nav/icons/Books";
import CoursesIcon from "@/app/(main)/components/nav/icons/Courses";
import ProductsIcon from "@/app/(main)/components/nav/icons/Products";
import ServicesIcon from "@/app/(main)/components/nav/icons/Services";
import { RootCategories } from "@/lib/TopPage.api";

export const ROOT_PATHS = {
  [RootCategories.Courses]: "courses",
  [RootCategories.Services]: "services",
  [RootCategories.Books]: "books",
  [RootCategories.Products]: "products",
};

export const ROOT_PREFIXES = Object.values(ROOT_PATHS);

export const NAV_CONFIG = [
  {
    label: "Курсы",
    categoryId: RootCategories.Courses,
    icon: <CoursesIcon />,
    route: ROOT_PATHS[RootCategories.Courses],
  },
  {
    label: "Сервисы",
    categoryId: RootCategories.Services,
    icon: <ServicesIcon />,
    route: ROOT_PATHS[RootCategories.Services],
  },
  {
    label: "Книги",
    categoryId: RootCategories.Books,
    icon: <BooksIcon />,
    route: ROOT_PATHS[RootCategories.Books],
  },
  {
    label: "Товары",
    categoryId: RootCategories.Products,
    icon: <ProductsIcon />,
    route: ROOT_PATHS[RootCategories.Products],
  },
];
