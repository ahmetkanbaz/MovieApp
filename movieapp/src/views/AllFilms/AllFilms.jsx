import FilterItems from '../../common/FilterItems/FilterItems';
import MoviesContainer from '../../common/MoviesContainer/MoviesContainer';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import {getAllMovies} from '../../utils/requests'

const AllFilms = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])
  
  return (
    <>
      <FilterItems />
      <MoviesContainer title='All Films' movies={movies} />
    </>
  )
}

export default AllFilms