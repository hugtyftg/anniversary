import { Navigate } from "react-router-dom";
import { Login } from "../views";
const routes = [
  {
    path: '/',
    element: <Navigate to={'/login'} />
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <Navigate to={'/login'} />
  }
]
export default routes;