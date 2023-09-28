import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

export const ContextProvider = ({ children }) => {
  const initialState = getState({
    getStore: () => ({}), // Puedes definir una función getStore inicial aquí si es necesario
    getActions: () => ({}), // Puedes definir una función getActions inicial aquí si es necesario
  });

  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Aquí puedes realizar acciones de carga inicial si es necesario
  }, []);

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

