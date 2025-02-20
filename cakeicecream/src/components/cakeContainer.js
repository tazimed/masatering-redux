import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buycake } from "../redux";

function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.nbrOfCakes);
  const dispatch = useDispatch();
  const [numbercakes, setNumbercakes] = useState("");

  const handleClick = () => {
    const amount = parseInt(numbercakes, 10);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid number.");
      return;
    }
    if (amount > numberOfCakes) {
      alert("Not enough cakes available!");
      return;
    }
    dispatch(buycake(amount));
  };

  return (
    <div>
      <h1>Number Of Cakes: {numberOfCakes}</h1>
      <input
        type="number"
        value={numbercakes}
        onChange={(event) => setNumbercakes(event.target.value)}
        placeholder="Enter number"
      />
      <button onClick={handleClick}>Buy {numbercakes} Cakes</button>
    </div>
  );
}

export default CakeContainer;
