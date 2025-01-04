//import
import A from "../A/A"
//import logo from "../images/pack.jpg"
import './JoinHome.css'
//function
const JoinHome=(props)=>{
    return(
        <section className="sec-comp25">
        <div className="content-comp25">
            <div className="image-section25">
                <img src={props.image} alt="Queens Care Center Collage"/>
            </div>
            <div className="text-section25">
                <h4>{props.title}</h4>
                <h1>{props.des}</h1>
                <p>{props.dess}</p>
                <A title={props.btnTitle} Link={props.Link}/>
            </div>
        </div>
    </section>
    )
}
//export
export default JoinHome;