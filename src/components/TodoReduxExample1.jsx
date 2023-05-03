import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/todoActions'

function TodoRedux() {
  // const todos = useSelector(state => state.rootReducer)

  const [text, setText] = useState('')
  const todos = useSelector(state => state.todoReducer.todos)
  console.log('todos', todos)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (text.trim()) {
      console.log(text.trim())
      dispatch(addTodo(text))
      setText('')
    }
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }
  console.log('todos2', todos);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
      {todos && todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoRedux