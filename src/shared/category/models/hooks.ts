import type { CSSProperties } from "react";
import { useTodoStore } from "../../../entities";

const getTextColor = (bgColor: string): string => {
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = brightness >= 128 ? "#000000" : "#ffffff";
  return textColor;
};

export const useCategoryItem = (id: string, size: string) => {
  const { getCategories, removeCategory } = useTodoStore();
  const item = getCategories().find((item) => item.id === id);
  if (!item) return {};
  const categoryClassName = ["category-item", size].join(" ");
  const handlerRemove = () => removeCategory(item.id);
  const categoryStyle: CSSProperties = { backgroundColor: item.color, color: getTextColor(item.color!) };
  return { item, categoryClassName, handlerRemove, categoryStyle };
};
