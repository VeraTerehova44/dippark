import { ADD_LOTS, EDIT_BLOCKED, EDIT_NAME } from "./action";

const defaultState = {
  LOTS: [],
};

export const lotsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LOTS:
      return { ...state, LOTS: [...action.payload] };
    case EDIT_NAME:
      return {
        ...state,
        LOTS: state.LOTS.map((item) =>
          item.name === action.payload.name
            ? { ...item, name: action.payload.nName }
            : item
        ),
      };
    case EDIT_BLOCKED:
      return {
        ...state,
        LOTS: state.LOTS.map((item) =>
          item.name === action.payload.name
            ? { ...item, blocked: action.payload.blocked }
            : item
        ),
      };
    default:
      return state;
  }
};
