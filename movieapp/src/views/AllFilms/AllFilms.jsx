import FilterItems from '../../common/FilterItems/FilterItems';
import MoviesContainer from '../../common/MoviesContainer/MoviesContainer';
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react';
import {getAllMovies} from '../../utils/requests'

const AllFilms = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies);

  const [search, setSearch] = useState()

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  useEffect(() => {
    console.log(search);
  }, [search])

  
  return (
    <>
      <FilterItems setSearch= {setSearch}/>
      <MoviesContainer title='All Films' movies={movies} />
    </>
  )
}

export default AllFilms