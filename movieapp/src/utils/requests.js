import axios from "axios";
import {
  setLoading,
  setMovies,
  setError,
} from "../redux/slices/movies/moviesSlice";

const baseUrl = import.meta.env.VITE_BASE_URL


export const getAllMovies = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(`${baseUrl}/movies`);
    dispatch(setMovies(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getSingleMovie = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/movies/${id}`)
    return response.data
  }
  catch (error) {
    return error.message
  }
}