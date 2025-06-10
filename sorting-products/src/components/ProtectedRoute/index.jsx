import {Navigate} from 'react-router'
import Cookies from 'js-cookie'

const ProtectedRoute = ({children}) => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute

//hello thius i s protected route
