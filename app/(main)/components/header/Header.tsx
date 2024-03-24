"use client";

import cn from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type { FC } from "react";

import Button from "@/components/button";
import VisuallyHidden from "@/components/visually-hidden";
import MenuIconClose from "@/public/headerClose.svg";
import MenuIcon from "@/public/headerMenu.svg";

import classes from "./Header.module.css";
import type { HeaderProps } from "./Header.props";
import layoutClasses from "../../Layout.module.css";

const Header: FC<HeaderProps> = ({ className, children, ...rest }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const className = layoutClasses["layout--noscroll"];
    document.body.classList.toggle(className, menuVisible);
  }, [menuVisible]);

  useEffect(() => {
    setMenuVisible(false);
  }, [pathname]);

  const handleMenuOpen = () => {
    setMenuVisible(true);
  };
  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 35,
      },
    },
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        stiffness: 35,
      },
    },
  };

  return (
    <header className={cn(classes.header, className)} {...rest}>
      <Link className={classes.header__logo} href="/">
        <Image alt="Logo" height="44" src="/logo.svg" width="159" />
      </Link>
      <Button
        className={classes.header__button}
        onClick={menuVisible ? handleMenuClose : handleMenuOpen}
        variant="icon"
      >
        <VisuallyHidden>
          {menuVisible ? "Открыть меню" : "Скрыть меню"}
        </VisuallyHidden>
        {menuVisible ? <MenuIconClose /> : <MenuIcon />}
      </Button>
      <motion.div
        animate={menuVisible ? "visible" : "hidden"}
        className={classes.header__menu}
        initial="hidden"
        variants={variants}
      >
        {children}
      </motion.div>
    </header>
  );
};

export default Header;
