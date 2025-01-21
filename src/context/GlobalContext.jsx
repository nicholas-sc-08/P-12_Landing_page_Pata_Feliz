import { createContext, useState } from "react";
import { useRef } from "react";
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {    

      const inicio_ref = useRef(null);
      const produtos_ref = useRef(null);
      const sobre_ref = useRef(null);

    return (
        <GlobalContext.Provider value={{
        
        inicio_ref,
        produtos_ref,
        sobre_ref
        
        }}>
            {children}
        </GlobalContext.Provider>
    )
}