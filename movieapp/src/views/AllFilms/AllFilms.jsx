import FilterItems from '../../common/FilterItems/FilterItems';
import MoviesContainer from '../../common/MoviesContainer/MoviesContainer';
import {useSelector} from 'react-redux'

const AllFilms = () => {
  const movies = useSelector((state) => state.movies.movies);
  
  return (
    <>
      <FilterItems />
      <MoviesContainer title='All Films' movies={movies} />
    </>
  )
}

export default AllFilms