//imports
import '../ElemHome/ElemHome.css'
//function
const ElemHome=(props)=>{
    return(
        <section className="elementor-section2" >
        <div className="elementor-container2">
            <div className="elementor-column2">
                <h5><strong>{props.title}</strong></h5>
                <p>{props.des}</p>
                <a className="elementor-icon-go" href="..//page 6/volunter.html">
                        <span className="button-cc">GO</span>
                </a>
            </div>
        </div>
        <ElemHome/>

    </section>
    )
}
//export
export default ElemHome;