import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import type { ProductByHandle } from "../../types/Products/SingleProduct";

const ProductPage = ({
  productByHandle,
}: {
  productByHandle: ProductByHandle;
}) => {
  return (
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
          <div className="max-w-xs">
            <SwiperSlide className="max-full" key={image.node.url}>
              <img
                className="mx-auto mb-5"
                src={image.node.url}
                alt={image.node.altText}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      </div>
      <div className="span-cols-1">
        <h1 className="text-gray-700 font-bold md:text-xl   text-center">
          {productByHandle.title}
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default ProductPage;
