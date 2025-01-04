//imports
import '../ElemHome/ElemHome.css'
//function
const ElemHome=(props)=>{
    return(
        <div className="elementor-section2" >
        <div className="elementor-container2">
            <div className="elementor-column2">
                <h5><strong>{props.title}</strong></h5>
                <p>{props.des2}</p>
                <a className="elementor-icon-go" href=".">
                        <span className="button-cc">GO</span>
                </a>
            </div>
        </div>
    </div>
    )
}
//export
export default ElemHome;