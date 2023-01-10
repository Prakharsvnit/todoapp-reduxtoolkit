import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialstate: {
    todos: [],
  },
  reducers: {
    addTodos: (state, action) => {
      state.todo.push(action.payload);
    },
  },
});

export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;
