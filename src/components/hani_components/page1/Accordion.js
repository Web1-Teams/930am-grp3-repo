import { useState } from "react";
import "./HaniStyle.css";

const Accordion = (props)=>{
    const [open , setopen] = useState(false)
    const checkiftheAccordionOpen=()=>{
        console.log("hi");
        setopen((prev) => !prev);
    }
    return(
    <>
        <button className="accordion" onClick = {checkiftheAccordionOpen}>{props.buttonContant}</button>
        <div className="panel"  style={{ display: open ? "block" : "none" }}>
         <p>{props.pContant}</p>
        </div>

    </>
    );
}
export default Accordion ; 