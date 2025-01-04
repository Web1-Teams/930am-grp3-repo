//import
import './headimg.css';

//functtion
const Headimg = (props) =>{
    return (
        
    <div className="header-section">
        <header className="pic-text">
            <div className="head-img">
                <img src={props.logo} alt="Dog" className="header-image" />
                
            </div>
            <div className="header-text">
                <h3>{props.title}</h3>
                <h1>{props.dec}</h1>
            </div>
        </header>
    </div>
    )
}

//export
export default Headimg