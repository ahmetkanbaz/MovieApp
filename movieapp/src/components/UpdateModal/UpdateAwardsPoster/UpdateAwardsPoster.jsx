/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput"

const UpdateAwardsPoster = ({handleChange, handleBlur, values, isSubmitting}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="Awards"
          type="text"
          id="awards"
          name="awards"
          defaultValue={values.awards}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the awards won by the film. If more than one, separate them with ','."
          disabled={isSubmitting}
        />
      </div>
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle='Image Url'
          type='url'
          id='poster'
          name='poster'
          defaultValue={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter the picture poster of the movie...'
          disabled={isSubmitting}
        />
      </div>
    </div>
  )
}

export default UpdateAwardsPoster