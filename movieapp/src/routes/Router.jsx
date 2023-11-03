import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import AllFilms from "../views/AllFilms/AllFilms";
import DetailMovie from "../views/DetailMovie/DetailMovie";


const Router = () => {
  const routes =  useRoutes([
    {path: '/', element: <Home />},
    {path: 'allfilms', element: <AllFilms />},
    {path: 'allfilms/:id', element: <DetailMovie />}
  ])
  return routes
}

export default Router