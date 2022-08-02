import React, { Dispatch } from "react";
import type { Action } from "../../types/Cart/CartProvider";
import type { Node } from "../../types/Cart/CartItem";
import CartButton from "./CartButton";
interface CartItemProps {
  product: Node;
  dispatch: Dispatch<Action>;
}
const CartItem = ({ product, dispatch }: CartItemProps) => {
  const title = product.merchandise.product.title;
  const price = product.merchandise.product.priceRange.maxVariantPrice.amount;
  return (
    //Todo: Need more margin for the whole container
    <div className="container mx-auto w-full p-4 grid grid-cols-4">
      <div className="border p-2 self-center mx-auto">
        <img
          className=" w-full object-cover max-w-[6rem] "
          //Todo: get image from product
          src={product.merchandise.product.images.edges[0].node.url}
        />
      </div>

      <div className="flex flex-col lg:flex-row col-span-2 ">
        <label className=" mx-4">
          <span className="text-gray-700 text-sm md:text-base ">Nombre</span>
          <p className="text-gray-700 text-xs  overflow-hidden my-3">{title}</p>
        </label>
        <label className="mx-4">
          <span className="text-gray-700 text-sm md:text-base">Cantidad</span>
          <div className="flex flex-row">
            <CartButton product={product} dispatch={dispatch} />
          </div>
        </label>
      </div>
      <label className="mb-8 mx-4">
        <span className="text-gray-700 text-sm md:text-base">Precio</span>
        <p className="text-gray-700  my-3 ">{price}</p>
      </label>
    </div>
  );
};

export default CartItem;
