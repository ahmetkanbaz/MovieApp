import { BiCameraMovie } from "react-icons/bi";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/theme/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChangeThemeMode = (e) => {
    if (theme == "light") {
      dispatch(setTheme("dark"));
      localStorage.setItem("movieTheme", JSON.stringify("dark"));
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem("movieTheme", JSON.stringify("light"));
    }
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg py-4 sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <BiCameraMovie size="2rem" />
          <span>MovieApp</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#movieAppNavbar"
          aria-controls="movieAppNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="movieAppNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <a
                href="#"
                onClick={(e) => handleChangeThemeMode(e)}
                className="nav-link d-flex align-items-center"
              >
                {theme == "light" ? (
                  <BsMoonFill size="1.1rem" />
                ) : (
                  <BsFillSunFill size="1.1rem" />
                )}
              </a>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="allmovies" className="nav-link">
                All Films
              </Link>
            </li>
            <li className="nav-item">
              <Link to="addnewmovie" className="nav-link">
                Add Movie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
