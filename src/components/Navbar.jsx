import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../src\assets\logo.png"
            style={{ width: "100px", height: "55px" }}
            alt="logo"
          />
        </a>
        <div className="collapse navbar-collapse bg-dark">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["Home", "TV Shows", "Movies", "Recently Added", "My List"].map(
              (text) => (
                <li className="nav-item" key={text}>
                  <a className="nav-link fw-bold text-white" href="#">
                    {text}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
