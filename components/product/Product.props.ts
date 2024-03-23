import type { HTMLAttributes } from "react";

import type { Product } from "@/typings/product";

export interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  record: Product;
}
