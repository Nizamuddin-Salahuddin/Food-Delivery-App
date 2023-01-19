import React, { useEffect, useState } from "react";
import "./App.css";
import SplashScreen from "./component/SplashScreen/SplashScreen";
import { Routes, Route } from "react-router-dom";
import OnBording1 from "./component/OnBording/OnBording1";
import OnBording2 from "./component/OnBording/OnBording2";
import OnBording3 from "./component/OnBording/OnBording3";
import GetStarted from "./component/GetStarted/GetStarted";
import Register from "./component/Register/Register";
import LogIn from "./component/LogIn/LogIn";
import Home from "./component/Home/Home";
import axios from "axios";
import ProductDetail from "./component/Home/ProductDetail/ProductDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dataContext = React.createContext();
function App() {
  const [term, setTerm] = useState("chicken");
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => {
        const Data = res.data.meals;
        setStoreData(Data);
      });
  }, []);

  return (
    <dataContext.Provider value={storeData}>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="OnBording1" element={<OnBording1 />} />
        <Route path="OnBording2" element={<OnBording2 />} />
        <Route path="OnBording3" element={<OnBording3 />} />
        <Route path="GetStarted" element={<GetStarted />} />
        <Route path="Regester" element={<Register />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="Home" element={<Home />} />
        <Route path="ProductDetail" element={<ProductDetail />} />
      </Routes>
    </dataContext.Provider>
  );
}

export default App;
