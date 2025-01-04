import "./AdoptionListHeader.css";
import { Link } from "react-router-dom";
const AdoptionListHeader = () => {
  return (
    <>
      <h1 className="adoption-header-title66">Animals for Adoption</h1>
      <div className="adoption-header-submit66">
        <p>
          Have a Pet to Post? <Link to="/AdoptionForm">Submit a Ticket!</Link>{" "}
          {/*takes the user to AdoptionPostForm*/}
        </p>
      </div>
    </>
  );
};
export default AdoptionListHeader;
