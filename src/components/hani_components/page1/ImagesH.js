import React from "react";
import image from "../../../assests/images/coats-header-cropped.jpg"
import "./HaniStyle.css";
const ImagesH =()=>{
    return(
        <>
        <div className="postion-relative" >
      <div className="imagePostion">
        <img
          src={image}
          alt="Picture of pets"
          style={{ width: "100%" , borderRadius:"3rem"  }}
        />
         <div className="top-left"><p>
                 <span >  <h1 style={{margin: "0"}}> lost & found </h1> </span> 
                 <h2 style={{margin: "0" , color: "white"}} >Find or Report a Lost Pet</h2>
               </p></div>
      </div>
    </div>
        </>
    );
}
export default ImagesH;