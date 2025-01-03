import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Nav/nav.css";

const Nav = () => {
  return (
    <div className="lol">
      <nav className="main-menu page">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="../images/rafeeq.jpg" alt="Logo" title="Website Logo" />
            </Link>
          </div>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
              <ul className="submenu">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/community">Our Community</Link>
              <ul className="submenu">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/articles">Articles</Link>
                </li>
                <li>
                  <Link to="/questions">Questions</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/found">Found</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <button className="Donatee">
              <Link to="/donate">
                <span>Donate</span>
              </Link>
            </button>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
