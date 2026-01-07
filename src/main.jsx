
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'  
import Home from './components/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  }
])
createRoot(document.getElementById('root')).render(
  <>
  <App />
 
 <RouterProvider router={router} />
  
</>

)
