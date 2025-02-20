import * as type from "./typeactions";

const initialState = {
  nbrOfIcecreams: 20,
};

export const reducerIcecream = (state = initialState, action) => {
  switch (action.type) {
    case type.BUY_ICECREAM:
      return {
        ...state,
        nbrOfIcecreams: state.nbrOfIcecreams - action.payload,
      };
    default:
      return state;
  }
};
