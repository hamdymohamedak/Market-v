import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let [navStyle, setNavStyle] = useState({
    background: "transparent",
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavStyle({
        background: "#EFC130",
      });
      if (window.scrollY === 0) {
        setNavStyle({
          background: "transparent",
        });
      }
    });
  });
  return (
    <div style={navStyle} className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="logo">Zanaty</div>
      <button className="menu-button" onClick={toggleMenu}>
        <i class="fa-solid fa-bars"></i>
      </button>
      <ul>
        <li>
          <Link className="linkTag" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/clothes">
            Clothes
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/contact">
            App
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
