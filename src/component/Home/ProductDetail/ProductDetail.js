import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import clock from "../../Assets/Extra/Clock.png";
import Navbar from "../../Navbar/Navbar";
function ProductDetail(prop) {
  const { state } = useLocation();
  const { value } = state;

  return (
    <div className="ProductDetail">
      <div className="ProductDetail_Img">
        <img src={value.strMealThumb} alt="Dish" />
      </div>
      <div className="ProductDetail_Data">
        <div className="ProductDetail_Data_Nutitus">
          <h5>The Nautitus</h5>
          <h5> 34 Mins....</h5>
        </div>
        <div className="ProductDetail_Data_details">
          {value.strInstructions.length < 1000
            ? value.strInstructions.length < 500
              ? value.strInstructions.slice(100)
              : value.strInstructions.slice(500)
            : value.strInstructions.slice(1000)}
        </div>
        <div className="ProductDetail_Data_Add">
          <div className="ProductDetail_Data_input">
            <label htmlFor="input">QUANTITY</label>
            <input id="input" />
            <div className="ProductDetail_Data_input_inside">
              <span style={{ marginRight: "5px", marginBottom: "10px" }}>
                +
              </span>
              <span>-</span>
            </div>
          </div>
          <div className="ProductDetail_Data_price">
            {`$ ${value.idMeal.slice(-2)}.00`}
          </div>
        </div>
        <div className="ProductDetail_Add_Basket">
          <button type="button"> ADD TO BASKET</button>
        </div>
        <div className="Navbar">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
