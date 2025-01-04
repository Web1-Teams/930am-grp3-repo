// imports
import React, { useEffect, useState } from "react";
import "./BannerHome.css";
import TrustRafeeq from "../TrustRafeeq/TrustRafeeq";

// function
const BannerHome = () => {
  const images = [
    "../images/cat_2.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="home-banner25">
      <div className="banner-content25">
        <div className="banner-text25">
          <h1>Find your</h1>
          <h2>Palestine's Largest Animal Shelter</h2>
        </div>
        <TrustRafeeq />

        <div className="banner-images25">
          {images.map((img, index) => (
            <div
              key={index}
              className={`image-item ${index === currentIndex ? "active" : ""}`}
            >
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
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
