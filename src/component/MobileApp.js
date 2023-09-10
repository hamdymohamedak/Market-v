import React from "react";
import "./MobileApp.css";
import Footer from "./Footer";
function MobileApp() {
  return (
    <section className="Header">
      <div className="Header-background"></div>
      <div className="Header-content">
        <div className="Header-hero">
          <h1>
            MarketApp
            <br />
            Soon
          </h1>
          <p>His powers will soon be strong</p>
          <button className="Button">Soon</button> {/* go to app */}
        </div>
        <div className="Header-visuals">
          <div className="Iphone"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default MobileApp;
