import { thrownutility } from "@/utility";
import Link from "next/link";
import { Fragment } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation"; // Import the hook

const Header = ({ dark }) => {
  return (
    <Fragment>
      <Header2 dark={dark} />
      <MobileMenu />
      <SearchPopup />
      <Sidebar />
    </Fragment>
  );
};
export default Header;

const Header2 = ({ dark }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="thrown-header-area style-two" id="navbar">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          {/* Logo and Navigation in the Same Row */}
          <div className="col-lg-2 col-md-3">
            <div className="logo-container style-two">
              <Link legacyBehavior href="https://www.shambarecords.com/">
                <a target="_blank" rel="noopener noreferrer">
                  <img
                    src="assets/images/myImages/image/newImages/shambalogoWT.svg"
                    alt="logo"
                    width={90}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-md-9 d-flex justify-content-end align-items-center">
            <div className="thrown-menu style-two">
              <Nav />
            </div>
            {pathname !== "/contact" && (
              <div className="thrown-search-button style-two ms-3">
                <SearchBtn btnStyle={"style-two"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="mobile-menu-area" id="navbar">
      <div className="mobile-menu">
        <div className="mobile-logo">
          <Link legacyBehavior href="/">
            <a>
              <img src="assets/images/myImages/image/newImages/shambalogoWT.svg" alt="image" />
            </a>
          </Link>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a
              className="navSidebar-button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                thrownutility.sidebarToggle();
              }}
            >
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchPopup = () => {
  return (
    <div className="search-popup">
      <button
        className="close-search style-two"
        onClick={() => thrownutility.searchActive()}
      >
        <span className="flaticon-multiply">
          <i className="far fa-times-circle" />
        </span>
      </button>
      <button className="close-search">
        <i className="fas fa-arrow-up" />
      </button>
      <form method="post" action="#">
        <div className="form-group">
          <input
            type="search"
            name="search-field"
            defaultValue=""
            placeholder="Search Here"
            required=""
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};

const Nav = () => {
  return (
    <ul>
    
      <li>
        {/* <a href="#">
          Home <i className="fas fa-chevron-down" />
        </a>
        <div className="home-menu">
          <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-1.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="/">
                    Home One
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-2.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-two">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-two">
                    Home Two
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-3.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-three">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-three">
                    Home Three
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-4.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-four">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-four">
                    Home Four
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-5.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-five">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-five">
                    Home Five
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-6.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-one">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-one">
                    Home Six
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-7.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-two">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-two">
                    Home Seven
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-8.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-three">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-three">
                    Home Eight
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-9.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-four">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-four">
                    Home Nine
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-10.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-five">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-five">
                    Home Ten
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div> */}
         <Link legacyBehavior href="/">
         <a>Home</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="about">
          About
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="products">
          Insurance Products
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="faq">
        FAQ
        </Link>
      </li>
      {/* <li>
        <Link legacyBehavior href="contact-us">
          Contact
        </Link>
      </li> */}
       <li>
        <a href="https://www.shambarecords.com/contact" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </li>
      {/* <li>
        <Link legacyBehavior href="about">
          About
        </Link>
      </li> */}
      {/* <li>
        <a href="#">
          Service <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="service">
                Service
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="service-details">
                Service Details
              </Link>
            </li>
          </ul>
        </div>
      </li> */}

      {/* <li>
        <a href="#">
          Blog <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="blog">
                Blog
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-two-grid">
                Blog Grid
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-standard">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-details">
                Blog Details
              </Link>
            </li>
          </ul>
        </div>
      </li> */}
 
    </ul>
  );
};

const SearchBtn = ({ btnStyle }) => {
  return (
    <Fragment>
      <div className={`thrown-social-menu ${btnStyle ? btnStyle : ""}`}>
        {/* <ul> */}
          {/* <li>
            <a
              className="search-box-btn search-box-outer"
              href="#"
              onClick={() => thrownutility.searchActive()}
            >
              <i className="bi bi-search" />
            </a>
          </li> */}
          {/* <li>
            <a className="handbag" href="#">
              <i className="bi bi-cart-fill" />
            </a>
          </li> */}
        {/* </ul> */}
      </div>
      {/* <div className="Thrown-btn style-one">
        <Link legacyBehavior href="/contact">
          <a className="header-button" href="https://www.shambarecords.com/contact" target="_blank" rel="noopener noreferrer">
            Get A Quote <span />
          </a>
        </Link>
      </div> */}
    </Fragment>
  );
};
