import type { FC } from "react";
import "./CategoryItem.css";
import { IoCloseOutline } from "react-icons/io5";
import { useCategoryItem } from "./models/hooks";

interface CategoryItemProps {
  id: string;
  size?: "small" | "normal" | "big";
  edit?: boolean;
}

export const CategoryItem: FC<CategoryItemProps> = ({ id, size = "normal", edit = false }) => {
  const { item, categoryClassName, categoryStyle, handlerRemove } = useCategoryItem(id, size);
  if (!item) return <p>No Category</p>;
  return (
    <span className={categoryClassName} style={categoryStyle}>
      {item.name}
      {edit && <IoCloseOutline onClick={handlerRemove} />}
    </span>
  );
};
