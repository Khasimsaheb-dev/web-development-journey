import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodItems from "./components/FoodItems";
import Errormsg from "./components/Errormsg";

function App() {
  // let foodItems = [];
let foodItems = [
  "Dal",
  "Green Vegetable",
  "Roti",
  "Meat",
  "Aalu",
  "Ghee",
];
  return (
    <>
      <h1>18 Fragments / Healthy Food</h1>

      <Errormsg item={foodItems} />

      <FoodItems item={foodItems} />
    </>
  );
}

export default App;