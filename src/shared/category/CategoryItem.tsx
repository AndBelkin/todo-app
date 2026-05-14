import type { FC } from "react";
import { useTodoStore } from "../../entities";
import "./CategoryItem.css";

interface CategoryItemProps {
  id: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({ id }) => {
  const { getCategories } = useTodoStore();
  const item = getCategories().find((item) => item.id === id);
  if (!item) return <p>No Category</p>;
  else
    return (
      <span className="category-item" style={{ backgroundColor: item.color }}>
        {item.name}
      </span>
    );
};
