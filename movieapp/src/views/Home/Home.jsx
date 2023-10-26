import Banner from "../../common/Banner/Banner";
import Movies from "../../common/Movies/Movies";
import UpperSection from "../../common/UpperSection/UpperSection";
import {useSelector} from 'react-redux'

const Home = () => {
  const movies = useSelector((state) => state.movies.movies)

  const hightRating = [...(movies.results)].sort((a, b) => b.imdbrating - a.imdbrating).slice(0, 10)

  return (
    <>
      <Banner
        title="Anasayfa"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              illum placeat molestiae quaerat vero! Placeat aperiam provident
              eius saepe vel!"
        imageUrl="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="py-5 thisYear">
        <div className="container">
          <UpperSection title="Rating'i  En Yüksek Olan Filmler" />
          <Movies movies={hightRating}/>
        </div>
      </div>
    </>
  );
};

export default Home;
