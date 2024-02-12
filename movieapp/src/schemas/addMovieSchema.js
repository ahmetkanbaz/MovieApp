import * as yup from 'yup'

const addMovieSchema = yup.object().shape({
  title: yup.string().trim().required('Movie title field cannot be empty!'),
  year: yup.number().required('Year field cannot be empty!'),
  released: yup.string().trim().required('Released field cannot be empty!'),
  runtime: yup.number().required('Runtime field cannot be empty!'),
  genre: yup.string().trim().required('Genre / Genres field cannot be empty!'),
  director: yup.string().trim().required('Director Name field cannot be empty!'),
  writer: yup.string().trim().required('Writer Name field cannot be empty!'),
  actors: yup.string().trim().required('Actor / Actors field cannot be empty!'),
  plot: yup.string().trim().required('Plot field cannot be empty!'),
  language: yup.string().trim().required('Language field cannot be empty!'),
  country: yup.string().trim().required('Country field cannot be empty!'),
  awards: yup.string().trim().required('Award / Awards field cannot be empty!'),
  poster: yup.string().required('URL address cannot be left blank!'),
  imdbRating: yup.number().required('Rating field cannot be empty!'),
  production: yup.string().trim().required('Production field cannot be empty!')
})

export default addMovieSchema