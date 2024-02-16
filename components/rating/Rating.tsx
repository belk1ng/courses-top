"use client";

import cn from "classnames";
import type { FC, KeyboardEvent } from "react";
import { useState, useEffect } from "react";

import Star from "@/assets/icons/Star.svg";
import VisuallyHidden from "@/components/visually-hidden";

import classes from "./Rating.module.css";
import type { RatingProps } from "./Rating.props";

const Rating: FC<RatingProps> = ({
  rating = 0,
  setRating,
  ratingMax = 5,
  readonly = false,
  ...rest
}) => {
  const [localRating, setLocalRating] = useState(rating);
  useEffect(() => {
    setLocalRating(rating);
  }, [rating]);
  const handlechangerating = (newRating: number) => {
    setLocalRating(newRating);
    setRating && setRating(newRating);
  };

  const onkeydown = (
    event: KeyboardEvent<HTMLButtonElement>,
    newRating: number
  ) => {
    if ((event.code === "Space" || event.code === "Enter") && !readonly) {
      handleChangeRating(newRating);
    }
  };

  const onclick = (newRating: number) => {
    if (readonly) {
      return;
    }

    handleChangeRating(newRating);
  };

  return (
    <div {...rest}>
      {new Array(ratingMax).fill(null).map((_, index) => (
        <button
          className={cn(classes.star, {
            [classes["star--active"]]: index + 1 <= localRating,
            [classes["star--readonly"]]: readonly,
          })}
          key={index}
          onClick={() => onClick(index + 1)}
          onKeyDown={(event) => onKeyDown(event, index + 1)}
          tabIndex={readonly ? -1 : 0}
          type="button"
        >
          <VisuallyHidden>{`Оценить на: ${index + 1} из ${ratingMax}`}</VisuallyHidden>
          <Star />
        </button>
      ))}
    </div>
  );
};

export default Rating;
