import type { State, Action } from "../../pages/types/Cart/CartProvider";
import { setItem,quantityItem } from "./actions/types";

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case quantityItem:
      return {...state,
        lines:{
          ...state.lines,
          quantity:action.payload,
        }
      }
    case setItem:
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;
