import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const initialState = { entities: {} };

// First, create the thunk
export const fetchTodos = createAsyncThunk("todos/fetch", async (userId) => {
  const response = await axios.get(TODOS_URL);
  return response.data;
});

export const addTodo = createAsyncThunk("todos/add", async (text) => {
  const responce = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    {
      title: text,
      completed: false,
    }
  );
  return responce.data;
});

export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
 await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return id;
})

const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    togleComplete(state, action) {
      const todo = state.entities[action.payload];
      state.entities[action.payload] = { ...todo, completed: !todo.completed };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      
      const newState = {};
      action.payload.forEach(
        (todo) => (newState[todo.id] = todo)
      );
      state.entities = newState;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.entities[action.payload.id] = action.payload;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      delete state.entities[action.payload];
    });
  },
});

export const {
  togleComplete,
  requestTodos,
  failGettingTodos,
} = counterSlice.actions;
console.log(counterSlice.actions);

export default counterSlice.reducer;
