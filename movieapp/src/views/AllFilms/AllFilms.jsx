import FilterItems from "../../common/FilterItems/FilterItems";
import MoviesContainer from "../../common/MoviesContainer/MoviesContainer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../utils/requests";

const AllFilms = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [search, setSearch] = useState();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  useEffect(() => {
    let tempMovies = [...movies];

    if (search) {
      tempMovies = tempMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredMovies(tempMovies);
  }, [search, movies.length]);

  console.log(filteredMovies);

  return (
    <>
      <FilterItems setSearch={setSearch} />
      <MoviesContainer title="All Films" movies={filteredMovies} />
    </>
  );
};

export default AllFilms;
