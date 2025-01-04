//imports
import { Link } from 'react-router-dom';
import '../ElemHome/ElemHome.css'
//function
const ElemHome=(props)=>{
    return(
        <div className="elementor-section2" >
        <div className="elementor-container2">
            <div className="elementor-column2">
                <h5><strong>{props.title}</strong></h5>
                <p>{props.des2}</p>
                <Link className="elementor-icon-go" to={props.Link}>
                        <span className="button-cc">GO</span>
                </Link>
            </div>
        </div>
    </div>
    )
}
//export
export default ElemHome;