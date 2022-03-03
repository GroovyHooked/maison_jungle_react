import React from "react";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";

function handleClick({ name }) {
  alert(`Vous voulez acheter ${name}, ? Très bon choix 🌱✨`);
}

const PlantItem = ({ name, cover, id, light, water }) => {
  return (
    <div>
      <div onClick={() => handleClick(name)}>
        <h3>{name}</h3>
        <img src={cover} alt={name} key={id} className="image" />
      </div>
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </div>
  );
};

export default PlantItem;
