import cn from "classnames";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import type { FC, ReactNode } from "react";

import Aside from "@/app/components/aside";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

import classes from "./Layout.module.css";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
  };
};

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

interface Props {
  children: ReactNode | ReactNode[];
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="ru">
    <body className={cn(roboto.className, classes.layout)}>
      <Header className={classes.layout__header}>
        <Aside />
      </Header>
      <Aside className={classes.layout__aside} />
      <main className={classes.layout__main}>{children}</main>
      <Footer className={classes.layout__footer} />
    </body>
  </html>
);

export default RootLayout;
