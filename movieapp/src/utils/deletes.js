import axios from 'axios'
const baseUrl = import.meta.env.VITE_BASE_URL

export const deleteMovie = async (id, title) => {
    const response = await axios.delete(`${baseUrl}/movies/${id}`)
    if (response.status == 200) {
      return `${title} movie deleted successfully.`
    }
    else {
      return `An error was encountered while deleting the movie.`
    }
}