import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Image from 'next/image';


const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"About Us"} />
      {/*==================================================*/}
      {/* Start About Area */}
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
      {/* End About Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Choose Area */}
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
      {/* End Choose Area */}
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
      {/* End  Faq Area */}
      {/*==================================================*/}
    </ThrownLayout>
  );
};
export default page;
