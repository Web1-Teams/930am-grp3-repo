//import
import './cards.css';
//function 
const Ycard = (props)=>{
    return(
        <div className="card99">
        <h3 className = "card-title99">{props.title}</h3>
        <p className ="card-text99">{props.dec}</p>
      </div>
    )
}

//export
export default Ycard