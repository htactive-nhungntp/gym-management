import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="left-sidebar-pro">
      <nav id="sidebar">
        <div className="sidebar-header">
          <a href="/">
            <img src="img/message/1.jpg" alt="" />
          </a>
          <h3>Nhung Huong</h3>
          <p>Developer</p>
          <strong>AP+</strong>
        </div>
        <div className="left-custom-menu-adp-wrap">
          <ul className="nav navbar-nav left-sidebar-menu-pro">
            <li className="nav-item">
              <Link
                to="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-home" />{" "}
                <span className="mini-dn">Home</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Payment"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-envelope" />{" "}
                <span className="mini-dn">Payment</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
              <div
                role="menu"
                className="dropdown-menu left-menu-dropdown animated flipInX"
              >
                <a href="view-mail.html" className="dropdown-item">
                  View Mail
                </a>
                <a href="compose-mail.html" className="dropdown-item">
                  Compose Mail
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/machine"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-envelope" />{" "}
                <span className="mini-dn">Machines</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Statistic"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-bar-chart-o" />{" "}
                <span className="mini-dn">Charts</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-desktop" />{" "}
                <span className="mini-dn">App views</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </a>
              <div
                role="menu"
                className="dropdown-menu left-menu-dropdown apps-left-menu-std animated flipInX"
              >
                <a href="notifications.html" className="dropdown-item">
                  Notifications
                </a>
                <a href="alerts.html" className="dropdown-item">
                  Alerts
                </a>
                <a href="modals.html" className="dropdown-item">
                  Modals
                </a>
                <a href="buttons.html" className="dropdown-item">
                  Buttons
                </a>
                <a href="tabs.html" className="dropdown-item">
                  Tabs
                </a>
                <a href="accordion.html" className="dropdown-item">
                  Accordion
                </a>
                <a href="tab-menus.html" className="dropdown-item">
                  Tab Menus
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-files-o" />{" "}
                <span className="mini-dn">Pages</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </a>
              <div
                role="menu"
                className="dropdown-menu left-menu-dropdown pages-left-menu-std animated flipInX"
              >
                <a href="login.html" className="dropdown-item">
                  Login
                </a>
                <a href="register.html" className="dropdown-item">
                  Register
                </a>
                <a href="captcha.html" className="dropdown-item">
                  Captcha
                </a>
                <a href="checkout.html" className="dropdown-item">
                  Checkout
                </a>
                <a href="contact.html" className="dropdown-item">
                  Contacts
                </a>
                <a href="review.html" className="dropdown-item">
                  Review
                </a>
                <a href="order.html" className="dropdown-item">
                  Order
                </a>
                <a href="comment.html" className="dropdown-item">
                  Comment
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
