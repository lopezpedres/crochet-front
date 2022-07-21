import React from "react";
import CartItem from "./Components/Cart/CartItem";

const cart = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-700 mb-4">Carrito</h1>
      <div className="border-t-2 border-b-2 m-auto">

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default cart;
