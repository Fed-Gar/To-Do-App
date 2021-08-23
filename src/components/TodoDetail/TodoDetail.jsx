import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import GrowButton from '../Buttons/GrowButton/GrowButton';
import Error404 from '../Error/Error404';

import { removeTodo, toDone, toInProgress, toDo } from '../../actions/index.js';

import styles from "./todoDetail.module.scss";

function TodoDetail({ todos, match, toDone, toInProgress, removeTodo, toDo }) {
  const todoId = match.params.id;
  const todo = todos.find(todo => todo.id === todoId);

  if(todos.length > 0) {
    return (
      <div className={ styles.container }>
        <h4> To Do Details: </h4>
        <div className={ styles.title }>
          <h3> { `Title:` } </h3>
          <h2> { `${todo.title}` } </h2>
        </div>
        <p> { `Description: ${todo.description}` } </p>
        <p> { `Place: ${todo.place}` } </p>
        <p> { `Date: ${todo.date}` } </p>
        <p> { `Status: ${todo.status}` } </p>
        <div className={ styles.buttons }>
          <GrowButton msg={ 'To Do' } func={ toDo } id={ todo.id }/>
          <GrowButton msg={ 'In Progress' } func={ toInProgress } id={ todo.id }/>
          <GrowButton msg={ 'Done' } func={ toDone } id={ todo.id }/>
          <Link to="/" className={ styles.link }>
            <GrowButton msg={ 'Delete' } func={ removeTodo } id={ todo.id }/>
          </Link>
        </div>
      </div>
    )
  } else {
      return <Error404/>
  };
};

function mapStateToProps(state) {  
  return {                         
    todos: state,
  };
};
  
const mapDispatchToProps = {
  removeTodo,
  toDone,
  toInProgress,
  toDo,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);