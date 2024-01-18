import React from "react";
import "./RowTwo.css";
import Links from "../Links/Links";

function RowTwo() {
  return (
    <div className="row ">
      <div className="rowOne rowTwoImgOne ">
        <div className="bottomTextField">
          <h1 className="rowHeading">AirPods</h1>
          <div className="rowDescription rowTwopartOne">
            <p>Supercharged for pros.</p>
          </div>
          <Links />
        </div>
      </div>

      <div className="rowTwo rowTwoImgTwo">
        <div className="imageWrapper">
          <img
            src="data:image/png;base64,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"
            alt="fitness icon"
          />
        </div>
        <div className="rowTwoDescription blackDescription">
          <p>Get 3 months free when you buy an Apple Watch.</p>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default RowTwo;
