import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { UpdateModalWrapper } from "./UpdateModalStyle";
import UpdateTitleYear from "./UpdateTitleYear/UpdateTitleYear";
import { useFormik } from "formik";
import ModalButtons from "./ModalButtons/ModalButtons";
import UpdateReleasedRuntime from "./UpdateReleasedRuntime/UpdateReleasedRuntime";
import LabelInput from "../../common/LabelInput/LabelInput";
import UpdateDirectorWriter from "./UpdateDirectorWriter/UpdateDirectorWriter";
import UpdateLanguageCountry from "./UpdateLanguageCountry/UpdateLanguageCountry";
import UpdateAwardsPoster from "./UpdateAwardsPoster/UpdateAwardsPoster";
import UpdateImdbProduction from "./UpdateImdbProduction/UpdateImdbProduction";
import { updateMovie } from "../../utils/puts";
import { useParams } from "react-router-dom";
import Toast from "../../common/Toast/Toast";

const UpdateModal = ({ movie, setSingleMovie }) => {
  const {id} = useParams()
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
      const response = await updateMovie(id, values)
      if (!response.error) {
        setSingleMovie(values)
        Toast({message: response.data, type: 'success'})
      }
      else {
        Toast({message: response.message, type: 'error'})
      }
      document.getElementById("closeModal").click();
      bag.setSubmitting(false);
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
                id="closeModal"
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
                <UpdateReleasedRuntime
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />

                <LabelInput
                  labelTitle="Genre"
                  type="text"
                  id="genre"
                  name="genre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  defaultValue={values.genre}
                />

                <UpdateDirectorWriter
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />

                <LabelInput
                  labelTitle="Actors"
                  type="text"
                  id="actors"
                  name="actors"
                  defaultValue={values.actors}
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
                    defaultValue={values.plot}
                    className="form-control"
                    placeholder="Enter a brief description of the movie..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>

                <UpdateLanguageCountry
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />

                <UpdateAwardsPoster
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />

                <UpdateImdbProduction
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />
              </form>
            </div>
            <ModalButtons handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </UpdateModalWrapper>
  );
};

UpdateModal.propTypes = {
  movie: PropTypes.object,
  setSingleMovie: PropTypes.func
};

export default UpdateModal;
