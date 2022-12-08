import React, { Dispatch, useEffect, useState } from "react";
import { Action } from "../../types/Cart/CartProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import type { TypeCartLinesAdd } from "../../types/Products/TypeCartLinesAdd";
import type { SingleProduct } from "../../types/Products/SingleProduct";
import ProductButton from "./ProductButton";

interface CartItemProps {
  dispatch?: Dispatch<Action>;
  productByHandle: SingleProduct;
  productState: TypeCartLinesAdd;
}

const ProductPage = ({
  productByHandle,
  dispatch,
  productState,
}: CartItemProps) => {
  useEffect(() => {
    console.count("ProductPage component rendered");
  });
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            effect={"creative"}
            speed={800}
            navigation={true}
            className="mb-5"
          >
            {productByHandle?.images.edges.map((image) => (
              <SwiperSlide key={image.node.url} className="max-full">
                <img
                  className="mx-auto mb-5"
                  src={image.node.url}
                  alt={image.node.altText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ProductButton
          productByHandle={productByHandle}
          productState={productState}
          dispatch={dispatch}
        />
      </div>
      <p className="text-gray-700 font-bold md:text-xl p-4 max-w-4xl mx-auto text-left">
        {productByHandle.description}
      </p>
    </div>
  );
};

export default ProductPage;
