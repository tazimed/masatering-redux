import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buycake, buyicecream } from "../redux";

function CakeIcecreamContainer() {
  const nbrOfCakes = useSelector((state) => state.nbrOfCakes);
  const nbrOfIcecream = useSelector((state) => state.nbrOfIcecream);

  const dispach = useDispatch();

  return (
    <div>
      <h1>Nombre Of Cakes - {nbrOfCakes}</h1>
      <button onClick={() => dispach(buycake())}>buy Cake</button>
      <h1>Nombre Of Icecream - {nbrOfIcecream}</h1>
      <button onClick={() => dispach(buyicecream())}>buy Icecream</button>
    </div>
  );
}

export default CakeIcecreamContainer;
