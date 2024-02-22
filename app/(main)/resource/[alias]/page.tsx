import { notFound } from "next/navigation";
import type { FC } from "react";

import { NAV_CONFIG } from "@/app/(main)/components/nav/nav.config";
import Typography from "@/components/typography";
import ProductApi from "@/lib/Product.api";
import TopPageApi from "@/lib/TopPage.api";

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
