// "use client";
// import BrandSlider from "@/components/BrandSlider";
// import Counter from "@/components/Counter";
// import ThrownLayout from "@/layouts/ThrownLayout";
// import { sliderProps } from "@/utility/sliderProps";
// // import {Success} from "@/components/Sucsess";
// import Sucsess from "@/components/Sucsess";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// const Index2 = () => {
//   return (
//     <ThrownLayout header={2}>
//       {/*==================================================*/}
//       {/* Start Slider Area */}
//       {/*==================================================*/}
//       <div className="slider-list">
//         <Swiper {...sliderProps.hero2}>
//           {/* Shamba Shield */}
//           <SwiperSlide>
//             <div className="slider-area">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="slider-content style-two">
//                       <div className="slider-sub-title style-two">
//                         <h1>Shamba Shield Insurance</h1>
//                       </div>
//                       <div className="slider-main-title">
//                         <h1>Grow Your Profits, Not your Worries</h1>
//                       </div>
//                       <div className="thrown-btn slider2">
//                         <Link legacyBehavior href="/contact">
//                           <a className="header-button">
//                             Get Insured Now
//                             <span />
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="slider-shape3 dance3">
//                       <img src="assets/images/slider/shape3.png" alt="image" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           {/* Livestock */}
//           <SwiperSlide>
//             <div className="slider-area one">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="slider-content style-two">
//                       <div className="slider-sub-title style-two">
//                         <h1>Livestock Health Cover</h1>
//                       </div>
//                       <div className="slider-main-title">
//                         <h1>Protect Your Herd, Preserve Your Livelihood</h1>
                        
//                       </div>
//                       <div className="thrown-btn slider2">
//                         <Link legacyBehavior href="/contact">
//                           <a className="header-button">
//                             Get Insured Now
//                             <span />
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           {/* Market Guard */}
//           <SwiperSlide>
//             <div className="slider-area two">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="slider-content style-two">
//                       <div className="slider-sub-title style-two">
//                         <h1>Market Guard</h1>
//                       </div>
//                       <div className="slider-main-title">
//                         <h1>Secure Profits. Guarantee Payouts. Zero Guesswork</h1>
                        
//                       </div>
//                       <div className="thrown-btn slider2">
//                         <Link legacyBehavior href="/contact">
//                           <a className="header-button">
//                             Get Insured Now
//                             <span />
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           {/* Equipments*/}
//           <SwiperSlide>
//             <div className="slider-area three">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="slider-content style-two">
//                       <div className="slider-sub-title style-two">
//                         <h1>Farm Equipment Cover</h1>
//                       </div>
//                       <div className="slider-main-title">
//                         <h1>Protect Your Tools, Power Your Farm</h1>
                        
//                       </div>
//                       <div className="thrown-btn slider2">
//                         <Link legacyBehavior href="/contact">
//                           <a className="header-button">
//                             Get Insured Now
//                             <span />
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//       <div className="about-success"><Sucsess/></div>
      
