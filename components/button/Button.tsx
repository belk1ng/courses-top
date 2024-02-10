import cn from "classnames";
import type { FC } from "react";

import classes from "./Button.module.css";
import type { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({
  variant = "contained",
  type = "button",
  startIcon,
  endIcon,
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={cn(
        classes.button,
        {
          [classes["button--contained"]]: variant === "contained",
          [classes["button--outlined"]]: variant === "outlined",
        },
        className
      )}
      type={type}
      {...rest}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

export default Button;
