import cn from "classnames";
import { forwardRef } from "react";

import Typography from "@/components/typography";

import classes from "./Input.module.css";
import type { InputProps } from "./Input.props";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...rest }, ref) => {
    return (
      <label className={className}>
        <input
          className={cn(classes.input__field, {
            [classes["input__field--error"]]: error,
          })}
          ref={ref}
          {...rest}
        />
        {error && (
          <Typography className={classes.input__error} size={14}>
            {error}
          </Typography>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
