// imports
import React, { useEffect, useState } from "react";
//import logo from "../images/cat_2.webp";
//import logo2 from "../images/dog.webp";
import './BannerHome.css';
import TrustRafeeq from "../TrustRafeeq/TrustRafeeq";


// function
const BannerHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll(".image-item");
    const totalImages = images.length;

    const interval = setInterval(() => {
      images[currentIndex].classList.remove("active");
      const newIndex = (currentIndex + 1) % totalImages;
      setCurrentIndex(newIndex);
      images[newIndex].classList.add("active");
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="home-banner25">
      <div className="banner-content25">
        <div className="banner-text25">
          <h1>Find your</h1>
          <h2>Palestine's Largest Animal Shelter</h2>
        </div>
        <TrustRafeeq />

        <div className="banner-images25">
          <div className="image-item active25">
            <img src="../images/cat_2.webp" alt="Cat" />
          </div>
          <div className="image-item25">
            <img src="../images/dog.webp" alt="Dog" />
          </div>
        </div>
        <div className="banner-stats25">
          <h2>Furry Friend</h2>
        </div>
      </div>
    </section>
  );
};

// export
export default BannerHome;
