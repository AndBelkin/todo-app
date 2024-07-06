import { FC, useState } from "react";
import { FaCircle } from "react-icons/fa";
import "../../styles/TodoItems.css";
import {
  changeAppMode,
  deleteItem,
  Todos,
  updateItem,
} from "../../app/feature/todoApp/todoAppSlice";
import { FaCircleCheck } from "react-icons/fa6";
import { useAppDispatch } from "../../app/hooks";
import { useLongPress } from "@uidotdev/usehooks";
import { MdDelete } from "react-icons/md";

interface TodoItemsProps {
  item: Todos;
  onClick: () => void;
}

const TodoItems: FC<TodoItemsProps> = ({ item, onClick }: TodoItemsProps) => {
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const ButtonHandler = useLongPress(() => setIsDeleteMode(!isDeleteMode), {
    threshold: 500,
  });
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(updateItem({ ...item, isDone: !item.isDone }));
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
      <p
        className="todo-items-title"
        onClick={() => {
          onClick();
          dispatch(changeAppMode("update"));
        }}
      >
        {item.title}
      </p>
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
