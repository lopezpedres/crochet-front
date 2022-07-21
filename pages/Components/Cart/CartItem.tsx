import React from "react";
//image,
const product = {
  title: "VANS |AUTHENTIC | LO PRO | BURGANDY/WHITE",
  description: "Descripción",
  price: "$200MXN",
  url: "https://www.google.com",
  handle: "producto",
};
const CartItem = () => {
  return (
    //Todo: Need more margin for the whole container
    <div className="container mx-auto w-full p-4 grid grid-cols-4">
      <div className="border p-2 self-center mx-auto">
        <img
          className=" w-full object-cover max-w-[6rem] "
          //Todo: get image from product
          src="/images/deer.jpg"
        />
      </div>

      <div className="flex flex-col lg:flex-row col-span-2 ">
        <label className=" mx-4">
          <span className="text-gray-700 text-sm md:text-base ">Nombre</span>
          <p className="text-gray-700 text-xs  overflow-hidden my-3">{product.title}</p>
        </label>
        <label className="mx-4">
          <span className="text-gray-700 text-sm md:text-base">Cantidad</span>
          <div className="flex flex-row">
            <div className="flex flex-row border border-black my-3 ">
              <button className="p-2 mx-2">-</button>
              <div className="p-2 mx-2">1</div>
              <button className="p-2 mx-2">+</button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="w-4 h-4 fill-current text-gray-700 my-auto mx-4"
            >
              <path
                d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
                fill="currentColor"
              ></path>
              <path
                d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </label>
      </div>
      <label className="mb-8 mx-4">
        <span className="text-gray-700 text-sm md:text-base">Precio</span>
        <p className="text-gray-700  my-3 ">{product.price}</p>
      </label>
    </div>
  );
};

export default CartItem;
