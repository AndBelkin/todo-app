import type { FC } from "react";
import "./TodoList.css";
import { useTodoStore } from "../todo/model/slice";
import { TodoItem } from "../todo/TodoItem";

export const TodoList: FC = () => {
  const { todos } = useTodoStore();
  const EmptyList = <p className="todo-list-empty">Your list is empty...</p>;
  const renderList = () => todos.map((todo) => <TodoItem item={todo} key={todo.id} />);
  return (
    <section className="todo-list">
      <h4>My Tasks</h4>
      <div className="todo-list-desk">{todos.length ? renderList() : EmptyList}</div>
    </section>
  );
};
