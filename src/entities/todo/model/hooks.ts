import { useNavigate } from "react-router";
import type { Todo } from "./types";
import { useTodoStore } from "./slice";

export const useTodoItem = (todo: Todo) => {
  const { remove } = useTodoStore();
  const navigate = useNavigate();

  const handleRemoveTodo = () => remove(todo.id);
  const handleOpenTodo = () => navigate(`/item/${todo.id}`);
  const handleKeyPress = (event: React.KeyboardEvent) => (event.key === "Enter" ? handleOpenTodo() : false);

  return { handleRemoveTodo, handleOpenTodo, handleKeyPress };
};
