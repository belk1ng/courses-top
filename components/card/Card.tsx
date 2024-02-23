import cn from "classnames";
import type { FC } from "react";

import classes from "./Card.module.css";
import type { CardProps } from "./Card.props";

const Card: FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn(classes.card, className)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
