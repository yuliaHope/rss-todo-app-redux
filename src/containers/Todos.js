import React from 'react';
import { useShallowEqualSelector, useActions } from '../hooks/redux';

import { deleteTodo, toggleTodo, fetchTodos } from '../actions/todos';
import TodoList from '../components/TodoList';

const mapTodos = todos => Object.keys(todos).map(id => todos[id]);

const actions = {
  onTodoClick: id => toggleTodo(id),
  deleteTodo: id => deleteTodo(id),
  getTodos: () => fetchTodos(),
};

const Todos = () => {
  const todos = useShallowEqualSelector(({ todos }) => mapTodos(todos));
  const listActions = useActions(actions);
  return <TodoList todos={todos} {...listActions} size={10} />;
};

export default React.memo(Todos);
