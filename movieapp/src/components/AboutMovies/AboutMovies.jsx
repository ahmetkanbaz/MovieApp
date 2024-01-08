import MoviesImages from "./MoviesImages/MoviesImages";
import UpperSection from "../../common/UpperSection/UpperSection";

const AboutMovies = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 order-0 order-md-1">
            <UpperSection title="About Movies" />
            <p className="fs-4 mb-0">
              Movies, also known as films, are a popular and diverse art form
              that encompasses a wide range of genres and styles. They are a
              powerful medium for storytelling, bringing together various
              elements such as acting, cinematography, music, and editing to
              evoke emotions, convey messages, and provide entertainment to
              audiences worldwide.
            </p>
          </div>
          <MoviesImages />
        </div>
      </div>
    </section>
  );
};

export default AboutMovies;
