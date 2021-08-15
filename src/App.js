// Importing Modules
import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing Components
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    setTodos(res.data);
  }, []);

  const markComplete = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const deleleTodo = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const addTodo = async (title) => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    });
    setTodos((todos) => [...todos, res.data]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <br />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} markComplete={markComplete} delTodo={deleleTodo} />
      </div>
    </div>
  );
}

export default App;
