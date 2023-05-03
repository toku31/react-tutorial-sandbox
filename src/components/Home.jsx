import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1 className='mb-3'>Menu</h1>
      <ul className='list-group'>
      <Link
          className='list-group-item list-group-item-action'
          to='hooks'
        >
          React Hooks
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='screens'
        >
          React Screens
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='todo-redux-example-1'
        >
          Todo Redux Example1
        </Link>
      </ul>
    </>
  )
}

export default Home
