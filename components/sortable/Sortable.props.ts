import type { Dispatch, HTMLAttributes } from "react";

import type { SortableActionType } from "./Sortable.reducer";

export enum SortableValues {
  Rating,
  Price,
}

export interface SortableProps extends HTMLAttributes<HTMLUListElement> {
  field: SortableValues;
  onChangeField: Dispatch<SortableActionType>;
}
