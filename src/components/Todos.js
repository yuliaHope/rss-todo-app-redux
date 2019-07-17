import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const Todos = ({ todos, markComplete, delTodo }) =>
  todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={markComplete}
      delTodo={delTodo}
    />
  ));

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
