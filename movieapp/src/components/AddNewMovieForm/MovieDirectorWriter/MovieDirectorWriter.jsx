/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput";

const MovieDirectorWriter = ({
  values,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="Director Name"
          type="text"
          name="director"
          id="director"
          value={values.director}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="Enter the director name of the movie.."
        />
      </div>
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="Writer Name"
          type="text"
          name="writer"
          id="writer"
          value={values.writer}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="Enter the writer of the movie. If there is more than one, separate them with ','..."
        />
      </div>
    </div>
  );
};

export default MovieDirectorWriter;
