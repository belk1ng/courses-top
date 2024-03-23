import type { Dispatch, HTMLAttributes } from "react";

export type AlertVariant = "info" | "warning" | "success" | "error";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title: string;
  text: string;
  visible: boolean;
  onClose: Dispatch<boolean>;
}
