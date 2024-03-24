"use client";

import type { FC } from "react";
import { useReducer } from "react";

import classes from "@/app/(main)/resource/[alias]/Page.module.css";
import Heading from "@/components/heading";
import Product from "@/components/product";
import Sortable from "@/components/sortable";
import sortableReducer, { init } from "@/components/sortable/Sortable.reducer";
import Tag from "@/components/tag";

import type { SortableProductsProps } from "./SortableProducts.props";

const SortableProducts: FC<SortableProductsProps> = ({ title, products }) => {
  const [state, dispatch] = useReducer(sortableReducer, products, init);

  const productsExists = state.products.length > 0;

  return (
    <>
      <header className={classes.header}>
        <Heading as="h1" className={classes.header__title}>
          {title}
        </Heading>
        <Tag className={classes.header__counter} color="info" size="medium">
          {products.length ?? 0}
        </Tag>
        {productsExists && (
          <Sortable
            className={classes.header__sortable}
            field={state.order}
            onChangeField={dispatch}
          />
        )}
      </header>
      {productsExists && (
        <section>
          {state.products.map((product) => (
            <Product
              className={classes.sortable__product}
              key={product._id}
              record={product}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default SortableProducts;
