import { FC } from "react";
import { FaCircle } from "react-icons/fa";
import "../../styles/TodoItems.css";

const TodoItems: FC = () => {
  return (
    <div className="todo-items">
      <FaCircle className="todo-items-done" />
      <p className="todo-items-title">Название задачи</p>
    </div>
  );
};

export default TodoItems;
