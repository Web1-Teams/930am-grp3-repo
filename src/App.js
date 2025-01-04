import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdoptionList from "./components/AdoptionPages/AdoptionList/AdoptionList";
import AdoptionPostForm from "./components/AdoptionPages/AdoptionPostForm/AdoptionPostForm";
import AdoptionInfo from "./components/AdoptionPages/AdoptionInfo/AdoptionInfo";
import AdoptionAnimalData from "./components/AdoptionPages/AdoptionAnimalData/AdoptionAnimalData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdoptionInfo />} /> {/* Default/Home route */}
        <Route path="/AdoptionList" element={<AdoptionList />} />
        <Route path="/AdoptionInfo" element={<AdoptionInfo />} />
        <Route path="/AdoptionForm" element={<AdoptionPostForm />} />
        <Route path="/AnimalData" element={<AdoptionAnimalData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
