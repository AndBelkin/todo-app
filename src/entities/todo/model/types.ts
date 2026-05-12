export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoState {
  todos: Todo[];
  create: (data: TodoCreateDate) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  update: (id: string, date: TodoUpdateDate) => void;

  getAll: () => Todo[];
  getCompleted: () => Todo[];
  getUnfinished: () => Todo[];
}

export type TodoCreateDate = Omit<Todo, "id" | "createdAt">;
export type TodoUpdateDate = Partial<Omit<Todo, "id">>;
