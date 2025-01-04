import { Link } from "react-router-dom";

const HelpHome = (props) => {
    return (
        <div className="item-how-can-help">
        <Link to={props.link}>
          <img className="sss" src={props.imageSrc} alt={props.title} />
        </Link>
        <h4><strong>{props.title}</strong></h4>
        <p>{props.description}</p>
      </div>
    )
  };

export default HelpHome;
