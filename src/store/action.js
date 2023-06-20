export const ADD_PARKING = "ADD_PARKING";
export const ADD_MANY_PARKING = "ADD_MANY_PARKING";
export const ADD_LOTS = "ADD_LOTS";
export const EDIT_NAME = "EDIT_NAME";
export const EDIT_BLOCKED = "EDIT_BLOCKED";

export const addParking = (payload) => ({ type: ADD_PARKING, payload });
export const addManyParking = (payload) => ({
  type: ADD_MANY_PARKING,
  payload,
});
export const addLots = (payload) => ({ type: ADD_LOTS, payload });
export const editNameLot = (payload) => ({ type: EDIT_NAME, payload });
export const editBlockedLot = (payload) => ({ type: EDIT_BLOCKED, payload });
