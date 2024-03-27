"use client";

import cn from "classnames";
import type { ForwardedRef, KeyboardEvent } from "react";
import { useState, useEffect, forwardRef } from "react";

import Star from "@/assets/icons/Star.svg";
import Typography from "@/components/typography";
import VisuallyHidden from "@/components/visually-hidden";

import classes from "./Rating.module.css";
import type { RatingProps } from "./Rating.props";

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    { rating = 0, setRating, ratingMax = 5, readonly = false, error, ...rest },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [localRating, setLocalRating] = useState(rating);

    useEffect(() => {
      setLocalRating(rating);
    }, [rating]);

    const handleChangeRating = (newRating: number) => {
      setLocalRating(newRating);
      setRating && setRating(newRating);
    };

    const onKeyDown = (
      event: KeyboardEvent<HTMLButtonElement>,
      newRating: number
    ) => {
      if ((event.code === "Space" || event.code === "Enter") && !readonly) {
        handleChangeRating(newRating);
      }
    };

    const onClick = (newRating: number) => {
      if (readonly) {
        return;
      }

      handleChangeRating(newRating);
    };

    return (
      <div {...rest} ref={ref}>
        <VisuallyHidden>{`Рейтинг: ${localRating} из ${ratingMax}`}</VisuallyHidden>
        {new Array(ratingMax).fill(null).map((_, index) => (
          <button
            className={cn(classes.star, {
              [classes["star--active"]]: index + 1 <= localRating,
              [classes["star--readonly"]]: readonly,
              [classes["star--error"]]: error,
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
        {error && (
          <Typography className={classes.rating__error} size={14}>
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

Rating.displayName = "Rating";

export default Rating;
