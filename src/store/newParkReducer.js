import { ADD_MANY_PARKING, ADD_PARKING } from "./action";

const defaultState = {
  PARKING: [],
};

export const newParkReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_PARKING:
      return { ...state, PARKING: [...action.payload] };
    case ADD_PARKING:
      return { ...state, PARKING: [action.payload] };
    default:
      return state;
  }
};
