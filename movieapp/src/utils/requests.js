import axios from "axios";
import {
  setLoading,
  setMovies,
  setError,
} from "../redux/slices/movies/moviesSlice";

export const getAllMovies = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = axios.get(
      "https://ott-details.p.rapidapi.com/advancedsearch",
      {
        params: {
          start_year: "1970",
          end_year: "2020",
          min_imdb: "6",
          max_imdb: "7.8",
          genre: "action",
          language: "english",
          type: "movie",
          sort: "latest",
          page: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "a00042e7e2msh577d9c138893f2dp1a3eaajsned4e60a07f10",
          "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
        },
      }
    );
    dispatch(setMovies(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
