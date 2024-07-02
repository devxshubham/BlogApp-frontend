import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signin from "./pages/Signin"
import Login from "./pages/Login"
import Blog from "./pages/Blog"


const router = createBrowserRouter([
  {
    path : '/user/login',
    element : <Login/>
  },
  {
    path : '/user/signin',
    element : <Signin/>
  },
  {
    path : '/blog',
    element : <Blog></Blog>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
        
    </>
  )
}

export default App
