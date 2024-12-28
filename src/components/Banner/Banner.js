//imports
import logo from "../Banner/cat_2.webp"
import logo2 from "../Banner/dog.webp"
import '../Banner/Banner.css'

//function
const Banner =()=>{
    return(
        <section className="home-banner">
        <div className="banner-content">
        <div className="banner-text">
            <h1>Find your</h1>
            <h2>Palestine'sLargest Animal Shelter</h2>
        </div>
        <div className="banner-images">
            <div className="image-item active">
            <img src={logo} alt="Cat" />
            </div>
            <div className="image-item">
            <img src={logo2} alt="Dog" />
            </div>
            </div>
            <div className="banner-stats">
            <h2>Furry Friend</h2>
        </div>
        </div>
        </section>
    )

}
//export
export default Banner