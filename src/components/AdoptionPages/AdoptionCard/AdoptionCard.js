import "./AdoptionCard.css";

const AdoptionCard = ({ image, name, details, place }) => {
  return (
    <div>
      <div className="animal-container66">
        <img src={image} alt={name} width="250" height="auto" />
        <p className="name66">{name}</p>
        <p className="details66">{details}</p>
        <p className="place66">{place}</p>
      </div>
    </div>
  );
};

export default AdoptionCard;
