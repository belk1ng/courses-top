import cn from "classnames";
import Link from "next/link";
import type { FC } from "react";

import Typography from "@/components/typography";

import classes from "./Footer.module.css";
import type { FooterProps } from "./Footer.props";

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(classes.footer, className)} {...props}>
      <Typography className={classes.footer__typography} size={16}>
        {`OwlTop © 2020 - ${new Date().getFullYear()} Все права защищены`}
      </Typography>
      <Typography className={classes.footer__typography} size={16}>
        <Link className={classes.footer__link} href="#" target="_blank">
          Пользовательское соглашение
        </Link>
      </Typography>
      <Typography className={classes.footer__typography} size={16}>
        <Link className={classes.footer__link} href="#" target="_blank">
          Политика конфиденциальности
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
