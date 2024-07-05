import { FC } from "react";
import { Helmet } from "react-helmet";
import ItemsContainer from "./components/todoApp/ItemsContainer";
import CreateItemsForm from "./components/todoApp/CreateItemsForm";

const TodoApp: FC = () => {
  return (
    <div className="todo-app">
      <Helmet title="Todo Application by AndBelkin" />
      <CreateItemsForm />
      <ItemsContainer />
    </div>
  );
};

export default TodoApp;
