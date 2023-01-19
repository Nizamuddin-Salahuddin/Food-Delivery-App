import React, { useContext } from "react";
import { dataContext } from "../../App";
import CardImg from "../Assets/Card/Boxed Icons.png";
import Burger from "../Assets/Restaurant/Restaurant=Burger King.png";
import Dominos from "../Assets/Restaurant/Restaurant=Domino's Pizza.png";
import Location from "../Assets/Extra/Location.png";
import "./Home.css";
import hand from "../Assets/Extra/White-in-Jumper3 1.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  const navigate = useNavigate();
  const LogedUser = JSON.parse(sessionStorage.getItem("LogedUser"));
  const Data = useContext(dataContext);
  const HandleImgClick = (value) => {
    navigate("/ProductDetail", { state: { value: value } });
  };

  return (
    <div className="Home">
      <div className="Home_inner">
        <div className="Home_inner_head">
          <h3>
            Hello,<span>{LogedUser[0].Name}</span>!
          </h3>
          <h3 style={{ color: "#F99928" }}>
            HOME{" "}
            <span>
              <img src={Location} />
            </span>
          </h3>
        </div>
        <div className="Home_inner_offer">
          <h3>
            GET <span>50%</span> AS A JOINING BONUS
          </h3>
          <img src={hand} alt="hand" />
          <p>USE CODE ON CHECKOUT</p>
          <h2>NEW50</h2>
        </div>
        <div className="Home_inner_Recommended">
          <h5>RECOMMENDED FOR YOU</h5>
          <div className="Home_inner_Recommended_item ">
            {Data == null
              ? []
              : Data.slice(0, 4).map((value, index) => {
                  return (
                    <div
                      key={value.idMeal}
                      className="Home_inner_Recommended_item_1"
                    >
                      <img src={value.strMealThumb} alt="Dish" />

                      <h5>{`${value.strArea} ${value.strCategory} `}</h5>
                      <div className="Home_inner_Recommended_item_1_Price">
                        <h5>{`${value.idMeal.slice(-2)} $`}</h5>
                        <img
                          src={CardImg}
                          alt="Dish"
                          onClick={() => HandleImgClick(value)}
                        />
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <p style={{ color: "white", margin: "10px 0px" }}>Restaurant</p>
        <div className="Home_inner_Restaurants">
          <div className="Home_inner_Restaurants_1">
            <img src={Burger} alt="Restaurants" />
          </div>
          <div className="Home_inner_Restaurants_2">
            <img src={Dominos} alt="Restaurants" />
          </div>
          <div className="Home_inner_Restaurants_3">
            <img src={Burger} alt="Restaurants" />
          </div>
          <div className="Home_inner_Restaurants_4">
            <img src={Dominos} alt="Restaurants" />
          </div>
          <div className="Home_inner_Restaurants_5">
            <img src={Burger} alt="Restaurants" />
          </div>
        </div>
        <div className="Home_inner_Bottom">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
