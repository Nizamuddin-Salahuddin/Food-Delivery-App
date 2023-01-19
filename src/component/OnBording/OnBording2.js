import React from "react";
import OnBording from "./OnBording";
import Img from "./../Assets/OnBording2.png";

function OnBording2() {
  const Props = {
    Heading1: "DELIVER AT ",
    Heading2: "YOUR",
    Heading3: "DOOR STEP",
    Para: "Fresh and delicious local food delivered from the restaurants to your doorstep",
    link: "/OnBording3",
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

export default OnBording2;
