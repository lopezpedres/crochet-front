import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import type { SingleProduct } from "../../types/Products/SingleProduct";

const ProductPage = ({
  productByHandle,
}: {
  productByHandle: SingleProduct;
}) => {
  console.log(productByHandle);
  return (
    <div >
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
                <button className="p-2 mx-2">-</button>
                <div className="p-2 mx-2">1</div>
                <button className="p-2 mx-2">+</button>
              </div>
            </label>
          </div>
          <div className=" fixed lg:relative mb-0 pb-0 bottom-0 w-full lg:max-w-sm mx-auto lg:m-0">
            <button className="lg:h-10 h-24 lg:text-base text-2xl  w-full border-2  shadow-xl border-gray-700 bg-secondary hover:bg-gray-800 hover:text-white">
              Anadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
      <p className="text-gray-700 font-bold md:text-xl p-4 max-w-4xl mx-auto text-left">
        {productByHandle.description}
      </p>
      </div>
  );
};

export default ProductPage;
