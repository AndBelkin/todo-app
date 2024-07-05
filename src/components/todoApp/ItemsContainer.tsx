import { FC } from "react";
import { IoIosAddCircle } from "react-icons/io";
import "../../styles/ItemsContainer.css";
import TodoItems from "./TodoItems";

const ItemsContainer: FC = () => {
  return (
    <div className="items-container">
      <header className="header">
        <h1 className="header-title">Задачи</h1>
        <p className="header-subtitle">2 задачи</p>
      </header>
      <main className="main">
        <TodoItems />
        <TodoItems />
      </main>
      <footer className="footer">
        <IoIosAddCircle className="footer-add-button" />
      </footer>
    </div>
  );
};

export default ItemsContainer;
