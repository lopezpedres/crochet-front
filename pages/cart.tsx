import React, { useContext, useEffect } from "react";
import CartItem from "./Components/Cart/CartItem";
import { cartStateContext, cartDispatchContext } from "../store/cart/cartProvider";

const cart = () => {
  const cartState = useContext(cartStateContext);
  const cartDispatch = useContext(cartDispatchContext);
  //useEffect to get the cart from the storeFront API
  useEffect(() => {
    



  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-700 mb-4">Carrito</h1>
      <div className="border-t-2 border-b-2 m-auto">
        {Object.keys(CartItem).length !==0?
          <p>Your cart is not empty</p>
        :
          <p>Your cart is empty</p>}
      </div>
    </div>
  );
};

export default cart;
