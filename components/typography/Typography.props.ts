import type { HTMLAttributes } from "react";

type TypographySize = 14 | 16 | 18;

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TypographySize;
}
