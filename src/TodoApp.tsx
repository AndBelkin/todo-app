import { FC } from "react";
import { Helmet } from "react-helmet";
import ItemsContainer from "./components/todoApp/ItemsContainer";
import CreateItemsForm from "./components/todoApp/CreateItemsForm";
import { useAppSelector } from "./app/hooks";
import ShadowWindow from "./components/todoApp/ShadowWindow";

const TodoApp: FC = () => {
  const isOpen: boolean = useAppSelector((state) => state.todoApp.isAdd);
  return (
    <div className="todo-app">
      <Helmet title="Todo Application by AndBelkin" />
      {isOpen ? <CreateItemsForm /> : false}
      {isOpen ? <ShadowWindow /> : false}
      <ItemsContainer />
    </div>
  );
};

export default TodoApp;
