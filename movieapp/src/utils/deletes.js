import axios from 'axios'
const baseUrl = import.meta.env.VITE_BASE_URL

export const deleteMovie = async (id) => {
    const response = await axios.delete(`${baseUrl}/movies/${id}`)
    if (response.status == 200) {
      return `The movie with ID ${id} was deleted successfully.`
    }
    else {
      return `An error was encountered while deleting the movie.`
    }
}