import type { Dispatch } from "react";

import type { SortableActionType } from "./Sortable.reducer";

export enum SortableValues {
  Rating,
  Price,
}

export interface SortableProps {
  field: SortableValues;
  onChange: Dispatch<SortableActionType>;
}
