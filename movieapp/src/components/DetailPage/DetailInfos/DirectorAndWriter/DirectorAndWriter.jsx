import PropTypes from "prop-types";
const DirectorAndWriter = ({ writer, director }) => {
  return (
    <div className="py-4 border-top">
      {writer == director ? (
        <p className="mb-0">
          <span className="fw-bold">Writer and Author:</span>{" "}
          <span className="ms-1">{writer}</span>
        </p>
      ) : (
        <>
          <div className="mb-4">
            <span className="fw-bold">Writer:</span>
            <span className="ms-1">{writer}</span>
          </div>
          <div>
            <span className="fw-bold">Director:</span>
            <span className="ms-1">{director}</span>
          </div>
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
