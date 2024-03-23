import React from "react";
import "./login.scss";
import { useState, useRef } from "react";
import netflix_logo from "../../../images/Netflix_Logo_PMS.png";
const Login = () => {

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={netflix_logo} alt="" />
        
        </div>
      </div>
      <div className="container">
      <form>
        <h1>Sign In</h1>
        <input type ="email" placeholder="email or phone number"/>
        <input type ="password" placeholder="password"/>
        <button className= "loginButton"> Sign In</button>
        <span> New to Netflix? <b>Sign up now</b></span>
        
        </form>        
      </div>
    </div>
  );
};

export default Login;
