import { CustomCard } from "./CardStyle";
import PropTypes from 'prop-types'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'

const Card = ({movie}) => {
  const navigate = useNavigate()
  const {id, title, poster, plot} = movie
  const [loadingImage, setLoadingImage] = useState(false)
  const theme = useSelector((state) => state.theme.theme)

  const handleLoadingImage = () => {
    setLoadingImage(true)
  }
  
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <CustomCard className="card h-100" onClick={() => navigate(`/allmovies/${id}`)} theme={theme}>
        {(poster && !loadingImage) ? (
          <img
          src={poster}
          className="card-img-top object-fit-cover"
          alt={title}
          onError={handleLoadingImage}
        />
        ) : (
          <img
          src='https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className="card-img-top object-fit-cover"
          alt={title}
        />
        )}
        <div className="card-body">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text mb-2">
            {plot}
          </p>
        </div>
      </CustomCard>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object
}

export default Card;
