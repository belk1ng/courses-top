import cn from "classnames";
import Image from "next/image";
import type { FC } from "react";

import Card from "@/components/card";
import Heading from "@/components/heading";
import Tag from "@/components/tag";
import Typography from "@/components/typography";
import numberFormat from "@/utils/numberFormat";

import classes from "./HeadHunter.module.css";
import type { HeadHunterProps } from "./HeadHunter.props";

const HeadHunter: FC<HeadHunterProps> = ({ values, category }) => {
  return (
    <section className={classes.hh}>
      <header className={classes.hh__header}>
        <Heading as="h2">Вакансии - {category}</Heading>
        <Tag color="error" size="small">
          hh.ru
        </Tag>
      </header>
      <div className={classes.hh__content}>
        <Card className={cn(classes.hh__card, classes.hh__vacancies)}>
          <Typography className={classes.hh__title}>Всего вакансий</Typography>
          <Typography
            className={cn(classes.hh__value, classes["hh__value--primary"])}
          >
            {numberFormat(values.count)}
          </Typography>
        </Card>
        <Card className={cn(classes.hh__card, classes.hh__salaries)}>
          <div className={classes.hh__salary}>
            <Typography className={classes.hh__title}>Начальный</Typography>
            <Typography className={classes.hh__value}>
              {numberFormat(values.juniorSalary) + " ₽"}
            </Typography>
            <div className={classes.hh__levels}>
              <Image
                alt="Активный уровень: 1 из 3"
                height={20}
                src="/circledActiveStar.svg"
                width={20}
              />
              <Image
                alt="Уровень: 2 из 3"
                height={20}
                src="/circledStar.svg"
                width={20}
              />
              <Image
                alt="Уровень: 2 из 3"
                height={20}
                src="/circledStar.svg"
                width={20}
              />
            </div>
          </div>
          <div className={classes.hh__divider} />
          <div className={classes.hh__salary}>
            <Typography className={classes.hh__title}>Средний</Typography>
            <Typography className={classes.hh__value}>
              {numberFormat(values.middleSalary) + " ₽"}
            </Typography>
            <div className={classes.hh__levels}>
              <Image
                alt="Активный уровень: 1 из 3"
                height={20}
                src="/circledActiveStar.svg"
                width={20}
              />
              <Image
                alt="Активный уровень: 2 из 3"
                height={20}
                src="/circledActiveStar.svg"
                width={20}
              />
              <Image
                alt="Уровень: 2 из 3"
                height={20}
                src="/circledStar.svg"
                width={20}
              />
            </div>
          </div>
          <div className={classes.hh__divider} />
          <div className={classes.hh__salary}>
            <Typography className={classes.hh__title}>Профессионал</Typography>
            <Typography className={classes.hh__value}>
              {numberFormat(values.seniorSalary) + " ₽"}
            </Typography>
            <div className={classes.hh__levels}>
              <Image
                alt="Активный уровень: 1 из 3"
                height={20}
                src="/circledActiveStar.svg"
                width={20}
              />
              <Image
                alt="Активный уровень: 2 из 3"
                height={20}
                src="/circledActiveStar.svg"
                width={20}
              />
              <Image
                alt="Активный уровень: 2 из 3"
                height={20}
                src="/circledActiveStar.svg"
                width={20}
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeadHunter;
