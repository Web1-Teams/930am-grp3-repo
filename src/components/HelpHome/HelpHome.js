
//imports
import HelpHomeComp from '../HelpHomeComp/HelpHomeComp';
import '../HelpHome/HelpHome.css'

/*
//import logo2 from "../HowCanHelp/dooooooog.webp"
import logo3 from "../HowCanHelp/hands.png"
import logo4 from "../HowCanHelp/foster1.webp"
import logo5 from "../HowCanHelp/donate1.png"
import logo6 from "../HowCanHelp/tekit.png"
*/
//function
const HelpHome=(props)=>{
    return(
        <section className="sec-how-can-help">
        <div className="contaner222">
            <header>
                <h4>How You Can Help</h4>
                <h1>There are many ways to get involved</h1>
                </header>
                <img className="er" src="../images/dooooooog.webp"/>
                <HelpHomeComp title="Volunteer" des3="Currently seeking highly experienced large dog handlers at all Care Center locations"/>
                <HelpHomeComp title="Foster" des3="Take your first steps with the RAFEQ Foster Team by signing up for one of our Virtual Foster Orientations"/>
                <HelpHomeComp title="Donate" des3="Support homeless animals, achieve your charitable goals"/>
                <HelpHomeComp title="Events" des3="Find an upcoming Fundraising Event near you"/>
        </div>
    </section>
    )
}
export default HelpHome;
