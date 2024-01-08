import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./routes/Router";
import { getAllActors, getAllMovies } from "./utils/requests";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setTheme} from './redux/slices/theme/themeSlice'

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const theme = useSelector((state) => state.theme.theme)
  const actors = useSelector((state) => state.actors.actors)

  const getTheme = () => {
    const localTheme = localStorage.getItem('movieTheme')
    if(localTheme) {
      dispatch(setTheme(JSON.parse(localTheme)))
    }
    else {
      dispatch(setTheme('light'))
      localStorage.setItem('movieTheme', JSON.stringify('light'))
    }
  }

  useEffect(() => {
    if (!movies.length) {
      dispatch(getAllMovies());
    }

    if (!actors.length) {
      dispatch(getAllActors())
    }

    getTheme()
  }, []);

  return (
    <>
      <GlobalStyle theme={theme}/>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
