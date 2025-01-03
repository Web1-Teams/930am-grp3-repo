import React, { useState, useEffect } from "react";
import "./TrustRafeeq.css"; // Import the CSS file

function TrustRafeeq() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Get total likes from localStorage
    const storedLikes = localStorage.getItem("trustRafeeqLikes");
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }

    // Check if the user has already liked
    const userHasLiked = localStorage.getItem("userHasLiked");
    if (userHasLiked === "true") {
      setHasLiked(true);
    }
  }, []);

  const handleToggleLike = () => {
    let newLikes = likes;

    if (hasLiked) {
      // User is removing their like
      newLikes -= 1;
      setHasLiked(false);
      localStorage.setItem("userHasLiked", "false");
    } else {
      // User is adding their like
      newLikes += 1;
      setHasLiked(true);
      localStorage.setItem("userHasLiked", "true");
    }

    setLikes(newLikes);
    localStorage.setItem("trustRafeeqLikes", newLikes);
  };

  return (
    <div className="container">
      <button onClick={handleToggleLike} className="button">
        {hasLiked ? "I Don't Trust Rafeeq Anymore" : "I Trust Rafeeq"}
      </button>
      <p className="likeCount">
        {likes} {likes === 1 ? "Person Trusts Rafeeq" : "People Trust Rafeeq"}
      </p>
    </div>
  );
}

export default TrustRafeeq;
