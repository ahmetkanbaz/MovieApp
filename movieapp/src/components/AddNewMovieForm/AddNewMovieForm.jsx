/* eslint-disable react/prop-types */
import UpperSection from "../../common/UpperSection/UpperSection";
import FormButtons from "./FormButtons/FormButtons";
import LabelInput from "../../common/LabelInput/LabelInput";

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
          <div className="position-relative">
            <LabelInput
              labelTitle="Movie Name"
              type="text"
              name="title"
              id="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              placeholder="Enter the name of the movie"
            />
          </div>
          <div className="row g-3">
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
                placeholder="Enter the year of the movie"
              />
            </div>
          </div>
          <FormButtons handleReset={handleReset} />
        </form>
      </div>
    </section>
  );
};

export default AddNewMovieForm;
