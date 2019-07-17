import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const Todos = ({ todos, toggleComplete, delTodo }) =>
  todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleComplete={toggleComplete}
      delTodo={delTodo}
    />
  ));

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
