//imports
import A from '../A/A';
import './FindHome.css'
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
            <p>Here in Rafeeq, we are passionate about creating a world where every pet finds the loving home they deserve.
Adoption is not just about giving an animal a place to stay; it's about building a bond of unconditional love and companionship that lasts a lifetime. Our platform is designed to make your pet adoption journey as smooth and rewarding as possible. Whether you're looking for a playful puppy, a cuddly kitten, or a calm senior companion, we're here to help you find your perfect match.</p>
            <A title={props.btnTitle} Link="/Rescue_page2"/>
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