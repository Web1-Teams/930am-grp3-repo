// imports
import React, { useEffect, useState } from "react";
import logo from "../Banner/cat_2.webp";
import logo2 from "../Banner/dog.webp";
import '../BannerHome/BannerHome.css';

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
    <section className="home-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Find your</h1>
          <h2>Palestine's Largest Animal Shelter</h2>
        </div>
        <div className="banner-images">
          <div className="image-item active">
            <img src={logo} alt="Cat" />
          </div>
          <div className="image-item">
            <img src={logo2} alt="Dog" />
          </div>
        </div>
        <div className="banner-stats">
          <h2>Furry Friend</h2>
        </div>
      </div>
    </section>
  );
};

// export
export default BannerHome;
