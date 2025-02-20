import * as type from "./typeActions";

const initialState = {
  nbrOfCakes: 20,
};

export const reducerCake = (state = initialState, action) => {
  switch (action.type) {
    case type.BUY_CAKE:
      return {
        ...state,
        nbrOfCakes: state.nbrOfCakes - action.payload,
      };
    default:
      return state;
  }
};
