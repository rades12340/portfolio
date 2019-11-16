import React, { useReducer } from "react";
import UiContext from "./uiContext";
import uiReducer from "./uiReducer";
import { TOGGLE_DRAWER, OPEN_DIALOG, CLOSE_DIALOG } from "./types";

const UiState = props => {
  const initialState = {
    right: false,
    open: false
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

  const openDialog = () => {
    dispatch({ type: OPEN_DIALOG });
  };
  const closeDialog = () => {
    dispatch({ type: CLOSE_DIALOG });
  };

  return (
    <UiContext.Provider
      value={{
        right: state.right,
        open: state.open,
        toggleDrawer,
        openDialog,
        closeDialog
      }}
    >
      {props.children}
    </UiContext.Provider>
  );
};

export default UiState;
