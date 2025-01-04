//import
import { Link } from 'react-router-dom';
import '../A/A.css'
//function
const A =(props)=>{
    return(
        <Link to={props.Link} class="button-comp">{props.title}</Link>
    )
}
//export
export default A;