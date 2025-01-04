
import { Link } from 'react-router-dom';
import './AdoptHome.css'

const AdoptHome = () => {


  return (
<section className="Adopt-section25">
        <div className="Adopt-div25">
            <div className="Adopt-text25">
                <h1><strong>Adopt</strong></h1>
                <p>Search our database of available pets!</p>
            </div>
            <div className="Adopt-search25">
                <form method="Get" action="">
                    <div className="Search-box25">
                        <Link  className="Search-button25"  to="/AdoptionList">Search</Link>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default AdoptHome;
