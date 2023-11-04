/* eslint-disable react/prop-types */
import UpperSection from "../../common/UpperSection/UpperSection";
import FormButtons from "./FormButtons/FormButtons";
import LabelInput from "../../common/LabelInput/LabelInput";
import MovieYearRuntime from "./MovieYearRuntime/MovieYearRuntime";
import MovieDirectorWriter from "./MovieDirectorWriter/MovieDirectorWriter";
import MovieLanguageCountry from "./MovieLanguageCountry/MovieLanguageCountry";
import MovieAwardsPoster from "./MovieAwardsPoster/MovieAwardsPoster";
import MovieImdbProduction from "./MovieImdbProduction/MovieImdbProduction";

const AddNewMovieForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  handleReset,
  values,
  errors,
  touched,
  isSubmitting,
}) => {
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title="Add New Movie" />
        <form onSubmit={handleSubmit}>
          <LabelInput
            labelTitle="Movie Name"
            type="text"
            name="title"
            id="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            placeholder="Enter the name of the movie..."
          />
          <MovieYearRuntime
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
          />

          <LabelInput
            labelTitle="Genres"
            type="text"
            name="genre"
            id="genre"
            value={values.genre}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            placeholder="Enter the genre of the movie. If there is more than one, write them separated by ','."
          />

          <MovieDirectorWriter
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
          />

          <LabelInput
            labelTitle='Actors'
            type='text'
            id='actors'
            name='actors'
            value={values.actors}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter the actors in the movie. If more than one, separate with ','..."
            disabled={isSubmitting}
          />
          <div className="d-flex flex-column position-relative mb-4">
            <label htmlFor="plot" className="form-label">
              Content
            </label>
            <textarea
              name="plot"
              id="plot"
              rows="5"
              value={values.plot}
              className="form-control"
              placeholder="Enter a brief description of the movie..."
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            ></textarea>
          </div>

          <MovieLanguageCountry
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
          />

          <MovieAwardsPoster
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
          />

          <MovieImdbProduction
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
          />
          <FormButtons handleReset={handleReset} />
        </form>
      </div>
    </section>
  );
};

export default AddNewMovieForm;
