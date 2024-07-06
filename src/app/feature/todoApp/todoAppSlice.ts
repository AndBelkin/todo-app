import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

export interface TodoAppSlice {
  isAdd: boolean;
  todos: Todos[];
}

export interface Todos {
  id: number;
  title: string;
  isDone: boolean;
}

const initialState: TodoAppSlice = {
  isAdd: false,
  todos: [],
};

export const todoAppSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    changeOpen: (state) => {
      state.isAdd = !state.isAdd;
    },
    changeIsDone: (state, action: PayloadAction<Todos>) => {
      state.todos.map(
        (item) => item.id === action.payload.id && (item.isDone = !item.isDone)
      );
    },
    addNewItem: (state, action: PayloadAction<Todos>) => {
      state.todos.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<Todos>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { changeOpen, changeIsDone, addNewItem, deleteItem } =
  todoAppSlice.actions;

export default todoAppSlice.reducer;
