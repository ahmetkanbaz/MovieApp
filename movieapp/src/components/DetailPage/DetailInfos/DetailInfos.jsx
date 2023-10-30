import PropTypes from "prop-types";
import DirectorAndWriter from "./DirectorAndWriter/DirectorAndWriter";
import Actors from "./Actors/Actors";
const DetailInfos = ({ released, writer, director, actors, production, imdbRating, plot }) => {
  return (
    <div className="col-md-6 col-12">
      <p className="mb-1 text-end fst-italic">
        Release Date: <span className="ms-1">{released}</span>
      </p>
      <p>IMDB Score: <span className="ms-1">{imdbRating}</span></p>
      <p>{plot}</p>

      <Actors actors={actors} />
      
      <div className="d-flex justify-content-center mb-2">
        <span className="fw-bold">Production:</span>
        <span className="ms-1">{production}</span>
      </div>
      <DirectorAndWriter writer={writer} director={director} />
    </div>
  );
};

DetailInfos.propTypes = {
  released: PropTypes.string,
  writer: PropTypes.string,
  director: PropTypes.string,
  actors: PropTypes.string,
  production: PropTypes.string || PropTypes.number,
  imdbRating: PropTypes.number,
  plot: PropTypes.string,
};

export default DetailInfos;
