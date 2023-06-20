import { applyMiddleware, combineReducers, createStore } from "redux";
import { newParkReducer } from "./newParkReducer";
import { lotsReducer } from "./lotsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  newParkReducer,
  lotsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
