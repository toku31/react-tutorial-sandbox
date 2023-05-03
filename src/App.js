import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import UseRefExample3 from './components/UseRefExample3'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'
import CustomHookExample1 from './components/hooks/CustomHookExample1'
import CustomHookExample2 from './components/hooks/CustomHookExample2'
import TodoReduxExample1 from './components/TodoReduxExample1'
import Hooks from './pages/Hooks'
import Layout from './components/DefaultLayout'
import UseRefLogin from './components/Screens/UseRefLogin'
import Screens from './pages/Screens'

function App() {
  return (
    <Router>
      <Layout>
      <div className='container mt-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/screens' element={<Screens />} />
          <Route path='/hooks/useref-example-1' element={<UseRefExample1 />} />
          <Route path='/hooks/useref-example-2' element={<UseRefExample2 />} />
          <Route path='/hooks/useref-example-3' element={<UseRefExample3 />} />
          <Route path='/hooks/usememo-example' element={<UseMemoExample />} />
          <Route path='/hooks/usecallback-example' element={<UseCallbackExample />} />
          <Route
            path='/hooks/custom-hook-example-1'
            element={<CustomHookExample1 />}
          />
          <Route
            path='/hooks/custom-hook-example-2'
            element={<CustomHookExample2 />}
          />
          <Route
            path='/todo-redux-example-1'
            element={<TodoReduxExample1 />}
          />
          <Route path='/screens/useref-login' element={<UseRefLogin />} />
        </Routes>
      </div>
      </Layout>
    </Router>
  )
}

export default App
