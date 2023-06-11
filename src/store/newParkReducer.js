import {
  ADD_COLUMNS,
  ADD_ITEMS,
  ADD_PARKING,
  ADD_PHOTO,
  ADD_ROWS,
  EDIT_BLOCKED,
  EDIT_NAME_ITEM,
} from "./action";

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
    case ADD_PHOTO:
      return {
        ...state,
        PARKING: state.PARKING.map((item) =>
          item.id === action.payload.id
            ? { ...item, photo: action.payload.photo }
            : item
        ),
      };
    case ADD_ROWS:
      return {
        ...state,
        PARKING: state.PARKING.map((item) =>
          item.id === action.payload.id
            ? { ...item, rows: action.payload.rows }
            : item
        ),
      };
    case ADD_COLUMNS:
      return {
        ...state,
        PARKING: state.PARKING.map((item) =>
          item.id === action.payload.id
            ? { ...item, columns: action.payload.columns }
            : item
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
    case EDIT_NAME_ITEM:
      return {
        ...state,
        PARKING: state.PARKING.map((item) =>
          item.id === action.payload.parkingId
            ? {
                ...item,
                parkingItems: [
                  ...item.parkingItems.map((park) =>
                    park.id === action.payload.id
                      ? { ...park, name: action.payload.newState }
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
