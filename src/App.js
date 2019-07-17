import React from 'react';

import Todos from './containers/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

import './App.css';

const App = () => (
  <div className="App">
    <div className="container">
      <Header />
      <br />
      <AddTodo />
      <Todos />
    </div>
  </div>
);

export default App;
