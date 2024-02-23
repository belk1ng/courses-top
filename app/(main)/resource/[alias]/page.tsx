import cn from "classnames";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { FC } from "react";

import { NAV_CONFIG } from "@/app/(main)/components/nav/nav.config";
import Card from "@/components/card";
import Heading from "@/components/heading";
import Tag from "@/components/tag";
import Typography from "@/components/typography";
import ProductApi from "@/lib/Product.api";
import TopPageApi from "@/lib/TopPage.api";
import numberFormat from "@/utils/numberFormat";

import classes from "./page.module.css";
import type { ProductsPageProps } from "./page.props";

export const metadata = {
  description: "Описание продуктов",
  title: "Продукты по алиасу",
};

const ProductsPage: FC<ProductsPageProps> = async ({ params }) => {
  const { alias } = params;

  const details = await TopPageApi.getPageDetailsByAlias(alias);

  if (!details) {
    notFound();
  }

  const products = await ProductApi.getProductsByCategory(details.category);

  return (
    <>
      <header className={classes.header}>
        <Heading as="h1">{details.title}</Heading>
        <Tag color="info" size="medium">
          {products.length ?? 0}
        </Tag>
      </header>
      <section className={classes.page__section}>
        {products.map((product) => (
          <Typography key={product._id}>{product.title}</Typography>
        ))}
      </section>
      {details.hh && (
        <section className={cn(classes.page__section, classes.hh)}>
          <header className={classes.hh__header}>
            <Heading as="h2">Вакансии - {details.category}</Heading>
            <Tag color="error" size="small">
              hh.ru
            </Tag>
          </header>
          <div className={classes.hh__content}>
            <Card className={cn(classes.hh__card, classes.hh__vacancies)}>
              <Typography className={classes.hh__title}>
                Всего вакансий
              </Typography>
              <Typography
                className={cn(classes.hh__value, classes["hh__value--primary"])}
              >
                {numberFormat(details.hh.count)}
              </Typography>
            </Card>
            <Card className={cn(classes.hh__card, classes.hh__salaries)}>
              <div className={classes.hh__salary}>
                <Typography className={classes.hh__title}>Начальный</Typography>
                <Typography className={classes.hh__value}>
                  {numberFormat(details.hh.juniorSalary) + " ₽"}
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
                  {numberFormat(details.hh.middleSalary) + " ₽"}
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
                <Typography className={classes.hh__title}>
                  Профессионал
                </Typography>
                <Typography className={classes.hh__value}>
                  {numberFormat(details.hh.seniorSalary) + " ₽"}
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
      )}
    </>
  );
};

export const generateStaticParams = async () => {
  const menu = await Promise.all(
    NAV_CONFIG.map(({ categoryId }) =>
      TopPageApi.getSubmenuByCategory(categoryId)
    )
  );

  return menu.flatMap((rootCategory) =>
    rootCategory?.flatMap((subCategory) =>
      subCategory.pages.map(({ alias }) => ({ alias }))
    )
  );
};

export default ProductsPage;
