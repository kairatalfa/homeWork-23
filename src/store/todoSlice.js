import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: Math.random(),
        title: action.payload.text,
        completed: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
