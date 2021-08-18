// Importing Modules
import React from "react";

// Importing Components
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <br />
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
