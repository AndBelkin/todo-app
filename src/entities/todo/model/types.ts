export interface Category {
  id: string;
  name: string;
  color?: string;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  categoryID: string | null;
}

export interface TodoState {
  todos: Todo[];
  categories: Category[];
  // Main methods
  create: (data: TodoCreateDate) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  update: (id: string, date: TodoUpdateDate) => void;
  // Methods for Category
  addCategory: (name: string, color?: string) => void;
  removeCategory: (id: string) => void;
  updateCategory: (id: string, date: Omit<Category, "id">) => void;

  // get's methods
  getAll: () => Todo[];
  getCompleted: () => Todo[];
  getUnfinished: () => Todo[];

  getByCategory: (categoryID: string) => Todo[];
  getCategories: () => Category[];
}

export interface TodoItemProps {
  item: Todo;
}

export type TodoCreateDate = Omit<Todo, "id" | "createdAt">;
export type TodoUpdateDate = Partial<Omit<Todo, "id">>;
