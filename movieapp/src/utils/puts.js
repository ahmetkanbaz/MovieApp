import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const updateMovie = async (id, values) => {
  try {
    const response = await axios.put(`${baseUrl}/movies/${id}`, values)
    return response
  }
  catch (error) {
    return error
  }
}