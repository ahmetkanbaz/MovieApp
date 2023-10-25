import Movies from '../../common/Movies/Movies'
import UpperSection from '../../common/UpperSection/UpperSection'
const AllFilms = () => {
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title = 'Tüm Filmler' />
        <Movies />
      </div>
    </section>
  )
}

export default AllFilms