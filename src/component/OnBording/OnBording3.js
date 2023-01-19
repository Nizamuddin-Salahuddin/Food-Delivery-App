import React from "react";
import OnBording from "./OnBording";
import Img from "./../Assets/OnBording3.png";

function OnBording3() {
  const Props = {
    Heading1: "GRAB THE ",
    Heading2: "BEST",
    Heading3: "DEALS AROUND",
    Para: "Grab the best deals and discounts around and save on your every order",
    link: "/GetStarted",
    Button: "GET STARTED",
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

export default OnBording3;
