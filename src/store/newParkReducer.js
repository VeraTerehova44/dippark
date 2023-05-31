import { ADD_ITEMS, ADD_PARKING, EDIT_BLOCKED } from "./action";

const defaultState = {
  PARKING: [],
};

export const newParkReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PARKING:
      return { ...state, PARKING: [...state.PARKING, action.payload] };
    case ADD_ITEMS:
      const id = action.payload.id;
      const items = action.payload.items;
      return {
        ...state,
        PARKING: state.PARKING.map((item) =>
          item.id === id ? { ...item, parkingItems: items } : item
        ),
      };
    case EDIT_BLOCKED:
      return {
        ...state,
        PARKING: state.PARKING.map((item) =>
          item.id === action.payload.parkingId
            ? {
                ...item,
                parkingItems: [
                  ...item.parkingItems.map((park) =>
                    park.id === action.payload.id
                      ? { ...park, blocked: action.payload.newState }
                      : park
                  ),
                ],
              }
            : item
        ),
      };
    default:
      return state;
  }
};
