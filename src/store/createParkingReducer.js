import { ADD_LOTS } from "./action";

const defaultState = {
  PARKING: [],
};

export const lotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LOTS:
      return { ...state, LOTS: [...action.payload] };
    default:
      return state;
  }
};
