//import
import React from 'react';
import Dogimage from '930am-grp3-repo\src\assests\images\dogs_image_no_text.jpg';
import '930am-grp3-repo\src\styles\headimg.css';

//functtion
const Headimg = () =>{
    return (
        
    <div className="header-section">
        <header className="pic-text">
            <div className="head-img">
                <img src={Dogimage} alt="Dog" className="header-image" />
                
            </div>
            <div className="header-text">
                <h3>Volunteer</h3>
                <h1>Give a lovely gift</h1>
            </div>
        </header>
    </div>
    )
}

//export
export default Headimg