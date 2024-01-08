import Banner from "../../common/Banner/Banner";
import MoviesContainer from "../../common/MoviesContainer/MoviesContainer";
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { getAllMovies } from "../../utils/requests";
import PopularActors from "../../components/PopularActors/PopularActors";

const Home = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies)

  const latestMovies = [...movies].sort((a, b) => new Date(b.released) - new Date(a.released)).slice(0, 6)
  const hightRating = [...movies].sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 6)

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  return (
    <>
      <Banner
        title="Discover Your Cinema, Watch Your Dreams"
        content="Every Movie, A New Adventure"
        imageUrl="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <MoviesContainer className = 'thisYear' title='Latest Movies' movies={latestMovies} />
      <PopularActors />
      <MoviesContainer title='Movies with the Highest Ratings' movies={hightRating} />
    </>
  );
};

export default Home;
