import axios from "axios";
import {
  setLoading,
  setMovies,
  setError,
} from "../redux/slices/movies/moviesSlice";

export const getAllMovies = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(
      "https://ott-details.p.rapidapi.com/advancedsearch",
      {
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
