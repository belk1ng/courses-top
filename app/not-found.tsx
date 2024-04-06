import Link from "next/link";
import type { FC } from "react";

import Button from "@/components/button";
import Heading from "@/components/heading";
import Typography from "@/components/typography";

import classes from "./Layout.module.css";

const NotFound: FC = () => {
  return (
    <section className={classes.error}>
      <Heading as="h1">Кажется, вы потерялись...</Heading>
      <Typography size={16}>
        Не можем найти страницу по вашему запросу
      </Typography>
      <Link href="/">
        <Button>Вернуться на главную</Button>
      </Link>
    </section>
  );
};

export default NotFound;
