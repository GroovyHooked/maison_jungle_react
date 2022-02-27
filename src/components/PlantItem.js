import React from "react";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";

const PlantItem = ({ name, cover, id, light, water }) => {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <img src={cover} alt={name} key={id} className="image" />
      </div>
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </>
  );
};

export default PlantItem;
