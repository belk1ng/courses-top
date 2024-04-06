"use client";

import type { FC, KeyboardEvent } from "react";
import { useReducer, useRef } from "react";

import Heading from "@/components/heading";
import Product from "@/components/product";
import Sortable from "@/components/sortable";
import sortableReducer, { init } from "@/components/sortable/Sortable.reducer";
import Tag from "@/components/tag";
import VisuallyHidden from "@/components/visually-hidden/VisuallyHidden";
import declinationByNumber from "@/utils/declinationByNumber";
import spaceOrEnterPressed from "@/utils/spaceOrEnterPressed";

import type { SortableProductsProps } from "./SortableProducts.props";
import classes from "../../Page.module.css";

const SortableProducts: FC<SortableProductsProps> = ({ title, products }) => {
  const [state, dispatch] = useReducer(sortableReducer, products, init);

  const headerRef = useRef<HTMLElement | null>(null);

  const handleSkipLinkKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const isSpaceOrEnterPressed = spaceOrEnterPressed(event);
    if (isSpaceOrEnterPressed) {
      headerRef.current?.focus();
    }
  };

  const productsExists = state.products.length > 0;

  return (
    <>
      <button
        className={classes.skiplink}
        onKeyDown={handleSkipLinkKeyDown}
        tabIndex={1}
      >
        Перейти к контенту
      </button>
      <header className={classes.header} ref={headerRef} tabIndex={0}>
        <Heading as="h1" className={classes.header__title}>
          {title}
        </Heading>
        <Tag className={classes.header__counter} color="info" size="medium">
          {products.length ?? 0}
          <VisuallyHidden>
            {declinationByNumber(products.length ?? 0, [
              "ресурс",
              "ресурса",
              "ресурсов",
            ])}
          </VisuallyHidden>
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
