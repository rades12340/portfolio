import { TOGGLE_DRAWER } from "./types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        right: action.payload
      };
    default:
      return state;
  }
};
