/* eslint-disable react/prop-types */
import { MdFavorite, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../utils/deletes";
import { getAllMovies } from "../../../utils/requests";

const CardIcons = ({ id, title, isAllMovies }) => {
  const dispatch = useDispatch();
  const localMovies = JSON.parse(localStorage.getItem("favouriteMovies")) || [];

  const handleDeleteMovie = async (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete the ${title} movie?`)) {
      const response = await deleteMovie(id, title);
      console.log(response);
      dispatch(getAllMovies());
    }
  };

  const handleAddMovie4LocalStorage = (e) => {
    e.preventDefault();

    try {
      if (!localMovies.includes(id)) {
        localStorage.setItem(
          "favouriteMovies",
          JSON.stringify([...localMovies, id])
        );
        console.log("Movie Add Locale Storage");
      } else {
        console.log("This movie was previously a favorite.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isAllMovies && (
      <div className="pt-2">
        <div className="position-absolute start-0 bottom-0 d-flex justify-content-around pb-1 w-100 icons">
          <a
            href="#"
            onClick={(e) => handleAddMovie4LocalStorage(e)}
            className={localMovies.includes(id) ? "favouriteMovie" : ""}
          >
            <MdFavorite size="1.2rem" />
          </a>
          <a href="#" onClick={(e) => handleDeleteMovie(e)}>
            <MdDelete size="1.2rem" />
          </a>
        </div>
      </div>
    )
  );
};

export default CardIcons;