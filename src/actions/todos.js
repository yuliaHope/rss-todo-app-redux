import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';
export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const FAIL_GETTING_TODOS = 'FAIL_GETTING_TODOS';

export function toggleTodo(id) {
  return { type: TOGGLE_COMPLETE, id };
}

export function requestTodos() {
  return { type: REQUEST_TODOS };
}

export function receiveTodos(todos) {
  return { type: RECEIVE_TODOS, todos };
}

export function failGettingTodos() {
  return { type: FAIL_GETTING_TODOS };
}

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

export function fetchTodos() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestTodos());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return axios
      .get(TODOS_URL)
      .then(
        res => dispatch(receiveTodos(res.data)),
        error => dispatch(failGettingTodos(error))
      );
  };
}

export function addTodo(text) {
  return function(dispatch) {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: text,
        completed: false,
      })
      .then(res => dispatch({ type: ADD_TODO, todo: res.data }));
  };
}

export function deleteTodo(id) {
  return function(dispatch) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => dispatch({ type: DELETE_TODO, id }));
  };
}
