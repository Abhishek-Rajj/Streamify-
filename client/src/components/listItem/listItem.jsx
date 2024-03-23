//in lists we are sending two thimgs index and irtem as props // 
// axios will fetch the data from api movies that will be added woith item , item will contain id and we also need to give the header authentixa\cation
// in use efect whenever uyou cahnge the or dependency it will re render//
//item is the movie id whixch we give in get request 
// obeject we are passing when we hover it willbe a link and it will let u to watch page
import React, { useState,useEffect} from "react";
import "./listItem.scss";
import himym from "../../images/himym.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import axios from "axios";
import {Link} from "react-router-dom";
const ListItem = ({index,item}) => {
  const [isHovered, setIsHover] = useState(false);
  const [movie,setMovie]= useState({});
  /* trailer*/

  useEffect(()=>{
    const getMovie= async ()=>{
      try{
        const res =await axios.get("movies/find/"+item,{
          headers:{
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjY4NmNkMDM1YjIxODA0YTAyZjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1NTcwOSwiZXhwIjoxNzE2NzAzNzA5fQ.AXbcSPjZOVtgJltWlySDuQbTipLrWOFH0v1AAquyrZY"
          },
        });
        setMovie(res.data);

      }
      catch(err){
        console.log(err);
      }
    }
    getMovie()

  },[item]);
  
  return (
    // <Link to={{pathname:"/watch",state:movie:movie}}}}>
    


<Link to={{pathname:"/watch",movie:movie}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * (225 - 50) + index * 2.5 }}
       onMouseEnter={() => setIsHover(true)}
       onMouseLeave={() => setIsHover(false)}
    >
      <img src={movie?.img} alt=" " />
      {isHovered &&
      <>
      <video src={movie?.trailer} autoplay={true} loop/>
      
      <div className="iteminfo">
        <div className="icons"></div>
        <PlayArrowIcon className="icon" />
        <AddBoxIcon className="icon" />
        <ThumbUpOutlinedIcon className="icon" />
        <ThumbDownOutlinedIcon className="icon"/>       
      </div>
      <div className="itemInfoTop">
        <span> {movie?.duration}</span>
        <span className="limit">+{movie?.limit}</span>
        <span>{movie?.year}</span>
      </div>
      <div className="desc">
      {movie?.desc}
      </div>
      <div className="genre">{movie?.genre}</div>
      </>
}
    </div>
    </Link>
 
      
  );
};

export default ListItem;
