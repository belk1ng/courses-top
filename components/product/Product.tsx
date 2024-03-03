import cn from "classnames";
import Image from "next/image";
import type { FC } from "react";

import Button from "@/components/button";
import Card from "@/components/card";
import Heading from "@/components/heading";
import Rating from "@/components/rating";
import Tag from "@/components/tag";
import Typography from "@/components/typography";
import declinationByNumber from "@/utils/declinationByNumber";
import numberFormat from "@/utils/numberFormat";

import classes from "./Product.module.css";
import type { ProductProps } from "./Product.props";

const Product: FC<ProductProps> = ({ record, ...rest }) => {
  return (
    <Card {...rest} className={classes.product}>
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
        <Typography>{numberFormat(record.price)} ₽</Typography>
        {record.oldPrice && (
          <Tag className={classes.product__oldprice} color="success">
            {numberFormat(record.price - record.oldPrice)} ₽
          </Tag>
        )}
      </section>
      <Typography className={classes.product__credit}>
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
      <Typography className={classes["product__price-title"]}>цена</Typography>
      <Typography className={classes["product__credit-title"]}>
        в кредит
      </Typography>
      <Typography className={classes["product__rating-title"]}>
        {record.reviewCount}{" "}
        {declinationByNumber(record.reviewCount, [
          "отзыв",
          "отзыва",
          "отзывов",
        ])}
      </Typography>
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
              <Typography>{record.advantages}</Typography>
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
              <Typography>{record.disAdvantages}</Typography>
            </div>
          )}
        </section>
      )}
      <hr className={classes.product__divider} />
      <section className={classes.product__actions}>
        <Button className={classes.product__button} variant="contained">
          Узнать подробнее
        </Button>
        <Button className={classes.product__button} variant="outlined">
          Читать отзывы
        </Button>
      </section>
    </Card>
  );
};

export default Product;
