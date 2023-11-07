import PropTypes from "prop-types";
import { useState } from "react";

const DetailImage = ({ title, poster }) => {
  const [loading, setLoading] = useState(false);

  const handleLoadingImage = () => {
    setLoading(true);
  };
  return (
    <div className="col-md-6 col-12 order-0 order-md-1">
      {!loading ? (
        <img
          src={poster}
          alt={title}
          onError={handleLoadingImage}
          className="rounded-3 img-fluid w-100"
        />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Default Image"
          className="rounded-3 img-fluid -100"
        />
      )}
    </div>
  );
};

DetailImage.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default DetailImage;
