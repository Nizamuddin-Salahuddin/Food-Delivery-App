import React from "react";
import "./SplashScreen.css";
import { Link } from "react-router-dom";
function SplashScreen() {
  return (
    <div className="HomePage">
      <div className="HomePage_inner">
        <Link to="/OnBording1">
          <h1>
            Food-<span>D</span>
          </h1>
        </Link>
      </div>
      <div className="HomePage_Footer">
        <h5>RKFD</h5>
      </div>
    </div>
  );
}

export default SplashScreen;
