// reducer.js
import { createStore } from "redux";

const initialState = {
  // todos: [

  // ]

  todos: [
    {
      id: 1,
      text: "ブログを確認",
      completed: false,
    },
    {
      id: 2,
      text: "メールの返信",
      completed: false,
    },

  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('action.type', action.type)
      console.log('action.payload', action.payload)
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed }
          } else {
            return todo
          }
        })
      }
    default:
      return state
  }
}

export default todoReducer
// const store = createStore(todoReducer);

// export default store;
