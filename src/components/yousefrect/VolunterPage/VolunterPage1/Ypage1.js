// import 
import './Ypage1.css';
import Dform from '../VoulnterForm/Dform';
import Headimg from '../VolunterHeading/Headimg';
import Mainh from '../VolunterMainHeading/Mainh';
import Sidebar from '../VolunterSideBar/Sidebar';
import Ylocations from '../VolunterLocations/Ylocations';
import Yaccopage1 from '../VolunterAcooration/Yaccopage1';


//function 
const Ypage1 = () =>{
    return (
        <div>
            <Headimg logo = "/images/dogs_image_no_text.jpg" title = "Volunteer" dec = "Give a lovely gift"/> 
            <Sidebar />
            <Mainh />
            <Yaccopage1/>
            <Ylocations  loc1 = "Nablus" loc2 = "Jenin" loc3 = "Tulkarm"/>
            <Dform />
            

        </div>

    )
}

//export 
export default Ypage1