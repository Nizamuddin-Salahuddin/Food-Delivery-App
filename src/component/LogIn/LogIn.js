import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";

function LogIn() {
  const [emailLog, setEmailLog] = useState([]);
  const [passLog, setPassLog] = useState([]);

  let Navigate = useNavigate();
  const HandleLogIn = () => {
    var usersData = [];
    usersData =
      JSON.parse(localStorage.getItem("Data")) == null
        ? []
        : JSON.parse(localStorage.getItem("Data"));
    if (emailLog.length == 0 || passLog.length == 0) {
      alert("Field is monditory");
    } else {
      var Status = usersData.some((find) => {
        if (find.Email == emailLog && find.Pass == passLog) {
          var LogedUser = [
            {
              Name: find.Name,
              Email: find.Email,
              Pass: find.Pass,
              Mobile: find.Mobile,
            },
          ];
          sessionStorage.setItem("LogedUser", JSON.stringify(LogedUser));
          return true;
        }
      });
      Status ? Navigate("/Home") : alert("Wrong User Id or Password");
    }
  };
  return (
    <div className="LogIn">
      <div className="LogIn_Inner">
        <h1 className="Header">Log In</h1>
        <div className="LogIn_Inner_Email">
          <h5>Email</h5>
          <input
            type="text"
            placeholder="Type Your Email"
            onChange={(e) => {
              setEmailLog(e.target.value);
            }}
          />
        </div>
        <div className="LogIn_Inner_Password">
          <h5>Password</h5>
          <input
            type="text"
            placeholder="Type Your Password"
            onChange={(e) => {
              setPassLog(e.target.value);
            }}
          />
          <h4 style={{ margin: "auto", marginTop: "10px" }}>
            Forgot Password?
          </h4>
        </div>
        <div className="Register_Inner_Footer">
          <button type="button" onClick={HandleLogIn}>
            LogIn
          </button>

          <h4>
            Don't have an account? <span>Register.</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
