import { combineReducers, createStore } from "redux";
import { newParkReducer } from "./newParkReducer";

const rootReducer = combineReducers({
  newParkReducer,
});

export const store = createStore(rootReducer);
