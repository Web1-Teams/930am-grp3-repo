import React, { useState } from "react";
import "./AdoptionPostForm.css";

// Function to convert image to Base64 because in local storage the picture will be lost after refresh
const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const AdoptionPostForm = () => {
  const [formData, setFormData] = useState({
    animalName: "",
    animalPlace: "",
    animalGender: "",
    animalAge: "",
    animalType: "",
    additionalNotes: "",
    animalImage: null,
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      animalName,
      animalPlace,
      animalGender,
      animalAge,
      animalImage,
      animalType,
      additionalNotes,
    } = formData;

    if (animalName && animalPlace && animalGender && animalAge && animalImage) {
      try {
        // Convert image to Base64
        const base64Image = await toBase64(animalImage);

        const newAnimal = {
          name: animalName,
          place: animalPlace,
          details: `${animalGender}, ${animalAge} years old`,
          type: animalType,
          image: base64Image, // Save Base64 string
          description: additionalNotes,
        };

        // Save to localStorage
        const storedAnimals =
          JSON.parse(localStorage.getItem("postedAnimals")) || [];
        storedAnimals.push(newAnimal);
        localStorage.setItem("postedAnimals", JSON.stringify(storedAnimals));

        alert("Animal posted successfully!");
      } catch (error) {
        console.error("Error saving the image:", error);
        alert("Failed to save the image. Please try again.");
      }
    }
  };

  return (
    <div className="form-container66">
      <h2>Post an Animal for Adoption</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="animal-name">Animal Name:</label>
        <input
          type="text"
          id="animal-name"
          name="animalName"
          value={formData.animalName}
          onChange={handleInputChange}
          placeholder="Enter the animal's name"
          required
        />

        <label htmlFor="animal-place">Animal Place:</label>
        <input
          type="text"
          id="animal-place"
          name="animalPlace"
          value={formData.animalPlace}
          onChange={handleInputChange}
          placeholder="Enter the animal's place"
          required
        />

        <label htmlFor="animal-gender">Animal Gender:</label>
        <select
          id="animal-gender"
          name="animalGender"
          value={formData.animalGender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select the gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <label htmlFor="animal-age">Animal Age:</label>
        <input
          type="number"
          id="animal-age"
          name="animalAge"
          value={formData.animalAge}
          onChange={handleInputChange}
          placeholder="Enter the animal's age"
          required
        />

        <label htmlFor="animal-type">Animal Type:</label>
        <select
          id="animal-type"
          name="animalType"
          value={formData.animalType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select the type</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="additional-notes">Additional Notes:</label>
        <textarea
          id="additional-notes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleInputChange}
          placeholder="Enter any additional notes (including health conditions if any)"
          rows="4"
        ></textarea>

        <label htmlFor="animal-image">Upload Animal Picture:</label>
        <input
          type="file"
          id="animal-image"
          name="animalImage"
          accept="image/*"
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdoptionPostForm;
