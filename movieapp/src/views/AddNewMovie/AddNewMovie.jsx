import AddNewMovieForm from "../../components/AddNewMovieForm/AddNewMovieForm"
import {useFormik} from 'formik'
import { addNewMovie } from "../../utils/posts"
import Toast from '../../common/Toast/Toast'
import addMovieSchema from '../../schemas/addMovieSchema'

const AddNewMovie = () => {
  const {handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched, isSubmitting} = useFormik({
    initialValues: {
      title: '',
      year: '',
      released: '',
      runtime: '',
      genre: '',
      director: '',
      writer: '',
      actors: '',
      plot: '',
      language: '',
      country: '',
      awards: '',
      poster: '',
      imdbRating: '',
      production: ''
    },
    validationSchema: addMovieSchema,
    onSubmit: async (values, bag) => {
      const response = await addNewMovie(values)
      console.log(response)
      Toast({message: 'The film was successfully added.', type: 'success'})
      bag.setSubmitting(false)
      bag.resetForm()
    }
  })
  return (
    <>
      <AddNewMovieForm
        handleSubmit = {handleSubmit}
        handleChange = {handleChange}
        handleBlur = {handleBlur}
        handleReset = {handleReset}
        values = {values}
        errors = {errors}
        touched = {touched}
        isSubmitting = {isSubmitting}
      />
    </>
  )
}

export default AddNewMovie