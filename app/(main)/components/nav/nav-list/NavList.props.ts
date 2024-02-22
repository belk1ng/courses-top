import type { HTMLAttributes, ReactNode } from "react";

import type { SubCategoryExtended } from "@/typings/menu";

export interface RootCategory {
  isOpen: boolean;
  alias: string;
  label: string;
  icon: ReactNode;
  subCategories: SubCategoryExtended[];
}

export interface NavListProps extends HTMLAttributes<HTMLUListElement> {
  menuConfiguration: RootCategory[];
}
