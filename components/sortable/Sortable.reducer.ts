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

const sortByRating = (records: Product[]) => {
  return records.sort((a, b) => (b.reviewAvg ?? 0) - (a.reviewAvg ?? 0));
};

const sortByPrice = (records: Product[]) => {
  return records.sort((a, b) => a.price - b.price);
};

export const init = (products: Product[]) => ({
  ...initialState,
  products: sortByRating(products),
});

const reducer = (state: typeof initialState, action: SortableActionType) => {
  switch (action.type) {
    case "sortable/setRating":
      return {
        order: action.payload,
        products: sortByRating(state.products),
      };
    case "sortable/setPrice": {
      return {
        order: action.payload,
        products: sortByPrice(state.products),
      };
    }
    default:
      throw new Error("Action not found...");
  }
};

export default reducer;
