import { HTMLAttributes } from "react";

type HeadingVariant = "h1" | "h2" | "h3";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingVariant;
}
