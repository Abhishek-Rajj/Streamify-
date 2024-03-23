//import video from './Videos.video1.mp4'
// video in react is used to play videos
//Link which we are taking from react -router dom , can take from on epage to other here we 
// wrapped the home section from link to so that after clicking that we can go to to home page
// location is uded to know location
import React,{useState,useEffect} from 'react'
import "./watch.scss"

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useLocation} from "react-router-dom";

import{Link} from "react-router-dom"

const Watch = () => {
  const location =useLocation();
  console.log(location);
  const movie= location.movie;
  // useEffect(()=>{    
  //   console.log("location",location);  
  // },[]);

  return (
    <div className= "watch">  
    <Link to ="/">
     <div className ="back">
     <ArrowBackOutlinedIcon/>
     Home
      </div>
      </Link>
      <video 
      className="video"
          autoPlay
          progess
          controls
          src={movie.video}
          />

    </div>
  );
}

export default Watch