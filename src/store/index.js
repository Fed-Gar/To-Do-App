import { createStore, applyMiddleware, compose } from "redux";
import todosReducer from '../reducer/index';
import thunk from "redux-thunk";

const composeEnhacer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  todosReducer,
  composeEnhacer(applyMiddleware(thunk))
);

export default store;