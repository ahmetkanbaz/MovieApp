import PropTypes from 'prop-types'

const DetailList = ({title, listOfDetail}) => {
  const listOfDetailSplit = listOfDetail.split(',')
  return (
    <div className='mt-3'>
      <h6 className="fw-bold">{title}:</h6>
      <ul>
        {listOfDetailSplit.map((listDetail, index) => (
          <li key={index}>{listDetail}</li>
        ))}
      </ul>
    </div>
  )
}

DetailList.propTypes = {
  title: PropTypes.string,
  listOfDetail: PropTypes.string
}

export default DetailList