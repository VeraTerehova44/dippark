export const ADD_ITEMS = "ADD_ITEMS";
export const ADD_PHOTO = "ADD_PHOTO";
export const ADD_ROWS = "ADD_ROWS";
export const ADD_COLUMNS = "ADD_COLUMNS";
export const ADD_PARKING = "ADD_PARKING";
export const EDIT_BLOCKED = "EDIT_BLOCKED";
export const EDIT_NAME_ITEM = "EDIT_NAME_ITEM";

export const addParking = (payload) => ({ type: ADD_PARKING, payload });
export const addItems = (payload) => ({ type: ADD_ITEMS, payload });
export const addPhoto = (payload) => ({ type: ADD_PHOTO, payload });
export const addRows = (payload) => ({ type: ADD_ROWS, payload });
export const addColumns = (payload) => ({ type: ADD_COLUMNS, payload });
export const editBlocked = (payload) => ({ type: EDIT_BLOCKED, payload });
export const editNameItem = (payload) => ({ type: EDIT_NAME_ITEM, payload });
