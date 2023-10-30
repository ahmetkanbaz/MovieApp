import FilterItems from '../../common/FilterItems/FilterItems';
import Movies from '../../common/Movies/Movies'
import MoviesContainer from '../../common/MoviesContainer/MoviesContainer';
import UpperSection from '../../common/UpperSection/UpperSection'
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