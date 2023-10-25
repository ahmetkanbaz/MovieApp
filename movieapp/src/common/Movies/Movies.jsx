import PropTypes from "prop-types";
import Card from "../Card/Card";
const Movies = ({ movies }) => {
  return (
    <div className="row g-4">
      <Card
        imageUrl="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Deneme"
        description="asasdasdasdasdadasdasd dsadasdasd dasdasd dasdasd"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Deneme"
        description="asasdasdasdasdadasdasd dsadasdasd dasdasd dasdasd dasdasdasd"
      />
      <Card
        imageUrl="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Deneme"
        description="asasdasdasdasdadasdasd dsadasdasd dasdasd dasdasd dasdasdfsdfsdffsdfsdf fsdfsdfsfsdf sdfsdf"
      />
      <Card
        imageUrl="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Deneme"
        description="asasdasdasdasdadasdasd dsadasdasd dasdasd dasdasd fsdfsdf fsdf sdfsdf"
      />
      <Card
        imageUrl="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Deneme"
        description="asasdasdasdasdadasdasd dsadasdasd dasdasd dasdasd fsdf sdf"
      />
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.object,
};

export default Movies;
