import { useNavigate } from "react-router";
import type { Todo } from "./types";
import { useTodoStore } from "./slice";
import { PiCheckCircleThin as CompletedIcon, PiCircleThin as CircleIcon } from "react-icons/pi";

export const useTodoItem = (todo: Todo) => {
  const { toggle } = useTodoStore();
  const navigate = useNavigate();

  const CheckboxIcon = todo.completed ? CompletedIcon : CircleIcon;

  const handleToggleTodo = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    toggle(todo.id);
  };
  const handleOpenTodo = () => navigate(`/item/${todo.id}`);
  const handleKeyPress = (event: React.KeyboardEvent) => (event.key === "Enter" ? handleOpenTodo() : false);

  return { CheckboxIcon, handleToggleTodo, handleOpenTodo, handleKeyPress };
};
