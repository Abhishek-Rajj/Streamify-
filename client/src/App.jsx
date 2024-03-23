// we are going to use react router dom such that at for home page rendering we give home and for other pages router wiil be used
// we have make an variable user which helps to rendr pages , since we dont have parent compone t we cn use react fragments for removin warning
//react -router dom contain many feature such that we can use like links etc
// Switching is used for taking various routes
// Redirect is a function which will take to a specifuic page//
// since jwt token is of 75 days you have to renew it//
// since i have not given the images and genre of each vontent thats why i put the questions mark which will pass null there//


import "./App.scss"
import React from "react";

//import Home from "./pages/home/home";
import Register from "./components/pages/register/register";
import Watch from "./components/pages/watch/watch"
import Login from "./components/pages/login/login"

import Home from "./components/pages/home/home";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"

const App = () => {
  const user= true;
    
    return (
       <Router>
       <Switch>
   
        <Route exact path="/">
        {user ? <Home type=""/>:<Redirect to ="/register"/>}
        </Route>
        <Route  path="/register">
        {!user ? <Register/>:<Redirect to ="/"/>}
        </Route>
        <Route  path="/login">
        {!user ? <Login/>:<Redirect to ="/"/>}
        </Route>
         {user &&(
          <>
        <Route path="/movies">
          <Home type="movies"/>
          </Route>
          <Route path="/series">
          <Home type="series"/>
          </Route>
          <Route
           path="/watch">
          <Watch/>
          </Route>
          </>
         )}
          </Switch>
          </Router> 
   
          );
  
  
};

export default App;


