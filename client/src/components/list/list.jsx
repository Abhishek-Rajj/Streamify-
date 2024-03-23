/* calculating the distance from the boundary is 280 px means 280-230 px=50 px, anmoantion for transition, ref is used to store variables withot doing rendering */
import React,{useRef} from 'react'
import {useState} from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ListItem from"../listItem/listItem"
import "./list.scss"
const List = (props) => {
     console.log(props.list);
     console.log("k");
     console.log(props);
     //const {list}=props;
     const list= props.list;
     
     const[isMoved,setIsMoved]=useState(false);
     const[slideNumber,setSlideNumber]=useState(0);
     const listRef= useRef();
     const handleClick= (direction) =>{
          // setIsMoved(true);
          // let distance= listRef.current.getBoundingClientRect().x-50
          // if (direction==="left" && slideNumber>0){
          // listRef.current.style.transform= `translateX(${230+distance}px)`
          // setSlideNumber(slideNumber-1)
               setIsMoved(true)     
               let distance= listRef.current.getBoundingClientRect().x
               if  (direction==="left"&& slideNumber>0){
                    listRef.current.style.transform= `translateX(${230+distance}px)`
                    setSlideNumber(slideNumber-1)

               }
               if  (direction==="right" && slideNumber<5){
                    listRef.current.style.transform= `translateX(${-230+distance}px)`
                    setSlideNumber(slideNumber+1)

               }
               console.log(distance)
          
          }
     
     // if (direction==="right" && slideNumber<5){
     //      listRef.current.style.transform= `translateX(${-230+distance}px)`
     //      setSlideNumber(slideNumber+1)
     // }
     // }
  return (
    <div className= "list">
     <span className="listTitle">{list.title}</span>
     <div className="wrapper">
     <ArrowBackIosNewIcon className= "sliderarrows left" 
     onClick={()=>handleClick("left")}
    style={{display:!isMoved &&"none"}}
    />
     <div className="container" ref= {listRef}>
          {list.content.map((item, i) =>(
             <ListItem index={i} item={item}/>  
          ))}
         
          </div>
     
     < ArrowForwardIcon className= "sliderarrows right" onClick={()=>handleClick("right")}/>
     
     </div>
    </div>
  )
}

export default List