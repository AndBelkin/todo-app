import { useState, type FC } from "react";
import { CiBoxList, CiCalendarDate, CiCamera, CiLocationOn } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import { PiCheckCircleThin } from "react-icons/pi";
import "./NewTodoForm.css";
import { useNewTodo } from "../../features";
import { useTodoStore } from "../todo/model/slice";
import { CategoryItem } from "../../shared/category/CategoryItem";
import { Button } from "../../shared";

export const NewTodoForm: FC = () => {
  const [isShowParams, setIsShowParams] = useState<boolean>();
  const { categories } = useTodoStore();
  const todo = useNewTodo();
  return (
    <form className="new-todo-form" onSubmit={todo.onSubmit}>
      <div className={todo.inputBoxClass}>
        <HiOutlinePlus className="form-input-icon" />
        <input
          type="text"
          className="form-input"
          placeholder="Add reminder..."
          value={todo.newTodo.title}
          onChange={todo.handleChange}
          onFocus={todo.onFocus}
          onBlur={todo.onBlur}
          onKeyDown={todo.onKeyDown}
        />
        <PiCheckCircleThin className="form-input-icon" onClick={todo.handleCreate} role="button" />
      </div>
      <div className="form-buttons-box">
        <CiCalendarDate className="form-button-icon" />
        <CiLocationOn className="form-button-icon" />
        <CiCamera className="form-button-icon" />
        <CiBoxList className="form-button-icon" onClick={() => setIsShowParams((prev) => !prev)} />
      </div>
      {isShowParams && (
        <div className="form-select-params">
          {todo.newTodo.categoryID ? <CategoryItem id={todo.newTodo.categoryID} /> : <p>No category</p>}
          <div className="category-list">
            {categories.map((cat) => (
              <Button view="none" onClick={() => todo.handleSelectCategory(cat.id)}>
                <CategoryItem id={cat.id} size="small" key={cat.id} />
              </Button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
};
