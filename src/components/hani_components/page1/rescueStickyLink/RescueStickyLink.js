import "./RescueStickyLink.css"
const RescueStickyLink = (props)=>{

    const scrollToSection = () =>{
        const section  = document.querySelector(props.link);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    };

    return(
        <>
            <li className="nav-item77">
                <button className="nav-link77" id ="section77" onClick={scrollToSection}>{props.description}</button>
            </li>
      </>
);
}
export default RescueStickyLink ; 