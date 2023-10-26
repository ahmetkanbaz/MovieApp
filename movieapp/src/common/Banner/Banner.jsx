import PropTypes from "prop-types";
import { CustomBanner } from "./BannerStyle";
const Banner = ({ title, content, imageUrl }) => {
  return (
    <section>
      <CustomBanner>
        <img
          src={imageUrl}
          alt="Banner Image"
          className="img-fluid object-fit-cover w-100"
        />
        <div className="bannerBackground">
          <div className="gradientBackground w-100"></div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center bannerInfo">
          <p className="text-uppercase display-4">{title}</p>
          <p className="mb-0 fst-italic fs-2 text-center">{content}</p>
        </div>
      </CustomBanner>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Banner;
