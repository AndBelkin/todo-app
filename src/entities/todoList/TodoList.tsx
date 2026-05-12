import type { FC } from "react";
import "./TodoList.css";
import { useTodoList } from "./model/hooks";

export const TodoList: FC = () => {
  const todoList = useTodoList();
  return (
    <section className="todo-list">
      <h4>My Tasks</h4>
      <div className="todo-list-desk">{todoList}</div>
    </section>
  );
};
