import React from "react";
import "./SectionTwo.css";
import Links from "../Links/Links";

function SectionTwo() {
  return (
    <div className="secTwo bgTwo ">
      <h5>new</h5>
      <div className="secTwoImg"></div>
      <div className="description">
        <p className="secTwoPar">Introducing our largest display yet.</p>
      </div>
      <Links />
    </div>
  );
}

export default SectionTwo;
