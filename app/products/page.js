import ThrownLayout from "@/layouts/ThrownLayout";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";


const Productspage = () => {
    return (
       <ThrownLayout>
         <PageBanner pageName={"Products"} />
         <div className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Our Products</h4>
                </div>
                <div className="section-main-title">
                  <h2>Choose a Coverage Plan That Grows With You</h2>
                  <h5>Protection options tailored to farmers, cooperatives, and agri-partners.</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
          
            <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon1.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                  <h4>
  <a href="https://www.shambarecords.com/contact" style={{ textDecoration: 'none' }}>MarketGuard</a>
</h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    {/* <p>
                    Income security if crop prices drop or buyers pull out.
                    </p> */}
                      {/* <h6 className="p-12">What it covers </h6> */}
                      
        
                     <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Price fluctuation insurance for key crops                     </p>
                     <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Guaranteed minimum payout if market prices drop below a set threshold
                     </p>
                     <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Loss coverage when contracts with aggregators fall through.
                     </p>
    
                  </div>
                </div>
                <div className="col-md-10">
                <div className="product-box-button inner">
                <a href="https://www.shambarecords.com/contact"  target="_blank"
    rel="noopener noreferrer">
                
    <button type="button">Get cover</button>
  </a>
                 </div>

               </div>
                
              </div>

         
             
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-single-box">
                
                <div className="service-icon">
                  <img src="assets/images/service/service-icon5.png" alt="" />
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
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Theft, damage, or breakdown of tractors, irrigation systems, and other machinery.
                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Temporary rental support while equipment is under repair
                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Covers climate-related damage to farm assets.
                  </p>
                  </div>
                  <div className="col-md-10">
                <div className="product-box-button inner">
                <a href="https://www.shambarecords.com/contact " target="_blank"
    rel="noopener noreferrer">
    <button type="button">Get cover</button>
  </a>
                 </div>

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
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Compensation for disease outbreaks and mortality.

                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Vet costs for preventive care and vaccinations.

                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Coverage for theft and injury of high-value livestock.                  </p>
                  </div>
                  <div className="col-md-10">
                  <div className="product-box-button inner">
  <a href="https://www.shambarecords.com/contact"  target="_blank"
    rel="noopener noreferrer">
    <button type="button">Get cover</button>
  </a>
</div>

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
                      <a href="#">AgriHealth Plus</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Medical expenses for farm-related injuries.
                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Health coverage for seasonal farm workers.
                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Discounts on preventive checkups and wellness programs.
                  </p>
                  </div>
                  <div className="col-md-10">
                <div className="product-box-button inner">
                <a href="https://www.shambarecords.com/contact"  target="_blank"
    rel="noopener noreferrer">
    <button type="button">Get cover</button>
  </a>
                 </div>

               </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon6.png" alt="" />
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
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Loan repayment insurance in case of failed harvests.
                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Debt relief support during severe weather disasters.

                  </p>
                  <p className=" text-left">
                        <i className="bi bi-patch-check" style={{color:'green', margin:'4px'}} />
                        Coverage for contract disputes affecting farmer income.
                  </p>
                  </div>
                  <div className="col-md-10">
                <div className="product-box-button inner">
                <a href="https://www.shambarecords.com/contact"  target="_blank"
    rel="noopener noreferrer">
    <button type="button">Get cover</button>
  </a>
                 </div>

               </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>

       </ThrownLayout>
    );
}
export default Productspage;



