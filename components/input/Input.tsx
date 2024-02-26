import cn from "classnames";
import type { FC } from "react";

import classes from "./Input.module.css";
import type { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({ className, ...rest }) => {
  return <input className={cn(classes.input, className)} {...rest} />;
};

export default Input;
