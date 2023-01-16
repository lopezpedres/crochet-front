import React, { useCallback, useEffect, useState } from "react";
import CartItem from "./Components/Cart/CartItem";
import { storeFront } from "./utils/storeFront";
import { getCart } from "./graphql/queries";
// import {
//   cartStateContext,
//   cartDispatchContext,
// } from "../store/cart/CartProvider";
import { CartType } from "./types/Cart/CartItem";

const Cart = () => {
  const [cartState, setcartState] = useState<CartType>(null);
  // const cartState = useContext(cartStateContext);
  // const dispatch = useContext(cartDispatchContext);
  // const cartItem = cartState.data?.cart?.lines?.edges || null

  const fetchData = useCallback(async () => {
    const cartId: string =
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("cart"))) ||
      "{}";
    const response: CartType = await storeFront(getCart, cartId);
    console.log(response);
    setcartState(response);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const cartItem = cartState.data.cart.lines.edges || null;

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-700 mb-4">
        Carrito
      </h1>
      <div className="border-t-2 border-b-2 m-auto">
        {cartItem.length !== 0 && cartItem !== null ? (
          cartItem.map((item) => (
            <CartItem
              key={item.node.merchandise.product.title}
              product={item.node}
            />
          ))
        ) : (
          <p className="text-3xl text-center">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
