import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null); // Close submenu if it's already open
    } else {
      setActiveSubmenu(index); // Open the clicked submenu
    }
  };

  return (
    <div className="lol25">
      <nav className="main-menu page25">
        <div className="navbar25">
          <div className="logo25">
            <Link to="/">
              <img src="../images/rafeeq.jpg" alt="Logo" title="Website Logo" />
            </Link>
          </div>
          {/* Mobile menu toggle button */}
          <button className="menu-toggle25" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`navigation25 ${isMenuOpen ? "active25" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About" onClick={() => setActiveSubmenu(null)}>
                About
              </Link>
              <ul
                className={`submenu25 ${activeSubmenu === 0 ? "active25" : ""}`}
              >
                <li>
                  <Link to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/community" onClick={() => setActiveSubmenu(null)}>
                 Community
              </Link>
              <ul
                className={`submenu25 ${activeSubmenu === 1 ? "active25" : ""}`}
              >
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
              <Link to="/Rescue_page1" onClick={() => setActiveSubmenu(null)}>
                Found
              </Link>
            </li>
            <li>
              <Link to="/Ypage1" onClick={() => setActiveSubmenu(null)}>
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/Team" onClick={() => setActiveSubmenu(null)}>
                Tame
              </Link>
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
