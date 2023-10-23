import Movies from "../../common/Movies/Movies"
import UpperSection from "../../common/UpperSection/UpperSection"

const ThisYear = () => {
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title='Bu Sene Çıkan Filmler' />
        <Movies />
      </div>
    </section>
  )
}

export default ThisYear