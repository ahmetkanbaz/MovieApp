/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput"

const UpdateReleasedRuntime = ({handleChange, handleBlur, values, isSubmitting}) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <LabelInput
          labelTitle='Released'
          type='text'
          id='released'
          name='released'
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          defaultValue={values.released}
        />
      </div>
      <div className="col-md-6">
        <LabelInput
          labelTitle='Runtime'
          type='number'
          id='runtime'
          name='runtime'
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          defaultValue={values.runtime}
        />
      </div>
    </div>
  )
}

export default UpdateReleasedRuntime