//       {/*==================================================*/}
//       {/* End  Slider Area */}
//       {/*==================================================*/}
//       {/*==================================================*/}
//       {/* Start About Area */}
//       {/*==================================================*/}
//       <div className="about-area style-two">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-md-12">
//               <div className="about-thumb">
//                 <img src="assets/images/myImages/image/newImages/happyFarmers.jpg" alt="image" />
//                 <div className="about-video-icon">
//                   <a
//                     className="video-vemo-icon venobox vbox-item"
//                     data-vbtype="youtube"
//                     data-autoplay="true"
//                     href="https://www.youtube.com/watch?v=mhZSTXecmQI"
//                   >
//                     <i className="bi bi-play" />
//                   </a>
//                 </div>
//                 <div className="about-counter">
//                   <div className="about-counter-thumb">
//                     <img
//                       src="assets/images/myImages/image/newImages/farmerProfile.png"
//                       alt="image"
//                     />
//                   </div>
//                   <div className="about-countent-content">
//                     <h5 className="counter">
//                       <Counter end={13450} decimals={0} />
//                     </h5>
//                     <p>Farmers Protected</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-12">
//               <div className="about-main-title style-two">
//                 <h2>Protect What Matters Most With Shamba Shield Insurance</h2>
//               </div>
//               <div className="about-content">
//                 <div className="about-discribtion style-two">
//                   <p>
//                   We offer affordable, tailored insurance for farmers — from protecting your crops to securing your income, tools, and health. Here’s how we help you grow strong, even in uncertain times
//                   </p>
//                 </div>
//                 <div className="process-ber-plugin">
//                   <span className="process-bar">Livestock Cover</span>
//                   <div id="bar1" className="barfiller">
//                     <div className="tipWrap" style={{ display: "inline" }}>
//                       <span
//                         className="tip"
//                         style={{
//                           left: "225.568px",
//                           transition: "left 7s ease-in-out 0s",
//                         }}
//                       >
//                         85% - livestock secured
//                       </span>
//                     </div>
//                     <span
//                       className="fill"
//                       data-percentage={85}
//                       style={{
//                         background: "rgb(22, 181, 151)",
//                         width: "365.811px",
//                         transition: "width 7s ease-in-out 0s",
//                       }}
//                     />
//                   </div>
//                   <span className="process-bar">Market Guard</span>
//                   <div id="bar2" className="barfiller">
//                     <div className="tipWrap" style={{ display: "inline" }}>
//                       <span
//                         className="tip"
//                         style={{
//                           left: "225.586px",
//                           transition: "left 7s ease-in-out 0s",
//                         }}
//                       >
//                         75% - market income protected
//                       </span>
//                     </div>
//                     <span
//                       className="fill my-class"
//                       data-percentage={75}
//                       style={{
//                         background: "rgb(22, 181, 151)",
//                         width: "345.944px",
//                         transition: "width 7s ease-in-out 0s",
//                       }}
//                     />
//                   </div>
//                   <span className="process-bar">Farm Equipment Cover</span>
//                   <div id="bar3" className="barfiller">
//                     <div className="tipWrap" style={{ display: "inline" }}>
//                       <span
//                         className="tip"
//                         style={{
//                           left: "225.586px",
//                           transition: "left 7s ease-in-out 0s",
//                         }}
//                       >
//                         90% - tools backed
//                       </span>
//                     </div>
//                     <span
//                       className="fill my-class"
//                       data-percentage={90}
//                       style={{
//                         background: "rgb(22, 181, 151)",
//                         width: "405.944px",
//                         transition: "width 7s ease-in-out 0s",
//                       }}
//                     />
//                   </div>
//                   <span className="process-bar">AgriHealth Plus</span>
//                   <div id="bar3" className="barfiller">
//                     <div className="tipWrap" style={{ display: "inline" }}>
//                       <span
//                         className="tip"
//                         style={{
//                           left: "225.586px",
//                           transition: "left 7s ease-in-out 0s",
//                         }}
//                       >
//                         80% - farmer well-being secured
//                       </span>
//                     </div>
//                     <span
//                       className="fill my-class"
//                       data-percentage={80}
//                       style={{
//                         background: "rgb(22, 181, 151)",
//                         width: "355.944px",
//                         transition: "width 7s ease-in-out 0s",
//                       }}
//                     />
//                   </div>
//                   <span className="process-bar">Farm Loan Protection</span>
//                   <div id="bar3" className="barfiller">
//                     <div className="tipWrap" style={{ display: "inline" }}>
//                       <span
//                         className="tip"
//                         style={{
//                           left: "225.586px",
//                           transition: "left 7s ease-in-out 0s",
//                         }}
//                       >
//                         65% loan security & peace of mind
//                       </span>
//                     </div>
//                     <span
//                       className="fill my-class"
//                       data-percentage={65}
//                       style={{
//                         background: "rgb(22, 181, 151)",
//                         width: "257.944px",
//                         transition: "width 7s ease-in-out 0s",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*==================================================*/}
//       {/* End About Area */}
//       {/*==================================================*/}
//       {/*==================================================*/}
//       {/* Start Contact Us Area */}
//       {/*==================================================*/}
//       <div className="contact-area">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7 col-md-12">
//               <div className="section-title contact">
//                 <div className="section-main-title contact">
//                   <h2>Talk to Us Today
//                   Let’s Secure Your Farm Together</h2>
//                 </div>
//                 <div className="contact-discription">
//                   <p>
//                   Whether you're a farmer, cooperative, or financial partner, we’ll help you find the right insurance package.
//                   From crops to cattle, we’ve got you covered,  with a plan that fits your farm.
//                   </p>
//                 </div>
//                 <div className="thrown-btn contact">
//                   <Link legacyBehavior href="/contact">
//                     <a className="header-button">
//                       Contact Us{" "}
//                       <span style={{ top: "197.658px", left: "152.499px" }} />
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-5 col-md-6">
//               <div className="contact-thumb">
//                 <img
//                   src="assets/images/myImages/image/newImages/ladyCop.png"
//                   alt="image"
//                 />
//                 <div className="contact-shape bounce-animate">
//                   <img
//                     src="assets/images/resource/contact-shape.png"
//                     alt="image"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*==================================================*/}
//       {/* End Contact Us Area */}
//       {/*==================================================*/}
//       {/*==================================================*/}
//       {/* Start Service Style Two Area */}
//       {/*==================================================*/}
//       <div className="service-area style-two">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="section-title text-center">
//                 <div className="section-sub-title">
//                   <h4>OUR INSURANCE PLANS</h4>
//                 </div>
//                 <div className="section-main-title">
//                   <h2>Smart Insurance Plans Built For Farmers</h2>
//                   <h4>Tailored protection for your farm, livestock, health, and income.</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className=" row col-lg-12 ">
//             {/* machinery */}
//             <div className="col-md-6 col-xl-4">
//               {/* start service items box */}
//               <div className="service-items-box-two">
//                 <div className="service-icon-thumb">
//                   <img
//                     src="assets/images/myImages/image/newImages/tractor.png"
//                     alt="image"
//                   />
//                 </div>
//                 <div className="service-items-title">
//                   <h4>
//                     <Link legacyBehavior href="service-details">
//                       Farm Equipment Cover
//                     </Link>
//                   </h4>
//                 </div>
//                 <div className="service-items-content-two">
//                   <p>
//                     Insures tractors, irrigation tools and repairs. 
//                   </p>
//                 </div>
//                 <div className="service-items-thumb-two">
//                   <img src="assets/images/myImages/image/newImages/Machinery-1.png" alt="tractor" />
//                   <div className="service-items-icon-two">
//                     <i className="bi bi-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//               {/* End service items box */}
//             </div>
//             {/* livestock */}
//             <div className="col-md-6 col-xl-4">
//               {/* start service items box */}
//               <div className="service-items-box-two">
//                 <div className="service-icon-thumb">
//                   <img
//                     src="assets/images/myImages/image/newImages/cow.png"
//                     alt="image"
//                   />
//                 </div>
//                 <div className="service-items-title">
//                   <h4>
//                     <Link legacyBehavior href="service-details">
//                       Livestock HealthCover
//                     </Link>
//                   </h4>
//                 </div>
//                 <div className="service-items-content-two">
//                   <p>
//                     Protects against diseases, theft and vet care costs.
//                   </p>
//                 </div>
//                 <div className="service-items-thumb-two">
//                   <img src="assets/images/myImages/image/newImages/Herd-1.png" alt="image" />
//                   <div className="service-items-icon-two">
//                     <i className="bi bi-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//               {/* End service items box */}
//             </div>
//             {/* health */}
//             <div className="col-md-6 col-xl-4">
//               {/* start service items box */}
//               <div className="service-items-box-two">
//                 <div className="service-icon-thumb">
//                   <img
//                     src="assets/images/myImages/image/newImages/health.png"
//                     alt="image"
//                   />
//                 </div>
//                 <div className="service-items-title">
//                   <h4>
//                     <Link legacyBehavior href="service-details">
//                       AgriHealth Plus 
//                     </Link>
//                   </h4>
//                 </div>
//                 <div className="service-items-content-two">
//                   <p>
//                    Covers health costs for farmers and seasonal workers.
//                   </p>
//                 </div>
//                 <div className="service-items-thumb-two">
//                   <img src="assets/images/myImages/image/newImages/Clinic-1.png" alt="image" />
//                   <div className="service-items-icon-two">
//                     <i className="bi bi-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//               {/* End service items box */}
//             </div>
//             <div className="col-md-6 col-xl-4">
//               {/* start service items box */}
//               <div className="service-items-box-two">
//                 <div className="service-icon-thumb">
//                   <img
//                     src="assets/images/myImages/image/newImages/piggy-bank.png"
//                     alt="image"
//                   />
//                 </div>
//                 <div className="service-items-title">
//                   <h4>
//                     <Link legacyBehavior href="service-details">
//                       MarketGuard
//                     </Link>
//                   </h4>
//                 </div>
//                 <div className="service-items-content-two">
//                   <p>
//                     Shield your income from price drops and contracts failures.
//                   </p>
//                 </div>
//                 <div className="service-items-thumb-two">
//                   <img src="assets/images/myImages/image/newImages/Produce-1.png" alt="image" />
//                   <div className="service-items-icon-two">
//                     <i className="bi bi-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//               {/* End service items box */}
//             </div>
//              {/* start service items box */}
//             <div className="col-md-6 col-xl-4">
//                <div className="service-items-box-two">
//                 <div className="service-icon-thumb">
//                   <img
//                     src="assets/images/myImages/image/newImages/loan.png"
//                     alt="image"
//                   />
//                 </div>
//                 <div className="service-items-title">
//                   <h4>
//                     <Link legacyBehavior href="service-details">
//                       Farm Loan Protection 
//                     </Link>
//                   </h4>
//                 </div>
//                 <div className="service-items-content-two">
//                   <p> Keeps you afloat when harvests fail or debts pile up.
//                   </p>
//                 </div>
//                 <div className="service-items-thumb-two">
//                   <img src="assets/images/myImages/image/newImages/Loan-1.png" alt="image" />
//                   <div className="service-items-icon-two">
//                     <i className="bi bi-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//               {/* End service items box */}
//             </div>
//              {/* end service items box */}
//           </div>
//         </div>
//       </div>
//       {/*==================================================*/}
//       {/* End Service Style Two Area */}
//       {/*==================================================*/}
//       {/*==================================================*/}
//       {/* Start Choose Area */}
//       {/*==================================================*/}
//       <div className="choose-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-md-12">
//               <div className="choose-content">
//                 <div className="section-title">
//                   <div className="section-sub-title choose">
//                     {/* <h4>We Provide Best Solution</h4> */}
//                   </div>
//                   <div className="section-main-title choose">
//                     <h2>Why Farmers Trust Shamba Shield Insurance</h2>
                    
