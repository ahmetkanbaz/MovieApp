import PropTypes from "prop-types";

const Actors = ({ actors }) => {
  const actorsSplit = actors.split(",");
  return (
    <div>
      <h6 className="fw-bold">Actors:</h6>
      <ul>
        {actorsSplit.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
};

Actors.propTypes = {
  actors: PropTypes.string,
};

export default Actors;
