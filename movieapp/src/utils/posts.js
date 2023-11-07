import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const addNewMovie = async (movie) => {
  try {
    const response = await axios.post(`${baseUrl}/movies`, movie);
    return response.data
  } catch (error) {
    return error.message;
  }
};
