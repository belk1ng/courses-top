import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "contained" | "outlined";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
