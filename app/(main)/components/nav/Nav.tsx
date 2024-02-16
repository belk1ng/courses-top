import cn from "classnames";
import type { FC } from "react";

import TopPageApi, { RootCategories } from "@/lib/TopPage.api";
import { Page } from "@/typings/menu";

import BooksIcon from "./icons/Books";
import CoursesIcon from "./icons/Courses";
import ProductsIcon from "./icons/Products";
import ServicesIcon from "./icons/Services";
import classes from "./Nav.module.css";
import type { NavProps } from "./Nav.props";

const NAV_CONFIG = [
  {
    label: "Курсы",
    route: "courses",
    categoryId: RootCategories.Courses,
    icon: <CoursesIcon />,
  },
  {
    label: "Сервисы",
    route: "services",
    categoryId: RootCategories.Services,
    icon: <ServicesIcon />,
  },
  {
    label: "Книги",
    route: "books",
    categoryId: RootCategories.Books,
    icon: <BooksIcon />,
  },
  {
    label: "Товары",
    route: "products",
    categoryId: RootCategories.Products,
    icon: <ProductsIcon />,
  },
];

const Nav: FC<NavProps> = async () => {
  const menu = await TopPageApi.getSubmenuByCategory(RootCategories.Courses);

  const endpointsRenderer = (endpoints: Page[]) => (
    <ul className={classes.nav__list}>
      {endpoints.map((endpoint) => (
        <li
          className={cn(classes.nav__item, classes["nav__item--endpoint"])}
          key={endpoint._id}
        >
          <span className={classes.nav__label}>{endpoint.category}</span>
        </li>
      ))}
    </ul>
  );

  const subMenuRenderer = menu && (
    <ul className={classes.nav__list}>
      {menu.map((item) => (
        <li
          className={cn(classes.nav__item, classes["nav__item--category"])}
          key={item._id.secondCategory}
        >
          <span className={classes.nav__label}>{item._id.secondCategory}</span>
          {endpointsRenderer(item.pages)}
        </li>
      ))}
    </ul>
  );

  const rootMenuRenderer = (
    <ul className={classes.nav__list}>
      {NAV_CONFIG?.map((rootItem) => (
        <li
          className={cn(classes.nav__item, classes["nav__item--root"])}
          key={rootItem.categoryId}
        >
          <span className={classes.nav__label}>
            {rootItem.icon}
            {rootItem.label}
          </span>
          {rootItem.categoryId === RootCategories.Courses && subMenuRenderer}
        </li>
      ))}
    </ul>
  );

  return <nav className={classes.nav}>{rootMenuRenderer}</nav>;
};

export default Nav;
