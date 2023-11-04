/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput"

const MovieDirectorAuthor = ({values, handleChange, handleBlur, isSubmitting}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle='Director Name'
          type='text'
          name='director'
          id='director'
          value = {values.director}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder='Enter the director name of the movie'
        />
      </div>
    </div>
  )
}

export default MovieDirectorAuthor