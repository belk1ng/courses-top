"use client";

import cn from "classnames";
import Link from "next/link";
import type { FC } from "react";

import useMenu from "@/hooks/useMenu";
import type { SubCategoryExtended, Endpoint } from "@/typings/menu";

import classes from "./NavList.module.css";
import type { NavListProps } from "./NavList.props";

const NavList: FC<NavListProps> = ({ menuConfiguration }) => {
  const {
    menu,
    activeRootCategory,
    activeSubCategory,
    activeLink,
    toggleRootCategory,
    toggleSubCategory,
  } = useMenu(menuConfiguration);

  const endpoints = (endpoints: Endpoint[]) => (
    <ul className={classes.nav__list}>
      {endpoints.map((endpoint) => (
        <li
          className={cn(classes.nav__item, classes["nav__item--endpoint"], {
            [classes["nav__item--active"]]: activeLink === endpoint.alias,
          })}
          key={endpoint._id}
          onClick={(event) => event.stopPropagation()}
        >
          <Link
            className={classes.nav__label}
            href={`/resource/${endpoint.alias}`}
          >
            {endpoint.category}
          </Link>
        </li>
      ))}
    </ul>
  );

  const subMenu = (
    rootCategoryAlias: string,
    subMenu: SubCategoryExtended[]
  ) => {
    return (
      subMenu &&
      subMenu.length > 0 && (
        <ul className={classes.nav__list}>
          {subMenu.map((item) => (
            <li
              className={cn(
                classes.nav__item,
                classes["nav__item--category"],
                item.isOpen ||
                  activeSubCategory?._id?.secondCategory ===
                    item._id.secondCategory
                  ? classes["nav__item--opened"]
                  : classes["nav__item--closed"]
              )}
              key={item._id.secondCategory}
              onClick={
                activeSubCategory?._id?.secondCategory !==
                item._id.secondCategory
                  ? (event) =>
                      toggleSubCategory(
                        event,
                        rootCategoryAlias,
                        item._id.secondCategory
                      )
                  : undefined
              }
            >
              <span className={classes.nav__label}>
                {item._id.secondCategory}
              </span>
              {endpoints(item.pages)}
            </li>
          ))}
        </ul>
      )
    );
  };

  return (
    <ul className={classes.nav__list}>
      {menu?.map((rootItem) => (
        <li
          className={cn(
            classes.nav__item,
            classes["nav__item--root"],
            {
              [classes["nav__item--active"]]:
                activeRootCategory?.alias === rootItem.alias,
            },
            rootItem.isOpen || activeRootCategory?.alias === rootItem.alias
              ? classes["nav__item--opened"]
              : classes["nav__item--closed"]
          )}
          key={rootItem.alias}
          onClick={
            activeRootCategory?.alias !== rootItem.alias
              ? () => toggleRootCategory(rootItem.alias)
              : undefined
          }
        >
          <span className={classes.nav__label}>
            {rootItem.icon}
            {rootItem.label}
          </span>
          {subMenu(rootItem.alias, rootItem.subCategories)}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
