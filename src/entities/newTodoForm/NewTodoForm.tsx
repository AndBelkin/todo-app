import { type FC } from "react";
import { CiBoxList, CiCalendarDate, CiCamera, CiLocationOn } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import { PiCheckCircleThin } from "react-icons/pi";
import "./NewTodoForm.css";
import { useNewTodo } from "../../features";

export const NewTodoForm: FC = () => {
  const newTodo = useNewTodo();
  return (
    <form className="new-todo-form" onSubmit={newTodo.onSubmit}>
      <div className={newTodo.inputBoxClass}>
        <HiOutlinePlus className="form-input-icon" />
        <input
          type="text"
          className="form-input"
          placeholder="Add reminder..."
          value={newTodo.title}
          onChange={newTodo.handleChange}
          onFocus={newTodo.onFocus}
          onBlur={newTodo.onBlur}
          onKeyDown={newTodo.onKeyDown}
        />
        <PiCheckCircleThin className="form-input-icon" onClick={newTodo.handleCreate} role="button" />
      </div>
      <div className="form-buttons-box">
        <CiCalendarDate className="form-button-icon" />
        <CiLocationOn className="form-button-icon" />
        <CiCamera className="form-button-icon" />
        <CiBoxList className="form-button-icon" />
      </div>
    </form>
  );
};
