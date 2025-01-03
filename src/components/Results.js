import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const species = queryParams.get("species");
  const location = queryParams.get("location");

  // بيانات الحيوانات (مثال وهمي)
  const pets = [
    { id: 1, name: "Bella", type: "Cat", location: "Nablus" },
    { id: 2, name: "Max", type: "Dog", location: "Gaza" },
    { id: 3, name: "Coco", type: "Rabbit", location: "Amman" },
    { id: 4, name: "Luna", type: "Cat", location: "Ramallah" },
    { id: 5, name: "Charlie", type: "Dog", location: "Jerusalem" },
  ];

  // تصفية النتائج بناءً على البحث
  const filteredPets = pets.filter((pet) =>
    (species === "All" || pet.type === species) &&
    (location === "All" || pet.location === location)
  );

  return (
    <div>
      <h1>Search Results</h1>
      <div>
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div key={pet.id}>
              <h3>{pet.name} ({pet.type})</h3>
              <p>Location: {pet.location}</p>
            </div>
          ))
        ) : (
          <p>No pets found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
