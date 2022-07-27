import React, { useReducer } from "react";
import { createContext, Dispatch } from "react";
import { State, Action } from "../../pages/types/Cart/CartProvider";
import cartReducer from "./cartReducer";
interface LayoutProps {
  children: React.ReactNode;
}
const defaultState: State = {} as State;
const cartStateContext = createContext(defaultState);
const cartDispatchContext = createContext({} as Dispatch<Action>);

const cartProvider = ({ children }: LayoutProps) => {
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  return (
    <cartStateContext.Provider value={state}>
      <cartDispatchContext.Provider value={dispatch}>
        {children}
      </cartDispatchContext.Provider>
    </cartStateContext.Provider>
  );
};

export default cartProvider;
export { cartStateContext, cartDispatchContext };
