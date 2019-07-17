import { connect } from 'react-redux';

import { deleteTodo, toggleTodo, fetchTodos } from '../actions/todos';
import TodoList from '../components/TodoList';

const getTodos = todos => Object.keys(todos).map(id => todos[id]);

const mapStateToProps = ({ todos }) => {
  return {
    todos: getTodos(todos),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    getTodos: () => dispatch(fetchTodos()),
  };
};

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default Todos;
