import type { Dispatch, HTMLAttributes } from "react";

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  rating?: number;
  setRating?: Dispatch<number>;
  ratingMax?: number;
  readonly?: boolean;
  error?: string;
}
