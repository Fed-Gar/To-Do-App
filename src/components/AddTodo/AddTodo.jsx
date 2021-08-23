import React, { useState } from 'react';
import { connect } from "react-redux";

import Button from '../Buttons/Button/Button';
import { addTodo } from '../../actions/index.js';

import styles from "./addTodo.module.scss";

function AddTodo(props) {

  const [state, setState] = useState({
    title:'',
    description:'',
    place:'',
    date:'',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]:value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.addTodo(state);
    setState({
      title:'',
      description:'',
      place:'',
      date:'',
    });
  };

  return (
    <div className={ styles.container }>
      <form className={ styles.form } onSubmit={ handleSubmit }>
        <label className={ styles.label } htmlFor="title" > Title </label>
        <input
            type="text"
            id="title"
            name = "title"
            value={ state.title }
            autoComplete="off"
            className={ styles.input }
            onChange={ handleChange }
        />
        <label className={ styles.label } htmlFor="description"> Description </label>
        <textarea 
            id='description' 
            name="description" 
            value={ state.description } 
            className={ styles.textarea }
            onChange={ handleChange }
        >
        </textarea>  
        <label className={ styles.label } htmlFor="place"> Place </label>
        <input 
            type="text"
            id='place'
            name="place"
            value={ state.place }
            autoComplete="off"
            className= {styles.input }
            onChange={ handleChange }
        />
        <label className={ styles.label } htmlFor="date"> Date </label>
        <input 
            type='text'
            id='date'
            name="date"
            value={ state.date }
            autoComplete="off"
            className={ styles.input }
            onChange={ handleChange }
        />
        <Button msg={ 'Create' } type={ 'submit' }/>
      </form>
    </div>  
  );
};

export default connect(null, { addTodo })(AddTodo);