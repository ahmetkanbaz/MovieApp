import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./routes/Router";
import { getAllMovies } from "./utils/requests";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Toast from "./common/Toast/Toast";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    if (!movies.results) {
      dispatch(getAllMovies());
    }

    Toast({
      message: 'Deneme',
      type: 'error'
    })
  }, []);

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
