import { configureStore } from "@reduxjs/toolkit";

import todos from "./redux/reducer";

const store = configureStore({
  reducer: { todos },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;