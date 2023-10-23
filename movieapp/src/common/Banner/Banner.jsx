import PropTypes from "prop-types";
import { CustomBanner } from "./BannerStyle";
const Banner = ({ title, content, imageUrl }) => {
  return (
    <section>
      <div className="container">
        <CustomBanner>
          <div className="bannerBackground">
            <img
              src={imageUrl}
              alt="Banner Image"
              className="img-fluid object-fit-cover w-100"
            />
            <div className="gradientBackground w-100"></div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center bannerInfo">
            <p className="text-uppercase display-5">{title}</p>
            <p className="mb-0 fst-italic fs-4 text-center">
              {content}
            </p>
          </div>
        </CustomBanner>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Banner;
