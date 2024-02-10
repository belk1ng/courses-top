import { Roboto } from "next/font/google";
import "./globals.css";
import type { FC, ReactNode } from "react";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

interface Props {
  children: ReactNode | ReactNode[];
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="ru">
    <body className={roboto.className}>{children}</body>
  </html>
);

export default RootLayout;
