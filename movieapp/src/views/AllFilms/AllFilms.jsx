import Movies from '../../common/Movies/Movies'
import UpperSection from '../../common/UpperSection/UpperSection'
import {useSelector} from 'react-redux'

const AllFilms = () => {
  const movies = useSelector((state) => state.movies.movies);
  
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title = 'Tüm Filmler' />
        <Movies movies = {movies}/>
      </div>
    </section>
  )
}

export default AllFilms