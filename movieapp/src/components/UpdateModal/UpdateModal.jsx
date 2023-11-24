import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { UpdateModalWrapper } from "./UpdateModalStyle";
import UpdateTitleYear from "./UpdateTitleYear/UpdateTitleYear";
import { useFormik } from "formik";
import ModalButtons from "./ModalButtons/ModalButtons";

const UpdateModal = ({ movie }) => {
  const theme = useSelector((state) => state.theme.theme);

  const {
    title,
    year,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    imdbRating,
    production,
  } = movie || {};

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
    values,
    errors,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: {
      title,
      year,
      released,
      runtime,
      genre,
      director,
      writer,
      actors,
      plot,
      language,
      country,
      awards,
      poster,
      imdbRating,
      production,
    },
    onSubmit: async (values, bag) => {
      console.log(values);
      bag.setSubmitting(false);
      bag.resetForm();
    },
  });

  return (
    <UpdateModalWrapper theme={theme}>
      <div
        className="modal fade"
        id="updateMovieModal"
        tabIndex="-1"
        aria-labelledby="updateMovieModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateMovieModal">
                Update Movie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <UpdateTitleYear
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />
                <ModalButtons handleReset={handleReset} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </UpdateModalWrapper>
  );
};

UpdateModal.propTypes = {
  movie: PropTypes.object,
};

export default UpdateModal;
