export const ADD_ITEMS = "ADD_ITEMS";
export const ADD_PARKING = "ADD_PARKING";
export const EDIT_BLOCKED = "EDIT_BLOCKED";

export const addParking = (payload) => ({ type: ADD_PARKING, payload });
export const addItems = (payload) => ({ type: ADD_ITEMS, payload });
export const editBlocked = (payload) => ({ type: EDIT_BLOCKED, payload });
