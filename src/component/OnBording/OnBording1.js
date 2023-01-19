import React from "react";

import Img from "./../Assets/OnBording1.png";

import OnBording from "./OnBording";
function OnBording1() {
  const Props = {
    Heading1: "AWESOME ",
    Heading2: "LOCAL",
    Heading3: "FOOD",
    Para: "Fresh and delicious local food delivered from the restaurants to your doorstep",
    link: "/OnBording2",
  };

  return (
    <OnBording
      Heading1={Props.Heading1}
      Heading2={Props.Heading2}
      Heading3={Props.Heading3}
      Para={Props.Para}
      link={Props.link}
      Img={Img}
    />
  );
}

export default OnBording1;
