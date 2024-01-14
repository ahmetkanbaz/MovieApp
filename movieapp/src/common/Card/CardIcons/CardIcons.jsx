/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../utils/deletes";
import { getAllMovies } from "../../../utils/requests";

const CardIcons = ({ id, title, isAllMovies }) => {
  const dispatch = useDispatch();

  const handleDeleteMovie = async (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete the ${title} movie?`)) {
      const response = await deleteMovie(id, title);
      console.log(response);
      dispatch(getAllMovies());
    }
  };

  return (
    isAllMovies && (
      <div className="pt-2">
        <div className="position-absolute start-0 bottom-0 d-flex justify-content-end pb-1 w-100 pe-3 icons">
          <a href="#" onClick={(e) => handleDeleteMovie(e)}>
            <MdDelete size="1.2rem" />
          </a>
        </div>
      </div>
    )
  );
};

export default CardIcons;
