import axios from "axios";
import {
  setLoading,
  setMovies,
  setError,
} from "../redux/slices/movies/moviesSlice";

import { setActorLoading, setActors, setActorError } from "../redux/slices/actors/actorsSlice";

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

export const getAllActors = () => async (dispatch) => {
  dispatch(setActorLoading)
  try {
    const response = await axios.get(`${baseUrl}/actors`)
    dispatch(setActors(response.data))
  }
  catch (error) {
    setActorError(error.message)
  }
}