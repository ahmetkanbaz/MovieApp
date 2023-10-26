import PropTypes from "prop-types";
import Card from "../Card/Card";
const Movies = ({ movies }) => {
  return (
    <div className="row justify-content-center g-4">
      {
        movies?.map((movie) => (
          <Card key={movie.imdbid} movie={movie} />
        ))
      }
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array,
};

export default Movies;
