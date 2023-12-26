/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput"

const UpdateDirectorWriter = ({handleChange, handleBlur, values, isSubmitting}) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <LabelInput
          labelTitle='Director'
          id='director'
          name='director'
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          defaultValue={values.director}
        />
      </div>
      <div className="col-md-6">
        <LabelInput
          labelTitle='Writer'
          id='writer'
          name='writer'
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          defaultValue={values.writer}
        />
      </div>
    </div>
  )
}

export default UpdateDirectorWriter