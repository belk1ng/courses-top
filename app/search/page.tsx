import type { FC } from "react";

import Heading from "@/components/heading";

import type { SearchPageProps } from "./page.props";

export const metadata = {
  title: "Результаты поиска",
  description: "Описание страницы поиска",
  openGraph: {
    title: "Результаты поиска",
    description: "Описание страницы поиска",
  },
};

const SearchPage: FC<SearchPageProps> = ({ searchParams }) => {
  return <Heading as="h1">Поиск: {searchParams.q}</Heading>;
};

export default SearchPage;
