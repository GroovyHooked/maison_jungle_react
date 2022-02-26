import { plantList } from "../datas/plantList";
console.log(plantList);

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
      <ul>
        {plantList.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default ShoppingList;
