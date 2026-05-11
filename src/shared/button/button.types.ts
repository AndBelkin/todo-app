import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonView = "primary" | "accent" | "none";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view?: ButtonView;
}
