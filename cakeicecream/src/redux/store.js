import { legacy_createStore as createStore, combineReducers } from "redux";
import { reducerCake } from ".";
import { reducerIcecream } from ".";

const rootreducer = combineReducers({
  cake: reducerCake,
  icecream: reducerIcecream,
});
export const store = createStore(rootreducer);
