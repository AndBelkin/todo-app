import type { FC } from "react";
import { NewTodoForm, TodoList } from "../../entities";

export const IndexPage: FC = () => {
  return (
    <main className="index-page">
      <div className="container grid grid-rows-[1fr_auto] h-full">
        <TodoList />
        <NewTodoForm />
      </div>
    </main>
  );
};
