import { CustomCard } from "./CardStyle";
import PropTypes from 'prop-types'

const Card = ({imageUrl, title, description}) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <CustomCard className="card h-100" onClick={() => console.log(title)}>
        <img
          src={imageUrl}
          className="card-img-top object-fit-cover"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text mb-2">
            {description}
          </p>
        </div>
      </CustomCard>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Card;
