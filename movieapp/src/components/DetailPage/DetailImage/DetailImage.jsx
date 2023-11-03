import PropTypes from "prop-types";
const DetailImage = ({ title, poster }) => {
  return (
    <div className="col-md-6 col-12">
      <img src={poster} alt={title} className="rounded-1 img-fluid w-100" />
    </div>
  );
};

DetailImage.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default DetailImage;
