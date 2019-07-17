import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos, onTodoClick, deleteTodo } = this.props;
    return todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onTodoClick={onTodoClick}
        delTodo={deleteTodo}
      />
    ));
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};

export default TodoList;
