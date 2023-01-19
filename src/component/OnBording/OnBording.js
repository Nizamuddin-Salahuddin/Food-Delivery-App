import React from "react";
import "./OnBording.css";
import { Link } from "react-router-dom";
function OnBording({ Heading1, Heading2, Heading3, Para, link, Img }) {
  return (
    <div className="OnBording1" style={{ backgroundImage: `url(${Img})` }}>
      <div className="OnBording1_inner">
        <div className="OnBording1_inner_Top">
          <h5>
            Food-<span>D</span>
          </h5>
        </div>
        <div className="OnBording1_inner_Bottom">
          <h1>
            {Heading1} <br /> {Heading2}
            <span> {Heading3} </span>
          </h1>
          <h5>{Para}</h5>
          <Link to={link}>
            <button type="button">NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnBording;
