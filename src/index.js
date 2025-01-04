import React from "react";
import ReactDOM from "react-dom/client";
// import Footer from './components/HomePage/Footer/Footer';
import Nav from "./components/HomePage/Nav/Nav";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rescue_page1 from "./components/hani_components/page1/rescue_page1/Rescue_page1";
import Rescue_page2 from "./components/hani_components/page2/rescue_page2/Rescue_page2";
import Ypage1 from "./components/yousefrect/VolunterPage/VolunterPage1/Ypage1";
import Ypag2 from "./components/yousefrect/DonatePage2/DonatePage/Ypag2";
import AdoptionInfo from "./components/AdoptionPages/AdoptionInfo/AdoptionInfo";
import AdoptionList from "./components/AdoptionPages/AdoptionList/AdoptionList";
import AdoptionPostForm from "./components/AdoptionPages/AdoptionPostForm/AdoptionPostForm";
import AdoptionAnimalData from "./components/AdoptionPages/AdoptionAnimalData/AdoptionAnimalData";

//import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/found" element={<Found/>}/> */}
        <Route path="/Rescue_page1" element={<Rescue_page1 />} />
        <Route path="/Rescue_page2" element={<Rescue_page2 />} />
        <Route path="/Ypage1" element={<Ypage1 />} />
        <Route path="/Ypag2" element={<Ypag2 />} />
        <Route path="/AdoptionInfo" element={<AdoptionInfo />} />
        <Route path="/AdoptionList" element={<AdoptionList />} />
        <Route path="/AdoptionForm" element={<AdoptionPostForm />} />
        <Route path="/AnimalData" element={<AdoptionAnimalData />} />

        <Route />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  </React.StrictMode>
);
