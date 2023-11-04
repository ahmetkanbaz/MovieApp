/* eslint-disable react/prop-types */
import UpperSection from "../../common/UpperSection/UpperSection";
import FormButtons from "./FormButtons/FormButtons";

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
          <FormButtons handleReset={handleReset} />
        </form>
      </div>
    </section>
  );
};

export default AddNewMovieForm;
