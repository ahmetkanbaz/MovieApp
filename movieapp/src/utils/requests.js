import axios from "axios";
import {
  setLoading,
  setMovies,
  setError,
} from "../redux/slices/movies/moviesSlice";

const baseUrl = import.meta.env.VITE_OTT_URL
const apiKEY = import.meta.env.VITE_XRapidAPIKey
const apiHOST = import.meta.env.VITE_XRapidAPIHost


export const getAllMovies = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(
      baseUrl,
      {
        headers: {
          "X-RapidAPI-Key":
            apiKEY,
          "X-RapidAPI-Host": apiHOST,
        },
      }
    );
    dispatch(setMovies(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
