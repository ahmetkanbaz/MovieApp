import UpperSection from "../../common/UpperSection/UpperSection";
import { useState, useEffect } from "react";
import { getSingleMovie } from "../../utils/requests";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import DetailImage from "../../components/DetailPage/DetailImage/DetailImage";
import DetailInfos from "../../components/DetailPage/DetailInfos/DetailInfos";
import NotFoundMovie from "../../components/NotFoundMovie/NotFoundMovie";

const DetailMovie = () => {
  const [loading, setLoading] = useState(true);
  const [singleMovie, setSingleMovie] = useState({});
  const { id } = useParams();

  const getDetailMovie = async () => {
    const response = await getSingleMovie(id);
    setSingleMovie(response);
    setLoading(false);
  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  if (singleMovie.message) {
    return <NotFoundMovie />;
  }

  const {
    title,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    imdbRating,
    production,
  } = singleMovie || {};

  console.log(poster)

  return (
    <section className="py-5">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <UpperSection title={title} />
            <div>
              <div className="row">
                <DetailInfos
                  released={released}
                  genre={genre}
                  language = {language}
                  country = {country}
                  runtime={runtime}
                  writer={writer}
                  director={director}
                  actors = {actors}
                  production={production}
                  imdbRating={imdbRating}
                  awards={awards}
                  plot={plot}
                />
                <DetailImage title={title} poster={poster} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DetailMovie;
