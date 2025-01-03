import Block from "../rescueBlocks/RescueBlocks"
import "./Rescue_page2.css"
import Submition from "../rescueSubmition/RescueSubmition"
const Hanis_page2 = (props)=>{

  const  title1= props.title ? props.title: "Lost pet information";
  const title2 = props.title2 ? props.title2 : "Place Lost:";
  const  placeholder1= props.placeholder? props.placeholder : "Enter The Place Lost";
return(
    <>
    <div className="overlay" >
      <h3 className="header2"> {title1}</h3>
    <div >
      <div id="contanier1" className="relative" >
       <img src="/images/Picsart_24-12-11_00-26-28-373.jpg"  alt="pic of the logo" style={{width: "3rem", borderRadius : "2rem", opacity: 2 }}/>
             <Block
                title="Animal type:"
                placeholder="Enter The Animal Type"
            />
             <Block
                title="Animal Name:"
                placeholder="Enter The Animal Name"
            />
             <Block
                title={title2}
                placeholder={placeholder1}
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