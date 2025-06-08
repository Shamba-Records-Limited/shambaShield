import Counter from "./Counter";
const Sucsess = ({ dark }) => {
  return (
    <div className={`sucsess-area ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <div className={`sucsees-single-box ${dark ? "dark" : ""}`}>
              <div className="sucsess-counter">
                <div className="sucsess-counter-icon">
                  <i className="bi bi-heart-fill" />
                </div>
                <div className={`sucsess-numbar ${dark ? "dark" : ""}`}>
                  <h4 className="counter">
                    <Counter end={13450} />
                  </h4>
                </div>
              </div>
              <div className={`sucsess-content ${dark ? "dark" : ""}`}>
                <h4>Farmers Protected </h4>
                <h6>Across 23 counties in Kenya</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className={`sucsees-single-box ${dark ? "dark" : ""}`}>
              <div className="sucsess-counter">
                <div className="sucsess-counter-icon">
                  <i className="bi bi-star-fill" />
                </div>
                <div className={`sucsess-numbar ${dark ? "dark" : ""}`}>
                  <h4 className="counter">
                    <Counter end={92} />
                  </h4>
                  <span>%</span>
                </div>
              </div>
              <div className={`sucsess-content ${dark ? "dark" : ""}`}>
                <h4>Claims Approved </h4>
                <h6>Within 14 days of request</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sucsees-item-box">
              <div className="sucsess-item-counter">
                <div className="sucsess-item-numbar">
                  <h4 className="counter">18,900</h4>
                  <span>+</span>
                </div>
              </div>
              <div className="sucsess-item-two">
                <h4>Plot size Insured </h4>
                <h4>Under Crop & Livestock Covers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sucsess;
