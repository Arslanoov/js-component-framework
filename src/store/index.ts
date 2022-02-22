import { combineReducers, createStore } from "js-component-flux";
import { counterReducer } from "./counterReducer";

export const store = createStore(
  combineReducers({
    counter: counterReducer,
  })
);