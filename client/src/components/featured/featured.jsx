
// here we have the fearure movie on the front of the home page but we can change it also so 
//we ill use pi from movies and use get random function to show diferent featured movie
//
import React from 'react';
import "./featured.scss";
import {useState,useEffect} from "react";
import busan from "../../images/busan.jpg"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import download from '../../images/download.png';
import axios from "axios";

const Featured = ({type}) => {
  const[content,setContent]= useState({});
  console.log(type,"jdjdjd");
  
useEffect(()=>{
  const getRandomContent = async ()=>{
          try{
              const res= await axios.get(`/movies/random?type=${type}`,{
              
                
                headers:{
                  token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjY4NmNkMDM1YjIxODA0YTAyZjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1NTcwOSwiZXhwIjoxNzE2NzAzNzA5fQ.AXbcSPjZOVtgJltWlySDuQbTipLrWOFH0v1AAquyrZY"
                },
              });
              setContent(res.data[0]);

          }
          catch(err){
            console.log(err);
          }
  };
getRandomContent();
},[type]);
console.log("kkk");
console.log(content);
  return (
    <div
     className="featured">
      {
        type &&(
          <div className="category">
          <span>{type==="movies" ? "Movies":"Series"}</span>
          <select name="genre" id="genre ">
           <option> Genre </option>
            <option value="adventure"> Adventure</option>
            <option value="comedy"> Comedy</option>
            <option value="crime"> Crime</option>
            <option value="fantasy"> Fantasy</option>
            <option value="historical"> Historical</option>
            <option value="horror"> Horror</option>
            <option value="romance"> Romance</option>
            <option value="sci-fi"> Sci-fi</option>
            <option value="thriller"> Thriller</option>
            <option value="western"> western</option>
            <option value="anime"> Animation</option>
            <option value="drama"> Drama</option>
          </select>
          </div>
        )
      }
          <img
          src={content?.img}
          alt=""
          />
          <div className="info">
            { <img src={content.imgTitle}
            alt=""/> }
         <span className="desc">
       {content.desc}
          
         </span>
         <div className="buttons">
          <button className="play"><PlayArrowIcon/>
          <span>Play</span></button>
          <button className="more">
            <InfoOutlinedIcon/>
            <span>More</span>
            
            </button>
         </div>
          </div>
         </div>
  )
}

export default Featured