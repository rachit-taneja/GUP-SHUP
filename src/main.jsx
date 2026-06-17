
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'  
import Home from './components/home/Home.jsx'
import homeScreen from './components/homescreen.jsx'
// import { store } from './store/store'
// import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />
  },
  {
    path: '/text',
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
  {/* <Provider store={store}> */}
  <App />
  <RouterProvider router={router} />
 {/* </Provider> */}
 
  
</>

)
