import cn from "classnames";
import { Roboto } from "next/font/google";
import "../globals.css";
import type { FC, ReactNode } from "react";

import Aside from "@/app/(main)/components/aside";
import Footer from "@/app/(main)/components/footer";
import Header from "@/app/(main)/components/header";

import classes from "./Layout.module.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

interface props {
  children: reactnode | reactnode[];
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="ru">
    <body className={cn(roboto.className, classes.layout)}>
      <Header className={classes.layout__header} />
      <Aside className={classes.layout__aside} />
      <main className={classes.layout__main}>{children}</main>
      <Footer className={classes.layout__footer} />
    </body>
  </html>
);RootLayout

export default RootLayout;
