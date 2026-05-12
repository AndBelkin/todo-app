import { useTodoStore } from "../../todo/model/slice";
import { TodoItem } from "../../todo/TodoItem";

export const useTodoList = () => {
  const { todos } = useTodoStore();
  const EmptyList = <p className="todo-list-empty">Your list is empty...</p>;
  const renderList = () => todos.map((todo) => <TodoItem item={todo} key={todo.id} />);
  return todos.length ? renderList() : EmptyList;
};
