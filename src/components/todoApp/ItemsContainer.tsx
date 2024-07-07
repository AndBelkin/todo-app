import { FC, useState } from "react";
import "../../styles/ItemsContainer.css";
import TodoItems from "./TodoItems";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeAppMode, Todos } from "../../app/feature/todoApp/todoAppSlice";
import { RiFileList3Line } from "react-icons/ri";
import EditItemsForm from "./EditItemsForm";
import AddButton from "./buttons/AddButton";

const ItemsContainer: FC = () => {
  const appMode = useAppSelector((state) => state.todoApp.appMode);
  const [selectItem, setSelectItem] = useState<Todos>();
  const todos: Todos[] = useAppSelector((state) => state.todoApp.todos);
  const dispatch = useAppDispatch();

  const renderItems = () => {
    if (todos.length === 0) {
      return (
        <>
          <RiFileList3Line className="main-no-task" /> <p>Список пуст!</p>
        </>
      );
    } else
      return todos.map((item, key) => {
        return (
          <TodoItems
            item={item}
            onClick={() => setSelectItem(item)}
            key={key}
          />
        );
      });
  };

  return (
    <div className="items-container">
      <header className="header">
        <h1 className="header-title">Задачи</h1>
        {todos.length > 0 && (
          <p className="header-subtitle">{todos.length} задачи</p>
        )}
      </header>
      <main className="main">{renderItems()}</main>
      <footer className="footer">
        <AddButton onClick={() => dispatch(changeAppMode("new"))} />
      </footer>
      {appMode === "update" && <EditItemsForm item={selectItem!} />}
    </div>
  );
};

export default ItemsContainer;
