import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./routes/Router";
import { getAllMovies } from "./utils/requests";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  // useEffect(() => {
  //   if (!movies.length) {
  //     dispatch(getAllMovies());
  //   }
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
