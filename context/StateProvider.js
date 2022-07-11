import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./stateReducer";

const StateContext = createContext();

const StateProvider = ({ reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export default StateProvider;
