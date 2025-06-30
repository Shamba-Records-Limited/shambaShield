import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Image from 'next/image';


const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"About Us"} />
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb" style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image src="/images/myImages/image/newImages/farmerBank.png" alt="" fill style={{ objectFit: 'cover' }} />
                <div className="about-shape bounce-animate" style={{ position: 'relative', right: "-300px", width: '300px', height: '600px' }}>
                  <Image src="/images/myImages/image/newImages/FramerShake3.png" alt="" fill style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="about-sub-title">
                  {/* <h4>Business GROWTH</h4> */}
                </div>
                <div className="about-main-title">
                  <h2>Protecting Farmers. Growing Communities</h2>
               </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion">
                  <p>
                  Shamba Shield helps farmers safeguard their future through simple, affordable insurance. From weather shocks to market crashes, we’ve got their backs,
                  with real support, not just paperwork.
                  </p>
                </div>
                <div className="about-title">
                  <h4>We Design Insurance That Understands Farmers</h4>
                </div>
                {/* <div className="about-discribtion">
                  <p>
                    Variations of passages of lorem in free market to available,
                    but the majority have suffered alteration in some form, by
                    injected humour,or randomised words
                  </p>
                </div> */}
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    {/*start about single box */}
                    <div className="about-single-box">
                      <div className="about-icon">
                        <i className="bi bi-patch-check" />
                      </div>
                      <div className="about-text">
                        <h4> For Smallholder Farmers</h4>
                      </div>
                    </div>
                    {/*end about single box */}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    {/*start about single box */}
                    <div className="about-single-box">
                      <div className="about-icon">
                        <i className="bi bi-patch-check" />
                      </div>
                      <div className="about-text">
                        <h4>For Cooperatives & Partners</h4>
                      </div>
                    </div>
                    {/*end about single box */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown About Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Choose Area */}
      {/*==================================================*/}
      <div className="choose-area2">
        <div className="container">
          <div className="">
            <div className="">
              <div className="section-title">
                <div className="section-sub-title choose">
                {/* <h4>Insurance That Understands Farmers</h4> */}

                  {/* <h4>We Provide Best Solution</h4> */}
                </div>
                <div className="section-main-title choose">
                  <h2>Why Choose</h2>
                  <h2>Shamba Records Insurance?</h2>
                </div>
              </div>
              <div className="choose-discription">
              <p>
Farming is tough , unpredictable weather, fluctuating markets, and rising costs make it even harder. 
Shamba Records Insurance is designed by farmers, for farmers , blending digital farm data with smart protection. 
We help you protect your harvests, livestock, equipment, health, and income so you can grow with confidence and peace of mind.
</p>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose1.png" alt="" />
                </div>
                <div className="choose-content">
                  <h4>Tailored, Data-Driven Coverage</h4>
                  <p>
 With digital farm records, your coverage is personalized,  claims are processed faster,  and <br></br>  payouts are fair.
</p>                </div>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose2.png" alt="" />
                </div>
                <div className="choose-content">
                <h4>Access to Better Financing</h4>
                <p>
 Shamba Records Insurance opens doors to loans, credit, and long-term investments.
</p>
                </div>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose2.png" alt="" />
                </div>
                <div className="choose-content">
                <h4>Protect What Matters Most</h4>
                <p>
We offers holistic insurance products for the modern farmer.
</p>
              </div>
            </div>
          
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Choose Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Service Area */}
      {/*==================================================*/}
      {/* <div className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Provide Services</h4>
                </div>
                <div className="section-main-title">
                  <h2>Choose a Coverage Plan That Grows With You</h2>
                  <h2>Protection options tailored to farmers, cooperatives, and agri-partners.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon1.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">MarketGuard</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                    Income security if crop prices drop or buyers pull out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon2.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Farm Equipment Cover</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                    Insure tractors, irrigation tools & essential machinery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon3.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Livestock HealthCover</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                    Disease, theft, and vet care protection for cattle, poultry, goats & more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon4.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">AgriHealth Plus</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                    Health coverage for farmers & seasonal workers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon5.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Farm Loan Protection</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                    Covers loan payments when harvests fail or contracts collapse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End Thrown Service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Faq Area */}
      {/*==================================================*/}
      <div className="faq-area">
        <div className="container">
          <div className="flex">
           
            <div className=" w-full p-2">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Faq Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Team Area */}
      {/*==================================================*/}
      {/* <div className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>OUR WORKERS</h4>
                </div>
                <div className="section-main-title team">
                  <h2>Working With Excellentour</h2>
                  <h2>Great Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-single-box">
                <div className="team-thumb">
                  <img src="assets/images/team/team1.png" alt="" />
                  <div className="team-share-social">
                    <div className="team-socail-icon">
                      <a href="#">
                        <span>
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="team-btn">
                      <div className="team-icon">
                        <span>
                          <i className="bi bi-share" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-title">
                    <h4>
                      <a href="#">George Clooney</a>
                    </h4>
                    <span>Marketing Officer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-single-box">
                <div className="team-thumb">
                  <img src="assets/images/team/team2.png" alt="" />
                  <div className="team-share-social">
                    <div className="team-socail-icon">
                      <a href="#">
                        <span>
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="team-btn">
                      <div className="team-icon">
                        <span>
                          <i className="bi bi-share" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-title">
                    <h4>
                      <a href="#">Dennis Barrett</a>
                    </h4>
                    <span>Head of Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-single-box">
                <div className="team-thumb">
                  <img src="assets/images/team/team3.png" alt="" />
                  <div className="team-share-social">
                    <div className="team-socail-icon">
                      <a href="#">
                        <span>
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="team-btn">
                      <div className="team-icon">
                        <span>
                          <i className="bi bi-share" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-title">
                    <h4>
                      <a href="#">Louis Ferguson</a>
                    </h4>
                    <span>Co-Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-shape1 bounce-animate">
            <img src="assets/images/team/team-shape1.png" alt="" />
          </div>
          <div className="team-shape2 bounce-animate">
            <img src="assets/images/team/team-shape2.png" alt="" />
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End Thrown Team Area */}
      {/*==================================================*/}
    </ThrownLayout>
  );
};
export default page;
