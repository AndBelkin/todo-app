import type { FC } from "react";
import type { TodoItemProps } from "./model/types";
import { useTodoItem } from "./model/hooks";
import { PiArrowsCounterClockwiseLight as RepeatIcon } from "react-icons/pi";
import { CiClock2 as ClockIcon } from "react-icons/ci";
import "./TodoItem.css";

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const { CheckboxIcon, handleOpenTodo, handleKeyPress, handleToggleTodo } = useTodoItem(item);

  return (
    <div className="todo-item" onClick={handleOpenTodo} onKeyDown={handleKeyPress} role="button" tabIndex={0}>
      <CheckboxIcon className="todo-item-checkbox" onClick={handleToggleTodo} />
      <div className="flex flex-col gap-1">
        <h6 className="todo-item-title">{item.title}</h6>
        <div className="flex items-center gap-1 text-xs">
          <ClockIcon />
          <p>00:00</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <RepeatIcon />
          <p>Every day</p>
        </div>
      </div>
    </div>
  );
};
