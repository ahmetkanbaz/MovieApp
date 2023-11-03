import UpperSection from "../../common/UpperSection/UpperSection";
import { addNewMovie } from "../../utils/posts";

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
          <button type="submit">Tıkla</button>
        </form>
      </div>
    </section>
  );
};

export default AddNewMovieForm;
