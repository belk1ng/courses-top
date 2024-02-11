import type { HTMLAttributes } from "react";

type TagSize = "small" | "medium";
type TagVariant = "link" | "badge";
type TagColor = "success" | "error" | "primary" | "default";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: TagSize;
  variant?: TagVariant;
  color?: TagColor;
  href?: string;
}
