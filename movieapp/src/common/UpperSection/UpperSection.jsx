import PropTypes from 'prop-types'
const UpperSection = ({title}) => {
  return (
    <div className='pb-3'>
      <h3 className='fw-bold'>{title}</h3>
    </div>
  )
}

UpperSection.propTypes = {
  title: PropTypes.string
}

export default UpperSection