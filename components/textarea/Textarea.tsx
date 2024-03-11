import cn from "classnames";
import { forwardRef } from "react";

import Typography from "@/components/typography";

import classes from "./Textarea.module.css";
import type { TextareaProps } from "./Textarea.props";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...rest }, ref) => {
    return (
      <label className={className}>
        <textarea
          className={cn(classes.area__field, {
            [classes["area__field--error"]]: error,
          })}
          ref={ref}
          rows={rows}
          {...rest}
        />
        {error && (
          <Typography className={classes.area__error} size={14}>
            {error}
          </Typography>
        )}
      </label>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
