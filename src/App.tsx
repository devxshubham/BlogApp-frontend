import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import Post from './pages/Post'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Blog></Blog>
  },
  {
    path : '/user/signin',
    element : <Signin/>
  },
  {
    path : '/user/signup',
    element : <Signup/>
  },
  {
    path : '/post',
    element : <Post></Post>
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
