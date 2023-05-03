import React from 'react'
import { Link } from 'react-router-dom'

function Screens() {
  return (
    <>
    <h1 className='mb-3'>React Screens</h1>
    <ul class='list-group'>
      <Link
        className='list-group-item list-group-item-action'
        to='useref-login'
      >
        useRefを使ったログイン画面
      </Link>
    </ul>
  </>
  )
}

export default Screens