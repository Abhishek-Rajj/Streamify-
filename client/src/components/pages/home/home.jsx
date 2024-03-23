

import Navbar from"../../navbar/navbar"
import Featured from"../../featured/featured"
import List from"../../list/list"
import axios from "axios"
import {useState,useEffect} from "react";
import React from "react";

import "./home.scss"
//import "navbar.scss" from "../components/navbar/navbar.scss"
//import busan from "../images/busan.jpg"
// since we have stored the movies and series in the database now we want to take the data from there s
// so we will use api to take data and put here . for that we use axios to fetch data, 
// now the api ir running at the port 8800, now for geeting data we need to be authenticated also,

const Home = ({type}) => {
  const[lists,setLists]= useState([]);
  const[genre,setGenre]=useState(null);
  useEffect(()=>{
    const getRandomLists= async()=>{
      console.log("m");
      try{
        console.log("kd");
          const res= await axios.get(`lists${type ? "?type="+type:""}${genre ?"&genre="+ genre:""}`,
          {
            headers:{
              token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjY4NmNkMDM1YjIxODA0YTAyZjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1NTcwOSwiZXhwIjoxNzE2NzAzNzA5fQ.AXbcSPjZOVtgJltWlySDuQbTipLrWOFH0v1AAquyrZY"
            }
          }
          );
        // console.log(res)
            setLists(res.data);
      }catch(err){
        console.log("k"); 
        console.log(err);

      }

    };
    getRandomLists();
  },[type,genre])
  return (

    <div className="home">
      <Navbar/>
      <Featured type={type} />
      {lists.map((list)=>(
        <List list={list}/>
      ))}
      
    
  </div>
  )
}

export default Home;  

