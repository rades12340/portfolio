import React, { useReducer } from "react";
import UiContext from "./authContext";
import uiReducer from "./uiReducer";
import {} from "./types";

const AuthState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(uiReducer, initialState);

  return <UiContext.Provider value={{}}>{props.children}</UiContext.Provider>;
};

export default AuthState;
