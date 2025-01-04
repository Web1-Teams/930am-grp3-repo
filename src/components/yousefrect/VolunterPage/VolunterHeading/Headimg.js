//import
import './headimg.css';

//functtion
const Headimg = (props) =>{
    return (
        
    <div className="header-section99">
        <header className="pic-text99">
            <div className="head-img99">
                <img src={props.logo} alt="Dog" className="header-image99" />
                
            </div>
            <div className="header-text99">
                <h3>{props.title}</h3>
                <h1>{props.dec}</h1>
            </div>
        </header>
    </div>
    )
}

//export
export default Headimg