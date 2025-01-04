import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="lol25">
      <nav className="main-menu page25">
        <div className="navbar25">
          <div className="logo25">
            <Link to="/">
              <img src="../images/rafeeq.jpg" alt="Logo" title="Website Logo" />
            </Link>
          </div>
          <ul className="navigation25">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
              <ul className="submenu25">
                <li>
                  <Link to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/community"> Community</Link>
              <ul className="submenu25">
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
              <Link to="/Rescue_page1">Found</Link>
            </li>
            <li>
              <Link to="/Ypage1">Volunteer</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
            <button className="Donatee25">
              <Link to="/Ypag2">
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
