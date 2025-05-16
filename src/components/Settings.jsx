import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/settings.css";

function SettingsPage() {
  return (
    <div className="bg-white text-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
        <a className="navbar-brand text-danger fw-bold" href="#">
          <img src="/assets/netflix_logo.png" alt="netflix" width="100" />
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
            <span className="text-white">KIDS</span>
            <i className="bi bi-bell-fill text-white"></i>
            <div className="dropdown">
              <div
                className="d-flex align-items-center dropdown-toggle"
                id="avatarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <img src="/assets/avatar.png" alt="Avatar" width="30" />
              </div>
              <ul
                className="dropdown-menu dropdown-menu-end bg-dark text-white"
                aria-labelledby="avatarDropdown"
              >
                <li>
                  <a className="dropdown-item text-white" href="profile.html">
                    Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="index.html">
                    Home
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

      <div id="main-container" className="container d-flex flex-column py-5">
        <h2>Account</h2>
        <div className="border-top pt-3"></div>

        <section className="d-flex">
          <div style={{ minWidth: 190 }}>
            <h6 className="text-muted mb-3">MEMBERSHIP & BILLING</h6>
            <button className="btn btn-light border rounded-0 p-2">
              Cancel Membership
            </button>
          </div>
          <div className="row container-fluid">
            <div className="col">
              <p className="mb-1 fw-medium">student@strive.school</p>
              <p className="mb-1 text-muted">Password: ********</p>
              <p className="mb-1 text-muted">Phone: 321 044 1279</p>
            </div>
            <div className="col text-end">
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Change account email
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Change password
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Change phone number
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="d-flex">
          <div style={{ minWidth: 190 }}></div>
          <div className="row container-fluid">
            <div className="border-top pt-3"></div>
            <div className="col">
              <p className="text-muted fw-bold text-nowrap">
                <i className="bi bi-paypal"></i>
                <i className="mx-2">PayPal</i>
                <span className="text-dark">admin@strive.school</span>
              </p>
            </div>
            <div className="col text-end">
              <p className="m-1">
                <a href="#" className="text-decoration-none">
                  Update payment info
                </a>
              </p>
              <p className="m-1">
                <a href="#" className="text-decoration-none">
                  Billing details
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="d-flex">
          <div style={{ minWidth: 190 }}></div>
          <div className="row container-fluid">
            <div className="border-top pt-3"></div>
            <div className="col text-end">
              <p className="m-1">
                <a href="#" className="text-decoration-none">
                  Redeem gift card or promo code
                </a>
              </p>
              <p className="m-1">
                <a href="#" className="text-decoration-none">
                  Where to buy gift cards
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="border-top pt-3"></div>
        <section className="d-flex">
          <div style={{ minWidth: 190 }}>
            <h6 className="text-muted mb-3">PLAN DETAILS</h6>
          </div>
          <div className="row container-fluid">
            <div className="col">
              <p className="mb-1 fw-medium">
                <strong>Premium</strong>
                <span
                  id="ultra-hd"
                  className="fw-light mx-2 px-1 border border-1 border-dark rounded"
                >
                  ULTRA HD
                </span>
              </p>
            </div>
            <div className="col text-end">
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Change plan
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="border-top pt-3"></div>
        <section className="d-flex">
          <div style={{ minWidth: 190 }}>
            <h6 className="text-muted mb-3">SETTINGS</h6>
          </div>
          <div className="row container-fluid">
            <div className="col">
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Parental controls
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Test participation
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Manage download services
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Activate a device
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Recent device streaming activity
                </a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-decoration-none">
                  Sign out all devices
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="border-top pt-3"></div>
        <section className="d-flex">
          <div style={{ minWidth: 190 }}>
            <h6 className="text-muted mb-3">PLAN DETAILS</h6>
          </div>
          <div className="row container-fluid">
            <div className="col">
              <p className="mb-4">
                <img src="/assets/avatar.png" alt="Avatar" width="30" />
                <span className="mx-2">Strive student</span>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Language
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Playback settings
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Subtitle appearance
                </a>
              </p>
            </div>
            <div className="col">
              <p className="mb-1">&nbsp;</p>
              <p className="mb-1">&nbsp;</p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Viewing activity
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Ratings
                </a>
              </p>
            </div>
            <div className="col text-end">
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Manage profiles
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-decoration-none">
                  Add profile email
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="border-top pt-3"></div>
      </div>
    </div>
  );
}

export default SettingsPage;
