import cn from "classnames";
import type { FC } from "react";

import classes from "./VisuallyHidden.module.css";
import type { VisuallyHiddenProps } from "./VisuallyHidden.props";

const VisuallyHidden: FC<VisuallyHiddenProps> = ({ children, ...rest }) => {
  return (
    <span className={cn(classes.vh)} {...rest}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
