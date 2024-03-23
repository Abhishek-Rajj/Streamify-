// use effect helsps us to retain values even after rendering//
// it stores the current value as current.value//
// for using ref we first kneed to do to emailref= useRef();
//
import React from "react";
import "./register.scss";
import { useState, useRef } from "react";
import netflix_logo from "../../../images/Netflix_Logo_PMS.png";
const Register = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const[password,setPassword]=useState("");
  const passwordRef= useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish=()=>{
     setPassword(passwordRef.current.value);
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={netflix_logo} alt="" />
          <button className="loginButton"> Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1> Unlimited movies, TV shows and more...</h1>
        <h2> Watch anywhere</h2>
        <p>Enter your credentials</p>
        {!email ?(<div className="input">
          <input type="email" placeholder="email address" ref={emailRef} />
          <button className="register-button" onClick={handleStart}>
            Get Started
          </button>
        </div>):(<form className="input">
          <input type="password" placeholder="password" ref={passwordRef} />
          <button className="register-button" onClick={handleFinish}>
            Start
          </button>
        </form>)

        }
        
      </div>
    </div>
  );
};


/*


*/

export default Register;
