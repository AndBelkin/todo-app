import { FC } from "react";
import { Helmet } from "react-helmet";
import ItemsContainer from "./components/todoApp/ItemsContainer";
import CreateItemsForm from "./components/todoApp/forms/CreateItemsForm";
import { useAppSelector } from "./app/hooks";
import ShadowWindow from "./components/todoApp/ShadowWindow";

const TodoApp: FC = () => {
  const appMode = useAppSelector((state) => state.todoApp.appMode);
  return (
    <div className="todo-app">
      <Helmet title="Todo Application by AndBelkin" />
      {appMode === "new" && <CreateItemsForm />}
      {appMode !== "none" && <ShadowWindow />}
      <ItemsContainer />
    </div>
  );
};

export default TodoApp;
