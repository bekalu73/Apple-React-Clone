import React from "react";
import "./Hero.css";
import Links from "../Links/Links";

function Hero() {
  return (
    <div className="hero heroImg">
      <h1 className="heroHeading">iPhone 13 Pro</h1>
      <div className="heroDescription">
        <p>Oh. So. Pro.</p>
      </div>
      <Links />
    </div>
  );
}

export default Hero;
