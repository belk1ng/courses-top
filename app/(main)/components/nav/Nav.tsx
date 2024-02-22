import type { FC } from "react";

import TopPageApi from "@/lib/TopPage.api";

import NavList from "./nav-list";
import { NAV_CONFIG } from "./nav.config";
import classes from "./Nav.module.css";
import type { NavProps } from "./Nav.props";

const Nav: FC<NavProps> = async () => {
  const menu = await Promise.all(
    NAV_CONFIG.map(({ categoryId }) =>
      TopPageApi.getSubmenuByCategory(categoryId)
    )
  );

  const menuConfig = menu.map((rootCategory, index) => ({
    isOpen: false,
    alias: NAV_CONFIG[index].alias,
    icon: NAV_CONFIG[index].icon,
    label: NAV_CONFIG[index].label,
    subCategories: (rootCategory ?? [])?.map((menuItem) => ({
      ...menuItem,
      isOpen: false,
    })),
  }));

  return (
    <nav className={classes.nav}>
      <NavList menuConfiguration={menuConfig} />
    </nav>
  );
};

export default Nav;
