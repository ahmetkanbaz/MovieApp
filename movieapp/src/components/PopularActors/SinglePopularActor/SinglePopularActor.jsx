import PropTypes from "prop-types";
import { CustomSingleActor } from "./SinglePopularActorStyle";
import {useSelector} from 'react-redux'

const SinglePopularActor = ({ actor }) => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <CustomSingleActor href={actor.linkTarget} target="_blank" theme={theme}>
        <div>
          <img
            src={actor.imageUrl}
            alt={actor.name}
            className="img-fluid object-fit-cover rounded"
          />
            <h5 className="fw-bold text-center py-3">
              {actor.name}
            </h5>
        </div>
      </CustomSingleActor>
    </div>
  );
};

SinglePopularActor.propTypes = {
  actor: PropTypes.object,
};

export default SinglePopularActor;
