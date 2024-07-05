import { FC } from "react";
import { FaCircle } from "react-icons/fa";
import "../../styles/TodoItems.css";
import { changeIsDone, Todos } from "../../app/feature/todoApp/todoAppSlice";
import { FaCircleCheck } from "react-icons/fa6";
import { useAppDispatch } from "../../app/hooks";

interface TodoItemsProps {
  item: Todos;
}

const TodoItems: FC<TodoItemsProps> = ({ item }: TodoItemsProps) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(changeIsDone(item));
  };
  const renderDoneIcon = () => {
    if (item.isDone)
      return (
        <FaCircleCheck className="todo-items-done" onClick={clickHandler} />
      );
    else return <FaCircle className="todo-items-done" onClick={clickHandler} />;
  };
  return (
    <div className="todo-items">
      {renderDoneIcon()}
      <p className="todo-items-title">{item.title}</p>
    </div>
  );
};

export default TodoItems;
