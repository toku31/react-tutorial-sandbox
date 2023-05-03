import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { createStore, combineReducers } from 'redux'
import  todoReducer  from './reducer/todoReducer'

// const initialState = {
//   todos: [],
//   todoReducer
// }

const rootReducer = combineReducers({
  todoReducer : todoReducer,
})
const store = createStore(rootReducer)

// const store = createStore(rootReducer, initialState)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

