"use client";

import cn from "classnames";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import type { FC } from "react";

import Button from "@/components/button";
import Card from "@/components/card";
import Heading from "@/components/heading";
import Rating from "@/components/rating";
import Reviews from "@/components/reviews";
import Tag from "@/components/tag";
import Typography from "@/components/typography";
import declinationByNumber from "@/utils/declinationByNumber";
import numberFormat from "@/utils/numberFormat";

import classes from "./Product.module.css";
import type { ProductProps } from "./Product.props";
import VisuallyHidden from "../visually-hidden";

const Product: FC<ProductProps & MotionProps> = ({
  record,
  className,
  ...rest
}) => {
  const [reviewsOpen, setReviewsOpen] = useState(false);

  const reviewsRef = useRef<HTMLDivElement | null>(null);

  const handleReviewsClick = () => {
    setReviewsOpen(true);

    setTimeout(() => {
      if (reviewsRef.current) {
        reviewsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        reviewsRef.current.focus({ preventScroll: true });
      }
    });
  };

  const toggleReviews = () => {
    setReviewsOpen((prev) => !prev);
  };

  const reviewsVariants = {
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "-0.3em",
    },
    hidden: {
      height: 0,
      overflow: "hidden",
      opacity: 0,
    },
  };

  return (
    <>
      <Card {...rest} className={cn(classes.product, className)} layout>
        <Image
          alt=""
          className={classes.product__image}
          height={70}
          src={record.image}
          width={70}
        />
        <Heading as="h2" className={classes.product__title}>
          {record.title}
        </Heading>
        <section className={classes.product__price}>
          <div>
            <VisuallyHidden>Цена: </VisuallyHidden>
            <Typography>{numberFormat(record.price)} ₽</Typography>
          </div>
          {record.oldPrice && (
            <Tag
              className={classes["product__price--tag"]}
              color="success"
              size="small"
            >
              <VisuallyHidden>Скидка: </VisuallyHidden>
              {numberFormat(record.price - record.oldPrice)} ₽
            </Tag>
          )}
        </section>
        <Typography className={classes.product__credit}>
          <VisuallyHidden>Кредит: </VisuallyHidden>
          {numberFormat(record.credit)} ₽/
          <span className={classes.product__month}>мес</span>
        </Typography>
        <Rating
          className={classes.product__rating}
          rating={record.reviewAvg ?? 0}
          readonly
        />
        <ul className={classes.product__tags}>
          {record.tags.map((tag) => (
            <li key={tag}>
              <Tag size="small">{tag}</Tag>
            </li>
          ))}
        </ul>
        <Typography
          aria-hidden={true}
          className={classes["product__price-title"]}
        >
          цена
        </Typography>
        <Typography
          aria-hidden={true}
          className={classes["product__credit-title"]}
        >
          в кредит
        </Typography>
        <button
          className={classes["product__rating-title"]}
          onClick={handleReviewsClick}
        >
          {record.reviewCount}{" "}
          {declinationByNumber(record.reviewCount, [
            "отзыв",
            "отзыва",
            "отзывов",
          ])}
          <VisuallyHidden>Ознакомиться</VisuallyHidden>
        </button>
        <hr className={classes.product__divider} />
        <Typography className={classes.product__description}>
          {record.description}
        </Typography>
        {record.characteristics && (
          <ul className={classes.product__characteristics}>
            {record.characteristics.map((characteristic) => (
              <li className={classes.characteristic} key={characteristic.name}>
                <Typography className={classes.characteristic__title}>
                  {characteristic.name}
                </Typography>
                <div
                  className={cn(
                    classes.product__divider,
                    classes.characteristic__divider
                  )}
                />
                <Typography className={classes.characteristic__value}>
                  {characteristic.value}
                </Typography>
              </li>
            ))}
          </ul>
        )}
        {(record.advantages || record.disAdvantages) && (
          <section className={cn(classes.product__features, classes.features)}>
            {record.advantages && (
              <div
                className={cn(
                  classes.features__block,
                  classes["features__block--green"]
                )}
              >
                <Typography className={classes.features__title}>
                  Преимущества
                </Typography>
                <Typography className={classes.features__description}>
                  {record.advantages}
                </Typography>
              </div>
            )}
            {record.disAdvantages && (
              <div
                className={cn(
                  classes.features__block,
                  classes["features__block--red"]
                )}
              >
                <Typography className={classes.features__title}>
                  Недостатки
                </Typography>
                <Typography className={classes.features__description}>
                  {record.disAdvantages}
                </Typography>
              </div>
            )}
          </section>
        )}
        <hr className={classes.product__divider} />
        {/*TODO: Make only the section (with Reviews if possible) as client component*/}
        <section className={classes.product__actions}>
          <Button className={classes.product__button} variant="contained">
            Узнать подробнее
          </Button>
          <Button
            className={classes.product__button}
            onClick={toggleReviews}
            variant="outlined"
          >
            Читать отзывы
          </Button>
        </section>
      </Card>
      <motion.div
        animate={reviewsOpen ? "visible" : "hidden"}
        initial="hidden"
        ref={reviewsRef}
        tabIndex={reviewsOpen ? 0 : -1}
        variants={reviewsVariants}
      >
        <Reviews
          layout
          opened={reviewsOpen}
          productId={record._id}
          records={record.reviews}
        />
      </motion.div>
    </>
  );
};

export default Product;
