import { FC } from "react";
import { FaCircle } from "react-icons/fa";
import "../../styles/TodoItems.css";
import { Todos } from "../../app/feature/todoApp/todoAppSlice";

interface TodoItemsProps {
  item: Todos;
}

const TodoItems: FC<TodoItemsProps> = ({ item }: TodoItemsProps) => {
  return (
    <div className="todo-items">
      <FaCircle className="todo-items-done" />
      <p className="todo-items-title">{item.title}</p>
    </div>
  );
};

export default TodoItems;
