import React from "react";

const ProductItem = () => {
  return (
    <div className="container border-gray-700 shadow-sm border mx-auto mb-5  hover:-translate-y-2">
      <img className="w-full object-cover" src="./images/bear.jpg" />
      <div className=" border-b-2">
        <span className="text-gray-700 font-bold md:text-2xl  m-4">Bear</span>
      </div>
      <div className="text-right">
        <span className="text-gray-700 text-md md:text-2xl font-bold m-4 ">
          $800 MXN
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
