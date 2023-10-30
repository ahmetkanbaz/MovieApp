import PropTypes from "prop-types";
import DirectorAndWriter from "./DirectorAndWriter/DirectorAndWriter";
import DetailList from "./DetailList/DetailList";
import LabelValue from "../../../common/LabelValue/LabelValue";
const DetailInfos = ({
  released,
  runtime,
  genre,
  writer,
  director,
  actors,
  production,
  imdbRating,
  plot,
}) => {
  return (
    <div className="col-md-6 col-12">
      <p className="mb-1 text-end fst-italic">
        Release Date: <span className="ms-1">{released}</span>
      </p>
      <LabelValue title="IMDB Score" value={imdbRating} />

      <p className="mt-3">{plot}</p>

      <LabelValue title="Movie Duration" value={runtime} />

      <DetailList title="Genres" listOfDetail={genre} />

      <DetailList title="Actors" listOfDetail={actors} />

      <div className="d-flex justify-content-center mb-2">
        <LabelValue title="Production" value={production} />
      </div>
      <DirectorAndWriter writer={writer} director={director} />
    </div>
  );
};

DetailInfos.propTypes = {
  released: PropTypes.string,
  genre: PropTypes.string,
  runtime: PropTypes.number,
  writer: PropTypes.string,
  director: PropTypes.string,
  actors: PropTypes.string,
  production: PropTypes.string || PropTypes.number,
  imdbRating: PropTypes.number,
  plot: PropTypes.string,
};

export default DetailInfos;
