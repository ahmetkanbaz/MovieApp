import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import AllFilms from "../views/AllFilms/AllFilms";


const Router = () => {
  const routes =  useRoutes([
    {path: '/', element: <Home />},
    {path: 'allfilms', element: <AllFilms />}
  ])
  return routes
}

export default Router