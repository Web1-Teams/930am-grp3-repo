import "./RescueStickyLinks.css"
import RescueStickyLink from "../rescueStickyLink/RescueStickyLink";
// import { useRef } from "react";
const StickyLinks = () => {
  // const stickyref = useRef<HTMLDivElement | null >(null);
  return (
    <div className="position-sticky">
        <ul className="nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="#section_1">Lost Pet Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_2">Found Pet Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_3">Stray Cats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_4">Additional Information</a>
          </li> */}
          <RescueStickyLink 
          link = "#section_1"
          description = "Lost Pet Resources"
          />
          <RescueStickyLink    
          link = "#section_2"
          description = "Found Pet Resources"
          />
          <RescueStickyLink   
          link = "#section_3"
          description = "Stray Cats"
          />
          <RescueStickyLink   
          link = "#section_4"
          description = "Additional Information"
          />
        </ul>
    </div>
  );
}

export default StickyLinks;
