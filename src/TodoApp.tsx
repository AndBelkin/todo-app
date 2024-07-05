import { FC } from "react";
import { Helmet } from "react-helmet";
import ItemsContainer from "./components/todoApp/ItemsContainer";
import CreateItemsForm from "./components/todoApp/CreateItemsForm";
import { useAppSelector } from "./app/hooks";

const TodoApp: FC = () => {
  const isOpen: boolean = useAppSelector((state) => state.todoApp.isAdd);
  return (
    <div className="todo-app">
      <Helmet title="Todo Application by AndBelkin" />
      {isOpen ? <CreateItemsForm /> : false}
      <ItemsContainer />
    </div>
  );
};

export default TodoApp;
