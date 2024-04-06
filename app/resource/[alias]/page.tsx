import parse from "html-react-parser";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { FC } from "react";

import ProductApi from "@/lib/Product.api";
import TopPageApi from "@/lib/TopPage.api";

import Advantages from "./components/advantages";
import HeadHunter from "./components/head-hunter";
import Skills from "./components/skills";
import SortableProducts from "./components/sortable-products";
import classes from "./Page.module.css";
import type { ProductsPageProps } from "./page.props";
import { NAV_CONFIG } from "../../components/nav/nav.config";

export const generateMetadata = async ({
  params,
}: ProductsPageProps): Promise<Metadata> => {
  const page = await TopPageApi.getPageDetailsByAlias(params.alias);

  const title = ["CoursesTop", page?.metaTitle ?? ""].join(" | ");
  const description =
    page?.metaDescription ??
    `Какое-то информативное описание для раздела ${params.alias}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
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
