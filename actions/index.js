import { ADD_TODO, REMOVE_TODO, TO_DO, TO_IN_PROGRESS, TO_DONE } from './actions';

const { v4: uuidv4 } = require('uuid'); 
// import { uuid } from 'uuidv4'; // para typescript

export function addTodo({ title, description, place, date }) {
  return {
    type: ADD_TODO,
    payload: {
			status: 'Todo',
			id: uuidv4(),
			title,
			description,
			place,
			date,
    },
  };
};

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export function toDo(id) {
  return {
    type: TO_DO,
    payload: id,
  };
};

export function toInProgress(id) {
  return {
    type: TO_IN_PROGRESS,
    payload: id,
  };
};

export function toDone(id) {
  return {
    type: TO_DONE,
    payload: id,
  };
};