import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import Search from "@/app/(main)/resource/[alias]/components/search";

import classes from "./Aside.module.css";
import type { AsideProps } from "./Aside.props";
import Nav from "../nav";

const Aside: FC<AsideProps> = ({ className, ...props }) => {
  return (
    <aside className={cn(classes.aside, className)} {...props}>
      <Link href="/">
        <Image alt="Logo" height="44" src="/logo.svg" width="159" />
      </Link>
      <Search />
      <Nav />
    </aside>
  );
};

export default Aside;
