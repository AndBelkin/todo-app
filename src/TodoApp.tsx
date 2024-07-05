import { FC } from "react";
import { Helmet } from "react-helmet";
import ItemsContainer from "./components/todoApp/ItemsContainer";

const TodoApp: FC = () => {
  return (
    <div className="todo-app">
      <Helmet title="Todo Application by AndBelkin" />
      <ItemsContainer />
    </div>
  );
};

export default TodoApp;
