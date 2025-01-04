//imports
import './ElemAll.css'
import ElemHome from "../ElemHome/ElemHome";
//function
const ElemAll =()=>{
    return(
        <div className="ElemAll25">
            <ElemHome title="Volunteer" des2="If you have a passion for animals and are looking to make a difference, Animal Care Centers of Nablus (RAFEQ) needs your help." Link="/Ypage1"/>
            <ElemHome title="Contact Us" des2="An interactive interface that allows users to easily submit their inquiries or issues. The form includes the type of issue, and its detailed description." Link="/Contact"/>
            <ElemHome title="Join Us" des2="Why join us? Be part of a vibrant, compassionate community that cares for and promotes animal welfare." Link="/login"/>
        </div>
    )
}
//export
export default ElemAll;