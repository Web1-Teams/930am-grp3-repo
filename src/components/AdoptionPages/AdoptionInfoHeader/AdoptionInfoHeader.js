import "./AdoptionInfoHeader.css";
import { Link } from "react-router-dom";
const AdoptionInfoHeader = () => {
  return (
    <div className="background-adoption-start66">
      <div>
        <h1 className="first-back-text66">
          Looking For Your <br /> Forever Friend?
        </h1>
        <h2 className="second-back-text66">
          <br />
          Your Pet Adoption <br /> Journey Starts Here!
        </h2>
        <Link to="/AdoptionList">
          <button className="find-a-pet-button66">Find a Pet</button>
        </Link>
      </div>
    </div>
  );
};

export default AdoptionInfoHeader;
