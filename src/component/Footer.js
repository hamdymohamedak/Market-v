import React from "react";
import "./Footer.css";
import logoImg from "./img/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/profile.php?id=61550884702247&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a href="tel:201017788970" className="icon">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <img className="footer-logo" src={logoImg} alt="Logo" />
    </footer>
  );
}

export default Footer;
