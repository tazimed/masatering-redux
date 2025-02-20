import * as type from "./actions/typeActions";

const initalState = {
  notes: [],
};

export function reducer(state = initalState, action) {
  switch (action.type) {
    case type.AJOUTER_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    default:
      return state;
  }
}
