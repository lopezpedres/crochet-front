import type { State, Action } from "../../pages/types/Cart/CartProvider";
import {
  addToCart,
  removeFromCart,
  clearCart,
  setCartItemQuantity,
  setCart,
} from "./actions/types";

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case addToCart:
      return action.payload;
    case removeFromCart:
      return {
        ...state,
        data: {
          ...state.data,
          cart: {
            ...state.data.cart,
            lines: {
              ...state.data.cart.lines,
              edges: state.data.cart.lines.edges.filter(
                (item) =>
                  item.node.merchandise.product.handle !== action.payload
              ),
            },
          },
        },
      };
    case clearCart:
      return { ...action.payload };
    case setCartItemQuantity:
      return action.payload;
    case setCart:
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;
