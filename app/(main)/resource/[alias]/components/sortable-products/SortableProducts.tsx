"use client";

import type { FC } from "react";
import { useReducer } from "react";

import classes from "@/app/(main)/resource/[alias]/Page.module.css";
import Heading from "@/components/heading";
import Sortable from "@/components/sortable";
import sortableReducer, { init } from "@/components/sortable/Sortable.reducer";
import Tag from "@/components/tag";
import Typography from "@/components/typography";

import type { SortableProductsProps } from "./SortableProducts.props";

const SortableProducts: FC<SortableProductsProps> = ({ title, products }) => {
  const [state, dispatch] = useReducer(sortableReducer, products, init);

  return (
    <>
      <header className={classes.header}>
        <Heading as="h1">{title}</Heading>
        <Tag color="info" size="medium">
          {products.length ?? 0}
        </Tag>
        <Sortable field={state.order} onChange={dispatch} />
      </header>
      <section>
        {state.products.map((product) => (
          <Typography key={product._id}>{product.title}</Typography>
        ))}
      </section>
    </>
  );
};

export default SortableProducts;
