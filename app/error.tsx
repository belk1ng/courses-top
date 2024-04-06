"use client";

import type { FC } from "react";
import { useEffect } from "react";

import Button from "@/components/button";
import Heading from "@/components/heading";

import classes from "./Layout.module.css";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: VoidFunction;
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={classes.error}>
      <Heading as="h1" className={classes.error__title}>
        Произошла непредвиденная ошибка :(
      </Heading>
      <Button onClick={() => reset()} variant="contained">
        Попробуйте еще раз
      </Button>
    </section>
  );
};

export default Error;
