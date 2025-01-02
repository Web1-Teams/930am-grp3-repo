//imports
import A from '../A/A';
import '../FindHome/FindHome.css'
//import logo8 from "../images/ad.jpg"
//import A from "../A/A"

//function
const FindHome=(props)=>{
    return(
        
<section class="find-comp">
    <div class="content-comp">
        <div class="text-comp">
            <h4>Adopt</h4>
            <h1>Find a friend RAFEQ Adoption</h1>
            <p>Rafeeq is dedicated to helping animals find their forever homes. Our platform allows individuals to post their pets for adoption while also showcasing animals directly under Rafeeq’s care. Each adoption involves a small fee, which helps cover care and medical expenses. Fees vary based on the type of animal and their age, ensuring a fair process for all adopters.</p>
            <A title={props.btnTitle}/>
        </div>
        <div class="image-sections">
            <img src="../images/ad.jpg" alt="Queens Care Center Collage"/>
        </div>
    </div>
</section>

    )
}
//export
export default FindHome;