// src/components/Portfolio.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const tattoos = [
    {
      id: 1,
      img: "",
      description: "Dragon Tattoo",
      category: "Dragons",
    },
    {
      id: 2,
      img: "",
      description: "Phoenix Tattoo",
      category: "Phoenixes",
    },
    {
      id: 3,
      img: "",
      description: "Skull Tattoo",
      category: "Skulls",
    },
    // Add more tattoo objects as needed
  ];

  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(tattoos.map((tattoo) => tattoo.category)),
  ];

  const filteredTattoos =
    filter === "All"
      ? tattoos
      : tattoos.filter((tattoo) => tattoo.category === filter);

  return (
    <div>
      <h1>Tattoo Portfolio</h1>
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio">
        {filteredTattoos.map((tattoo) => (
          <div key={tattoo.id} className="tattoo-item">
            <Link to={`/portfolio/${tattoo.id}`}>
              <img src={tattoo.img} alt={tattoo.description} />
              <p>{tattoo.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
