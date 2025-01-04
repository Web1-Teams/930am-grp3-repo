//imports
import A from '../A/A';
import '../Card/s.css'
//function
const Card=(props)=>{
    return(
        <div className="card">
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <A name="osaid"/>
        </div>
</div>
    )
}
//export
export default Card;