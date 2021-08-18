import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togleComplete, deleteTodo, fetchTodos } from "../redux/reducer";

import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((state) => state.todos.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return Object.keys(todos).map((id) => ( <TodoItem
      key={id}
      todo={todos[id]}
      markComplete={() => dispatch(togleComplete(id))}
      delTodo={() => dispatch(deleteTodo(id))}
    />
  ));
};

export default Todos;
