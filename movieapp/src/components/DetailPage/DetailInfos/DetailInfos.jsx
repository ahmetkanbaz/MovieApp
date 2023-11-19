import PropTypes from "prop-types";
import DirectorAndWriter from "./DirectorAndWriter/DirectorAndWriter";
import DetailList from "./DetailList/DetailList";
import LabelValue from "../../../common/LabelValue/LabelValue";
import LanguageCountry from "./LanguageCountry/LanguageCountry";
import UpdateModal from "../../../common/UpdateModal/UpdateModal";
const DetailInfos = ({
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
}) => {
  return (
    <div className="col-md-6 col-12 order-1 order-md-0">
      <p className="mb-1 text-end fst-italic">
        Release Date: <span className="ms-1">{released}</span>
      </p>
      <LabelValue title="IMDB Score" value={imdbRating} />

      <p className="mt-3">{plot}</p>

      <LabelValue title="Movie Duration" value={runtime} />

      <DetailList title="Genres" listOfDetail={genre} />

      <DetailList title="Actors" listOfDetail={actors} />

      <DetailList title="Awards" listOfDetail={awards} />

      <LanguageCountry language={language} country={country} />

      <div className="d-flex justify-content-center mb-2">
        <LabelValue title="Production" value={production} />
      </div>

      <DirectorAndWriter writer={writer} director={director} />

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Update Movie
</button>
<UpdateModal />
    </div>
  );
};

DetailInfos.propTypes = {
  released: PropTypes.string,
  language: PropTypes.string,
  country: PropTypes.string,
  genre: PropTypes.string,
  runtime: PropTypes.number,
  writer: PropTypes.string,
  director: PropTypes.string,
  actors: PropTypes.string,
  production: PropTypes.string,
  imdbRating: PropTypes.number,
  awards: PropTypes.string,
  plot: PropTypes.string,
};

export default DetailInfos;
