// import 

import Dform from './Dform';
import Headimg from './Headimg';
import Mainh from './Mainh';
import Sidebar from './Sidebar';
import Ylocations from './Ylocations';
import Dogimage from '../../../assests/images/dogs_image_no_text.jpg';


//function 
const Ypage1 = () =>{
    return (
        <div>
            <Headimg logo = {Dogimage} title = "Volunteer" dec = "Give a lovely gift"/> 
            <Sidebar />
            <Mainh />
            <Ylocations  loc1 = "Nablus" loc2 = "Jenin" loc3 = "Tulkarm"/>
            <Dform />
           

        </div>

    )
}

//export 
export default Ypage1