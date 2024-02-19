import cn from "classnames";
import Link from "next/link";
import type { FC } from "react";

import TopPageApi, { RootCategories } from "@/lib/TopPage.api";
import type { Page } from "@/typings/menu";

import { NAV_CONFIG } from "./nav.config";
import classes from "./Nav.module.css";
import type { NavProps } from "./Nav.props";

const Nav: FC<NavProps> = async () => {
  const menu = await TopPageApi.getSubmenuByCategory(RootCategories.Courses);

  const endpointsRenderer = (endpoints: Page[]) => (
    <ul className={classes.nav__list}>
      {endpoints.map((endpoint) => (
        <li
          className={cn(classes.nav__item, classes["nav__item--endpoint"])}
          key={endpoint._id}
        >
          <Link
            className={classes.nav__label}
            href={`/courses/${endpoint.alias}`}
          >
            {endpoint.category}
          </Link>
        </li>
      ))}
    </ul>
  );

  const subMenuRenderer = () => {
    return (
      menu &&
      menu.length > 0 && (
        <ul className={classes.nav__list}>
          {menu.map((item) => (
            <li
              className={cn(classes.nav__item, classes["nav__item--category"])}
              key={item._id.secondCategory}
            >
              <span className={classes.nav__label}>
                {item._id.secondCategory}
              </span>
              {endpointsRenderer(item.pages)}
            </li>
          ))}
        </ul>
      )
    );
  };

  const rootMenuRenderer = (
    <ul className={classes.nav__list}>
      {NAV_CONFIG?.map((rootItem, index) => (
        <li
          className={cn(classes.nav__item, classes["nav__item--root"])}
          key={rootItem.categoryId}
        >
          <span className={classes.nav__label}>
            {rootItem.icon}
            {rootItem.label}
          </span>
          {index == 0 && subMenuRenderer()}
        </li>
      ))}
    </ul>
  );

  return <nav className={classes.nav}>{rootMenuRenderer}</nav>;
};

export default Nav;
