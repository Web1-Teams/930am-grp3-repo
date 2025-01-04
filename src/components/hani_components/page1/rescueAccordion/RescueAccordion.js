import { useState } from "react";
// import "./HaniStyle.css";
import "./RescueAccordion.css"

const Accordion = (props)=>{
    const [open , setopen] = useState(false)
    const checkiftheAccordionOpen=()=>{
        console.log("hi");
        setopen((prev) => !prev);
    }
    return(
    <>
        <button className="accordion77" onClick = {checkiftheAccordionOpen}>{props.buttonContant}</button>
        <div className="panel77"  style={{ display: open ? "block" : "none" }}>
         <p>{props.pContant}</p>
        </div>

    </>
    );
}
export default Accordion ; 