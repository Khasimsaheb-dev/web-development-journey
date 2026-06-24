import Items from "./items";

const FoodItems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((food) => (
        <Items key={food} fooditems={food} />
      ))}
    </ul>
  );
};

export default FoodItems;