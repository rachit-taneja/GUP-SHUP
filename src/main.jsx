
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'  
import Home from './components/Home.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
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
  <Provider store={store}>
  <App />
 </Provider>
 <RouterProvider router={router} />
  
</>

)
