import type { FC } from "react";
import "./TodoPage.css";
import { useNavigate, useParams } from "react-router";
import { useTodoStore } from "../../entities";
import { CiBoxList, CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { IoCheckmarkOutline, IoRefreshOutline } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "../../shared";
import { HiMiniArrowPath } from "react-icons/hi2";
import { CategoryItem } from "../../shared/category/CategoryItem";

export const TodoPage: FC = () => {
  const todoID = useParams().id;
  const navigate = useNavigate();
  const { todos, toggle, remove } = useTodoStore();
  const todo = todos.find((todo) => todo.id === todoID);
  if (!todo) return false;
  const CompliteIcon = !todo.completed ? IoCheckmarkOutline : IoRefreshOutline;
  const handleToggle = () => toggle(todo.id);
  const handleRemove = () => {
    remove(todo.id);
    navigate("/");
  };
  return (
    <main className="todo-page">
      <div className="container">
        <section className="todo-content">
          <h1 className={todo.completed ? "line-through text-black-900" : ""}>{todo?.title}</h1>

          <div className="flex items-center gap-4">
            <CiCalendarDate />
            <p>Today, 00:00</p>
          </div>

          <div className="flex items-center gap-4">
            <HiMiniArrowPath />
            <p>Every day</p>
          </div>

          <div className="flex items-center gap-4">
            <CiLocationOn />
            <p>Russia, Tyumen</p>
          </div>

          <div className="flex items-center gap-4">
            <CiBoxList />
            {todo.categoryID ? <CategoryItem id={todo.categoryID} /> : <p>No Category</p>}
          </div>

          <p className="text-right">Last modified: 01/01/26</p>
        </section>
        <section className="todo-actions">
          <Button view="none" className="todo-action-button" onClick={handleToggle}>
            <CompliteIcon className="text-xl" />
            <p>{todo.completed ? "Restore" : "Completed"}</p>
          </Button>
          <Button view="none" className="todo-action-button">
            <SlPencil className="text-xl" />
            <p>Edit</p>
          </Button>
          <Button view="none" className="todo-action-button" onClick={handleRemove}>
            <MdDeleteOutline className="text-xl" />
            <p>Delete</p>
          </Button>
        </section>
      </div>
    </main>
  );
};
