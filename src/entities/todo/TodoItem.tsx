import type { FC } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import type { TodoItemProps } from "./model/types";
import { useTodoItem } from "./model/hooks";
import { convertDateToString } from "./lib/utils";
import "./TodoItem.css";

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const { handleRemoveTodo, handleOpenTodo, handleKeyPress } = useTodoItem(item);
  return (
    <div className="todo-item" tabIndex={0} onKeyDown={handleKeyPress}>
      <header className="todo-item-header">
        <IoIosCloseCircle className="todo-item-remove" onClick={handleRemoveTodo} />
      </header>
      <main className="todo-item-main" onClick={handleOpenTodo} title={`Open "${item.title}"`}>
        <h5 className="todo-item-title">{item.title}</h5>
        <p className="todo-item-createdAt">Created: {convertDateToString(item.createdAt)}</p>
      </main>
    </div>
  );
};
