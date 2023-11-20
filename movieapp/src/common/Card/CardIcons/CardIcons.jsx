/* eslint-disable react/prop-types */
import { MdFavorite, MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../utils/deletes";
import { getAllMovies } from "../../../utils/requests";
import { useState } from "react";

const CardIcons = ({id, title, isAllMovies}) => {
  const dispatch = useDispatch()
  const [favouriteMovies, setFavouriteMovies] = useState([])



  const handleDeleteMovie = async (e) => {
    e.preventDefault();
    if (
      window.confirm(`Are you sure you want to delete the ${title} movie?`)
    ) {
      const response = await deleteMovie(id, title);
      console.log(response);
      dispatch(getAllMovies())
    }
  };

  const handleAddMovie4LocalStorage = (e) => {
    e.preventDefault()
    if (!favouriteMovies.includes(id)) {
      console.log(id)
    }
  }


  return (
    isAllMovies && (
      <div className="pt-2">
        <div className="position-absolute start-0 bottom-0 d-flex justify-content-around pb-1 w-100 icons">
          <a href="#" onClick={(e) => handleAddMovie4LocalStorage(e)}>
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