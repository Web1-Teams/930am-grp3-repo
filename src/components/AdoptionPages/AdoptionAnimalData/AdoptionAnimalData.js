import React from "react";
import { useLocation } from "react-router-dom";
import "./AdoptionAnimalData.css";

const AdoptionAnimalData = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const name = params.get("name");
  const details = params.get("details");
  const type = params.get("type");
  const place = params.get("place");
  const description = params.get("description");
  const image = decodeURIComponent(params.get("image")); //after i encoded so i can enclude special characters like "+"
  return (
    <div className="page-wrapper66">
      <div className="main66">
        <div className="content-wrapper66">
          <div className="pet-image-container66">
            <img src={image} alt={name} className="pet-image66" />
          </div>

          <div className="pet-info66">
            <div>
              <h2 className="pet-name66">{name}</h2>
              <p>
                <strong>Details:</strong> {details}
              </p>
              <p>
                <strong>Type:</strong> {type}
              </p>
              <p>
                <strong>Location:</strong> {place}
              </p>
              <p className="pet-description66">{description}</p>
            </div>
            <div>
              <h3>Ready to Adopt {name}?</h3>
              <form className="email-form66">
                <label htmlFor="email">Enter your email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@mail.com"
                  required
                />
                <button type="submit" className="adoption-button-email66">
                  Adopt Me!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionAnimalData;
