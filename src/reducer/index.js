import { ADD_TODO, REMOVE_TODO, TO_DO, TO_IN_PROGRESS, TO_DONE } from '../actions/actions';

const initialState = [];

export default function todos(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return [...state, {
        status: payload.status,
        id: payload.id,
        title: payload.title,
        description: payload.description,
        place: payload.place,
        date: payload.date,
      }];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== payload);
    case TO_DO:
      return state.map(todo => (todo.id === payload ? {...todo, status: 'Todo'} : todo));
    case TO_IN_PROGRESS:
      return state.map(todo => (todo.id === payload ? {...todo, status: 'InProgress'} : todo));
    case TO_DONE:
      return state.map(todo => (todo.id === payload ? {...todo, status: 'Done'} : todo));
    default:
      return state;    
  }
};