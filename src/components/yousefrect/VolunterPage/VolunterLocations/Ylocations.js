//import
import './loc.css';
//function
const Ylocations = (props) =>{
    return(
        <div>
            <h2 className="main-heading99">Locations:</h2>
            <div className="locations-container99">
                <ul className="locations-list99">
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