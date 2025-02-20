import * as type from "../Actions/TypeActions";
const initialeState = {
  fruits: [],
};
export default function reducerFruits(state = initialeState, action) {
  switch (action.type) {
    case type.ADD_FRUIT:
      return { ...state, fruits: [...state.fruits, action.payload] };
    case type.REMOVE_ALL_FRUITS:
      return { ...state, fruits: [] };
    default:
      return state;
  }
}
