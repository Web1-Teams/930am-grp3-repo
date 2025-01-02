//imports
import '../ElemAll/ElemAll.css'
import ElemHome from "../ElemHome/ElemHome";
//function
const ElemAll =()=>{
    return(
        <div className="ElemAll">
            <ElemHome title="Volunteer" des2="If you have a passion for animals and are looking to make a difference, Animal Care Centers of Nablus (RAFEQ) needs your help."/>
            <ElemHome title="Lost and Found" des2="RAFEQ is committed to reuniting lost and found pets with their families.We take in of animals every day at all locations."/>
            <ElemHome title="Get Involved" des2="Adopting pets gives animals a second chance for a loving home while helping reduce shelter overcrowding."/>
        </div>
    )
}
//export
export default ElemAll;