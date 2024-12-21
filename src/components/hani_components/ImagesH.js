import React from "react";
import image from "../../assests/images/coats-header-cropped.jpg"
import "./HaniStyle.css"
const ImagesH =()=>{
    return(
        <>
        <div className="postion-relative">
      <div className="position-absolute" style={{ width: "85%",  left: "50%", top: "50%", transform: "translate(-50%, -50%)" , marginTop: "3rem",border: "5rem", borderColor: "white" }}>
        <img
          src={image}
          alt="Picture of pets"
          style={{ width: "100%" , borderRadius:"3rem"  }}
        />
         <div className="top-left"><p>
                 <span className="h1">  lost & found<br /> </span> 
                 Find or Report a Lost Pet
               </p></div>
      </div>
    </div>
        </>
    );
}
export default ImagesH;