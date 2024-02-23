import cn from "classnames";
import Link from "next/link";
import type { FC } from "react";

import classes from "./Tag.module.css";
import type { TagProps } from "./Tag.props";

const Tag: FC<TagProps> = ({
  size = "small",
  color = "default",
  variant = "badge",
  href = "#",
  children,
  className,
  ...rest
}) => {
  const classNameComputed = cn(
    classes.tag,
    {
      [classes["tag--link"]]: variant === "link",
      [classes["tag--small"]]: size === "small",
      [classes["tag--medium"]]: size === "medium",
      [classes["tag--default"]]: color === "default",
      [classes["tag--success"]]: color === "success",
      [classes["tag--error"]]: color === "error",
      [classes["tag--primary"]]: color === "primary",
      [classes["tag--info"]]: color === "info",
    },
    className
  );

  if (variant === "badge") {
    return (
      <div className={classNameComputed} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <Link className={classNameComputed} href={href}>
      {children}
    </Link>
  );
};

export default Tag;
