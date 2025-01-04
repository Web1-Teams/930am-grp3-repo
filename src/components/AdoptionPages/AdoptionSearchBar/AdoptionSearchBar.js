import React from "react";
import "./AdoptionSearchBar.css";

const AdoptionSearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for an animal..."
        id="search-box"
        value={searchTerm} // the input value variable is searchTearm
        onChange={handleSearch} // when it changes pass the data
      />
      <button type="button" className="adoption-button">
        Search
      </button>
    </div>
  );
};

export default AdoptionSearchBar;
