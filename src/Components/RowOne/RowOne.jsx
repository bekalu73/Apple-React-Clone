import React from "react";
import "./RowOne.css";
import Links from "../Links/Links";

function RowOne() {
  return (
    <div className="row ">
      <div className="rowOne rowImgOne">
        <h1 className="rowHeading">MacBook Pro</h1>
        <div className="rowDescription">
          <p>Supercharged for pros.</p>
        </div>
        <Links />
      </div>
      <div className="rowTwo rowImgTwo">
        <h1 className="rowHeading">iPad Pro</h1>
        <div className="rowDescription row0nepartTwo">
          <p>Supercharged by the Apple M1 chip.</p>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default RowOne;
