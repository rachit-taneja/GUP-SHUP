
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'  
import Home from './components/home/Home.jsx'
import homeScreen from './components/homescreen.jsx'

import { store } from './store/store'
import React from 'react'
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: '/text',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/',
    element: <Login />
  }
])
createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
   <Provider store={store}>
  <App />
  <RouterProvider router={router} />
  </Provider>   
 
  </React.StrictMode>
</>
)