import type { FC } from "react";
import { TodoList } from "../../entities";

export const IndexPage: FC = () => {
  return (
    <main className="index-page">
      <div className="container">
        <TodoList />
      </div>
    </main>
  );
};
