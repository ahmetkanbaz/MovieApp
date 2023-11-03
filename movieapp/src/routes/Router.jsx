import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import AllFilms from "../views/AllFilms/AllFilms";
import DetailMovie from "../views/DetailMovie/DetailMovie";
import AddNewMovie from "../views/AddNewMovie/AddNewMovie";


const Router = () => {
  const routes =  useRoutes([
    {path: '/', element: <Home />},
    {path: 'allmovies', element: <AllFilms />},
    {path: 'allmovies/:id', element: <DetailMovie />},
    {path: 'addnewmovie', element: <AddNewMovie />}
  ])
  return routes
}

export default Router