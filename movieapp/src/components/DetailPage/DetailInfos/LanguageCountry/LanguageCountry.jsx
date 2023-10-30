import PropTypes from "prop-types";
import LabelValue from "../../../../common/LabelValue/LabelValue";

const LanguageCountry = ({ language, country }) => {
  return (
    <div className="d-flex justify-content-evenly flex-wrap my-4">
      <div>
        <LabelValue title="Language" value={language} />
      </div>
      <div>
        <LabelValue title="Country" value={country} />
      </div>
    </div>
  );
};

LanguageCountry.propTypes = {
  language: PropTypes.string,
  country: PropTypes.string,
};

export default LanguageCountry;
