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
// this is a protected route component that checks for a JWT token in cookies
// here, if the token is not present, it redirects the user to the login page
// if the token is present, it renders the children components
