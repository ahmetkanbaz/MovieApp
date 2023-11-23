import {useSelector} from 'react-redux'
import { UpdateModalWrapper } from './UpdateModalStyle'
const UpdateModal = ({movie}) => {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <UpdateModalWrapper theme={theme}>
<div className="modal fade" id="updateMovieModal" tabIndex="-1" aria-labelledby="updateMovieModal" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="updateMovieModal">Update Movie</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Update Modal
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </UpdateModalWrapper>
  )
}

export default UpdateModal