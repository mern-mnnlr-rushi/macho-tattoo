// src/components/TattooDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const tattooData = [
  {
    id: 1,
    img: "",
    description: "Dragon Tattoo",
    details: "A fierce dragon wrapped around the arm.",
  },
  {
    id: 2,
    img: "",
    description: "Phoenix Tattoo",
    details: "A beautiful phoenix rising from ashes.",
  },
  {
    id: 3,
    img: "",
    description: "Skull Tattoo",
    details: "An intricate skull design with floral elements.",
  },
  // Add more tattoo objects as needed
];

function TattooDetail() {
  const { id } = useParams();
  const tattoo = tattooData.find((t) => t.id === parseInt(id));

  if (!tattoo) {
    return (
      <div>
        <h2>Tattoo Not Found</h2>
        <Link to="/portfolio">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="tattoo-detail">
      <h1>{tattoo.description}</h1>
      <img src={tattoo.img} alt={tattoo.description} />
      <p>{tattoo.details}</p>
      <Link to="/portfolio">Back to Portfolio</Link>
    </div>
  );
}

export default TattooDetail;
