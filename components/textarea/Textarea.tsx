import cn from "classnames";
import type { FC } from "react";

import classes from "./Textarea.module.css";
import type { TextareaProps } from "./Textarea.props";

const Textarea: FC<TextareaProps> = ({ className, rows = 4, ...rest }) => {
  return (
    <textarea className={cn(classes.area, className)} rows={rows} {...rest} />
  );
};

export default Textarea;
