import * as type from "./typeActions";

const initialstate = {
  nbrOfCakes: 10,
  nbrOfIcecream: 10,
};

export function reducer(state = initialstate, action) {
  switch (action.type) {
    case type.BUY_CAKE:
      return {
        ...state,
        nbrOfCakes: state.nbrOfCakes - 1,
      };
    case type.BUY_ICECREAM:
      return {
        ...state,
        nbrOfIcecream: state.nbrOfIcecream - 1,
      };
    default:
      return state;
  }
}
