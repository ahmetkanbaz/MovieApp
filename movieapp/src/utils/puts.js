import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const updateMovie = async (id, values) => {
  try {
    const response = await axios.put(`${baseUrl}/movies/${id}`, values)
    console.log(response)
  }
  catch (error) {
    console.log(error)
  }
}