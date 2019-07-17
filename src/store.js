import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { todos } from './reducers/todos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const rootReducer = combineReducers({ todos });

const store = createStore(rootReducer, enhancer);

export default store;