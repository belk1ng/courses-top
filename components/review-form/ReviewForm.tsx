"use client";

import cn from "classnames";
import Image from "next/image";
import type { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/button";
import Input from "@/components/input";
import Rating from "@/components/rating";
import Textarea from "@/components/textarea";
import Typography from "@/components/typography";

import classes from "./ReviewForm.module.css";
import type { ReviewFormProps } from "./ReviewForm.props";

interface ReviewFormValues {
  name: string;
  title: string;
  description: string;
  rating: number;
}

const ReviewForm: FC<ReviewFormProps> = ({ productId, className, ...rest }) => {
  const { formState, control, handleSubmit, register } =
    useForm<ReviewFormValues>();

  const onSubmit = (data: ReviewFormValues) => {
    console.log("ProductId: ", productId);
    console.log(data);
  };

  return (
    <section>
      <form
        className={cn(className, classes.form)}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}
      >
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          className={classes.form__name}
          error={formState.errors.name?.message}
          placeholder="Имя"
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          className={classes.form__title}
          error={formState.errors.title?.message}
          placeholder="Заголовок отзыва"
        />
        <div
          className={cn(classes.form__rating, {
            [classes["form__rating--error"]]: formState.errors.rating?.message,
          })}
        >
          <Typography size={14}>Оценка:</Typography>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                error={formState.errors.rating?.message}
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Укажите рейтинг",
              },
            }}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          className={classes.form__area}
          error={formState.errors.description?.message}
          placeholder="Текст отзыва"
          rows={5}
        />
        <div className={classes.form__submit}>
          <Button className={classes.form__button} type="submit">
            Отправить
          </Button>
          <Typography size={14}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </Typography>
        </div>
      </form>
      <div className={cn(classes.form__success, classes.alert)}>
        <Image
          alt="Закрыть уведомление"
          className={classes.alert__icon}
          height={12}
          src="/reviewClose.svg"
          width={12}
        />
        <Typography className={classes.alert__title}>
          Ваш отзыв отправлен!
        </Typography>
        <Typography className={classes.alert__description}>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </Typography>
      </div>
    </section>
  );
};

export default ReviewForm;
