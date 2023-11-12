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
  const [sort, setSort] = useState();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  useEffect(() => {
    let tempMovies = [...movies];

    if (search) {
      tempMovies = tempMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    if (sort) {
      if (sort == "sorta_z") {
        tempMovies = tempMovies.sort((a, b) => a.title.localeCompare(b.title))
      }

      else if (sort == 'sortz_a') {
        tempMovies = tempMovies.sort((a, b) => b.title.localeCompare(a.title))
      }
    }

    setFilteredMovies(tempMovies);
  }, [movies.length, search, sort]);

  return (
    <>
      <FilterItems setSearch={setSearch} setSort={setSort} />
      <MoviesContainer title="All Films" movies={filteredMovies} />
    </>
  );
};

export default AllFilms;