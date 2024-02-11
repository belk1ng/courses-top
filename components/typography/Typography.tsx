import cn from "classnames";
import type { FC } from "react";

import classes from "./Typography.module.css";
import type { TypographyProps } from "./Typography.props";

const Typography: FC<TypographyProps> = ({
  size = 16,
  className,
  children,
  ...rest
}) => {
  return (
    <p
      className={cn(
        classes.typography,
        {
          [classes["typography--14"]]: size === 14,
          [classes["typography--16"]]: size === 16,
          [classes["typography--18"]]: size === 18,
        },
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Typography;
