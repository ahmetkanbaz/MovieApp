import PropTypes from "prop-types";
import LabelValue from "../../../../common/LabelValue/LabelValue";
const DirectorAndWriter = ({ writer, director }) => {
  return (
    <div className="py-4 border-top">
      {writer == director ? (
        <LabelValue title='Writer and Author' value={writer} />
      ) : (
        <>
          <div className="mb-4">
            <LabelValue title='Writer' value={writer} />
          </div>
          <LabelValue title='Director' value={director} />
        </>
      )}
    </div>
  );
};

DirectorAndWriter.propTypes = {
  director: PropTypes.string,
  writer: PropTypes.string,
};

export default DirectorAndWriter;
