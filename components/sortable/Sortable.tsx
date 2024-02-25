"use client";

import cn from "classnames";
import Image from "next/image";
import type { FC } from "react";

import Typography from "@/components/typography";

import classes from "./Sortable.module.css";
import type { SortableProps } from "./Sortable.props";
import { SortableValues } from "./Sortable.props";
import type { SortableActionType } from "./Sortable.reducer";

const ORDER_FIELDS: {
  label: string;
  action: SortableActionType;
  fieldId: SortableValues;
}[] = [
  {
    label: "По рейтингу",
    action: { type: "sortable/setRating", payload: SortableValues.Rating },
    fieldId: SortableValues.Rating,
  },
  {
    label: "По цене",
    action: { type: "sortable/setPrice", payload: SortableValues.Price },
    fieldId: SortableValues.Price,
  },
];

const Sortable: FC<SortableProps> = ({ field, onChange }) => {
  const setSort = (action: SortableActionType) => {
    onChange(action);
  };

  return (
    <ul className={classes.sortable}>
      {ORDER_FIELDS.map(({ label, fieldId, action }) => (
        <li
          className={classes.sortable__item}
          key={label}
          onClick={() => setSort(action)}
        >
          {field === fieldId && (
            <Image alt="" height={24} src="/descOrder.svg" width={24} />
          )}
          <Typography
            className={cn(classes.sortable__field, {
              [classes["sortable__field--active"]]: field === fieldId,
            })}
          >
            {label}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default Sortable;
