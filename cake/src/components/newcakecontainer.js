import React, { useState } from "react";
import { buycake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [nombre, setNombre] = useState("");

  const handleBuyCake = () => {
    if (nombre > 0) {
      props.buycake(nombre);
    } else {
      alert("Please enter a valid number greater than 0");
    }
    setNombre("");
  };

  return (
    <div>
      <h1>Nombre Of Cakes - {props.nbrOfCakes}</h1>
      <input
        value={nombre}
        onChange={(event) => setNombre(Number(event.target.value))}
        type="text"
      />
      <button onClick={handleBuyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    nbrOfCakes: state.nbrOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buycake: (nombre) => {
      dispatch(buycake(nombre));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
