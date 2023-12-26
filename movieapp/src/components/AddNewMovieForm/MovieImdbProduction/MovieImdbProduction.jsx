/* eslint-disable react/prop-types */
import LabelInput from "../../../common/LabelInput/LabelInput";

const MovieImdbProduction = ({
  values,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <LabelInput
          labelTitle="IMDB Rating"
          type="number"
          id="imdbRating"
          name="imdbRating"
          value={values.imdbRating}
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
          value={values.production}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the production of the movie"
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default MovieImdbProduction;
