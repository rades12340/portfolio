import { TOGGLE_DRAWER, OPEN_DIALOG, CLOSE_DIALOG } from "./types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        right: action.payload
      };
    case OPEN_DIALOG:
      return {
        ...state,
        open: true
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};
