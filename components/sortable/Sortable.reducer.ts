import type { Product } from "@/typings/product";

import { SortableValues } from "./Sortable.props";

export interface SortableState {
  order: SortableValues;
  products: Product[];
}

export type SortableActionType =
  | { type: "sortable/setRating"; payload: SortableValues }
  | { type: "sortable/setPrice"; payload: SortableValues };

export const initialState: SortableState = {
  order: SortableValues.Rating,
  products: [],
};

export const init = (products: Product[]) => ({ ...initialState, products });

const reducer = (state: typeof initialState, action: SortableActionType) => {
  switch (action.type) {
    case "sortable/setRating":
      return {
        order: action.payload,
        products: state.products.sort(
          (a, b) => a.initialRating - b.initialRating
        ),
      };
    case "sortable/setPrice": {
      return {
        order: action.payload,
        products: state.products.sort((a, b) => a.price - b.price),
      };
    }
    default:
      throw new Error("Action not found...");
  }
};

export default reducer;
