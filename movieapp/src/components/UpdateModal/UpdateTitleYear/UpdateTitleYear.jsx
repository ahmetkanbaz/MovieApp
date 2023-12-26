/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput";

const UpdateTitleYear = ({values, handleChange, handleBlur, isSubmitting}) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <LabelInput
          labelTitle="Title"
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          defaultValue={values.title}
        />
      </div>
      <div className="col-md-6">
        <LabelInput
          labelTitle="Year"
          type="number"
          id="year"
          name="year"
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          defaultValue={values.year}
        />
      </div>
    </div>
  );
};

export default UpdateTitleYear;
