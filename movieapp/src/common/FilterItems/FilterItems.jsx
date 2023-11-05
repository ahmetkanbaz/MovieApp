const FilterItems = ({setSearch}) => {

  const handleSearchValue = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="pt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-sm-6 col-12">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort Movies
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    A - Z
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Z - A
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-12">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search by movie or director name..."
              onChange={(e) => handleSearchValue(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
