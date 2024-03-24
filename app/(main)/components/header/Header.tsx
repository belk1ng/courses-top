"use client";

import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import Button from "@/components/button";
import VisuallyHidden from "@/components/visually-hidden";
import MenuIcon from "@/public/headerMenu.svg";

import classes from "./Header.module.css";
import type { HeaderProps } from "./Header.props";

const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  return (
    <header className={cn(classes.header, className)} {...rest}>
      <Link href="/">
        <Image alt="Logo" height="44" src="/logo.svg" width="159" />
      </Link>
      <Button variant="icon">
        <VisuallyHidden>Открыть меню</VisuallyHidden>
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
