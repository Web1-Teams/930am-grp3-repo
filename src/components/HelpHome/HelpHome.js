
const HelpHome = (props) => {
    return (
        <div className="item-how-can-help">
        <a href={props.link}>
          <img className="sss" src={props.imageSrc} alt={props.title} />
        </a>
        <h4><strong>{props.title}</strong></h4>
        <p>{props.description}</p>
      </div>
    )
  };

export default HelpHome;
