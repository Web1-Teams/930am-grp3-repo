//import
import './cards.css';
//function 
const Ycard = (props)=>{
    return(
        <div className="card">
        <h3 className = "card-title">{props.title}</h3>
        <p className ="card-text">{props.dec}</p>
      </div>
    )
}

//export
export default Ycard