import React from 'react'
import { Route, Switch } from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';
import Error404 from './components/Error/Error404';

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddTodo} />
        <Route path="/edit/:id" component={TodoDetail} />
        <Route path="*" component={Error404} />
      </Switch>
    </>
  );
};