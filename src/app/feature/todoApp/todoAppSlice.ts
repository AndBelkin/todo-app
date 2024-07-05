import { createSlice } from '@reduxjs/toolkit'

export interface TodoAppSlice {
  value: number
}

const initialState: TodoAppSlice = { value: 0 }

export const todoAppSlice = createSlice({
  name: 'todoApp',
  initialState,
  reducers: {
  }
})

export const { } = todoAppSlice.actions

export default todoAppSlice.reducer