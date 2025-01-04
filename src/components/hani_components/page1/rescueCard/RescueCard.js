import React from 'react';
import "./RescueCard.css"

const Card = (props)=>{
    const verifyButton = props.button ? true : false;
return(
    <>
    <div className="col-md-377">
        <div className="rounded-circle-mx-auto-mb-377" style={{ width: '80px', height: '80px', backgroundColor: "rgb(195, 172, 208)", opacity: 0.9 }}>
          <div className="d-flex-justify-content-center-align-items-center-h-10077">
             <i className={props.photo} style={{color: " white"}} ></i>
          </div>
        </div>
        <dt ><h4 style={{ fontfamily:" Arial, Helvetica, sans-serif"}}>{props.title}</h4></dt>
        <dd style={{marginLeft : "0.5rem", marginRight : "0.5rem"}} >
          {props.description}
        </dd>
        <a href={props.linkCard}>{verifyButton && ( <button id='report77'>{props.button}</button> )}</a>
      </div>
    </>
);
}




export default Card ; 