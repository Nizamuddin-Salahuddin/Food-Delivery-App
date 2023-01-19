import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faShoppingBasket,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} color="white" />
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} color="white" />
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingBasket} color="white" />
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} color="white" />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} color="white" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
