"use client";

import cn from "classnames";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { forwardRef } from "react";

import classes from "./Card.module.css";
import type { CardProps } from "./Card.props";

const Card = forwardRef<HTMLDivElement, CardProps & MotionProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cn(classes.card, className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const MotionCard = motion<CardProps & MotionProps>(Card);

export default MotionCard;
