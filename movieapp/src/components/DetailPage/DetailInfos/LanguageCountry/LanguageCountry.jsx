import PropTypes from "prop-types";
import LabelValue from "../../../../common/LabelValue/LabelValue";

const LanguageCountry = ({ language, country }) => {
  return (
    <div className="d-flex justify-content-evenly flex-wrap my-4">
      {language && (
        <div>
          <LabelValue title="Language" value={language} />
        </div>
      )}
      {country && (
        <div>
          <LabelValue title="Country" value={country} />
        </div>
      )}
    </div>
  );
};

LanguageCountry.propTypes = {
  language: PropTypes.string,
  country: PropTypes.string,
};

export default LanguageCountry;
