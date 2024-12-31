import React from "react";
import "../page1/HaniStyle.css"
const Block=(props)=>{
    const typeTitle= (props.type) ? props.type : "text";
    const classes= (props.className) ? props.className : "non";  
    return(
        <>
    <div id="input" className="absulute">
        <lable for="type"> {props.title} <br/> </lable>
        <input id="type" type={typeTitle} className={classes}  placeholder={props.placeholder} />
        <br/>
    </div>
    </>
    );
}

export default Block;