import { Navigate, Route } from "react-router-dom"
import Cookies from "js-cookie"

const ProtectedRoute = ({children}: {children: JSX.Element}) => {

   const token = Cookies.get('access_token')
   if (!token) {
    return <Navigate to = '/login' />
   }
   return children
}

export default ProtectedRoute