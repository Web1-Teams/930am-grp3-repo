//import
import '../../../styles/loc.css';
//function
const Ylocations = (props) =>{
    return(
        <div>
            <h2 className="main-heading">Locations:</h2>
            <div className="locations-container">
                <ul className="locations-list">
                    <li>{props.loc1}</li>
                    <li>{props.loc2}</li>
                    <li>{props.loc3}</li>
                </ul>
        </div>
    </div>
    )
}

//export
export default Ylocations