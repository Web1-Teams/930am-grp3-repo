//imports
import { Link } from 'react-router-dom';
import '../ElemHome/ElemHome.css'
//function
const ElemHome=(props)=>{
    return(
        <div className="elementor-section225" >
        <div className="elementor-container225">
            <div className="elementor-column225">
                <h5><strong>{props.title}</strong></h5>
                <p>{props.des2}</p>
                <br/>
                <br/>
                <Link className="elementor-icon-go25" to={props.Link}>
                        <span className="button-cc25">GO</span>
                </Link>
            </div>
        </div>
    </div>
    )
}
//export
export default ElemHome;