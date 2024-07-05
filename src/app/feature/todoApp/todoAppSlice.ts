import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    changeIsDone: (state, action: PayloadAction<Todos>) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index != -1) state.todos[index].isDone = !action.payload.isDone;
    },
    addNewItem: (state, action: PayloadAction<Todos>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { changeOpen, changeIsDone, addNewItem } = todoAppSlice.actions;

export default todoAppSlice.reducer;
