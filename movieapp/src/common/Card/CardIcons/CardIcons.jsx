/* eslint-disable react/prop-types */
import { MdFavorite, MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../utils/deletes";
import { getAllMovies } from "../../../utils/requests";

const CardIcons = ({id, isAllMovies}) => {
  const dispatch = useDispatch()
  const handleDeleteMovie = async (e) => {
    e.preventDefault();
    if (
      window.confirm(`Are you sure you want to delete the movie with id ${id}?`)
    ) {
      const item =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement;
      // item.remove();
      console.log(item)
      const response = await deleteMovie(id);
      console.log(response);
      dispatch(getAllMovies())
    }
  };


  return (
    isAllMovies && (
      <div className="pt-2">
        <div className="position-absolute start-0 bottom-0 d-flex justify-content-around pb-1 w-100 icons">
          <a href="#">
            <MdFavorite size="1.2rem" />
          </a>
          <a href="#" onClick={(e) => handleDeleteMovie(e)}>
            <MdDelete size="1.2rem" />
          </a>
        </div>
      </div>
    )
  )
}

export default CardIcons