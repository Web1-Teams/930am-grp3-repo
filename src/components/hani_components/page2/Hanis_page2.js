import Block from "./Blocks"
import "../page1/HaniStyle.css"
import image from "../../../assests/images/Picsart_24-12-11_00-26-28-373.jpg"
import Submition from "./Submition"
const Hanis_page2 = ()=>{
return(
    <>
    <div className="overlay" >
      <h3 className="header2"> Lost pet information</h3>
    <div >
      <div id="contanier1" className="relative" >
       <img src={image} alt="pic of the logo" style={{width: "3rem", borderRadius : "2rem", opacity: 2 }}/>
             <Block
                title="Animal type:"
                placeholder="Enter The Animal Type"
            />
             <Block
                title="Animal Name:"
                placeholder="Enter The Animal Name"
            />
             <Block
                title="Place Lost:"
                placeholder="Enter The Place Lost"
            />
             <Block
                title="Animal picture:"
                placeholder="Enter The Animal Picture"
                type="file"  
                className="upload-button"
            />
            <Submition/>
      </div>
    </div>
    </div>
    </>
);
}
export default Hanis_page2