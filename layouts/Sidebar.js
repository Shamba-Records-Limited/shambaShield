import { thrownutility } from "@/utility";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-group info-group">
      <div className="sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a
              href="#"
              className="close-side-widget"
              onClick={(e) => {
                e.preventDefault();
                thrownutility.sidebarToggle();
              }}
            >
              <i className="bi bi-x-lg" />
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="sidebar-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/myImages/image/newImages/shambalogoWT.svg" alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="sidebar-widget-menu">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://www.shambarecords.com/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
