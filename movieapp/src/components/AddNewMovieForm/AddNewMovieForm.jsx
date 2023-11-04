/* eslint-disable react/prop-types */
import UpperSection from "../../common/UpperSection/UpperSection";
import FormButtons from "./FormButtons/FormButtons";
import LabelInput from "../../common/LabelInput/LabelInput";
import MovieYearRuntime from "./MovieYearRuntime/MovieYearRuntime";
import MovieDirectorAuthor from "./MovieDirectorAuthor/MovieDirectorAuthor";

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

          <MovieDirectorAuthor
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
