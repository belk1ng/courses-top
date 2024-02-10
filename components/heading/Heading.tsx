import cn from "classnames";
import type { FC } from "react";
import { createElement } from "react";

import classes from "./Heading.module.css";
import type { HeadingProps } from "./Heading.props";

const Heading: FC<HeadingProps> = ({
  as = "h2",
  className = "",
  children,
  ...rest
}) => {
  return createElement(
    as,
    {
      className: cn(
        classes.heading,
        {
          [classes["heading--large"]]: as === "h1",
          [classes["heading--medium"]]: as === "h2",
          [classes["heading--small"]]: as === "h3",
        },
        className
      ),
      ...rest,
    },
    children
  );
};

export default Heading;
