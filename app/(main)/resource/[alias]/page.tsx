import parse from "html-react-parser";
import { notFound } from "next/navigation";
import type { FC } from "react";

import { NAV_CONFIG } from "@/app/(main)/components/nav/nav.config";
import SortableProducts from "@/app/(main)/resource/[alias]/components/sortable-products";
import Heading from "@/components/heading";
import Sortable from "@/components/sortable";
import Tag from "@/components/tag";
import Typography from "@/components/typography";
import ProductApi from "@/lib/Product.api";
import TopPageApi from "@/lib/TopPage.api";

import Advantages from "./components/advantages";
import HeadHunter from "./components/head-hunter";
import Skills from "./components/skills";
import classes from "./Page.module.css";
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

  const advantages =
    details.advantages?.filter((advantage) => advantage.title) ?? [];

  return (
    <>
      <SortableProducts products={products} title={details.title} />
      {details.hh && (
        <HeadHunter category={details.category} values={details.hh} />
      )}
      {advantages.length > 0 && <Advantages values={advantages} />}
      {details.seoText && details.seoText.trim().length > 0 && (
        <section className={classes.seo}>{parse(details.seoText)}</section>
      )}
      <Skills values={details.tags} />
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
