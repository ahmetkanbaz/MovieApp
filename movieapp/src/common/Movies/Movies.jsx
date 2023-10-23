import PropTypes from 'prop-types'
import Card from '../Card/Card'
const Movies = ({movies}) => {
  return (
    <div className='row'>
      <Card />
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.object,
}

export default Movies