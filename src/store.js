import { configureStore } from "@reduxjs/toolkit";

import { todos } from "./redux/reducer";

const preloadedState = {
  todos: [],
}

const store = configureStore({
  reducer: { todos },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

export default store;
