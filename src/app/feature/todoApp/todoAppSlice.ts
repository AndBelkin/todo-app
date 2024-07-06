import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

export interface TodoAppSlice {
  appMode: AppMode;
  todos: Todos[];
}

type AppMode = "none" | "new" | "update";

export interface Todos {
  id: number;
  title: string;
  isDone: boolean;
}

const initialState: TodoAppSlice = {
  appMode: "none",
  todos: [],
};

export const todoAppSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    changeAppMode: (state, action: PayloadAction<AppMode>) => {
      state.appMode = action.payload;
    },
    updateItem: (state, action: PayloadAction<Todos>) => {
      const index = state.todos.findIndex(
        (item) => item.id == action.payload.id
      );
      state.todos[index] = action.payload;
    },
    addNewItem: (state, action: PayloadAction<Todos>) => {
      state.todos.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<Todos>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { changeAppMode, updateItem, addNewItem, deleteItem } =
  todoAppSlice.actions;

export default todoAppSlice.reducer;
