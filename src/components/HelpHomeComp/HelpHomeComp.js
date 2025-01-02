//imports
import '../HelpHomeComp/HelpHomeComp.css'

/*import logo2 from "../HowCanHelp/dooooooog.webp"
import logo3 from "../HowCanHelp/hands.png"
import logo4 from "../HowCanHelp/foster1.webp"
import logo5 from "../HowCanHelp/donate1.png"
import logo6 from "../HowCanHelp/tekit.png"
*/
//function
const HelpHomeComp=(props)=>{
    return(
        <section className="sec-how-can-help">
        <div className="con-how-can-help">
            <div className="item-how-can-help">
                <a href="."><img className="sss" src="../images/hands.png" alt=""/></a>
                <h4><strong>{props.title}</strong></h4>
                <p>{props.des3}</p>
            </div>
        </div>
    </section>
    )
}
export default HelpHomeComp;
