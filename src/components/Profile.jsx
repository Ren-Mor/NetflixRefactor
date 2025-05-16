import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/profile.css";

function ProfilePage() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
        <a className="navbar-brand text-danger fw-bold" href="#">
          <img src="assets/netflix_logo.png" alt="netflix" width="100" />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search text-white"></i>
            <span>KIDS</span>
            <i className="bi bi-bell-fill text-white"></i>
            <div className="dropdown">
              <div
                className="d-flex align-items-center dropdown-toggle"
                id="avatarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <img src="assets/avatar.png" alt="Avatar" width="30" />
              </div>
              <ul
                className="dropdown-menu dropdown-menu-end bg-dark text-white"
                aria-labelledby="avatarDropdown"
              >
                <li>
                  <a className="dropdown-item text-white" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="settings.html">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider bg-secondary" />
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div id="container-main" className="container">
        <h1 className="p-1 mb-4">Edit Profile</h1>
        <div className="row g-4 border-top border-secondary">
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 position-relative">
            <img src="assets/avatar.png" alt="avatar" width="130px" />
            <span>
              <i className="bi bi-pencil-fill fs-4 text-white"></i>
            </span>
          </div>
          <div className="col-12 col-sm-8 col-md-9 col-lg-9">
            <form>
              <div className="mb-2 p-1">
                <input
                  type="text"
                  className="form-control bg-secondary text-white"
                  placeholder="Strive Student"
                />
              </div>
              <div className="mb-2 p-1">
                <label htmlFor="language" className="form-label">
                  Language
                </label>
                <select className="form-select bg-black text-white mb-3">
                  <option value="selected">English</option>
                  <option value="selected">Français</option>
                  <option value="selected">Espanol</option>
                </select>
              </div>
              <div className="mb-2 p-1 border-top border-secondary">
                <h6 className="mb-3 mt-4">Maturity Settings:</h6>
                <p>
                  <span className="bg-secondary text-white fw-bold p-1 px-3">
                    ALL MATURITY RATINGS
                  </span>
                </p>
                <p>
                  Show titles of <strong>all maturity ratings</strong> for this
                  profile
                </p>
                <button
                  id="edit-btn"
                  className="text-secondary p-1 px-4 bg-dark"
                >
                  EDIT
                </button>
              </div>
              <div className="mb-2 p-1 border-top border-secondary">
                <h6 className="mb-3 mt-4">Autoplay controls</h6>
                <div className="form-check mb-1">
                  <input
                    id="check1"
                    className="form-check-input bg-dark border border-secondary"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="check1">
                    Autoplay next episode in a series on all devices
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="check2"
                    className="form-check-input bg-dark border border-secondary"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="check2">
                    Autoplay previews while browsing on all devices
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row mb-2 p-1 border-top border-secondary">
          <div className="col-12 col-sm-4 col-md-4 col-lg-3">
            <button type="submit" id="save-btn" className="mt-2 px-4 py-2">
              SAVE
            </button>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <button type="reset" className="text-secondary px-4 py-2 mt-2">
              CANCEL
            </button>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-5">
            <button type="button" className="text-secondary px-4 py-2 mt-2">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
