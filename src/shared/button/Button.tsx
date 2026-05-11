import type { FC } from "react";
import type { ButtonProps } from "./button.types";
import "./Button.css";

export const Button: FC<ButtonProps> = ({ children, view = "primary", className, ...props }) => {
  const buttonClass = ["btn", `btn_${view}`, className].filter(Boolean).join(" ");
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
