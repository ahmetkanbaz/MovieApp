/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput";

const MovieLanguageCountry = ({
  values,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="Language"
          type="text"
          id="language"
          name="language"
          value={values.language}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the language of the movie..."
          disabled={isSubmitting}
        />
      </div>
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="Country"
          type="text"
          id="country"
          name="country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the country name of the movie..."
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default MovieLanguageCountry;
