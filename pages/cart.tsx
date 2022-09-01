import React, { useContext, useEffect } from "react";
import CartItem from "./Components/Cart/CartItem";
import { storeFront } from "./utils/storeFront";
import { getCart } from "./graphql/queries";
import {
  cartStateContext,
  cartDispatchContext,
} from "../store/cart/CartProvider";
import { State } from "./types/Cart/CartProvider";
import { setCart } from "../store/cart/actions/types";

const cart = () => {
  const cartState = useContext(cartStateContext);
  const dispatch = useContext(cartDispatchContext);
  const cartItem = cartState.data?.cart?.lines?.edges || null
  const cartId = (typeof window !== 'undefined')&&JSON.parse(localStorage.getItem("cart")) || "{}";

  useEffect(() => {
    const fetchData = async () => {
      const response: State = await storeFront(getCart,cartId);
      console.log(response);
      dispatch({
        type: setCart,
        payload: response,
      });
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-700 mb-4">
        Carrito
      </h1>
      <div className="border-t-2 border-b-2 m-auto">
        {cartItem?.length !== 0 && cartItem !==null ? (
          cartItem?.map((item) => (
            <CartItem key={item.node.merchandise.product.title} product={item.node} dispatch={dispatch} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default cart;
