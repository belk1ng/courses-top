import type { HTMLAttributes } from "react";

import type { Product } from "@/typings/product";

export interface ReviewsProps extends HTMLAttributes<HTMLDivElement> {
  records: Product["reviews"];
}
