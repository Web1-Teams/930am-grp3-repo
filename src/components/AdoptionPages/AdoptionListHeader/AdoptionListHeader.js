import "./AdoptionListHeader.css";
import { Link } from "react-router-dom";
const AdoptionListHeader = () => {
  return (
    <>
      <h1 className="adoption-header-title">Animals for Adoption</h1>
      <div class="adoption-header-submit">
        <p>
          Have a Pet to Post? <Link to="/AdoptionForm">Submit a Ticket!</Link>{" "}
          {/*takes the user to AdoptionPostForm*/}
        </p>
      </div>
    </>
  );
};
export default AdoptionListHeader;
