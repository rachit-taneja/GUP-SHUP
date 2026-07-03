import { useSelector } from 'react-redux'
const ProtectedRoutes = ({ children }) => {

  const { isauthenticated } = useSelector(state => state.userSlice)
  
  return
  ( children)

  console.log("isauthenticated")
}

export default ProtectedRoutes