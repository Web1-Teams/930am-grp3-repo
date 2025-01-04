//imports
import './ElemAll.css'
import ElemHome from "../ElemHome/ElemHome";
//function
const ElemAll =()=>{
    return(
        <div className="ElemAll25">
            <ElemHome title="Volunteer" des2="If you have a passion for animals and are looking to make a difference, Animal Care Centers of Nablus (RAFEQ) needs your help." Link="/Ypage1"/>
            <ElemHome title="Lost and Found" des2="RAFEQ is committed to reuniting lost and found pets with their families.We take in of animals every day at all locations." Link="/Rescue_page2"/>
            <ElemHome title="Question" des2="If you want to ask a question or inquire about something you want or want to advise us about anything in your diary, click on Go" Link="/"/>
        </div>
    )
}
//export
export default ElemAll;