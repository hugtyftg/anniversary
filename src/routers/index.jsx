import { Navigate } from "react-router-dom";
import { Home } from "../views";
const routes = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '*',
    element: <Navigate to={'/home'} />
  }
]
export default routes;