import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
function GetStarted() {
  return (
    <div className="GetStarted">
      <div className="GetStarted_inner">
        <div className="GetStarted_inner_Top">
          <h5>
            Food-<span>D</span>
          </h5>
          <h1>
            GET <span>STARTED</span>
          </h1>
          <p>
            Get started and enjoy the awesome local food right at your home.
          </p>
        </div>
        <div className="GetStarted_inner_Bottom">
          <Link to="/LogIn">
            <button type="button" id="LogIn">
              LOGIN
            </button>
          </Link>
          <Link to="/Regester">
            <button type="button" id="Regester">
              REGESTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
