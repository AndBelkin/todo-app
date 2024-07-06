import { FC } from "react";
import { IoIosAddCircle } from "react-icons/io";
import "../../styles/ItemsContainer.css";
import TodoItems from "./TodoItems";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeOpen, Todos } from "../../app/feature/todoApp/todoAppSlice";

const ItemsContainer: FC = () => {
  const isOpen: boolean = useAppSelector((state) => state.todoApp.isAdd);
  const todos: Todos[] = useAppSelector((state) => state.todoApp.todos);
  const dispatch = useAppDispatch();

  const renderItems = () => {
    return todos.map((item, key) => {
      return <TodoItems item={item} key={key} />;
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
        {!isOpen && (
          <IoIosAddCircle
            className="footer-add-button"
            onClick={() => dispatch(changeOpen())}
          />
        )}
      </footer>
    </div>
  );
};

export default ItemsContainer;
