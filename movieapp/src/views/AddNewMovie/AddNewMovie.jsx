import AddNewMovieForm from "../../components/AddNewMovieForm/AddNewMovieForm"
import {useFormik} from 'formik'
import { addNewMovie } from "../../utils/posts"
import Toast from '../../common/Toast/Toast'

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
      Toast({message: response, type: 'success'})
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