import { FC, useState } from "react";
import "../../styles/ItemsContainer.css";
import TodoItems from "./TodoItems";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeAppMode, Todos } from "../../app/feature/todoApp/todoAppSlice";
import EditItemsForm from "./EditItemsForm";
import AddButton from "./buttons/AddButton";
import ListIsEmpty from "./ListIsEmpty";
import ItemsCounter from "./ItemsCounter";

const ItemsContainer: FC = () => {
  const appMode = useAppSelector((state) => state.todoApp.appMode);
  const [selectItem, setSelectItem] = useState<Todos>();
  const todos: Todos[] = useAppSelector((state) => state.todoApp.todos);
  const dispatch = useAppDispatch();

  const renderItems = () => {
    if (todos.length === 0) {
      return <ListIsEmpty />;
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
        <ItemsCounter count={todos.length} />
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
