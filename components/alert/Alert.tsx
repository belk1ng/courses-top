import cn from "classnames";
import Image from "next/image";
import type { FC } from "react";

import Typography from "@/components/typography";
import VisuallyHidden from "@/components/visually-hidden";
import CloseIcon from "@/public/close.svg";

import classes from "./Alert.module.css";
import type { AlertProps } from "./Alert.props";

const alertIconSrc = {
  info: "/alertInfo.svg",
  warning: "/alertWarning.svg",
  success: "/alertSuccess.svg",
  error: "/alertError.svg",
};

const Alert: FC<AlertProps> = ({
  variant = "info",
  visible,
  onClose,
  title,
  text,
  className,
  ...rest
}) => {
  if (visible) {
    return (
      <div
        className={cn(classes.alert, classes[`alert--${variant}`], className)}
        {...rest}
      >
        <Image
          alt=""
          className={classes.alert__icon}
          height={16}
          src={alertIconSrc[variant]}
          width={16}
        />
        <Typography className={classes.alert__title} size={16}>
          {title}
        </Typography>
        <Typography className={classes.alert__text} size={14}>
          {text}
        </Typography>
        <button className={classes.alert__close}>
          <VisuallyHidden>Скрыть уведомление</VisuallyHidden>
          <CloseIcon onClick={() => onClose(false)} />
        </button>
      </div>
    );
  }

  return null;
};

export default Alert;