//                   </div>
//                 </div>
//                 <div className="choose-discription">
//                   <p>
//                   Our insurance isn’t one-size-fits-all, it’s built around your farm. Shamba Shield uses digital records and local expertise to offer fast, fair, and personalized protection against the challenges farmers face every day.
//                   </p>
//                 </div>
//                 <div className="choose-single-box">
//                   <div className="choose-icon">
//                     <img src="assets/images/resource/choose1.png" alt="image" />
//                   </div>
//                   <div className="choose-content">
//                   <h4>Data-Driven Coverage</h4>
//                   <p>We provide a range of digital marketing solutions.</p>
//                   </div>
//                 </div>
//                 <div className="choose-single-box">
//                   <div className="choose-icon">
//                     <img src="assets/images/resource/choose2.png" alt="image" />
//                   </div>
//                   <div className="choose-content">
//                     <h4>Real-Time Support </h4>
//                     <p>Our helps comes fast when disaster strikes
//                    </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-12">
//               <div className="single-video style-two">
//                 <div className="video-icon style-two">
//                   <a
//                     className="video-vemo-icon venobox vbox-item"
//                     data-vbtype="youtube"
//                     data-autoplay="true"
//                     href="https://youtu.be/BS4TUd7FJSg"
//                   >
//                     <i className="bi bi-play" />
//                   </a>
//                 </div>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*==================================================*/}
//       {/* End Choose Area */}
//       {/*==================================================*/}
//       {/*==================================================*/}
//       {/* Start  Work Process Area */}
//       {/*==================================================*/}
//       <div className="work-process-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="section-title text-center">
//                 <div className="section-sub-title">
//                   <h4>HOW IT WORKS</h4>
//                 </div>
//                 <div className="section-main-title work">
//                   <h2>Getting Protected with Shamba Shield Is Simple</h2>
                 
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-4 col-md-6">
//               <div className="work-process-single-box">
//                 <div className="work-process-thumb">
//                   <img src="assets/images/myImages/image/newImages/Choose1.png" alt="image" />
//                   <div className="work-process-shape rotateme">
//                     <img
//                       src="assets/images/resource/work-border-shape.png"
//                       alt="image"
//                     />
//                   </div>
//                   <div className="work-process-number">
//                     <h4>01</h4>
//                   </div>
//                   <div className="work-process-content">
//                     <h4>
//                       <Link legacyBehavior href="project-details">
//                       Register Your Farm
//                       </Link>
//                     </h4>
//                     <p>
//                     Create your digital farm record using our app or with help from an agent. This lets us personalize your coverage.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="work-process-single-box">
//                 <div className="work-process-thumb">
//                   <img src="assets/images/myImages/image/newImages/Choose2.png" alt="image" />
//                   <div className="work-process-shape rotateme">
//                     <img
//                       src="assets/images/resource/work-border-shape.png"
//                       alt="image"
//                     />
//                   </div>
//                   <div className="work-process-number">
//                     <h4>02</h4>
//                   </div>
//                   <div className="work-process-content">
//                     <h4>
//                       <Link legacyBehavior href="project-details">
//                       Choose Your Insurance Plan
//                       </Link>
//                     </h4>
//                     <p>
//                     Select the protection you need, from crop and livestock cover to farm tools and health protection.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="work-process-single-box work">
//                 <div className="work-process-thumb">
//                   <img src="assets/images/myImages/image/newImages/Choose-3.png" alt="image" />
//                   <div className="work-process-shape rotateme">
//                     <img
//                       src="assets/images/resource/work-border-shape.png"
//                       alt="image"
//                     />
//                   </div>
//                   <div className="work-process-number">
//                     <h4>03</h4>
//                   </div>
//                   <div className="work-process-content">
//                     <h4>
//                       <Link legacyBehavior href="project-details">
//                       Stay Protected
//                       </Link>
//                     </h4>
//                     <p>
//                     We monitor risks, offer fast claim payouts, and help you grow with peace of mind.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*==================================================*/}
//       {/* EndWork Process Area */}
//       {/*==================================================*/}
//       {/*==================================================*/}
//       {/* Start Teatimonial Style Two Area */}
//       {/*==================================================*/}
//       <div className="testimonial-area style-two">
//         <div className="container">
//           <div className="row">
//             <div className="testi_list2 position-relative">
//               <Swiper {...sliderProps.testimonial2}>
//                 <SwiperSlide className="col-lg-12">
//                   <div className="testimonial-items-box">
//                     <div className="testimonial-item-thumb">
//                       <img
//                         src="assets/images/myImages/image/newImages/Test-13.png"
//                         alt="image"
//                       />
//                     </div>
//                     <div className="testimonial-item-content">
//                       <div className="testimonial-icon">
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                       </div>
//                       <div className="testimonial-discription">
//                         <p>
//                         When a surprise drought wiped out half of my maize harvest, Shamba Shield stepped in. Within days, I received compensation that kept my family and farm afloat. It’s more than insurance , it’s peace of mind
//                         </p>
//                       </div>
//                       <div className="testimonial-title">
//                         <h4>Wanjiku Muthoni</h4>
//                         <span>Maize Farmer, Embu </span>
                      
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide className="col-lg-12">
//                   <div className="testimonial-items-box">
//                     <div className="testimonial-item-thumb">
//                       <img
//                         src="assets/images/myImages/image/newImages/Test-1.png"
//                         alt="image"
//                       />
//                     </div>
//                     <div className="testimonial-item-content">
//                       <div className="testimonial-icon">
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                       </div>
//                       <div className="testimonial-discription">
//                         <p>
//                         I lost two dairy cows to illness last season. Thanks to Shamba Shield, I was able to restock quickly without taking a loan. This cover gave me the confidence to scale up my herd again.
//                         </p>
//                       </div>
//                       <div className="testimonial-title">
//                         <h4>Daniel Kiprono</h4>
//                         <span>Dairy Farmer, Eldoret</span>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide className="col-lg-12">
//                   <div className="testimonial-items-box">
//                     <div className="testimonial-item-thumb">
//                       <img
//                         src="assets/images/myImages/image/newImages/Test-14.png"
//                         alt="image"
//                       />
//                     </div>
//                     <div className="testimonial-item-content">
//                       <div className="testimonial-icon">
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                       </div>
//                       <div className="testimonial-discription">
//                         <p>
//                         When my water pump broke just before planting, I panicked. Shamba Shield covered the repairs within a week. Without that cover, I would’ve missed the whole season.
//                         </p>
//                       </div>
//                       <div className="testimonial-title">
//                         <h4>Phidelis Atieno</h4>
//                         <span>Vegetable Grower, Kisumu</span>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide className="col-lg-12">
//                   <div className="testimonial-items-box">
//                     <div className="testimonial-item-thumb">
//                       <img
//                         src="assets/images/myImages/image/newImages/Test-15.png"
//                         alt="image"
//                       />
//                     </div>
//                     <div className="testimonial-item-content">
//                       <div className="testimonial-icon">
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                       </div>
//                       <div className="testimonial-discription">
//                         <p>
//                         Last year, a buyer canceled on me last minute. But thanks to Shamba Shield’s Market Guard, I still got paid the agreed price. That kind of protection is rare in farming!
//                         </p>
//                       </div>
//                       <div className="testimonial-title">
//                         <h4>Peter Mwangi</h4>
//                         <span>Tomato Farmer, Nyeri</span>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//               <div className="owl-nav">
//                 <div className="owl-prev testimonial-2-prev">
//                   <i className="bi bi-arrow-left" />
//                 </div>
//                 <div className="owl-next testimonial-2-next">
//                   <i className="bi bi-arrow-right" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*==================================================*/}
//       {/* Start  Teatimonial Style Two Area */}
//       {/*==================================================*/}
//       {/*==================================================*/}
//       {/* Start  Contact Style Two Area */}
//       {/*==================================================*/}
//       <div className="contact-area-three">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-7 col-md-12">
//               <div className="section-title">
//                 <div className="section-sub-title contact-thrree">
//                   <h4>Contact With Us </h4>
//                 </div>
//                 <div className="section-main-title contact-thrree">
//                   <h2>Let’s Protect Your Farm Together</h2>
//                 </div>
//               </div>
//               <div className="contact-three-discription">
//                 <p>
//                 Have questions about insurance, coverage, or claims? We're here to help, whether you're a farmer, a cooperative, or just getting started.
//                 </p>
//               </div>
//               <div className="contact-list">
//                 <span>
//                   <i className="bi bi-chevron-double-right" /> Get help registering your farm records
//                 </span>
//                 <span>
//                   {" "}
//                   <i className="bi bi-chevron-double-right" />
//                   Fast responses from a real support team
//                 </span>
//               </div>
//               <div className="row">
//                 <div className="col-lg-6 col-md-6">
//                   <div className="contact-single-box">
//                     <div className="contact-icon">
//                       <i className="bi bi-telephone-plus" />
//                     </div>
//                     <div className="contact-content">
//                       <h5>Have Any Question?</h5>
//                       <h3>+254 732 693963</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-md-6">
//                   <div className="contact-single-box">
//                     <div className="contact-icon">
//                       <i className="bi bi-envelope" />
//                     </div>
//                     <div className="contact-content">
//                       <h5>Send Email</h5>
//                       <h3>info@shambarecords.com</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-5 col-md-12">
//               <div className="contact-box">
//                 <div className="contact-title">
//                   <h4>Contact Us</h4>
//                 </div>
//                 <form
//                   action="https://formspree.io/f/myyleorq"
//                   method="post"
//                   id="it-form"
//                 >
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="form-box">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Your Name"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="form-box">
//                         <input
//                           type="text"
//                           name="email"
//                           placeholder="Your Email"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="form-box">
//                         <textarea
//                           name="message"
//                           placeholder="Message here .."
//                           defaultValue={""}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="form-box-button contact">
//                         <button type="Submit">Submit</button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*==================================================*/}
//       {/* End Contact Us Style Two Area */}
//       {/*==================================================*/}
      
//     </ThrownLayout>
//   );
// };
// export default Index2;
