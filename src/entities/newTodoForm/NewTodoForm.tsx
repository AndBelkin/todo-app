import { useState, type FC } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { PiCheckCircleThin } from "react-icons/pi";
import { SelectCalendar, SelectCategoty, SelectLocation, SelectOption } from "./ui/SelectOption";
import { useNewTodo } from "../../features";
import "./NewTodoForm.css";

export const NewTodoForm: FC = () => {
  const [selectOption, setSelectOption] = useState<number | null>(null);
  const todo = useNewTodo();
  const handleSelectOption = (idx: number) => (idx === selectOption ? setSelectOption(null) : setSelectOption(idx));
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
      <SelectOption selectedIdx={selectOption} onClick={handleSelectOption} />
      {selectOption === 0 && <SelectCalendar />}
      {selectOption === 1 && <SelectLocation />}
      {selectOption === 2 && <SelectCategoty item={todo.newTodo} onChange={todo.handleSelectCategory} />}
    </form>
  );
};
