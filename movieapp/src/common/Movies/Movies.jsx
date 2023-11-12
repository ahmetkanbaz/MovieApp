import PropTypes from "prop-types";
import Card from "../Card/Card";
import DangerAlert from "../DangerAlert/DangerAlert";
import { useLocation } from "react-router-dom";

const Movies = ({ movies }) => {
  const location = useLocation()

  const isAllMovies = location.pathname == '/allmovies'

  return (
    <div className="row justify-content-center g-3">
      {
        movies.length > 0 ? (
          movies.map((movie) => (
            <Card key={movie.id} movie={movie} isAllMovies = {isAllMovies} />
          ))
        ) : (
          <DangerAlert title='Movie Not Found!'/>
        )
      }
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array,
};

export default Movies;
