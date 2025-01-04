import "./AdoptionCard.css";

const AdoptionCard = ({ image, name, details, place }) => {
  return (
    <div>
      <div className="animal-container">
        <img src={image} alt={name} width="250" height="auto" />
        <p className="name">{name}</p>
        <p className="details">{details}</p>
        <p className="place">{place}</p>
      </div>
    </div>
  );
};

export default AdoptionCard;
