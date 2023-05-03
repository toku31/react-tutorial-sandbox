import '../resources/layout.css'
// import Dropdown from 'react-bootstrap/Dropdown';
// import { useNavigate } from 'react-router-dom';

function Layout(props) {
  // const user = JSON.parse(localStorage.getItem('expense-tracker-user'))
  // const navigate = useNavigate()
  // const menu = 

  return (
    <div className='layout mt-1'>
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">React Sandbox</h1>
        </div>
        {/* <div>
          <h1 className='username'>{user.name}</h1>
        </div> */}
        <div>

        </div>
      </div>

      <div className='content'>
          {props.children}
      </div>
      
    </div>
  )
}

export default Layout