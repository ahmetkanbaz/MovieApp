import { addNewMovie } from "../../utils/posts"

const AddNewMovieForm = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <button onClick={() => addNewMovie({title: 'Deneme'})}>Tıkla</button>
      </div>
    </section>
  )
}

export default AddNewMovieForm