import { FC, useState } from "react";
import { FaCircle } from "react-icons/fa";
import "../../styles/TodoItems.css";
import {
  changeIsDone,
  deleteItem,
  Todos,
} from "../../app/feature/todoApp/todoAppSlice";
import { FaCircleCheck } from "react-icons/fa6";
import { useAppDispatch } from "../../app/hooks";
import { useLongPress } from "@uidotdev/usehooks";
import { MdDelete } from "react-icons/md";

interface TodoItemsProps {
  item: Todos;
}

const TodoItems: FC<TodoItemsProps> = ({ item }: TodoItemsProps) => {
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const ButtonHandler = useLongPress(() => setIsDeleteMode(!isDeleteMode), {
    threshold: 500,
  });
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(changeIsDone(item));
  };
  const renderDoneIcon = () => {
    if (!isDeleteMode) {
      if (item.isDone)
        return (
          <FaCircleCheck className="todo-items-done" onClick={clickHandler} />
        );
      else
        return <FaCircle className="todo-items-done" onClick={clickHandler} />;
    }
  };
  return (
    <div className="todo-items" {...ButtonHandler}>
      {renderDoneIcon()}
      <p className="todo-items-title">{item.title}</p>
      {isDeleteMode && (
        <MdDelete
          className="delete-button"
          onClick={() => dispatch(deleteItem(item))}
        />
      )}
    </div>
  );
};

export default TodoItems;
