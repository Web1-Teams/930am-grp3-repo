import { Link } from "react-router-dom";

const HelpHome = (props) => {
    return (
        <div className="item-how-can-help25">
        <Link to={props.link}>
          <img className="sss25" src={props.imageSrc} alt={props.title} />
        </Link>
        <h4><strong>{props.title}</strong></h4>
        <p>{props.description}</p>
      </div>
    )
  };

export default HelpHome;
