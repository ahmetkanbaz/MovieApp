import UpperSection from "../../common/UpperSection/UpperSection";
import { useSelector } from "react-redux";
import SinglePopularActor from "./SinglePopularActor/SinglePopularActor";

const PopularActors = () => {
  const actors = useSelector((state) => state.actors.actors);
  return (
    <section className="py-5 popularActors">
      <div className="container">
        <UpperSection title="Popular Actors" />
        <div className="row align-items-center justify-content-center g-3">
          {actors.map((actor) => (
            <SinglePopularActor key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularActors;
