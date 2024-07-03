import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"


const router = createBrowserRouter([
  {
    path : '/user/signin',
    element : <Signin/>
  },
  {
    path : '/user/signup',
    element : <Signup/>
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
