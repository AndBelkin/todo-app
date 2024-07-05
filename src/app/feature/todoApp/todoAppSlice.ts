import { createSlice } from "@reduxjs/toolkit";

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
  todos: [{ id: 0, title: "Default Task", isDone: false }],
};

export const todoAppSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    changeOpen: (state) => {
      state.isAdd = !state.isAdd;
    },
  },
});

export const { changeOpen } = todoAppSlice.actions;

export default todoAppSlice.reducer;
