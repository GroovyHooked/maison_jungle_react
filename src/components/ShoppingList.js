import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
console.log(plantList);
const cat = plantList.reduce(
  (acc, plant) =>
    acc.includes(plant.category) ? acc : acc.concat(plant.category),
  []
);

console.log("cat => ", cat);
const Categories = () => {
  let arr = [];
  plantList.reduce((curr, prev) => {
    console.log("curr, prev", curr.category, prev.category);

    if (curr.category !== prev.category) {
      arr.push(prev.category);
    }
    curr.category = prev.category;
    return arr;
  });

  return (
    <div className="categories">
      <p>Liste des catégories de plantes:</p>
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
      <ul className="">
        {plantList.map((item) => {
          return (
            <li className="lmj-plant-item" key={item.id}>
              {item.name}
              {item?.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingList;
