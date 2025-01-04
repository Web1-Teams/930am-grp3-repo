import { useEffect, useState } from "react";
import AdoptionCard from "../AdoptionCard/AdoptionCard";
import AdoptionListHeader from "../AdoptionListHeader/AdoptionListHeader";
import AdoptionSearchBar from "../AdoptionSearchBar/AdoptionSearchBar";
import "./AdoptionList.css";
import { Link } from "react-router-dom";

const AdoptionList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // to get posted animals from localStorage
    const storedAnimals =
      JSON.parse(localStorage.getItem("postedAnimals")) || [];
    setAnimals(storedAnimals);
  }, []);

  // Filter animals based on user search (searchTerm)
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <AdoptionListHeader />
      <AdoptionSearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="animals-container">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal, index) => (
            <div key={index} className="col">
              <Link
                to={`/AnimalData?name=${animal.name}&details=${animal.details}&type=${animal.type}&place=${animal.place}&description=${animal.description}&image=${encodeURIComponent(animal.image)}`}
              >
                {/*i made encode to get the full src without removing any special characters like " + " */}
                <AdoptionCard
                  image={animal.image}
                  name={animal.name}
                  details={animal.details}
                  place={animal.place}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No animals posted for adoption yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdoptionList;
