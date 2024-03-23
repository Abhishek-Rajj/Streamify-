import React from 'react'
import "./navbar.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixImg from '../../images/netflix.png'
import {useState} from"react";
import {Link} from "react-router-dom";



const Navbar = () => {
  const [isScrolled,setIsScrolled]= useState(false);
  window.onScroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false:true);
    return()=>(window.onscroll=null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
     <div className="container">                                                          
     <div className="left">
          <img src={NetflixImg}
          alt =""
          />
           <Link to="/" classsName="link">
          <span>Homepage</span>
          </Link>
          <Link to="/series" classsName="link">
          <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
          <span>Movies</span>
          </Link>
          
          <span>New and Popular</span>
          <span>My list</span>
     </div>
     
     <div className="right">
           <SearchIcon className="icon"/>
          <span>KID</span>
          <NotificationsIcon className="icon"/> 
          <img
          src= "https://www.google.com/search?q=oppenheimer+image&tbm=isch&ved=2ahUKEwiL_LPuvMODAxUwmWMGHcxRB2UQ2-cCegQIABAA&oq=oppenheimer+image&gs_lcp=CgNpbWcQAzIGCAAQBRAeMgYIABAFEB4yBwgAEIAEEBgyBwgAEIAEEBgyBwgAEIAEEBgyBwgAEIAEEBgyBwgAEIAEEBgyBwgAEIAEEBgyBwgAEIAEEBg6BAgjECc6BQgAEIAEOgYIABAIEB46BwgjEOoCECc6DggAEIAEEIoFELEDEIMBOggIABCABBCxAzoQCAAQgAQQigUQQxCxAxCDAToKCAAQgAQQigUQQzoNCAAQgAQQigUQQxCxAzoECAAQA1DzAli4R2DsSWgBcAB4BIAB_gGIAaEgkgEGMC4xNC45mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=x4GWZcv8OLCyjuMPzKOdqAY&bih=551&biw=1280#imgrc=Yp6Cv4BBYREAcM"
          alt=""
          />
          <div className= "profile">
          <ArrowDropDownIcon className="icon"/>
          <div className="options">                                         
            <span> Settings</span>
            <span> Logout</span>
            </div>
          </div>
        
        
          
     </div>
     </div>
     </div>
     
  )
}

export default Navbar;