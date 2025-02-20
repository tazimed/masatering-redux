import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

function App2() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const StyledDiv=styled.div`
  width : 20% ;
  height : 35% ;
  padding : 10px ;
  background : gray ;
  `

  
  const StyledButton = styled.button`
    background-color: blue;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: 0.3s; /* Added missing semicolon */

    &:hover {
      background-color: yellow;
    }
  `;

  return (
    <StyledDiv>
      <h1>Counter: {count}</h1>
      <StyledButton onClick={increment}>Increment</StyledButton>
      <StyledButton onClick={decrement}>Decrement</StyledButton>
    </StyledDiv>
  );
}

export default App2;
