import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const addNewMovie = async (movie) => {
  try {
    console.log(movie)
    // const response = await axios.post(`${baseUrl}/movies`, movie);
    // console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
