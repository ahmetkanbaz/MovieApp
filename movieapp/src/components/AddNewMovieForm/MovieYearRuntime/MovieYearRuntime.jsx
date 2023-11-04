/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput";

const MovieYearRuntime = ({
  values,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <div className="row">
      <div className="col-md-4 col-12">
        <LabelInput
          labelTitle="Movie Year"
          type="number"
          name="year"
          id="year"
          value={values.year}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="Enter the year of the movie..."
        />
      </div>
      <div className="col-md-4 col-12">
        <LabelInput
          labelTitle="Movie Released"
          type="text"
          name="released"
          id="released"
          value={values.released}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="Enter the movie's release date..."
        />
      </div>
      <div className="col-md-4 col-12">
        <LabelInput
          labelTitle="Movie Runtime"
          type="number"
          name="runtime"
          id="runtime"
          value={values.runtime}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="Enter the running time of the movie..."
        />
      </div>
    </div>
  );
};

export default MovieYearRuntime;
