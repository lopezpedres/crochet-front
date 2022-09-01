import React, { Dispatch } from "react";
import { storeFront } from "../../utils/storeFront";
import { cartLinesUpdate } from "../../graphql/queries";
import type { Action, State } from "../../types/Cart/CartProvider";
import type { Node } from "../../types/Cart/CartItem";
import { clearCart } from "../../../store/cart/actions/types";

interface CartItemProps {
  product?: Node;
  dispatch?: Dispatch<Action>;
}

const CartButton = ({ product, dispatch }: CartItemProps) => {
  const [quantity, setQuantity] = React.useState(product.quantity);
  const { id } =
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("cart"))) ||
    "{}";
  const productHandle = product.merchandise.product.handle;
  const nodeId = product.id;
  const merchandiseId = product.merchandise.id;

  const removeFromCartHandler = (action: string, handle: string) => {
    dispatch({
      type: action,
      payload: handle,
    });
  };

  const setCartItemQuantityHandler = async (
    merchandiseId: string,
    nodeId: string,
    quantity: number
  ) => {
    const updatedCart: State = await storeFront(cartLinesUpdate, {
      id,
      lines: {
        merchandiseId: merchandiseId,
        id: nodeId,
        quantity: quantity,
      },
    });
    //TODO:I need to add an if stament to check if the API returns an error
    //if it does, I need to display an error message and stop the function
    if (updatedCart.data.userErrors) {
      console.log(updatedCart.data.userErrors);
    } else {
      console.log("Updated Cart : ", updatedCart);
      setQuantity(quantity);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-row border border-black my-3 ">
        <button
          className="p-2 mx-2"
          onClick={() =>
            setCartItemQuantityHandler(merchandiseId, nodeId, quantity - 1)
          }
        >
          -
        </button>
        <div className="p-2 mx-2">{quantity}</div>
        <button
          className="p-2 mx-2"
          onClick={() =>
            setCartItemQuantityHandler(merchandiseId, nodeId, quantity + 1)
          }
        >
          +
        </button>
      </div>
      <button
        className="w-4 h-4 fill-current text-gray-700 my-auto mx-4"
        onClick={() => removeFromCartHandler(clearCart, productHandle)}
      >
        <img src="/delete.svg" />
      </button>
    </div>
  );
};

export default CartButton;
