import { notFound } from "next/navigation";
import type { FC } from "react";

import Typography from "@/components/typography";
import TopPageApi from "@/lib/TopPage.api";

import type { ProductsPageProps } from "./page.props";

export const metadata = {
  title: "Продукты по алиасу",
  description: "Описание продуктов",
};

const ProductsPage: FC<ProductsPageProps> = async ({ params }) => {
  const { alias } = params;

  const details = await TopPageApi.getPageDetailsByAlias(alias);

  if (!details) {
    notFound();
  }

  return (
    <main>
      <Typography size={18}>{details.title}</Typography>
    </main>
  );
};

export const generateStaticParams = async () => {
  const aliases = await TopPageApi.getSubmenuByCategory();

  if (aliases) {
    return aliases.flatMap(({ pages }) =>
      pages.map(({ alias }) => ({ alias }))
    );
  }

  return [];
};

export default ProductsPage;