"use client";

import cn from "classnames";
import { motion, MotionProps } from "framer-motion";
import type { FC } from "react";

import classes from "./Button.module.css";
import type { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps & MotionProps> = ({
  variant = "contained",
  type = "button",
  startIcon,
  endIcon,
  children,
  className = "",
  ...rest
}) => {
  return (
    <motion.button
      className={cn(
        classes.button,
        {
          [classes["button--contained"]]: variant === "contained",
          [classes["button--outlined"]]: variant === "outlined",
        },
        className
      )}
      transition={{ duration: 0.01 }}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </motion.button>
  );
};

export default Button;
