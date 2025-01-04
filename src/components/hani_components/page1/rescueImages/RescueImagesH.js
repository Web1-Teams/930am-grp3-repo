import React from "react";
// import image from "../../../../public/images/coats-header-cropped.jpg"
// import "./HaniStyle.css";
import "./RescueImagesH.css"
const ImagesH =()=>{
    return(
        <>
      <div className="imagePostion">
        <img
          src="/images/coats-header-cropped.jpg"
          alt="Picture of pets"
          style={{ width: "100%" , borderRadius:"3rem"  }}
        />
         <div className="top-left"><p>
                 <span >  <h1 style={{margin: "0"}}> lost & found </h1> </span> 
                 <h2 style={{margin: "0" , color: "white"}} >Find or Report a Lost Pet</h2>
               </p></div>
      </div>
        </>
    );
}
export default ImagesH;