import { create } from "zustand";
import type { Todo, TodoState, TodoUpdateDate } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [
        {
          id: crypto.randomUUID(),
          title: "First task",
          completed: false,
          createdAt: new Date().toISOString(),
        },
        {
          id: crypto.randomUUID(),
          title: "Second task",
          completed: false,
          createdAt: new Date().toISOString(),
        },
        {
          id: crypto.randomUUID(),
          title: "Third task",
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ],
      create: (data) => {
        const newTodo: Todo = { ...data, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
        set((state) => ({ todos: [...state.todos, newTodo] }));
      },
      toggle: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        })),
      remove: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      update: (id: string, date: TodoUpdateDate) =>
        set((state) => ({
          todos: state.todos.map((todo) => (todo.id === id ? { ...todo, ...date } : todo)),
        })),

      getAll: () => get().todos,
      getCompleted: () => get().todos.filter((todo) => todo.completed),
      getUnfinished: () => get().todos.filter((todo) => !todo.completed),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
