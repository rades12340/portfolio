import React, { useReducer } from "react";
import UiContext from "./uiContext";
import uiReducer from "./uiReducer";
import { TOGGLE_DRAWER } from "./types";

const UiState = props => {
  const initialState = {
    right: false
  };

  const [state, dispatch] = useReducer(uiReducer, initialState);

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({ type: TOGGLE_DRAWER, payload: open });
  };

  return (
    <UiContext.Provider
      value={{
        right: state.right,
        toggleDrawer
      }}
    >
      {props.children}
    </UiContext.Provider>
  );
};

export default UiState;
