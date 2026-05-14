import { useState, type ChangeEvent, type FC } from "react";
import { useTodoStore } from "../../entities";
import { CategoryItem } from "../../shared/category/CategoryItem";
import { Button } from "../../shared";
import "./ManageCategoriesPage.css";

export const ManageCategoriesPage: FC = () => {
  const { categories, addCategory } = useTodoStore();
  const [newCategory, setNewCategory] = useState({ name: "", color: "#000000" });
  const renderCategories = () => categories.map((cat) => <CategoryItem id={cat.id} />);
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) =>
    setNewCategory({ ...newCategory, name: event.target.value });
  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) =>
    setNewCategory({ ...newCategory, color: event.target.value });
  const handleAddCategory = () => {
    if (!newCategory.name) return false;
    addCategory(newCategory.name, newCategory.color);
    setNewCategory({ name: "", color: "#000000" });
  };
  return (
    <main className="manage-categories-page">
      <div className="container">
        <div>
          <h4>Categories:</h4>
          <p>Here is a complete list of categories. Here you can add and remove categories.</p>
        </div>
        <section className="categories-list">{renderCategories()}</section>
        <div>
          <h3>Create new caterory</h3>
          <p>Enter a name for the category, select the desired color, and click add.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="add-category-form">
          <input type="text" value={newCategory.name} onChange={handleChangeName} />
          <input type="color" value={newCategory.color} onChange={handleChangeColor} />
          <Button view="accent" onClick={handleAddCategory}>
            Add
          </Button>
        </form>
      </div>
    </main>
  );
};
