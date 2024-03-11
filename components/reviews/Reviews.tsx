import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import type { FC } from "react";

import Card from "@/components/card";
import Rating from "@/components/rating";
import ReviewForm from "@/components/review-form";
import Typography from "@/components/typography";

import classes from "./Reviews.module.css";
import type { ReviewsProps } from "./Reviews.props";

const Reviews: FC<ReviewsProps> = ({
  records,
  className,
  productId,
  ...rest
}) => {
  return (
    <Card className={cn(classes.reviews, className)} {...rest}>
      {records.map((review) => (
        <div className={classes.review} key={review._id}>
          <Image
            alt=""
            className={classes.review__image}
            height={30}
            src="/reviewUser.svg"
            width={30}
          />
          <Typography className={classes.review__name} size={14}>
            {review.name}
          </Typography>
          <Typography className={classes.review__title} size={14}>
            {review.title}
          </Typography>
          <Typography className={classes.review__date} size={14}>
            {format(review.createdAt, "d MMMM yyyy", { locale: ru })}
          </Typography>
          <Rating
            className={classes.review__rating}
            rating={review.rating}
            readonly
          />
          <Typography className={classes.review__description} size={14}>
            {review.description}
          </Typography>
          <div className={classes.review__divider} />
        </div>
      ))}
      <ReviewForm productId={productId} />
    </Card>
  );
};

export default Reviews;
