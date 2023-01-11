import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;

/*

You have named the state as ====>>>>> "todo" in Line 4,
you can see this in redux-dev-tools

Now, "INITIAL" state that you just declared above has been
initialized as empty array[] with name as =====>>>>> todos.
This can be seen in line 5,6,7.

Now,we have created a reducer function =====>>>>> addTodos on Line 9
which takes in state and action as an argument and does Line 10.

In line 15,16 we export actions and reducers from this file.
Since store has already been made and configured with app.

We just need to dispatch actions using useDispatch().Go to file todo.js.
And fetch state using useSelector().Go to showTodo.js

*/
