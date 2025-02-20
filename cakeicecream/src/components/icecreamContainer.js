import React, { useState } from "react";
import { connect } from "react-redux";
import { buyicecream } from "../redux";

function IcecreamContainer(props) {
  const [numberIcecreams, setNumberIcecreams] = useState("");

  const handleClick = () => {
    const amount = parseInt(numberIcecreams, 10);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
    if (amount > props.numberOfIcecreams) {
      alert("Not enough ice creams available!");
      return;
    }
    props.buyicecream(amount);
    setNumberIcecreams(""); 
  };

  return (
    <div>
      <h1>Number Of Ice Creams: {props.numberOfIcecreams}</h1>
      <input
        type="text"
        value={numberIcecreams}
        onChange={(event) => setNumberIcecreams(event.target.value)}
      />
      <button onClick={handleClick}>
        Buy {numberIcecreams} Ice Creams
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numberOfIcecreams: state.icecream.nbrOfIcecreams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyicecream: (numberIcecreams) => dispatch(buyicecream(numberIcecreams)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
