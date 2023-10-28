import UpperSection from "../../common/UpperSection/UpperSection";
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect}  from 'react'
import {getAllMovies} from '../../utils/requests'
import {useParams} from 'react-router-dom'
import Loading from '../../common/Loading/Loading'

const DetailMovie = () => {
  const [loading, setLoading] = useState(true)
  const [singleMovie, setSingleMovie] = useState({})
  const dispatch = useDispatch()
  const {id} = useParams()
  const movies = useSelector((state) => state.movies.movies)

  useEffect(() => {
    if(!movies.results) {
      dispatch(getAllMovies())
    }
  }, [movies])

  console.log(movies.results)
  return (
    <section className="py-5">
      <div className="container">
        {
          loading && (
            <Loading />
          )
        }
        {/* <UpperSection title='Movie Title' />
        <div className="clearfix">
          <img
            src="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
            alt="..."
          />

          <p>
            A paragraph of placeholder text. We're using it here to show the use
            of the clearfix class. We're adding quite a few meaningless phrases
            here to demonstrate how the columns interact here with the floated
            image.
          </p>

          <p>
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>

          <p>
            And yet, here you are, still persevering in reading this placeholder
            text, hoping for some more insights, or some hidden easter egg of
            content. A joke, perhaps. Unfortunately, there's none of that here.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default DetailMovie;
