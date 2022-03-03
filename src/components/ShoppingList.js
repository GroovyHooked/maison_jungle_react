import { plantList } from "../datas/plantList";

import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

const cat = plantList.reduce(
  (acc, plant) =>
    acc.includes(plant.category) ? acc : acc.concat(plant.category),
  []
);

const Categories = () => {
  let arr = [];
  plantList.reduce((curr, prev) => {
    if (curr.category !== prev.category) {
      arr.push(prev.category);
    }
    curr.category = prev.category;
    return arr;
  });

  return (
    <div className="categories">
      <ul>
        {arr.map((cat, i) => {
          return <li key={i}>{cat}</li>;
        })}
      </ul>
    </div>
  );
};

function ShoppingList() {
  return (
    <>
      <Categories />
      <ul className="products">
        {plantList.map((item, i) => {
          return (
            <>
              <li className="lmj-plant-item" key={item.name}>
                {item?.isSpecialOffer && (
                  <div className="lmj-sales" key={item.id}>
                    Soldes
                  </div>
                )}
                <PlantItem
                  key={i}
                  name={item.name}
                  cover={item.cover}
                  id={item.id}
                  light={item.light}
                  water={item.water}
                />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingList;
