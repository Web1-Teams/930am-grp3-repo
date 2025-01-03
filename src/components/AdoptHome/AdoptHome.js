import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../AdoptHome/AdoptHome.css'

const AdoptHome = () => {
  const [species, setSpecies] = useState("All");
  const [location, setLocation] = useState("All");
  const navigate = useNavigate();

  const handleSearch = () => {
    // نقل القيم إلى صفحة النتائج
    navigate(`/results?species=${encodeURIComponent(species)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <section className="Adopt-section">
      <div className="Adopt-div">
        <div className="Adopt-text">
          <h1><strong>Adopt</strong></h1>
          <p>Search our database of available pets!</p>
        </div>
        <div className="Adopt-search">
          <div className="Search-box">
            {/* اختيار النوع */}
            <div className="Search-field">
              <label htmlFor="species">Search By Animal</label>
              <select
                id="species"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                className="species"
              >
                <option value="All">All Animals</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>

            {/* اختيار الموقع */}
            <div className="Search-field">
              <label htmlFor="location">Search By Location</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="location"
              >
                <option value="All">Any Location</option>
                <option value="Nablus">Nablus</option>
                <option value="Gaza">Gaza</option>
                <option value="Jerusalem">Jerusalem</option>
                <option value="Amman">Amman</option>
                <option value="Beirut">Beirut</option>
                <option value="Hebron">Hebron</option>
                <option value="Jenin">Jenin</option>
                <option value="Damascus">Damascus</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Ramallah">Ramallah</option>
              </select>
            </div>

            {/* زر البحث */}
            <button onClick={handleSearch} className="Search-button">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptHome;
