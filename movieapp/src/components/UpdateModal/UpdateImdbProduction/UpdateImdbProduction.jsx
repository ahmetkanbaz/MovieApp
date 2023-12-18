/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput"

const UpdateImdbProduction = ({handleChange, handleBlur, values, isSubmitting}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="IMDB Rating"
          type="number"
          id="imdbRating"
          name="imdbRating"
          defaultValue={values.imdbRating}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the imdb score of the movie..."
          disabled={isSubmitting}
        />
      </div>
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="Production"
          type="text"
          id="production"
          name="production"
          defaultValue={values.production}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the production of the movie"
          disabled={isSubmitting}
        />
      </div>
    </div>
  )
}

export default UpdateImdbProduction