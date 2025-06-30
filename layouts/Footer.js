// import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row gx-6">
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-log">
               
              <a href="https://www.shambarecords.com/" target="_blank" rel="noopener noreferrer">
  <img src="assets/images/myImages/image/newImages/shambalogo.svg" alt="Shamba Records Logo" />
</a>
              </div>
              <button className="footer-wiget-text text-white p-2 bg-transparent mt-3 border-1 rounded-lg border-solid border-white rounded-sm text-10px border-radius-12px" onClick={() => window.open('https://www.shambarecords.com', '_blank')}>
                Visit Shamba Records
              </button>
              {/* <div className="footer-shape-title">
                <h3>Discover our app</h3>
              </div>
              <div className="footer-wiget-shape">
                <img src="assets/images/footer/Google-Play.png" alt="" />
              </div>
              <div className="footer-wiget-shape">
                <img src="assets/images/footer/Play-Store.png" alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>Links</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="about"> About us</a>
                  </li>
                  <li>
                    <a href="products"> Services</a>
                  </li>
                  {/* <li>
                    <a href="#"> Case stories</a>
                  </li> */}
                  {/* <li>
                    <a href="#"> Latest news</a>
                  </li> */}
                  <li>
                    <a href="https://www.shambarecords.com/contact"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>More Links</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="faq"> Faq</a>
                  </li>
                  <li>
                    <a href="#"> Terms of use</a>
                  </li>
                  <li>
                    <a href="#"> Disclaimer</a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pr-0">
            <div className="foter-box">
              <div className="footer-wiget-icon">
                <ul>
                  <li>
                    <a href="https://facebook.com/ShambaRecords" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/RecordsShamba" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget-contct-menu">
                <ul>
                  <li>
                    <a href="tel:+254732693963">+254732693963</a>
                  </li>
                  <li className="line">
                    <a href="mailto:info@shambarecords.com" target='_blank' rel="noopener noreferrer">info@shambarecords.com</a>
                  </li>
                  <li>
  <a 
    href="https://www.google.com/maps?q=Mitsumi+Business+Park,+Muthithi+Road,+Westlands,+Nairobi,+Kenya" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Mitsumi Business Park, Muthithi Road, Westlands, Nairobi | Kenya.
  </a>
</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-100">
          <div className="col-lg-6 col-md-12">
            <div className="copyright-text">
            <p>
  © {new Date().getFullYear()} <a href="https://www.shambarecords.com" target="_blank" rel="noopener noreferrer">Shamba Records</a>. All rights reserved.
</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-condition">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
