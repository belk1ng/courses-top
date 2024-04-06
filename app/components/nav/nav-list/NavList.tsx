"use client";

import cn from "classnames";
import { motion } from "framer-motion";
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
    handleRootCategoryKeyDown,
    handleSubCategoryKeyDown,
    handleEndpointKeyDown,
  } = useMenu(menuConfiguration);

  const subcategoryVariants = {
    closed: {},
    opened: {},
  };

  const endpointContainerVariants = {
    closed: {
      height: 0,
      overflow: "hidden",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.025,
      },
    },
    opened: {
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.025,
      },
    },
  };

  const endpointVariants = {
    closed: {
      opacity: 0,
      x: -30,
    },
    opened: {
      opacity: 1,
      x: 0,
    },
  };

  const renderEndpoints = (endpoints: Endpoint[], isOpen: boolean) => (
    <motion.ul
      className={classes.nav__list}
      variants={endpointContainerVariants}
    >
      {endpoints.map((endpoint) => (
        <motion.li
          className={cn(classes.nav__item, classes["nav__item--endpoint"], {
            [classes["nav__item--active"]]: activeLink === endpoint.alias,
          })}
          key={endpoint._id}
          onClick={(event) => event.stopPropagation()}
          variants={endpointVariants}
        >
          <Link
            className={classes.nav__label}
            href={`/resource/${endpoint.alias}`}
            onKeyDown={(event) =>
              handleEndpointKeyDown(event, `/resource/${endpoint.alias}`)
            }
            tabIndex={isOpen ? 0 : -1}
          >
            {endpoint.category}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );

  const renderSubCategories = (
    rootCategoryAlias: string,
    subMenu: SubCategoryExtended[]
  ) => {
    return (
      subMenu &&
      subMenu.length > 0 && (
        <ul className={classes.nav__list}>
          {subMenu.map((item) => {
            const isOpen =
              item.isOpen ||
              activeSubCategory?._id?.secondCategory ===
                item._id.secondCategory;

            return (
              <motion.li
                animate={isOpen ? "opened" : "closed"}
                className={cn(
                  classes.nav__item,
                  classes["nav__item--category"]
                )}
                initial={isOpen ? "opened" : "closed"}
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
                variants={subcategoryVariants}
              >
                <span
                  className={classes.nav__label}
                  onKeyDown={
                    activeSubCategory?._id?.secondCategory !==
                    item._id.secondCategory
                      ? (event) =>
                          handleSubCategoryKeyDown(
                            event,
                            rootCategoryAlias,
                            item._id.secondCategory
                          )
                      : undefined
                  }
                  tabIndex={0}
                >
                  {item._id.secondCategory}
                </span>
                {renderEndpoints(item.pages, isOpen)}
              </motion.li>
            );
          })}
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
          <span
            className={classes.nav__label}
            onKeyDown={
              activeRootCategory?.alias !== rootItem.alias
                ? (event) => handleRootCategoryKeyDown(event, rootItem.alias)
                : undefined
            }
            tabIndex={0}
          >
            {rootItem.icon}
            {rootItem.label}
          </span>
          {renderSubCategories(rootItem.alias, rootItem.subCategories)}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
