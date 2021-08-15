import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TodoItem from "./TodoItem";
import { toggleTodo, deleteTodo, getTodos } from "../redux/actions";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const markComplete = (id) => {
    dispatch(toggleTodo(id));
  };

  const delTodo = async (id) => {
    dispatch(deleteTodo(id));
  };

  return Object.keys(todos).map((id) => (
    <TodoItem
      key={id}
      todo={todos[id]}
      markComplete={markComplete}
      delTodo={delTodo}
    />
  ));
};

export default Todos;
