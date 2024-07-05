import { FC } from "react";
import { Helmet } from "react-helmet";

const TodoApp: FC = () => {
  return (
    <div className="todo-app">
      <Helmet title="Todo Application by AndBelkin" />
    </div>
  );
};

export default TodoApp;
