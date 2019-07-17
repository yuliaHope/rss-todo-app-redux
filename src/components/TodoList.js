import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

function TodoList({todos, size, onTodoClick, deleteTodo, getTodos}) {
  useEffect(() => {
    getTodos();
  }, [size]);

  return todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onTodoClick={onTodoClick}
      delTodo={deleteTodo}
    />
  ));
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};

export default TodoList;
