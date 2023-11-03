import PropTypes from "prop-types";
import Movies from "../Movies/Movies";
import UpperSection from "../UpperSection/UpperSection";

const MoviesContainer = ({ className, title, movies }) => {
  return (
    <section className={`py-5 ${className}`}>
      <div className="container">
        <UpperSection title={title} />
        <Movies movies={movies} />
      </div>
    </section>
  );
};

MoviesContainer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  movies: PropTypes.array,
};

export default MoviesContainer;
