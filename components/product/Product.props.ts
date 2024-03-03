import type { HTMLAttributes } from "react";

import { Product } from "@/typings/product";

export interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  record: Product;
}
