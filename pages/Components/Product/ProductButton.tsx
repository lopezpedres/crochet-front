import React, { Dispatch, useEffect, useState } from "react";
// import ActionTypes from "../../types/Cart/CartProvider";
import type { Action } from "../../types/Cart/CartProvider";
import type { SingleProduct } from "../../types/Products/SingleProduct";
import type { TypeCartLinesAdd } from "../../types/Products/TypeCartLinesAdd";
import type { Input } from "../../types/Cart/cartCreate";

import { storeFront } from "../../utils/storeFront";
import {
  cartLinesAdd,
  cartCreate as cartCreateQuery,
} from "../../graphql/queries";

//TODO: CANT import ActionTypes from '../../types/Cart/CartProvider'
//Somehow I can import Action but not ActionTypes
//That's why I pasted it here
enum ActionTypes {
  addItem = "ADD_ITEM",
  removeItem = "REMOVE_ITEM",
  setItem = "SET_ITEM",
  quantityItem = "QUANTITY_ITEM",
}

interface CartItemProps {
  dispatch?: Dispatch<Action>;
  productByHandle: SingleProduct;
  productState: TypeCartLinesAdd;
}

const ProductButton = ({
  productByHandle,
  dispatch,
  productState,
}: CartItemProps) => {
  console.log(productByHandle);

  const setItem: ActionTypes = ActionTypes.setItem;
  const quantityItem: ActionTypes = ActionTypes.quantityItem;

  const { id: cartId } =
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("cart"))) ||
    "{}";

  const [quantity, setQuantity] = useState(1);
  const merchandiseId = productByHandle.variants.edges[0].node.id;
  const payload: TypeCartLinesAdd = {
    cartId,
    lines: {
      quantity,
      merchandiseId,
    },
  };
  const payloadNewCart: Input = {
    buyerIdentity: null,
    note: null,
    lines: [{ quantity, merchandiseId, attributes: null, sellingPlanId: null }],
  };

  useEffect(() => {
    dispatch({ type: setItem, payload });
    console.count("ProductButton component rendered");
    console.log(productState);
  }, []);

  const setQuantityHandler = (quantity: number) => {
    setQuantity(quantity);
    dispatch({ type: quantityItem, payload: quantity });
  };

  const addToCart = async () => {
    const cart = await storeFront(cartLinesAdd, payload);
    console.log(cart);
  };
  //TODO:Still have to work on the createCart function...
  const addToCartHandler = async () => {
    let data: any;
    cartId
      ? storeFront(cartLinesAdd, payload)
      : ({ data } = await storeFront(cartCreateQuery, payloadNewCart));
    // console.log(data.cartCreate.id);
    localStorage.setItem("cart", `{"id":"${data?.cartCreate?.cart.id}"}`);
  };

  return (
    <div className="span-cols-1 lg:ml-10 ">
      <h1 className="text-gray-700 font-bold md:text-3xl mb-10 text-center lg:text-left">
        {productByHandle.title}
      </h1>
      <div>
        <div className="  justify-around flex flex-row lg:flex-col mb-8 ">
          <label className="mb-8">
            <span className="text-gray-700">Price</span>
            <p className="text-gray-700 text-xl my-1 ">
              ${productByHandle.priceRange.minVariantPrice.amount} MXN
            </p>
          </label>
          <label>
            <span className="text-gray-700">Quantity</span>
            <div className="flex flex-row w-[8.15rem] text-xl border border-black my-1 ">
              <button
                onClick={() => setQuantityHandler(quantity - 1)}
                className="p-2 mx-2"
              >
                -
              </button>
              <div className="p-2 mx-2">{quantity}</div>
              <button
                onClick={() => setQuantityHandler(quantity + 1)}
                className="p-2 mx-2"
              >
                +
              </button>
            </div>
          </label>
        </div>
        <div className=" fixed lg:relative mb-0 pb-0 bottom-0 w-full lg:max-w-sm mx-auto lg:m-0">
          <button
            onClick={() => addToCartHandler()}
            className="lg:h-10 h-24 lg:text-base text-2xl  w-full border-2  shadow-xl border-gray-700 bg-secondary hover:bg-gray-800 hover:text-white"
          >
            Anadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductButton;
