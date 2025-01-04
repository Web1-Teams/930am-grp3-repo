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
            <li className="nav-item">
                <button className="nav-link" id ="section" onClick={scrollToSection}>{props.description}</button>
            </li>
      </>
);
}
export default RescueStickyLink ; 