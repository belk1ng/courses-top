import { notFound } from "next/navigation";
import type { FC } from "react";

import { ROOT_PREFIXES } from "@/app/(main)/components/nav/nav.config";
import Typography from "@/components/typography";
import ProductApi from "@/lib/Product.api";
import TopPageApi, { RootCategories } from "@/lib/TopPage.api";

import type { ProductsPageProps } from "./page.props";

export const metadata = {
  description: "Описание продуктов",
  title: "Продукты по алиасу",
};

const ProductsPage: FC<ProductsPageProps> = async ({ params }) => {
  const { alias, category } = params;

  const details = await TopPageApi.getPageDetailsByAlias(alias);

  if (!details || !ROOT_PREFIXES.includes(category)) {
    notFound();
  }

  const products = await ProductApi.getProductsByCategory(details.category);

  return (
    <section>
      <Typography size={18}>{details.title}</Typography>
      {products.map((product) => (
        <Typography key={product._id} size={14}>
          {product.title}
        </Typography>
      ))}
    </section>
  );
};

export const generateStaticParams = async () => {
  const aliases = await TopPageApi.getSubmenuByCategory(RootCategories.Courses);

  if (aliases) {
    return aliases.flatMap(({ pages }) =>
      pages.map(({ alias }) => ({ category: "courses", alias }))
    );
  }

  return [];
};

export default ProductsPage;
