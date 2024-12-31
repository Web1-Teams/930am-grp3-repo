import React from 'react';
import "./HaniStyle.css";

const Card = (props)=>{
   
return(
    <>
    <div className="col-md-3">
        <div className="rounded-circle-mx-auto-mb-3" style={{ width: '80px', height: '80px', backgroundColor: "rgb(195, 172, 208)", opacity: 0.9 }}>
          <div className="d-flex-justify-content-center-align-items-center-h-100">
             <i className={props.photo} style={{color: " white"}} ></i>
          </div>
        </div>
        <dt ><h4 style={{ fontfamily:" Arial, Helvetica, sans-serif"}}>{props.title}</h4></dt>
        <dd style={{marginLeft : "0.5rem", marginRight : "0.5rem"}} >
          {props.description}
        </dd>
      </div>
    </>
);
}




export default Card ; 