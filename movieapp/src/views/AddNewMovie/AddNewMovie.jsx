import AddNewMovieForm from "../../components/AddNewMovieForm/AddNewMovieForm"
import {useFormik} from 'formik'
import { addNewMovie } from "../../utils/posts"

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
    onSubmit: async (values, bag) => {
      const response = await addNewMovie(values)
      console.log(response)
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