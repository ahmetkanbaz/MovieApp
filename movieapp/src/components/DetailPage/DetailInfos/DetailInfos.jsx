import PropTypes from "prop-types";
import DirectorAndWriter from "./DirectorAndWriter/DirectorAndWriter";
import DetailList from "./DetailList/DetailList";
import LabelValue from "../../../common/LabelValue/LabelValue";
import LanguageCountry from "./LanguageCountry/LanguageCountry";
import UpdateModal from "../../UpdateModal/UpdateModal";
const DetailInfos = ({ singleMovie, setSingleMovie }) => {
  const {
    released,
    language,
    country,
    runtime,
    genre,
    writer,
    director,
    actors,
    production,
    imdbRating,
    awards,
    plot,
  } = singleMovie;
  return (
    <div className="col-md-6 col-12 order-1 order-md-0">
      {released && (
        <p className="mb-1 text-end fst-italic">
        Release Date: <span className="ms-1">{released}</span>
      </p>
      )}
      {imdbRating && (
        <LabelValue title="IMDB Score" value={imdbRating} />
      )}

      {plot && <p className="mt-3">{plot}</p>}

      {runtime && <LabelValue title="Movie Duration" value={runtime} />}

      {genre && <DetailList title="Genres" listOfDetail={genre} />}

      {actors && <DetailList title="Actors" listOfDetail={actors} />}

      {awards && <DetailList title="Awards" listOfDetail={awards} />}

      {(language || country) && <LanguageCountry language={language} country={country} />}

      {
        production && <div className="d-flex justify-content-center mb-2">
        <LabelValue title="Production" value={production} />
      </div>
      }

      {(director || writer) && <DirectorAndWriter writer={writer} director={director} />}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#updateMovieModal"
      >
        Update Movie
      </button>
      <UpdateModal movie = {singleMovie} setSingleMovie = {setSingleMovie}/>
    </div>
  );
};

DetailInfos.propTypes = {
  singleMovie: PropTypes.object,
  setSingleMovie: PropTypes.func
};

export default DetailInfos;
