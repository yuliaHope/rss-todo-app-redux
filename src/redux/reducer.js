import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  DELETE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  FAIL_GETTING_TODOS,
} from "./actions";

const initialState = {};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case TOGGLE_COMPLETE: {
      const todo = state[action.id];
      return { ...state, [action.id]: { ...todo, completed: !todo.completed } };
    }
    case DELETE_TODO: {
      const { [action.id]: deleted, ...rest } = state;
      return rest;
    }
    case REQUEST_TODOS: {
      // TODO
      return state;
    }
    case RECEIVE_TODOS: {
      const newState = {};
      action.payload.forEach((todo) => (newState[todo.id] = todo));
      return newState;
    }
    case FAIL_GETTING_TODOS: {
      // TODO
      return state;
    }
    default:
      return state;
  }
}

export default todos;
