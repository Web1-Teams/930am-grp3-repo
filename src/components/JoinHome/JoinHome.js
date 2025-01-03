//import
import A from "../A/A"
//import logo from "../images/pack.jpg"
import '../JoinHome/JoinHome.css'
//function
const JoinHelp=(props)=>{
    return(
        <section className="sec-comp">
        <div className="content-comp">
            <div className="image-section">
                <img src={props.image} alt="Queens Care Center Collage"/>
            </div>
            <div className="text-section">
                <h4>{props.title}</h4>
                <h1>{props.des}</h1>
                <p>{props.dess}</p>
                <A title={props.btnTitle}/>
            </div>
        </div>
    </section>
    )
}
//export
export default JoinHelp;