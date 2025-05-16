import "bootstrap-icons/font/bootstrap-icons.min.css";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="row justify-content-center">
        <div className="col col-6">
          <div className="row">
            <div className="col mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            {[
              ["Audio and Subtitles", "Media Center", "Privacy", "Contact us"],
              ["Audio Description", "Investor Relations", "Legal Notices"],
              ["Help Center", "Jobs", "Cookie Preferences"],
              ["Gift Cards", "Terms of Use", "Corporate Information"],
            ].map((col, i) => (
              <div className="col" key={i}>
                <div className="row">
                  <div className="col footer-links">
                    {col.map((item, j) => (
                      <p key={j}>
                        <a href="#" alt="footer link">
                          {item}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2 copyright">
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
