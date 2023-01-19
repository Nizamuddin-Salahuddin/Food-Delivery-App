import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [pass, setPass] = useState();
  const [update, setUpdate] = useState(false);
  let Navigate = useNavigate();
  const HandleSubmit = (e) => {
    localStorage.clear();
    var usersData = [];
    usersData =
      JSON.parse(localStorage.getItem("Data")) == null
        ? []
        : JSON.parse(localStorage.getItem("Data"));
    if (usersData.length === 0) {
      var Status = false;
    } else {
      console.log(usersData);
      const nul = usersData.filter((value) => {
        if (value.Name === name || value.Email === email) {
          Status = true;
          setUpdate(false);
        } else {
          Status = false;
          setUpdate(true);
        }
        return null;
      });
    }
    if (!Status) {
      if (
        name.length === 0 ||
        email.length === 0 ||
        mobile.length === 0 ||
        pass.length === 0
      ) {
        alert("all field is mondetory");
        setUpdate(false);
      } else {
        var newUser = {
          Name: name,
          Email: email,
          Mobile: mobile,
          Pass: pass,
        };

        usersData.push(newUser);
        localStorage.setItem("Data", JSON.stringify(usersData));
        setUpdate(true);
      }
    } else {
      alert("Name or Email Is repeated");
      setUpdate(false);
    }
  };

  return (
    <div className="Register">
      <div className="Register_Inner">
        <h1 style={{ color: "white" }}>REGESTER</h1>
        <div className="Register_Inner_Name">
          <h5>FULL NAME</h5>
          <input
            type="text"
            placeholder="Type Your Name"
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value === "") {
                alert("This Field is Mondatory");
              }
            }}
          />
        </div>
        <div className="Register_Inner_Email">
          <h5>EMAIL</h5>
          <input
            type="text"
            placeholder="Type Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="Register_Inner_Mobile">
          <h5>MOBILE NUMBER</h5>
          <input
            type="number"
            placeholder="Type Your MOBILE NUMBER"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div className="Register_Inner_Password">
          <h5>PASSWORD</h5>
          <input
            type="password"
            placeholder="Type Unique Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="Register_Inner_Footer">
          {update ? (
            <Link to={"/LogIn"}>
              <button type="button" onClick={HandleSubmit}>
                REGESTER
              </button>
            </Link>
          ) : (
            <button type="button" onClick={HandleSubmit}>
              REGESTER
            </button>
          )}
          <h4>
            Already have an account?
            <span>
              <Link to="/LogIn">Login</Link>
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Register;
