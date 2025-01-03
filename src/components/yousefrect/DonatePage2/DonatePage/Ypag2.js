//import
import Headimg from "../../VolunterPage/VolunterHeading/Headimg"
import '../DonateCard/cards.css';
import Vform from "../DonateForm/Vform";
import Ycard from "../DonateCard/Ycard";
import Ycenter from "../DonateCenter/Ycenter";
import Yacco from "../DonateAccorditon2/Yacco";
import Yacco2 from "../DonateAccorditon1/Yacco2";
import './Ypage2.css';

//function 
const Ypage2 = ()=>{
    return (
        <div>
            <Headimg  logo = "/images/catpic.jpg"  title = "Donate" dec = "Way to Give"/>
            <Ycenter />
            <Yacco2 />
            <div>
                <h2 class="section-title">Donate Item</h2>
                <div className = "card-container">
                    <Ycard  title = "STAR (Special Treatment & Recovery)" dec = "Dogs and cats requiring extensive medical and/or surgical care often arrive at ACC. The STAR (Special Treatment & Recovery) Fund is used to pay for medical care that only a specialized facility can provide."/>
                    <Ycard title = "Community Pets Fund" dec = "The Community Pets Fund helps keep pets in loving homes by providing items such as free wellness services, spay/neuter surgeries, a pet food pantry, and behavior training for owners in need."/>
                </div>

            </div>
            <Yacco/>
            <Vform />
            
        </div>
    )
}

//export
export default Ypage2