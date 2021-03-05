import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },

    setCancel: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          state.todoList = state.todoList.filter((x) => {
            return x.id !== item.id;
          });
        }
      });
    },
  },
});

export const { saveTodo, setCheck, setCancel } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
